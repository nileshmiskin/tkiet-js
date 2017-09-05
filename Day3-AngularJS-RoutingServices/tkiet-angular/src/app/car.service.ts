import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
  cars: string[];

  constructor() { }

  getAllCars() {
    return ['A-star', 'Spark'];
  }

}
