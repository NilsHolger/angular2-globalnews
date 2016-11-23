import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';
import "materialize-css";
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NewsApiService } from './news-api.service';
import { LocalStorageService } from './local-storage.service';
import { LimitPipe } from './limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [NewsApiService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
