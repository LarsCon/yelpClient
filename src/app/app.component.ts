import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { DatabaseService } from '../services/services.service';
import { ResultComponent } from '../result/result.component';

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

  constructor(private fb: FormBuilder, private dbService: DatabaseService, private rsService: ResultComponent) {}

  ngOnInit() {
    this.createSearch = this.fb.group({
            state: new FormControl(),
            price: new FormControl()
    })
  }

  onCreateSearch(){
    const state = this.createSearch.get('state').value;
    const price = this.createSearch.get('price').value;
    this.dbService.makeSearch({state, price}).subscribe(Result => {
      this.rsService.setResults(Result)
  })
}

}
