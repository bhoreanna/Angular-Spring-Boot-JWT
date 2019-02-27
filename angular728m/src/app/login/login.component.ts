import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserAuthService} from './../shared/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   user: User = new User();

  constructor(private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {
  }
  // onSignin(form: NgForm) {


  //  console.log('Username: ' + this.user.userName);
  //  console.log('Password: ' + this.user.password);
  //    this.userAuthService.login(this.user).subscribe((data: User) => {
  //      console.log('data:' + data.userName);
  //      if (data.userName === this.user.userName) {
  //        console.log('after toastr Method ' + data.userName);
  //        sessionStorage.setItem('auth', data.userName);
  //        this.router.navigate(['/welcome']);
  //      } else {
  //       this.router.navigate(['/signin']);
  //      }
  //    }, ( error ) =>  {
  //      console.log(error);
  //    });


  // }



  onSignin(form: NgForm) {


    console.log('Username: ' + this.user.userName);
    console.log('Password: ' + this.user.password);
      this.userAuthService.login(this.user).subscribe((data: User ) => {
        if (data) {

          sessionStorage.setItem('auth', this.user.userName);
          // this.userAuthService.getUser(this.user.userName).subscribe(( u: User ) => {
          //   console.log('**** Return from API ******* ');
          //   console.log('User With Name: ', u.userName);
          //   console.log('User With Role: ', u.userRole);
          //     this.user = u;
          //     this.router.navigate(['/welcome']);

          // });
          this.router.navigate(['/welcome']);
        } else {
         this.router.navigate(['/signin']);
        }
      }, ( error ) =>  {
        console.log(error);
      });

   }


}
