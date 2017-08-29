import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodotabComponent } from './components/todotab/todotab.component';
import { TodotabsComponent } from './components/todotabs/todotabs.component';
import { TodolistService } from './services/todolist.service';
import { ItemFilterPipe } from './pipes/item-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodotabComponent,
    TodotabsComponent,
    ItemFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: 'tdl', useClass: TodolistService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
