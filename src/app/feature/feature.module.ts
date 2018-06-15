import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature.routing';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromGuards from './guards';
import * as fromService from './services';

@NgModule({
  imports: [SharedModule, HttpClientModule, FeatureRoutingModule],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromGuards.guards, ...fromService.services]
})
export class FeatureModule {}
