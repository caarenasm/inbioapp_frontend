import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarEmailService {

  debouncer: any;

  constructor(
    public authServ: AuthService
  ) { }

  checkEmail(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.authServ.validateEmail(control.value).subscribe((res) => {
          resolve(null);
        }, (err) => {
          resolve({
            'email taken': true
          });
        });

      }, 1000);

    });

    /*return new Promise(resolve => {
      //Fake a slow response from server
      setTimeout(() => {
        if(control.value.toLowerCase() === 'yoserp1@gmail.com'){
          resolve({
            'email taken': true
          });
        } else {
          resolve(null);
        }
      }, 2000);

    });*/
  }
}
