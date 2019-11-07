import { Directive,  HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective  {

  @HostBinding('class.open') isOpen = false;


  constructor(private elRef: ElementRef){}


  @HostListener('mouseenter') dropdownOpen(event: Event ){
    this.isOpen = true ;
  }
  @HostListener('mouseleave') dropdownClose(event: Event ){
    this.isOpen = false;
  }

  // if you want to show dropdown on click use this

  // @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    // this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // if(this.elRef.nativeElement.contains(event.target)){
    //     console.log('clicked to the dropdown');
    //     this.isOpen = true ;
    // }
    // else {
    //   console.log('not clicked to the dropdown');
    //   this.isOpen = false ;
    // }
  // }

}
