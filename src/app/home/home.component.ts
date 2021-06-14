import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from '../success/success.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  constructor(public routes:Router) { }

  ngOnInit(): void {
  
    //   this.isAthunticate=true;
    //  setTimeout(()=>{
    //    this.routes.navigate(['home']),
    //    this.isAthunticate=true
    //   },this.timeout)
      
  }

}
