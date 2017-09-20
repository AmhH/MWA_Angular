import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  @Input() myvisibility: boolean;
  constructor(private e: ElementRef, private r: Renderer) { 
    this.e.nativeElement.style.display = 'inline';
  }
  ngOnInit(){
    if(this.myvisibility){
        this.e.nativeElement.style.display = 'inline';
    } else{
      this.e.nativeElement.style.display = 'none';
    }
  }
}
