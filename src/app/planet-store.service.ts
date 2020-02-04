import { Injectable } from '@angular/core';
import {Planet} from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetStoreService {

  planets: Planet[] = [{name: "Earth", moons: 1, distanceFromSun: 1}, {name: "Mars", moons: 1, distanceFromSun: 1}];
  showPlanetBool: boolean;

  constructor() { }

  addPlanet(planet: Planet){
    this.planets.push(planet);
  }

  sortPlanets(){
    this.planets.sort((a, b) => (a.distanceFromSun > b.distanceFromSun) ? 1 : -1);
  }

  getPlanets(): Planet[]{
    return this.planets;
  }

}
