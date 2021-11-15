import {
  Directive,
  ElementRef, HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = "transparent"
  @Input("appBetterHighlight") highlightColor: string = "green"

  @HostBinding("style.backgroundColor") backgroundColor: string | undefined;
  @HostBinding("style.textAlign") textAlign: string | undefined;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
    this.textAlign = "left";
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "green")
    this.backgroundColor = this.highlightColor;
    this.textAlign = "center"

  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent")
    this.backgroundColor = this.defaultColor
    this.textAlign = "left"

  }
}
