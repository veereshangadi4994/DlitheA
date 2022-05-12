import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grapeschild',
  templateUrl: './grapeschild.component.html',
  styleUrls: ['./grapeschild.component.css'],
})
export class GrapeschildComponent implements OnInit {
  counterValue = 1;
  countLessThenOne = true;
  @Output() countEmitter = new EventEmitter();
  PostData() {
    this.countEmitter.emit(this.counterValue);
  }

  increment() {
    this.counterValue++;
    this.countLessThenOne = true;
    this.PostData();
  }
  decrement() {
    if (this.counterValue == 1) {
      this.countLessThenOne = false;
    } else {
      this.countLessThenOne = true;
      this.counterValue--;
      this.PostData();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
