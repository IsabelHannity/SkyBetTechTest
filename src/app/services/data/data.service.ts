import { WSMessage, Event } from './../../models/';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { environment } from '../../../environments/environment';
import { WSEventTypes } from './../../constants';

export const WS_ENDPOINT = environment.wsEndpoint;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  private liveEventsSubject$ = new Subject();
  private eventSubject$ = new Subject();
  private marketSubject$ = new Subject();
  private outcomeSubject$ = new Subject();

  public liveEvents$ = this.liveEventsSubject$.asObservable();
  public event$ = this.eventSubject$.asObservable();
  public market$ = this.marketSubject$.asObservable();
  public outcome$ = this.outcomeSubject$.asObservable();

  constructor() {
    this.connect();
  }

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      this.socket$
        .pipe(
          tap({
            error: (error) => console.log(error),
          }),
          catchError((_) => EMPTY)
        )
        .subscribe((message: WSMessage) => {
          switch (message.type) {
            case WSEventTypes.PRICE_CHANGE:
            case WSEventTypes.OUTCOME_STATUS:
            case WSEventTypes.OUTCOME_DATA:
              this.outcomeSubject$.next(message.data);
              break;
            case WSEventTypes.LIVE_EVENTS_DATA:
              const categorizedLiveEvents = ((message.data as unknown) as Event[]).reduce(
                (acc, currentValue: Event) => {
                  if (!acc) {
                    acc = [];
                  }
                  const indexOfLinkedEventTypeName = acc.findIndex(
                    (item) =>
                      item.linkedEventTypeName ===
                      currentValue.linkedEventTypeName
                  );
                  if (indexOfLinkedEventTypeName > -1) {
                    acc[indexOfLinkedEventTypeName].items.push(currentValue);
                  } else {
                    if (currentValue.linkedEventTypeName) {
                      acc.push({
                        items: [currentValue],
                        linkedEventTypeName: currentValue.linkedEventTypeName,
                      });
                    } else {
                      const indexOfMisc = acc.findIndex(
                        (item) => item.linkedEventTypeName === 'Miscellaneous'
                      );
                      if (indexOfMisc > -1) {
                        acc[indexOfMisc].items.push(currentValue);
                      } else {
                        acc.push({
                          items: [currentValue],
                          linkedEventTypeName: 'Miscellaneous',
                        });
                      }
                    }
                  }
                  return acc;
                },
                []
              );
              this.liveEventsSubject$.next(categorizedLiveEvents);
              break;
            case WSEventTypes.EVENT_DATA:
              this.eventSubject$.next(message.data);
            case WSEventTypes.MARKET_DATA:
              this.marketSubject$.next(message.data);
            default:
              this.messagesSubject$.next(message);
          }
        });
    }
  }

  sendMessage(msg: any) {
    this.socket$ && this.socket$.next(msg);
  }

  close() {
    this.socket$.complete();
  }

  private getNewWebSocket() {
    return webSocket(WS_ENDPOINT);
  }
}
