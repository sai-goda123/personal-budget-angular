import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FolderComponent } from './folder/folder.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FolderComponent,
    HomepageComponent,
    ArticleComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    P404Component,
    ContactComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
