import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-container',
  templateUrl: './third-container.component.html',
  styleUrls: ['./third-container.component.css']
})
export class ThirdContainerComponent implements OnInit {

  infoArray = [{
    Name:"Guts",
    Year:"2008",
    Duracion:"123 minutos"
  },{
    Director:"Griffith",
    Year:"2023",
    Duracion:"333 minutos"
  }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
