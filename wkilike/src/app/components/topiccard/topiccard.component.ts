import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topiccard',
  templateUrl: './topiccard.component.html',
  styleUrls: ['./topiccard.component.css']
})
export class TopiccardComponent implements OnInit {
  
  @Input() topic_name="Loading ...";
  @Input() prereqList=["PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq","PreReq"];

  ngOnInit(): void {
  }

}
