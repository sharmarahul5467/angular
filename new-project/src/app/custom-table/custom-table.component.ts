import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomTableComponent implements OnInit {

  // @ViewChild('thead') htmlData: ElementRef;

  // html = '';

  constructor() { }

  ngOnInit() {
    // window.xdata = this.htmlData.nativeElement.childNodes[0].childNodes ;
    // console.log(this.htmlData.nativeElement)
    // this.html = this.htmlData.nativeElement.childNodes[0].childNodes;



  }

  getWidth(width) {
    return width.clientWidth + "px"
  }

  checkScrolling(event) {
    // console.dir(`table scroll ${event.target.scrollLeft}`)
    // console.dir(event.target.childNodes)

    // event.target.childNodes[0].childNodes[0].scrollLeft =  event.target.scrollLeft
    // event.target.childNodes[0].childNodes[1].scrollLeft =  event.target.scrollLeft
    // console.dir(`table body scroll ${event.target.childNodes[0].childNodes[1].scrollLeft}`)
  }

  tableBodyScroll(event) {
    // console.dir(`tableBodyScroll body scroll ${event.target.scrollLeft}`)
    // console.log("thead client height " +  event.target.parentNode.childNodes[0].clientHeight + "scroll height " + event.target.parentNode.childNodes[0].scrollHeight)
    // console.log("tbody  client height " + event.target.parentNode.childNodes[1].clientHeight + "scroll height " + event.target.parentNode.childNodes[1].scrollHeight)
    // console.log("tfoot client height " +  event.target.parentNode.childNodes[2].clientHeight + "scroll height " + event.target.parentNode.childNodes[2].scrollHeight)

    // event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
    // event.target.parentNode.childNodes[2].style.left = '-' + event.target.scrollLeft + 'px';
    // console.log(event.target.parentNode.childNodes.length)


    // switch(event.target.parentNode.childNodes.length){
    //   case 3 :
    //             event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
    //             event.target.parentNode.childNodes[2].style.left = '-' + event.target.scrollLeft + 'px';
    //             break;
    //   case 2 :
    //             event.target.parentNode.childNodes[0].style.left = '-' + event.target.scrollLeft + 'px';
    //             break;
    // default:  ;
    // }

    // event.target.parentNode.childNodes.forEach((element, key) => {
    //   if (element.clientHeight < element.scrollHeight) {
    //     console.dir(element);
    //     console.log(element.localName + ' scroller  h ')
    //     element.classList.add('scroller');
    //   }
    //   else {
    //     console.log(element.localName + ' scroller nhi h ')
    //     element.classList.remove('scroller');
    //   }
    // });
    // console.dir(event.target.parentNode.childNodes[0].style.left)
    // event.target.parentNode.childNodes[0].clientLeft = event.target.scrollLeft ;
    // event.target.parentNode.childNodes[0].clientLeft = event.target.scrollLeft ;
    // event.target.parentNode.childNodes[1].clientLeft = event.target.scrollLeft ;
    // event.target.parentNode.childNodes[2].clientLeft = event.target.scrollLeft ;
  }

}



