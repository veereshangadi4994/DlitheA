import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sign } from '../sign';
import { SignServiceService } from '../signservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // -----------------using restapi
  allUsers!: Observable<Sign[]>;
  signForm!: FormGroup;
  dataSaved = false;
  userIdUpdate: any;
  signIdUpdate = null;
  massage = 'ABC';
  constructor(private signservice: SignServiceService, router: Router) {}
  onSubmit() {
    console.log(this.signForm);
    this.dataSaved = false;
    const sign = this.signForm.value;
    //Invoking the CreateUser function
    this.CreateUser(sign);
    this.signForm.reset();
  }
  //create a function onSubmit CreateUser
  CreateUser(sign: Sign) {
    if (this.signIdUpdate == null) {
      //subscribe() is a method on the Observable type. The Observable type is a
      //utility that asynchronously or synchronously streams data
      //to a variety of components or services that have subscribed to the observable.
      this.signservice.createUser(sign).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record saved Successfully';
        this.loadAllUsers();
        this.signIdUpdate = null;
        this.signForm.reset();
      });
    } else {
      sign.id = this.signIdUpdate;
      this.signservice.updateEmployee(this.signIdUpdate).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllUsers();
        this.signIdUpdate = null;
        this.signForm.reset();
      });
    }
  }

  // -----------------using restapi
  // SignForm: FormGroup | any;
  // FirstName: FormControl | any;
  // LastName: FormControl | any;
  // Email: FormControl | any;
  // Confirm: FormControl | any;
  // Password: FormControl | any;
  // ConfirmPassword: FormControl | any;
  // Pno: FormControl | any;

  ngOnInit() {
    // -----------------using restapi
    this.loadAllUsers();
    console.log(this.allUsers);
    this.signForm = new FormGroup({
      FirstName: new FormControl(null),
      LastName: new FormControl(null),
      Email: new FormControl(null),
      Password: new FormControl(null),
      ConfirmPassword: new FormControl(null),
      Pno: new FormControl(null),
    });
  }
  loadAllUsers() {
    this.allUsers = this.signservice.getAllUsers();
  }
  //create a function loadUserToEdit to update the details of existing user
  loadUserToEdit(signId: number) {
    this.signservice.getEmployeeById(signId).subscribe((sign) => {
      //this.message = null;
      //this.dataSaved = false;
      this.userIdUpdate = sign.id;
      this.signForm.controls['FirstName'].setValue(sign.FirstName);
      this.signForm.controls['LastName'].setValue(sign.LastName);
      this.signForm.controls['Email'].setValue(sign.Email);
      this.signForm.controls['Password'].setValue(sign.Password);
      this.signForm.controls['ConfirmPassword'].setValue(sign.ConfirmPassword);
      this.signForm.controls['Pno'].setValue(sign.Pno);
    });
  }
  //create a function deleteUser to delete an existing user
  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this ?')) {
      this.signservice.deleteEmployeeById(userId).subscribe(() => {
        //this.dataSaved = true;
        // this.message = 'Record Deleted Succefully';
        this.loadAllUsers();
        this.signIdUpdate = null;
        this.signForm.reset();
      });
    }
  }
  resetForm() {
    this.signForm.reset();
    // this.message = null;
    //this.dataSaved = false;
  }

  // -----------------using restapi

  //  this.FirstName = new FormControl('', [
  //       Validators.required,
  //       Validators.pattern('[A-Za-z]*'),
  //       Validators.minLength(7),
  //       Validators.maxLength(10),
  //     ]);
  //     this.LastName = new FormControl('', [
  //       Validators.required,
  //       Validators.pattern('[A-Za-z]*'),
  //       Validators.minLength(5),
  //       Validators.maxLength(10),
  //     ]);
  //     this.Email = new FormControl('', [
  //       Validators.required,
  //       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //     ]);
  // this.Confirm = new FormControl('', Validators.required);
  // this.Password = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern('(?=.*[a-z])(?=.*[A-Z])'),
  // ]);
  //   this.ConfirmPassword = new FormControl('', [
  //     Validators.required,
  //     Validators.min(1),
  //   ]);
  //   this.phone = new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
  //   ]);
  //   this.myForm = new FormGroup({
  //     FirstName: this.FirstName,
  //     LastName: this.LastName,
  //     Email: this.Email,
  //     // Confirm: this.Confirm,
  //     Password: this.Password,
  //     ConfirmPassword: this.ConfirmPassword,
  //     phone: this.phone,
  //   });
  // }
}
