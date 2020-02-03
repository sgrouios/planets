import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  planet: Planet;

  constructor(private store: PlanetStoreService) { }

  ngOnInit() {
  }

  createPlanet(){
    this.store.addPlanet(this.planet);
  }
  

}
