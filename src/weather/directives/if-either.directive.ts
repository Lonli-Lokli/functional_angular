import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Either } from '@sweet-monads/either';

import { initialRefs, initialIfContext, IfContext, updateView } from './common';

@Directive({ selector: '[fpIfRight]' })
export class IfRightDirective<TE = unknown, TD = unknown> {
  static ngTemplateGuard_fpIfRight: 'binding';
  private _context: IfContext<TE | TD> = initialIfContext();

  private _refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this._refs.viewContainer = viewContainer;
    this._refs.thenTemplateRef = templateRef;
  }

  @Input()
  set fpIfRight(either: Either<TE, TD> | null) {
    if (either) {
      either
        .mapLeft(l => {
          this._context.ifTrue = false;
          this._context.$implicit = l;
        })
        .mapRight(r => {
          this._context.ifTrue = true;
          this._context.$implicit = r;
        });
    }
    updateView(this._context, this._refs);
  }

  @Input()
  set fpIfRightThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.thenTemplateRef = templateRef;
    this._refs.thenViewRef = null;
    updateView(this._context, this._refs);
  }

  @Input()
  set fpIfRightElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.elseTemplateRef = templateRef;
    this._refs.elseViewRef = null;
    updateView(this._context, this._refs);
  }

  static ngTemplateContextGuard<TE, TD>(
    _dir: IfRightDirective<TE, TD>,
    _ctx: any
  ): _ctx is IfContext<Exclude<TD, false | 0 | '' | null | undefined>> {
    return true;
  }
}

@Directive({ selector: '[fpIfLeft]' })
export class IfLeftDirective<TE = unknown, TD = unknown> {
  static ngTemplateGuard_fpIfLeft: 'binding';
  private context = initialIfContext();

  private refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this.refs.viewContainer = viewContainer;
    this.refs.thenTemplateRef = templateRef;
  }

  @Input()
  set fpIfLeft(either: Either<TE, TD> | null) {
    if (either) {
      either
        .mapLeft(l => {
          this.context.ifTrue = true;
          this.context.$implicit = l;
        })
        .mapRight(r => {
          this.context.ifTrue = false;
          this.context.$implicit = r;
        });
    }
    updateView(this.context, this.refs);
  }

  @Input()
  set fpIfLeftThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this.refs.thenTemplateRef = templateRef;
    this.refs.thenViewRef = null;
    updateView(this.context, this.refs);
  }

  @Input()
  set fpIfLeftElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this.refs.elseTemplateRef = templateRef;
    this.refs.elseViewRef = null;
    updateView(this.context, this.refs);
  }

  static ngTemplateContextGuard<TE, TD>(_dir: IfLeftDirective<TE, TD>, _ctx: any): _ctx is IfContext<TE> {
    return true;
  }
}
