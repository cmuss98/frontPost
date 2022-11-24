import { CreatePostComponent } from './component/create-post/create-post.component';
import { reducers } from './store/reducers/index';
import { PostsEffects } from './store/effects/post.effects';
import { environment } from './../environments/environment';

import { ListPostComponent } from './component/list-post/list-post.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegationComponent } from './component/navegation/navegation.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatCardModule} from "@angular/material/card"
import { PostItemComponent } from './component/list-post/post-item/post-item.component';
import { PostService } from './Services/post.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ListPostComponent,
    CreatePostComponent,
    PostItemComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
