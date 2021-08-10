import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  medals: any[];
  loading = true;
  femaleCount = 0;
  maleCount = 0;
  error: any;
  tabs = [1, 2, 3];

  public individualGender = [];

  constructor(
    public dataService: DataService,
  ) {}

  ngOnInit() {
    this.dataService.updateData();
    console.log()
  }
}
