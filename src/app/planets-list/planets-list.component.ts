import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import {Planet} from '../planet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets: Planet[];

  constructor(private store: PlanetStoreService) { }
  ngOnInit() {
  }

  showPlanets(){
    this.store.showPlanetBool = true;
    this.store.createBool = false;
    this.store.sortPlanets();
    this.planets = this.store.getPlanets();  
  }

  selectPlanet(planet: Planet){
    this.store.selectedPlanet = planet;
    this.store.showDetailsBool = true;
  }
}
