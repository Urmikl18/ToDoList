import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodotabComponent } from './components/todotab/todotab.component';
import { TodotabsComponent } from './components/todotabs/todotabs.component';
import { TodolistService } from './services/todolist.service';
import { ItemFilterPipe } from './pipes/item-filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {routes} from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TodotabComponent,
    TodotabsComponent,
    ItemFilterPipe,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: 'tdl', useClass: TodolistService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
