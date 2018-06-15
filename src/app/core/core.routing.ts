import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '**', redirectTo: 'feature' },
  {
    path: 'feature',
    loadChildren: '../feature/feature.module#FeatureModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
