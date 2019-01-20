import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatTableModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class MaterialModule { }
