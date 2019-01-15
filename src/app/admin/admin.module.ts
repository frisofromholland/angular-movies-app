import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AdminComponent } from './admin.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule],
  exports: [AdminComponent]
})
export class AdminModule {
}
