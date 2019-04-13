import { Component, OnInit,  OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import {MapEventsService} from '../map-events.service';

declare var L: any;
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})




export class MapViewComponent implements OnInit, OnDestroy {
    @ViewChild("map")
    public mapElement: ElementRef;

    private map: any;
    public srcTiles: string;
    public height: string;


    private mapCityStyle:Object = {
        "color": "#016208",
        "weight": 5,
        "opacity": 0.65
    };

    private cityLayer:any;


    private mapEvensSubscribtion:any;

    public constructor( private mes:MapEventsService) {

    }


    private initCityLayer(){
    //  this.cityLayer = L.geoJSON()
      //let geojson = {}
      // this.cityLayer = L.geoJSON(geojson, {
      //          style: this.mapCityStyle
      // });
      //
      //  this.cityLayer.addTo(this.map);
      //  this.map.fitBounds(this.cityLayer.getBounds());
    }

    public ngOnInit() {
        this.srcTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.mapEvensSubscribtion = this.mes.sendMessageTrigger.subscribe((data) => {
          //this.processMapEvens(data)
        });

    //  this.initCityLayer()
    }



    public ngOnDestroy(){
      this.mapEvensSubscribtion.unsubscribe();
    }

    public ngAfterViewInit() {
        this.map = L.map(this.mapElement.nativeElement)
        let osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        let osm = new L.TileLayer(this.srcTiles, { attribution: osmAttrib});
        this.map.setView(new L.LatLng(32.0483102, 34.7443758), 11);
        this.map.addLayer(osm);


        // this.map = L.map(this.mapElement.nativeElement, {
        //     center: [37.7397, -121.4252],
        //     zoom: 10,
        //     layers: [L.tileLayer(this.srcTiles)],
        //     zoomControl: true
        // });
    }


    //
    // private processMapEvens(data:any){
    //   console.log('mes.sendMessageTrigger received', data);
    //   if(data.action == "city_select"){
    //       console.log("city_select called", data.payload);
    //       let selectedItem = data.payload.el;
    //
    //
    //       if(!selectedItem.geometry){
    //         console.log("no geometry found");
    //         return false
    //       }
    //
    //       let geojsonData = {
    //             "type": "FeatureCollection",
    //             "crs": {"type": "name", "properties": {"name": "EPSG:4326"}},
    //             "features": [selectedItem]
    //         }
    //
    //
    //
    //         try{
    //             this.cityLayer.clearLayers();
    //             this.map.removeLayer(this.cityLayer)
    //
    //         }
    //         catch (e){
    //
    //         }
    //
    //         this.cityLayer = L.geoJSON(geojsonData, {
    //             style: this.mapCityStyle
    //         });
    //
    //         this.cityLayer.addTo(this.map);
    //         this.map.fitBounds(this.cityLayer.getBounds());
    //
    //
    //   }
    // }




}
