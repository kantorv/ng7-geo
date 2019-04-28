import { Component, OnInit ,AfterViewInit,  ChangeDetectionStrategy, ViewChild , Input} from '@angular/core';
import { MatTableDataSource, MatSort , MatPaginator } from '@angular/material';
import stations from '../../../assets/data/stations.json' ;
import { Station } from '../../_interface/station.model';
import {MapEventsService} from '../map-events.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class StationsListComponent implements OnInit, AfterViewInit {


  stationsList: Station[] = stations;
  mapEvensSubscribtion:any;
  public displayedColumns = ['code', 'total', 'voted', 'approved','rejected'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  public dataSource = new MatTableDataSource<Station>();

  @Input()
  public param1:string = "param1 defau value"

  constructor(
        private mes:MapEventsService
  ) {

  }

  ngOnInit() {
    this.dataSource.data = [];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    this.mapEvensSubscribtion = this.mes.sendMessageTrigger.subscribe((data) => {
      console.log('mes.sendMessageTrigger received', data);
      if(data.action == "city_select"){
          console.log("StationsListComponent.mapEvensSubscribtion city_select called", data.payload)
        this.processCitySelect(data.payload)

      }
    });


  }

  ngAfterViewInit() {

    //  console.log(this.stationsList)
  }


  private processCitySelect(payload:any){
      let id = Number(payload.id) ;
      let name  = payload.el.properties.name;

      let selectedStations = this.stationsList.filter( (item) => item.city==id )
      this.dataSource.data = selectedStations;
      console.log("StationsListComponentץmapEvensSubscribtion.processCitySelect",selectedStations )

  }

}
