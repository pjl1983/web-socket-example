import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject} from 'rxjs';
import io from 'socket.io-client';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  socket = io('http://localhost:3000');
  private response = new ReplaySubject<any>(1);
  public response$ = this.response.asObservable();

  constructor(
    private http: HttpClient) {
    this.getChat();
  }

  getChat() {
    this.socket.on('message2', (data) => {
      this.response.next(data);
    });
  }

  sendMessage(message: object): void {
    this.socket.emit('message', message);
  }
}
