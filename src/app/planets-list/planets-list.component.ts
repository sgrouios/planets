import { Component, OnInit } from '@angular/core';
import { PlanetStoreService } from '../planet-store.service';
import {Planet} from '../planet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  clicked: boolean;
  planets: Planet[];

  constructor(private store: PlanetStoreService) { }
  ngOnInit() {
  }

  btnClicked(){
    this.clicked = true;
    this.planets = this.store.getPlanets();  
  }
}
