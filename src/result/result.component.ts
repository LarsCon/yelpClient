import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/services.service';
import { Food } from '../models/food.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ResultComponent implements OnInit {
  public result = [];

  constructor(private psService: DatabaseService) { }

  ngOnInit() {
    this.findResult()
  }

  @Input() set results(results: any) {
    this.result = results;
  }

  get product(): any {
    return this.result;
  }

  findResult() : void {
    this.psService.getRestaurant().subscribe(Result => {
      this.result = Result;
    })
  }

  setResults(results: any) {
    this.result = results;
  }

}
