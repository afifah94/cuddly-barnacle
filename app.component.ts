import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'Registration Form';
   todaydate;
   componentproperty;
   emailaddress;
   formdata;
   ngOnInit() {
      this.formdata = new FormGroup({
         emailaddress: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
      });
   }
}