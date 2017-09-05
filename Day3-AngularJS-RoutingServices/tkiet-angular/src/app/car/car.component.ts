import { CarService } from '../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  names: string[];
  selectedCar: string;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    // Initialize your component here
    this.names = this.carService.getAllCars();
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
