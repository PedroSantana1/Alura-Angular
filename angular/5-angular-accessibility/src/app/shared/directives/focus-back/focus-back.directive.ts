import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

  private lastFocusableElement: Element;

  ngOnInit(): void {
    this.lastFocusableElement = document.activeElement;
  }

  ngOnDestroy(): void {
    if (this.lastFocusableElement) {
      (this.lastFocusableElement as HTMLElement).focus();
    }
  }
}
