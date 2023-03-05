import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent implements OnInit {
  
  @Input() topic_name="Loading ...";
  @Input() desc="";
  @Input() prereqList=["PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq"];

  ngOnInit(): void {
  }

}
