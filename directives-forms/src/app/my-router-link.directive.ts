import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Optional, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit, OnDestroy {
  @Input() appMyRouterLink!: string;
  @Input() template!: TemplateRef<any>;

  @HostListener('mouseenter') mouseEnterHandler2(e: MouseEvent) {
    console.log('mouse enter', e);

  }
  @HostListener('mouseleave', ['$event']) mouseLeaveHandler2(e: MouseEvent) {
    console.log('mouse leave', e);

  }

  unsub: (() => void) | undefined;
  viewHasBeenCreated = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private vc: ViewContainerRef,
  ) {
    this.unsub = this.renderer.listen(this.elementRef.nativeElement, 'mouseover', this.mouseOverHandler);
    this.unsub = this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.mouseOverEndHandler);
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'data-test', '123');

  }
  mouseOverHandler = (event: MouseEvent) => {
    if (this.viewHasBeenCreated) { return }
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.vc.createEmbeddedView(this.template);
    this.viewHasBeenCreated = true;
  }
  mouseOverEndHandler = (event: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    this.vc.clear();
    this.viewHasBeenCreated = false;
  }


  ngOnInit(): void {
    console.log(this.appMyRouterLink);
    console.log(this.template);
    this.vc.createEmbeddedView(this.template);
  }
  ngOnDestroy(): void {
    this.unsub?.call(undefined);
  }
}
