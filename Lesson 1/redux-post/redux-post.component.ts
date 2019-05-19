import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as PostActions from '../Post/post.actions';

interface AppState{
  post:Post
}

@Component({
  selector: 'app-redux-post',
  templateUrl: './redux-post.component.html',
  styleUrls: ['./redux-post.component.scss']
})
export class ReduxPostComponent implements OnInit {
  ngOnInit(): void {
   
  }
  post: Observable<Post>

  text: string; /// form input val

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post')
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }

}
