import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appWeatherItem]'
})
export class WeatherItemDirective {
  @HostBinding('class.listItem') isNormal = false;
  @HostBinding('class.listItem-hover') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  constructor() { }

  @Input() set appWeatherItem(value) {
    this.isNormal = value;
  }
}
