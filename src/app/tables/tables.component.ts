import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Call the dataTables jQuery plugin
    $(document).ready(function () {
      $('#dataTable').DataTable();
    });


  }

}
