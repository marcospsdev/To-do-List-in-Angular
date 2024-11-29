import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontWeightResizerDirective } from '../../../fontWeightResizer.directive';

@Component({
  standalone: true,
  imports: [FontWeightResizerDirective, CommonModule],
  template: `<h2 fontWeightResizer="bold">Test Directive</h2>`,
})
export class TestFontWeightResizeDirectiveComponent {}
