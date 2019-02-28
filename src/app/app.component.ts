import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
// import { DatabaseService } from '../services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  prices = [
    {value: 1, view: '$'},
    {value: 2, view: '$$'},
    {value: 3, view: '$$$'},
    {value: 4, view: '$$$$'},
    {value: 5, view: '$$$$$'}
  ];
  createSearch: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createSearch = this.fb.group({
            state: new FormControl(),
            price: new FormControl()
    })
  }

  // onCreateSearch(){

  // }
}
