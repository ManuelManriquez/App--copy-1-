import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-container',
  templateUrl: './second-container.component.html',
  styleUrls: ['./second-container.component.css']
})
export class SecondContainerComponent implements OnInit {

  infoArray = [{
    Director:"Charlie Kaufman",
    Year:"2008",
    Duracion:"123 minutos"
  },{
    Director:"Charlie ",
    Year:"2023",
    Duracion:"333 minutos"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
