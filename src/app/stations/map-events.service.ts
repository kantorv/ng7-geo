import { Injectable, Output , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapEventsService {
  @Output() sendMessageTrigger: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  sendMessage(value){
    this.sendMessageTrigger.emit(value);
  }

}
