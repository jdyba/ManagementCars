import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyForm]'
})
export class MyFormDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }



  ngOnInit() {
    const form = this.el.nativeElement;
    const children = form.children;

    this.renderer.setStyle(form, 'display', 'inline-grid');
    this.renderer.setStyle(form, 'background-color', 'rgb(239, 189, 127)');
    this.renderer.setStyle(form , 'border-radius', '5px');
    this.renderer.setStyle(form, 'padding', '30px');
    for (const child of children) {
      this.renderer.setStyle(child, 'padding', '5px');
      this.renderer.setStyle(child, 'margin', '5px');
      this.renderer.setStyle(child, 'font-size', '15px');
    }
  }


}
