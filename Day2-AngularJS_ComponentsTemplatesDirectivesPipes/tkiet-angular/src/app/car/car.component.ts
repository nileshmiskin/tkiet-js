import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  names: string[];
  selectedCar: string;
  constructor() {
    this.names = ['A-Star', 'Spark'];
    // this.selectedCar = this.names[0];
  }

  selectCar(name: string) {
    console.log(name);
    this.selectedCar = name;
  }

  addCar(carName: string) {
    if (carName.trim() !== '' &&
      this.names.indexOf(carName) < 0) {
      console.log(carName);
      this.names.push(carName);
    }
  }

}
