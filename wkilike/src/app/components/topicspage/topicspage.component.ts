import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadDataJsonService } from 'src/app/services/read-data-json.service';


@Component({
  selector: 'app-topicspage',
  templateUrl: './topicspage.component.html',
  styleUrls: ['./topicspage.component.css']
})
export class TopicspageComponent implements OnInit{
  constructor(private route: ActivatedRoute , private uidataService:ReadDataJsonService) { }
  topicName: string="";
  blogsList: any[]=[];
  blogRowCount:number=0;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topicName = params['name'];

      this.blogsList=this.uidataService.getBlogs()
      let blogItem:any;
      for(blogItem in this.blogsList){
        if(this.blogsList[blogItem]["topic_name"] == this.topicName){
          this.blogRowCount+=1;
          }
      }

    });
  }



}
