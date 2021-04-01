import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from "../app.state";
import { BookmarkItem } from "../models/bookmark.models";
import * as bookmarkActions from  "../actions/bookmark.actions";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  bookmarkForm : FormGroup;

  constructor( private store : Store<AppState>,
               private fb : FormBuilder ) { }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.bookmarkForm = this.fb.group({
      'Name': ['', Validators.required],
      'Url': ['',Validators.required],
      'Group': ['', Validators.required]
    }); 
  
  }

  addBookmark( bookmarkForm ) {

    console.log(bookmarkForm);

    this.store.dispatch(new bookmarkActions.AddBookmarkAction(bookmarkForm))
  }

}
