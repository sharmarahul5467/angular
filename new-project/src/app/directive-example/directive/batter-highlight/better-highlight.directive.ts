import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'pink';
  @Input() hoverColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') textcolor: string = 'green';



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'pink' );
    this.backgroundColor = this.defaultColor;
    // this.textcolor = 'red'

  }

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'pink' );
    this.backgroundColor = this.hoverColor;
    this.textcolor = 'red'
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'yellow' );
    this.backgroundColor = this.defaultColor;
    this.textcolor = 'green'
  }
}
