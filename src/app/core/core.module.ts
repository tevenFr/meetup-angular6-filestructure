import { NgModule } from '@angular/core';

import * as fromContainers from './containers';
import { CoreRoutingModule } from './core.routing';

@NgModule({
  imports: [CoreRoutingModule],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers],
  providers: []
})
export class CoreModule {}
