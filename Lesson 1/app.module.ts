import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule} from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './Post/post.reducer';

import { ReduxPostComponent } from './redux-post/redux-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduxPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      message:simpleReducer,
      post:postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge:10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
