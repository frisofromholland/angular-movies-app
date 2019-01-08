import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, LoginModule],
  exports: [AdminComponent]
})
export class AdminModule {
}
