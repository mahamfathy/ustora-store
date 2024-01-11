import { Directive, ElementRef, OnInit } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appSticky]',
  standalone: true
})
export class StickyDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).sticky({
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      responsiveWidth: false
    });
  }
}