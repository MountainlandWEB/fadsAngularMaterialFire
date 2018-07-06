import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {LogoutComponent} from './logout/logout.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { InnerSideNavComponent } from './inner-side-nav/inner-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    UserProfileComponent,
    ProductsComponent,
    LogoutComponent,
    ContactUsComponent,
    InnerSideNavComponent
  ],
  imports: [
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase, 'Fads2'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'innerSideNav', component: InnerSideNavComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
