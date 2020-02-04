import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  name: string;
  moons: number;
  distance: number;

  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  createPlanet(){
    if(this.store.showPlanetBool){
      this.store.showPlanetBool = false;
    }
    this.store.addPlanet({name: this.name, moons: this.moons, distanceFromSun: this.distance});
  }
  

}
