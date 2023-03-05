import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicslistComponent } from './components/topicslist/topicslist.component';
import { TopiccardComponent } from './components/topiccard/topiccard.component';
import { TopicspageComponent } from './components/topicspage/topicspage.component';
import { BlogcardComponent } from './components/blogcard/blogcard.component';
import { BlogpageComponent } from './components/blogpage/blogpage.component';
@NgModule({
  declarations: [
    AppComponent,
    TopicslistComponent,
    TopiccardComponent,
    TopicspageComponent,
    BlogcardComponent,
    BlogpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
