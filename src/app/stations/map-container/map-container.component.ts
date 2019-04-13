import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var L: any;
@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})


/*
1ohrPJhZOkkxnsMnXdOG
APP CODE
1n_Hdl7QOgN2ZAiFnP46nw
*/



export class MapContainerComponent implements OnInit {

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input("appId")
    public appId: string;

    @Input("appCode")
    public appCode: string;

    private map: any;
    public srcTiles: string;
    public height: string;

    public constructor(private http: HttpClient) {
        this.height = window.innerHeight + "px";
    }

    public ngOnInit() {
        this.srcTiles = "https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=" + this.appId + "&app_code=" + this.appCode + "&ppi=320";
    }

    public ngAfterViewInit() {
        this.map = L.map(this.mapElement.nativeElement, {
            center: [37.7397, -121.4252],
            zoom: 10,
            layers: [L.tileLayer(this.srcTiles)],
            zoomControl: true
        });
    }

    public dropMarker(address: string) {
        this.http.get("https://geocoder.api.here.com/6.2/geocode.json", {
            params: {
                app_id: this.appId,
                app_code: this.appCode,
                searchtext: address
            }
        }).subscribe(result => {
            let location = (<any>result).Response.View[0].Result[0].Location.DisplayPosition;
            let marker = new L.Marker([location.Latitude, location.Longitude]);
            marker.addTo(this.map);
        });
    }

}
