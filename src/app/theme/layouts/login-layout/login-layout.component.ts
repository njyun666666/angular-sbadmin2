import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    this.renderer.addClass(this.document.body, 'bg-gradient-primary');

  }


  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'bg-gradient-primary');
  }


}
