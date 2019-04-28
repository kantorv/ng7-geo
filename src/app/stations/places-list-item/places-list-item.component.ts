import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-places-list-item',
  templateUrl: './places-list-item.component.html',
  styleUrls: ['./places-list-item.component.scss']
})
export class PlacesListItemComponent implements OnInit {


@Input()
title:string="default title";


@Input()
description:string="default description";

  constructor() { }

  ngOnInit() {
  }

}
