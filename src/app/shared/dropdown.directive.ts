import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  buttonPressed = false;


  /*@HostListener('document:click', ['$event']) clickOnAnywhere = (e) => {
    console.log(this.buttonPressed);
    e.stopImmediatePropagation();
    if (this.buttonPressed) {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      console.log('Click');
      this.buttonPressed = false;
    }
  };*/

  @HostListener('click', ['$event']) click = (e) => {
    e.stopImmediatePropagation();
    if (!this.buttonPressed) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.buttonPressed = true;

    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.buttonPressed = false;

    }

  }
  constructor(private  elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }


}
