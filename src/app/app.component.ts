import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  lastClosed: any;
  searchQuery: any;
  filteredCompo: any;
  searchResult = false;


  infoComponents = [
    {
       "id":1,
       "title":"The Sopranos",
       "text":"The Sopranos is an American crime drama television series created by David Chase.",
       "imgUrl":"https://media3.giphy.com/media/oVQD3pdk7eI0g/giphy.gif?cid=ecf05e47ggalzlwq2ji5hvq9t4e4k4jp4b06pgvsfpwk3gvi&rid=giphy.gif&ct=g",
       "table":[
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
      },
    {
       "id":2,
       "title":"Synecdoche New York",
       "text":"Synecdoche, New York is a 2008 American postmodern psychological drama film written and directed by Charlie Kaufman in his directorial debut.",
       "imgUrl":"https://media4.giphy.com/media/gD4lqsfMnAGdvlqxDq/giphy.gif?cid=790b7611b96a880845738ba5c9536270a83d87df530d05ab&rid=giphy.gif&ct=g"
    },
    {
       "id":3,
       "title":"Berserk",
       "text":"Berserk is a Japanese manga series written and illustrated by Kentaro Miura.",
       "imgUrl":"https://media1.giphy.com/media/v2c1tTPc30szC/giphy.gif?cid=ecf05e47szsycdcet4l6fwjzt3xsus7sunyt8tfz3o1y1ijg&rid=giphy.gif&ct=g",
       "table":[
        {name:"Guts", status:"alive"},
        {name:"Rickert", status:"alive"},
        {name:"Casca", status:"alive"},
        {name:"Zodd", status:"alive"}
       ]
    }
 ]

  searchFlags = [false, false, false]
  showCompoFlags = [false, false, false]

   toggleCompo(compoNumb:number):void {
    switch (compoNumb) {
      case 1:
        this.showCompoFlags[0] == false ? this.showCompoFlags[0] = true: this.showCompoFlags[0] = false;
        break;
      case 2:
        this.filteredCompo.BaseTable = this.filteredCompo.table
        this.showCompoFlags[1] == false ? this.showCompoFlags[1] = true: this.showCompoFlags[1] = false;
          break;
        case 3:
          this.filteredCompo.BaseTable = this.filteredCompo.table
          this.showCompoFlags[2] == false ? this.showCompoFlags[2] = true: this.showCompoFlags[2] = false;
        break;
      default:
        break;
    }
  }

  closeCompo(e:any){
    this.toggleCompo(e.id)
    this.lastClosed = e.title;
  }

  getSearchEvent(e:any){
    this.searchQuery = e.searchQuery
    this.filteredCompo = e.component

    this.filteredCompo.BaseTable = this.filteredCompo.table;

    this.filteredCompo.table = []    

    for (const x of this.filteredCompo.BaseTable) {      
      let name = x.name.toLowerCase();
      let status = x.status.toLowerCase();
      let query = this.searchQuery.toLowerCase();
      let killedBy;
      if (typeof(x.killedBy) !== 'undefined') {
        killedBy = x.killedBy.toLowerCase();
      }else{
        killedBy = "";
      }
      if (name.includes(query) || status.includes(query) || killedBy.includes(query)) {
       this.filteredCompo.table.push(x) 
      }
    }
  }
}
