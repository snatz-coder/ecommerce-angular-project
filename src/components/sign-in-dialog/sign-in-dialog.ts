import { Component, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatSuffix, MatPrefix} from '@angular/material/input';
import { SignInParams } from '../../model/user.model';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [ReactiveFormsModule,MatIconButton, MatIcon, MatDialogClose, MatFormField, MatInput, MatSuffix, MatPrefix, MatButton],
  templateUrl: './sign-in-dialog.html',
  styleUrl: './sign-in-dialog.scss',
})
export class SignInDialog {
  store = inject(EcommerceStore);
  fb = inject(NonNullableFormBuilder);
  passwordVisible = signal(true);

  data = inject<{checkout:boolean}>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  signInForm = this.fb.group({
    email:['sujane@gmail.com', Validators.required],
    password:['test123', Validators.required]
  })

  signIn(){
    if(this.signInForm.valid){
      this.signInForm.markAllAsTouched();
      //return;
    }
    const {email, password} = this.signInForm.value;
    this.store.signIn({email, password, checkout: this.data.checkout, dialogId:this.dialogRef.id} as SignInParams);
  }

  

}
