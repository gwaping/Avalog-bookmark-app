import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { BookmarkReducer } from './reducers/bookmark.reducer';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule, 
    StoreModule.forRoot({
      bookmark: BookmarkReducer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
