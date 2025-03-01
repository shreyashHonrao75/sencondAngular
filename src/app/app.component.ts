import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I love Angular from TS File';
  skills : Array<string> = ["Html","JS","TS","Angular"]
  // names = 'Name of Colour';
  name : Array<string> = ["dark","orange","Blue","white"]
  // change = 'prime numbers';
  changes : Array<string> = ["2","3","5","7"]
  // odd = 'Odd Numbers';
  odds : Array<string> = ["11","21","31","41"]
  // subject = 'subject Name';
  subjects : Array<string> = ["English","Math","Science","Hindi"]
}

