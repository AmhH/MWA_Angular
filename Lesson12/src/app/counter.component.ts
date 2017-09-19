import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <span class='counter'>  <button (click)="decrement()"> 
           - </button> {{counterValue}} 
          <button (click)="increment()"> +  </button> </span>`,
  styles: [`.counter {font-size :12pt, 
                      display: solid, 1px, green}`],
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