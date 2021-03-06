import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;



  constructor(public accountSerice: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login(){
    this.accountSerice.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/');
     })

  }

  logout(){
    this.accountSerice.logout()
    this.router.navigateByUrl('/');
  }



}
