import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css'],
})
export class MangoComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
