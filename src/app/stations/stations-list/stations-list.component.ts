import { Component, OnInit } from '@angular/core';
import { TimeStampPipe }  from '../../pipes/ts.pipe';


@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
