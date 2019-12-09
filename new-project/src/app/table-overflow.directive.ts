import { Directive, OnInit, HostBinding, ElementRef, HostListener, AfterViewInit, AfterContentInit } from '@angular/core';
import { isArray } from 'util';

@Directive({
  selector: '[appTableOverflow]'
})
export class TableOverflowDirective implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private elRef: ElementRef) { }
  table = this.elRef.nativeElement;
  ngOnInit() {
      console.dir(this.table.parentNode)
      // this.tableBodyScroll(this.table)
  }




  ngAfterViewInit() {


  }




  ngAfterContentInit(): void {

  }


  @HostListener('scroll', ['$event']) test(event: Event){
    // console.log(event)
    this.tableBodyScroll(event);
  }


  tableBodyScroll(event) {
    console.dir(event.target)

    switch(event.target.parentNode.childNodes.length){
      case 3 :
                event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
                event.target.parentNode.childNodes[2].style.left = '-' + event.target.scrollLeft + 'px';
                break;
      case 2 :
                event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
                break;
    default:  ;
    }


    event.target.parentNode.childNodes.forEach((element, key) => {
      if (element.clientHeight < element.scrollHeight) {
        console.dir(element);
        console.log(element.localName + ' scroller  h ')
        element.classList.add('scroller');
      }
      else {
        console.log(element.localName + ' scroller nhi h ')
        element.classList.remove('scroller');
      }
    });

  }

}
