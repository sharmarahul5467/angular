import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomTableComponent implements OnInit,  AfterViewInit {

  // @ViewChild('thead') htmlData: ElementRef;
  @ViewChild('sideBarMenu', { static: false }) sideBarMenu: ElementRef;
  sideBarScrolling;
  scrollUp = true
  scrollDown = true
  // html = '';

  constructor() { }

  ngOnInit() {
    // window.xdata = this.htmlData.nativeElement.childNodes[0].childNodes ;
    // console.log(this.htmlData.nativeElement)
    // this.html = this.htmlData.nativeElement.childNodes[0].childNodes;
    console.log('ngOnInit is working')
    // console.dir(this);


  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit working")
    // this.checkScrollPosition();
  }

  getWidth(width) {
    return width.clientWidth + "px"
  }

  menuScrollingStop() {
    clearInterval(this.sideBarScrolling);
    console.log('menuScrollingStop');
  }
  menuScrollingStart(direction) {
    let speed = 40;
    console.log(`going ${direction}`);
    this.sideBarScrolling = setInterval(() => {
      if (direction === 'up') {
        this.sideBarMenu.nativeElement.scrollTop -= speed;
      } else if (direction === 'down') {
        this.sideBarMenu.nativeElement.scrollTop += speed;
      }
      else {
        console.log('Somthing Went wrong direction not found in menuScrollingStart ' + direction);
      }

      
      console.log(`
      scroll Top : ${this.sideBarMenu.nativeElement.scrollTop},
      client Height : ${this.sideBarMenu.nativeElement.clientHeight},
      scroll Height ${this.sideBarMenu.nativeElement.scrollHeight}`)
    }, 100)
  }
  checkScrollPosition() {
    console.log(this.sideBarMenu.nativeElement.scrollTop);
    if((this.sideBarMenu.nativeElement.scrollTop + this.sideBarMenu.nativeElement.clientHeight) == this.sideBarMenu.nativeElement.scrollHeight){
      this.scrollDown = false;
      clearInterval(this.sideBarScrolling);
    }else if(this.sideBarMenu.nativeElement.scrollTop == 0){
      this.scrollUp = false;
      clearInterval(this.sideBarScrolling);
    }
    else{
      this.scrollUp = true;
      this.scrollDown = true;
    }
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



