import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appButLog]'
})
export class ButLogDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter', ['$event'])
  mouseEnter(eventDate: Event) {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'cursor', 'pointer');
    this.renderer.setStyle(button, 'opacity', '0.7');
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(eventDate: Event) {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'opacity', '1.0');
    this.renderer.setStyle(button, 'cursor', 'default');
  }


  ngOnInit() {
    const button = this.el.nativeElement;
    this.renderer.setStyle(button, 'color', 'white');
    this.renderer.setStyle(button, 'text-decoration', 'none');
    this.renderer.setStyle(button, 'padding', '8px');
    this.renderer.setStyle(button, 'margin', '5px');
    this.renderer.setStyle(button, 'border-radius', '5px');
    this.renderer.setStyle(button, 'border', '2px solid white');
    this.renderer.setStyle(button, 'background-color', 'rgb(200, 86, 46)');
    this.renderer.setStyle(button, 'font-size', '15px');
  }


}

