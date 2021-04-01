import { Action } from '@ngrx/store'
import { BookmarkItem } from '../models/bookmark.models'

export enum BookmarkActionTypes {
    ADD_BOOKMARK = '[BOOKMARK] Add Item',
    DELETE_BOOKMARK = '[BOOKMARK] Delete Item'
}


export class AddBookmarkAction implements Action {
    readonly type = BookmarkActionTypes.ADD_BOOKMARK;

    constructor (public payload: BookmarkItem) {}
}

export class DeleteBookmarkAction implements Action {
    readonly type = BookmarkActionTypes.DELETE_BOOKMARK;

    // constructor (public payload: number) {}
    constructor (public payload: BookmarkItem) {}
}

export type BookmarkAction = AddBookmarkAction | DeleteBookmarkAction;
