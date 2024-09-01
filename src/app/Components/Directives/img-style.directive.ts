import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
  standalone: true
})
export class ImgStyleDirective implements OnChanges{

  @Input("ImgStyle") border2:string="black";
  @Input() radius1:string="5px";
  @Input("ImgStyle") radius2:string="2px";

// elementRef ==== document
  constructor(public elementRef: ElementRef) {

    this.elementRef.nativeElement.style.border=`2px solid ${this.border2}`
   }
  ngOnChanges(): void {

    this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`
  }

   @HostListener('mouseover') mouseoverFunc(){

    this.elementRef.nativeElement.style.borderRadius=`${this.radius1}`
    this.elementRef.nativeElement.style.opacity=.8;

   }

   @HostListener('mouseout') mouseoutFunc(){
    // this.elementRef.nativeElement.style.border=`4px solid ${this.border2}`
    this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`
    this.elementRef.nativeElement.style.opacity=1;

   }

}
