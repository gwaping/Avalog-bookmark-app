import { BookmarkActionTypes, BookmarkAction } from '../actions/bookmark.actions';
import { BookmarkItem } from '../models/bookmark.models';


const initialState : Array<BookmarkItem> = [
    { 
        Name: "Test Name",
        Url: "http://testname.com",
        Group : "Group1",
    }
];



export function BookmarkReducer( state : Array<BookmarkItem> = initialState, action : BookmarkAction ) {
   
    switch(action.type) {
        case BookmarkActionTypes.ADD_BOOKMARK:
            return [...state, action.payload]
        case BookmarkActionTypes.DELETE_BOOKMARK:
            state = state.filter( i => i != action.payload )
            return state;
        default: 
            return state;
    }

}

