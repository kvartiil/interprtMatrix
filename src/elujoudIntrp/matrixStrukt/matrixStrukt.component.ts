import { Component } from '@angular/core'; 

@Component({ // Add the @Component decorator.
  selector: 'matrix-strukt', 
  templateUrl: './matrixStrukt.component.html'
})


export class StruktComponent { 

  muutujaX = 8;
  muutujaY = 24;

  newFunction3(muutujaX: number){
    muutujaX;
    if (muutujaX !== this.muutujaY) {
      this.muutujaX = 100;
    }

    return muutujaX;
  }


}