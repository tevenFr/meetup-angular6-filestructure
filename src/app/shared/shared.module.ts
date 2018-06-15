import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import * as fromDirective from './directives';
import * as fromPipe from './pipes';

const modules = [CommonModule];

@NgModule({
  imports: [...modules],
  declarations: [
    ...fromComponents.components,
    ...fromDirective.directives,
    ...fromPipe.pipes
  ],
  exports: [
    ...modules,
    ...fromComponents.components,
    ...fromDirective.directives,
    ...fromPipe.pipes
  ]
})
export class SharedModule {}
