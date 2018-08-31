import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { NameDialogueBoxComponent } from './name-dialogue-box/name-dialogue-box.component';


@NgModule({
  declarations: [
    AppComponent,
    NameDialogueBoxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [NameDialogueBoxComponent]
})
export class AppModule {
}
