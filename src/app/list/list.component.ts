import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookmarkItem } from '../models/bookmark.models';
import { AppState } from './../app.state';

import * as BookmarkActions from './../actions/bookmark.actions';

interface Group {
  group : string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bookmarkItems: Observable<Array<BookmarkItem>>;
  bookmarkHeaders = ['Name', 'Url', 'Group', 'Action'];
  groups = [];
  bookmarkListByGroup = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
     // this.bookmarkItems = this.store.select('bookmark');

      this.store.select('bookmark').subscribe(result => {
        
        
        let BookmarkData = <Array<BookmarkItem>>result;

        this.groups = [... new Set(BookmarkData.map( item => item.Group ))];

        console.log(this.groups);

        this.bookmarkListByGroup = [];

        this.groups.forEach(groupName => {

          this.bookmarkListByGroup.push({ group : groupName})

          let groupData = BookmarkData.filter(item => item.Group == groupName);

          console.log(groupData);

          this.bookmarkListByGroup.push(...groupData);

        });
        
        console.log(this.bookmarkListByGroup);

      });
  
  }

  deleteBookmark(row) {
     console.log(row);

     this.store.dispatch(new BookmarkActions.DeleteBookmarkAction(row));
  }

  isGroup(index, item): boolean{
    return item.group;
  }

}
