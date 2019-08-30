import { Component, OnInit } from '@angular/core';
declare var ol: any;
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  map: any;
  lat=  -19.564079;
  lng = -65.761484;
  constructor() { }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.lng, this.lat]),
        zoom: 8
      })
});
  }

}
