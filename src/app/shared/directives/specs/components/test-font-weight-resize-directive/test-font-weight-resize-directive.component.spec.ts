import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestFontWeightResizeDirectiveComponent } from './test-font-weight-resize-directive.component';
import { FontWeightResizerDirective } from '../../../fontWeightResizer.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TestFontWeightResizerDirective', () => {
  let fixture: ComponentFixture<TestFontWeightResizeDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestFontWeightResizeDirectiveComponent,
        FontWeightResizerDirective,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(TestFontWeightResizeDirectiveComponent);
    fixture.detectChanges();
  });

  it("should font-weight to be 'bold'", () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const fontWeight = h2.style.fontWeight;

    expect(fontWeight).toEqual('bold');
  });
});
