import { Injectable } from '@angular/core';
import topicsList from "src/app/customiseApp/topicslist.json"

@Injectable({
  providedIn: 'root'
})
export class ReadDataJsonService {

  constructor() { }


  getTopics() : any{
    return topicsList
  }

}
