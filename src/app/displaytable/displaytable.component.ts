import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { Ask,Bid } from '../shared/form-value';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.scss']
})
export class DisplaytableComponent implements OnChanges {


  @Input() tasks: Ask;
  @Input() tbids: Bid;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
  }

}
