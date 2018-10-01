import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  lat = -15.5;
  lng = -70.1333313;

  constructor() { }

  ngOnInit() {
  }

}
