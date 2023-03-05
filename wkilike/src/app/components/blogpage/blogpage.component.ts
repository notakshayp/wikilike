import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadDataJsonService } from 'src/app/services/read-data-json.service';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit{
  constructor(private route: ActivatedRoute , private uidataService:ReadDataJsonService, private sanitizer: DomSanitizer) { }
  blogName: string="";
  blogsList: any[]=[];

  
  blog_description:string="";
  blog_yt_video_url:string="";
  blog_article_link:string="";
  safe_blog_yt_video_url:SafeResourceUrl="";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.blogName = params['name'];

      this.blogsList=this.uidataService.getBlogs()
      let blogItem:any;
      for(blogItem in this.blogsList){
        if(this.blogsList[blogItem]["blog_name"] == this.blogName){
        
          this.blog_description=this.blogsList[blogItem]["blog_description"];
          this.blog_article_link=this.blogsList[blogItem]["blog_article_link"];
          this.blog_yt_video_url=this.blogsList[blogItem]["blog_yt_video_url"];
          this.safe_blog_yt_video_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.blog_yt_video_url)
        }
      }
    });
  }



}
