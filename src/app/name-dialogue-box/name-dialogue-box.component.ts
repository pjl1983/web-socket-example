import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-name-dialogue-box',
  templateUrl: './name-dialogue-box.component.html',
  styleUrls: ['./name-dialogue-box.component.css']
})
export class NameDialogueBoxComponent {
  name: string;

  constructor(
    public dialogRef: MatDialogRef<NameDialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  submit() {
    this.dialogRef.close(this.name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
