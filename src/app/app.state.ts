import { BookmarkItem } from './models/bookmark.models';


export interface AppState {
    readonly bookmark: Array<BookmarkItem>
}
