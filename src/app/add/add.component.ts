import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from "../app.state";
import { BookmarkItem } from "../models/bookmark.models";
import * as bookmarkActions from  "../actions/bookmark.actions";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor( private store : Store<AppState> ) { }

  addBookmark( name, url, group) {
    this.store.dispatch(new bookmarkActions.AddBookmarkAction({ Name : name, Url: url, Group : group}))
  }


  ngOnInit() {
  }

}
