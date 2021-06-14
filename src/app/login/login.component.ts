import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from '../success/success.component';
// import { Router } from '@angular/router';
// import { MatDiaiog, MatDialogConfig } from "@angular/material"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  //   setTimeout(() => {
  //     this.router.navigateByUrl("/home");
  // }, 3000);  
  }

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.pattern('admin547'),
    ]),

    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern('Admin@123')
    ]),
  })
  get f() {
    return this.loginForm.controls
  }

  popup(link:any):any{
    const modalRef = this.modalService.open(SuccessComponent);
    modalRef.componentInstance.src = link;
   
  }
  

}
