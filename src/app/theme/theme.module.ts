import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    MainLayoutComponent,
    FooterComponent,
    LoginLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    MainLayoutComponent,
    LoginLayoutComponent
  ]
})
export class ThemeModule { }
