import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BooksComponent } from '../pages/books/books.component';
import { CoreModule } from '../core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CreateBooksComponent } from '../pages/create-books/create-books.component';
import { AutoriComponent } from '../pages/autori/autori.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CreateBooksComponent,
    AutoriComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,


    RouterModule.forRoot([
      { path: 'books', component: BooksComponent },
      { path: 'create', component: CreateBooksComponent },
      { path: 'autori', component: AutoriComponent },

    ])
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
