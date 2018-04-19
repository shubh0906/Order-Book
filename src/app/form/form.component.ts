import { Component, OnInit,Input,OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { DataService } from './../services/data.service';
import { Filters, Exchange, FormInput,Ask,Bid } from '../shared/form-value';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisplaytableComponent } from './../displaytable/displaytable.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fasks: Ask;
  @Input() fbids: Bid;
  filterForm: FormGroup;
  filter:FormInput;
  filters=Filters;
  exchanges=Exchange;
  isLoading:boolean =false;

  constructor(private service: DataService,private fb: FormBuilder) { }

  ngOnInit() {
    this.isLoading=true;
    this.createForm();
  }
  ngOnChanges(){
    this.isLoading=false;
  }

  createForm() {
    this.filterForm = this.fb.group({
      price: 0,
      filter: ['',Validators.required],
      exchange: ''
    });
  }

  onReset(){
      console.log("in reset");
      this.isLoading=true;
      let url = "http://localhost:8888/api";
      this.service.getAll(url)
        .subscribe(response =>{
          console.log(response._body.length);
          this.isLoading=false;
          let snapshot_data=JSON.parse(response._body).data;
          this.fasks = snapshot_data.filter(snapshot_data => snapshot_data.TransType=="ASK");
          this.fbids = snapshot_data.filter(snapshot_data => snapshot_data.TransType=="BID");
          // console.log(ask);
          // console.log(bid);
        });
      this.filterForm.reset();
  }

  onSubmit() {
    //console.log("on");
    let url = "http://localhost:8888/api";
    this.filter = this.filterForm.value;
    console.log(this.filter);
    let val;
    this.isLoading=true;
    if(this.filter.filter==""||this.filter.exchange=="")
      return this.onReset();
    if(this.filter.filter=="/exchange")
      val=this.filter.exchange;
    else
      val='/'+this.filter.price;
    this.service.getAll(url+this.filter.filter+val)
      .subscribe(response =>{
        console.log(response._body.length);
        this.isLoading=false;
        let snapshot_data=JSON.parse(response._body).data;
        this.fasks = snapshot_data.filter(snapshot_data => snapshot_data.TransType=="ASK");
        this.fbids = snapshot_data.filter(snapshot_data => snapshot_data.TransType=="BID");
        // console.log(ask);
        // console.log(bid);
      });
  }

}
