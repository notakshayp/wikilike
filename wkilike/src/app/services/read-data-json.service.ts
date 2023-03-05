import { Injectable } from '@angular/core';
import topicsList from "src/app/customiseApp/topicslist.json"
import blogsList from "src/app/customiseApp/blogslist.json"

@Injectable({
  providedIn: 'root'
})
export class ReadDataJsonService {

  constructor() { }


  getTopics() : any{
    return topicsList
  }

  getBlogs() : any{
    return blogsList
  }

}
