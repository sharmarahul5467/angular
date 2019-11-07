import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: Boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
      // console.log(this.templateRef);
      // console.log(this.vcRef);
    } else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,  private vcRef: ViewContainerRef ) { }

}
