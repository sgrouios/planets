import { Injectable } from '@angular/core';
import {Planet} from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetStoreService {

  planets: Planet[] = [];

  constructor() { }

  addPlanet(planet: Planet){
    this.planets.push(planet);
  }

  sortPlanets(){
    this.planets.sort((a, b) => (a.distanceFromSun > b.distanceFromSun) ? 1 : -1);
  }
}
