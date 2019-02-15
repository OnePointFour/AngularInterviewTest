import {
  Component,
  OnInit,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { BaseThemeable } from '../../@base/themeable';
import { fromEvent, Subscription, noop } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[appButton], a[appButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends BaseThemeable
  implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];

  @HostBinding('class.button-raised') @Input() public raised: boolean = true;

  @HostBinding('attr.tabindex') public tabIndex = -1;

  @ViewChild('focusPanelElement') public focusPanelRef: ElementRef<HTMLElement>;

  // Returns the host's nativeElement
  // of this component
  public get element(): HTMLButtonElement | HTMLAnchorElement {
    return this.host.nativeElement;
  }

  // Used for setting the tab index of "inputRef".
  public get focuspaneltabindex(): number {
    return Number(this.focusPanelRef.nativeElement.tabIndex);
  }
  public set focuspaneltabindex(value: number) {
    this.focusPanelRef.nativeElement.tabIndex = value;
    value ? noop() : this.focusPanelRef.nativeElement.blur();
  }

  constructor(private host: ElementRef<HTMLButtonElement | HTMLAnchorElement>) {
    // Super call for BaseThemable class
    super('button', ['primary', 'accent']);
  }

  public ngOnInit(): void {
    this._subs.push(
      fromEvent(this.element, 'contextmenu').subscribe(event =>
        event.preventDefault()
      )
    );
  }

  public ngOnDestroy(): void {
    if (this._subs && this._subs.length)
      this._subs.forEach(sub => sub.unsubscribe());
  }

  @HostListener('keydown', ['$event']) public onkeydown(
    event: KeyboardEvent
  ): void {
    // tslint:disable-next-line
    const keyCode = event.keyCode || event.which;
    switch (keyCode) {
      case 13:
      case 32:
        // Prevent the keypress from triggering any other
        // actions on the page
        event.preventDefault && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        break;
    }
  }
}
