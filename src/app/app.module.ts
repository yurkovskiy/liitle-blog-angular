import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { ExamplecompComponent } from './examplecomp/examplecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    ExamplecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
