import { Directive, EventEmitter, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[myColor]',
  outputs:['colorChange']
})
export class MyColorDirective {
  i:number = 0;
  colors = ["blue", "green", "yellow", "orange", "purple"];
  colorChange: EventEmitter<string>;
  constructor(private  el:ElementRef, private r: Renderer) {
    r.setElementStyle(el.nativeElement, 'color', this.colors[this.i]);
    this.colorChange = new EventEmitter();
   }
   @HostListener('click') fun(){
     this.el.nativeElement.style.color = this.colors[this.i];
        this.colorChange.emit(this.colors[this.i]);
        this.i++;
        if(this.i>this.colors.length-1) this.i = 0;
   }
}
