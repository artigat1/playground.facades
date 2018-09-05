import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  imports: [
    MatCardModule
  ],
  exports: [
    MatCardModule
  ]
})
export class MaterialModule { }
