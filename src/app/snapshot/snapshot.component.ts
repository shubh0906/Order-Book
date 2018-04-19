import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import { DataService } from './../services/data.service';
import { Ask,Bid } from '../shared/form-value';

import { FormComponent } from './../form/form.component';
import { DisplaytableComponent } from './../displaytable/displaytable.component';


/**
 * @title Table retrieving data through HTTP
 */
 @Component({
   selector: 'app-snapshot',
   templateUrl: './snapshot.component.html',
   styleUrls: ['./snapshot.component.scss']
 })
export class SnapshotComponent implements OnInit {
  asks: Ask;
  bids: Bid;
  constructor(private service: DataService) {
    this.service.getAll("http://localhost:8888/api")
      .subscribe(response =>{
        console.log(response._body.length);
        let snapshot_data=JSON.parse(response._body).data;
        this.asks = snapshot_data.filter(snapshot_data => snapshot_data.TransType=="ASK");
        this.bids= snapshot_data.filter(snapshot_data => snapshot_data.TransType=="BID");
        //console.log(this.ask);
        //console.log(this.bid);
      });
  }
  ngOnInit() {
    //this.filterForm.reset();

  }
}
