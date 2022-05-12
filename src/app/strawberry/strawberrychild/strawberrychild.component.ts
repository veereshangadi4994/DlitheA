import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-strawberrychild',
  templateUrl: './strawberrychild.component.html',
  styleUrls: ['./strawberrychild.component.css'],
})
export class StrawberrychildComponent implements OnInit {
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
