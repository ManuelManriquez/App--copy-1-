import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input()  infoChildComponent!: any;

  @Output('eventClose') closeFunc = new EventEmitter<any>(); 
  @Output('eventSearch') searchFunc = new EventEmitter<any>(); 


  // @Input() firstTableComponent = {name: "", status:"", imgUrl:""}
  // @Input() firstSecondComponent = {title: "", text:"", imgUrl:""}
  
  executeEventClose(component:any){
    this.closeFunc.emit(component);
  }

  executeEventSearch(searchQuery:any, component:any){
    this.searchFunc.emit({searchQuery, component});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
