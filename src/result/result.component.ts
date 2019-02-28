import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/services.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result=[]

  constructor(private psService: DatabaseService) { }

  ngOnInit() {
  }
  findResult() : void {
    this.psService.getRestaurant().subscribe(Result => {
      this.result = Result;
      this.result.reverse();
    })
  }

}
