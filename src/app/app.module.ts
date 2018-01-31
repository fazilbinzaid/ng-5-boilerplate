import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from '@common/navbar/navbar.module';
import { FooterModule } from '@removables/shared/footer/footer.module';
import { SidebarModule } from '@common/sidebar/sidebar.module';
import { LbdModule } from '@removables/lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from '@removables/home/home.component';
import { UserComponent } from '@removables/user/user.component';
import { TablesComponent } from '@removables/tables/tables.component';
import { TypographyComponent } from '@removables/typography/typography.component';
import { IconsComponent } from '@removables/icons/icons.component';
import { NotificationsComponent } from '@removables/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,

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
    LbdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
