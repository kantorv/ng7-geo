import { Component, OnInit ,AfterViewInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort , MatPaginator } from '@angular/material';
import { CityGeojson } from '../../_interface/city.model';
import cities from '../../../assets/data/cities.json' ;
import {SelectionModel} from '@angular/cdk/collections';
import {MapEventsService} from '../map-events.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns = ['pk','name', 'details','select'];
  public dataSource = new MatTableDataSource<CityGeojson>();

 citiesList: CityGeojson[] = cities.features;
 selection = new SelectionModel<CityGeojson>(true, []);

 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }

 /** Selects all rows if they are not all selected; otherwise clear selection. */
 masterToggle() {
   this.isAllSelected() ?
       this.selection.clear() :
       this.dataSource.data.forEach(row => this.selection.select(row));
 }

 // /** The label for the checkbox on the passed row */
 // checkboxLabel(row?: CityGeojson): string {
 //   if (!row) {
 //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
 //   }
 //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
 // }
 //



  constructor(private mes:MapEventsService) { }

  ngOnInit() {
    this.dataSource.data = this.citiesList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  ngAfterViewInit(): void {
    this.dataSource.filterPredicate =   (data: CityGeojson, filter: string) => data.properties.name.indexOf(filter) != -1;
  }



  public redirectToDetails = (id: string) => {
    console.log("redirectToDetails called", id)

  }

  public selectElement = (city: CityGeojson) => {
    console.log("selectElement called", city.properties.pk)
    let payload = {
      "id" : city.properties.pk,
      "el": city
    }
    this.mes.sendMessage({"action":"city_select", "payload":payload });
  }


  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }



}
