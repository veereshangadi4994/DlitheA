import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css'],
})
export class OrangeComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }

  constructor() {}

  ngOnInit(): void {}
}
