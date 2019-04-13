import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MapEventsService} from '../map-events.service';

declare var L: any;
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})




export class MapViewComponent implements OnInit {

  // options = {
  //     layers: [
  //       tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         attribution: '&copy; OpenStreetMap contributors'
  //       })
  //     ],
  //     zoom: 7,
  //     center: latLng([ 46.879966, -121.726909 ])
  //   };



    @ViewChild("map")
    public mapElement: ElementRef;



    private map: any;
    public srcTiles: string;
    public height: string;

    private subscribtion:any;

    public constructor(private http: HttpClient, private mes:MapEventsService) {
        this.height = window.innerHeight + "px";
    }


    public ngOnInit() {
        this.srcTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        this.subscribtion = this.mes.sendMessageTrigger.subscribe((data) => {
          console.log('mes.sendMessageTrigger received', data);
          if(data.action == "city_select"){
              console.log("city_select called", data.payload);


          }
        });



    }





    public ngAfterViewInit() {
        this.map = L.map(this.mapElement.nativeElement)
        let osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        let osm = new L.TileLayer(this.srcTiles, { attribution: osmAttrib});
        this.map.setView(new L.LatLng(32.0483102, 34.7443758), 11);
        this.map.addLayer(osm);

    }






}
