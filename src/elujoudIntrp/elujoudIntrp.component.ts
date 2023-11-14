import { Component } from '@angular/core';
//import * as tf from '@tensorflow/tfjs';
//import * as tfvis from '@tensorflow/tfjs-vis';

//var userName = 'Pato';

@Component({
  selector: 'app-root',
  templateUrl: './elujoudIntrp.component.html',
  styleUrls: ['./elujoudIntrp.component.css']
})
export class EluIComponent {
  userName = 'Pato';
  timestamp = 1572851571;
  clickCount = 0;
  muutuja = 8;

  dateConvert(value: string|number|Date) {
    console.log('====== date function call ======');
    return new Date(value);
  }

  newFunction(muutuja: number){
    muutuja++;
    return muutuja;
  }

  dummyClick() {
    this.clickCount++;
  }

}