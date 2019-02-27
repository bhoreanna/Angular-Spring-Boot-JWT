import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,
  MatSelectModule, MatListModule, MatPaginatorModule, MatSortModule, MatSnackBarModule,
   MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatFormFieldModule, MatCheckboxModule,
    MatGridListModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatListModule,
  ReactiveFormsModule,

    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,


  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSelectModule,
   MatListModule,
   ReactiveFormsModule,

   MatPaginatorModule,
   MatSortModule,
   MatDialogModule,
   MatSnackBarModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatRadioModule,
   MatFormFieldModule,
   MatCheckboxModule,
   MatGridListModule,

   ],
})
export class CustomMaterialModule { }
