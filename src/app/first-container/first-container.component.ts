import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-container',
  templateUrl: './first-container.component.html',
  styleUrls: ['./first-container.component.css']
})
export class FirstContainerComponent implements OnInit {
  array = [
    {name:"Tony Soprano", status:"Dead", killedBy:"Unknown"},
  {name:"Anthony 'A.J.' Soprano", status:"Alive"},
  {name:"Adriana La Cerva", status:"Dead", killedBy:"Silvio Dante"},
  {name:"Paulie Gualtieri", status:"Alive"},
  {name:"Vito Spatafore", status:"Dead", killedBy:"Phil Leotardo"},
  {name:"Corrado 'Junior' Soprano", status:"Alive"},
  {name:"Carmela Soprano", status:"Alive"},
  {name:"Christopher Moltisanti", status:"Dead", killedBy:"Tony Soprano"},
  {name:"Jennifer Melfi", status:"Alive"},
  {name:"Silvio Dante", status:"Alive"}
]

  constructor() { }

  ngOnInit(): void {
    
  }

}
