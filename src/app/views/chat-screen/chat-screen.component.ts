import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnInit {
  messages: any[];

  constructor(
    public socket: Socket
  ) {

  }

  ngOnInit() {
    this.socket.on('event', data =>  console.log(data));
    this.socket.on('test-res', data => console.log(data));
  }

}
