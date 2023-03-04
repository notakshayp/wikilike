import { Component, OnInit } from '@angular/core';
import { ReadDataJsonService } from 'src/app/services/read-data-json.service';


@Component({
  selector: 'app-topicslist',
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.css']
})
export class TopicslistComponent implements OnInit{

  topicsListArr: any[]=[]
  
  constructor (private readdataJsonService:ReadDataJsonService){

  }


ngOnInit(): void {
  console.log("Fetching Topics...")
  this.topicsListArr=this.readdataJsonService.getTopics()
  
}
}
