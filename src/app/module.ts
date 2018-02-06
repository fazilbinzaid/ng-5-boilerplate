import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NavbarModule } from '@common/navbar/navbar.module';
import { SidebarModule } from '@common/sidebar/sidebar.module';

import { AppComponent } from './root/root.component';
import { LoginComponent } from '@components/login/login.component';

import { AppRoutingModule } from './root/routing';
import { environment } from '@src/environments/environment';

import { HomeComponent } from '@removables/home/home.component';
import { UserComponent } from '@removables/user/user.component';
import { TablesComponent } from '@removables/tables/tables.component';
import { TypographyComponent } from '@removables/typography/typography.component';
import { IconsComponent } from '@removables/icons/icons.component';
import { NotificationsComponent } from '@removables/notifications/notifications.component';
import { FooterModule } from '@removables/shared/footer/footer.module';
import { LbdModule } from '@removables/lbd/lbd.module';

import { AuthGuard } from '@services/auth.service';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    LoginComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],

  providers: [AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
