import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-topicspage',
  templateUrl: './topicspage.component.html',
  styleUrls: ['./topicspage.component.css']
})
export class TopicspageComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  topicName: string="";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topicName = params['name'];
    });
  }
}
