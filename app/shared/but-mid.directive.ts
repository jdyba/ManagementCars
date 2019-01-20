import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appButMid]'
})
export class ButMidDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter', ['$event'])
  mouseEnter(eventDate: Event) {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'cursor', 'pointer');
    this.renderer.setStyle(button, 'background-color', 'rgb(205, 119, 7)');
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(eventDate: Event) {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'background-color', 'rgb(148, 46, 46)');
  }


  ngOnInit() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'color', 'white');
    this.renderer.setStyle(button, 'text-decoration', 'none');
    this.renderer.setStyle(button, 'padding', '8px');
    this.renderer.setStyle(button, 'margin', '5px');
    this.renderer.setStyle(button, 'border-radius', '5px');
    this.renderer.setStyle(button, 'background-color', 'rgb(148, 46, 46)');
    this.renderer.setStyle(button, 'font-size', '18px');
  }


}



