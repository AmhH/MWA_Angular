import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: ` <div class='counter'> Counter Component: <button (click)="decrement()"> 
           - </button> {{counterValue}} 
          <button (click)="increment()"> +  </button> </div>`,
  styles: [`.counter {font-size :12pt}`],
})
export class CounterComponent implements OnInit {

  private counterValue;

  @Input() counter;
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();
  }
  increment() {
    this.counterValue++;
    this.changeValue();
  }
  decrement() {
    this.counterValue--;
    this.changeValue();
  }
  changeValue() {
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }

}