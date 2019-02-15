import { HostBinding, Input } from '@angular/core';

export const includes = <V>(array: Array<V>, value: V) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
};

export class BaseThemeable {
  // Theme
  @HostBinding('class') public _themeclass: string = `${
    this.componentNamespace
  }-theme-none`;

  @Input()
  public get color(): string {
    return this._themeclass.replace(`${this.componentNamespace}-theme-`, '');
  }
  public set color(newTheme: string) {
    let valid = true;
    if (this.constraints && this.constraints.length && newTheme !== 'none') {
      valid = includes(this.constraints, newTheme);
    }

    if (valid) {
      this._themeclass = `${this.componentNamespace}-theme-${newTheme}`;
    } else
      throw new TypeError(
        `Invalid theme "${newTheme}" passed to ${
          this.componentNamespace
        }.\nThe theme must be on of the following:\n${this.constraints
          .map(t => ` - ${t}`)
          .join('\n')}\n\n`
      );
  }

  constructor(
    public componentNamespace: string = 'component',
    public constraints: string[] = null
  ) {}
}
