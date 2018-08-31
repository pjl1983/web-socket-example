import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MatDialog } from '@angular/material';
import { NameDialogueBoxComponent } from './name-dialogue-box/name-dialogue-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value: string;
  conversation: any[] = [];
  name: string;

  constructor(private appService: AppService, public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NameDialogueBoxComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }

  sendMessage() {
    this.appService.sendMessage({name: this.name, message: this.value});
    this.conversation.push({name: this.name, message: this.value});
    this.value = '';
  }

  ngOnInit() {
    setTimeout(() => {
      this.openDialog();
    }, 1000);
    this.appService.response$.subscribe(message => {
      this.conversation.push({name: message.name, message: message.message});
    });
  }
}
