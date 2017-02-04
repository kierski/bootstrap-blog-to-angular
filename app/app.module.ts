import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {NavComponent} from './components/nav/nav.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {PostComponent} from './components/post/post.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {FeaturesComponent} from './components/pages/new_features.component';
import {PressComponent} from './components/pages/press.component';
import {HiresComponent} from './components/pages/hires.component';
import {FooterComponent} from './components/footer/footer.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [
                  AppComponent,
                  NavComponent,
                  HeaderComponent,
                  PostComponent,
                  SidebarComponent,
                  HomeComponent,
                  AboutComponent,
                  FeaturesComponent,
                  PressComponent,
                  HiresComponent,
                  FooterComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
