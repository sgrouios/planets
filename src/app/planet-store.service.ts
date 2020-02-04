import { Injectable } from '@angular/core';
import {Planet} from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetStoreService {

  planets: Planet[] = [{name: "Earth", moons: 1, distanceFromSun: 1}, {name: "Mars", moons: 1, distanceFromSun: 1}];
  selectedPlanet: Planet;
  showPlanetBool: boolean;
  showDetailsBool: boolean;
  createBool: boolean = true;

  constructor() { }

  addPlanet(planet: Planet){
    this.planets.push(planet);
  }

  sortPlanets(){
    this.planets.sort((a, b) => (a.name > b.name) ? 1 : -1);  
  }

  getPlanets(): Planet[]{
    return this.planets;
  }

  removePlanet(){
    for(var i = 0; i < this.planets.length; i++){
      if(this.planets[i].name == this.selectedPlanet.name){
        this.planets.splice(i, 1);
      }
    }
  }

}
