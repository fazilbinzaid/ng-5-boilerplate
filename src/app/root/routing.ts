import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@components/login/login.component';

import { HomeComponent } from '@removables/home/home.component';
import { UserComponent } from '@removables/user/user.component';
import { TablesComponent } from '@removables/tables/tables.component';
import { TypographyComponent } from '@removables/typography/typography.component';
import { IconsComponent } from '@removables/icons/icons.component';
import { NotificationsComponent } from '@removables/notifications/notifications.component';

import { AuthGuard } from '@services/auth.service';


const routes: Routes =[

    { path: 'dashboard',      component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user',           component: UserComponent, canActivate: [AuthGuard] },
    { path: 'table',          component: TablesComponent, canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent, canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuard] },

    { path: 'login',          component: LoginComponent },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
