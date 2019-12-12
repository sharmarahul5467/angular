import { Directive, OnInit, HostBinding, ElementRef, HostListener, AfterViewInit, AfterContentInit } from '@angular/core';
import { isArray } from 'util';

@Directive({
  selector: '[appTableOverflow]'
})
export class TableOverflowDirective implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private elRef: ElementRef) { }
  table = this.elRef.nativeElement;
  ngOnInit() {
    // window.xxx = this.table ;
    // console.dir(this.table)
    // this.tableBodyScroll(this.table)
    console.log('init worked')
    setTimeout(() => {
      console.log('init setime out worked')
      this.checkTable(this.table);
    }, 2000)
  }




  ngAfterViewInit() {


  }




  ngAfterContentInit(): void {

  }


  @HostListener('scroll', ['$event']) test(event: Event) {
    // console.log(event.target)
    this.tableBodyScroll(event);
  }
  @HostListener('resize', ['$event']) resize(event: Event) {
    console.log('resize event called ');
    // this.tableBodyScroll(event);
  }

  checkTable(event: any) {
    console.dir(event)
    console.log("function called")
    console.dir(event.clientHeight)
    console.dir(event.scrollHeight)
    if (event.clientHeight < event.scrollHeight) {
      console.log(event.localName + ' scroller  h ');
      event.classList.add('scroller');
    } else {
      console.log(event.localName + ' scroller nhi h ')
      event.classList.remove('scroller');
    }



  }


  tableBodyScroll(event) {
    // console.log(event)

    switch (event.target.parentNode.childNodes.length) {
      case 3:
        event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
        event.target.parentNode.childNodes[2].style.left = '-' + event.target.scrollLeft + 'px';
        break;
      case 2:
        event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
        break;
      default: ;
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
