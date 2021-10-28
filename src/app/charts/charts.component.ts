import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../shared/chartAreaDemo';
import { chartPieDemo } from '../shared/chartPieDemo';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Set new default font family and font color to mimic Bootstrap's default styling
    chartAreaDemo();


    // Set new default font family and font color to mimic Bootstrap's default styling
    chartPieDemo();

  }

}
