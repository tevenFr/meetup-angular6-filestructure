import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { FeatureService } from '../../services/feature.service';
import { Users } from '../../models/jsonpldr.model';

@Component({
  selector: 'app-container1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['container1.component.scss'],
  template: `
    <h1>Hello from container1</h1>
    <ng-container *ngIf="!(error$ | async)">
      <div *ngIf="users$ | async as users;else loading;">
        <div *ngFor="let user of users">
          {{ user | json }}
          <hr>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="error$ | async">
      <p class="errorload">Error !</p>
    </ng-container>

    <ng-template #loading>
      <p class="errorload">Loading...</p>
    </ng-template>
  `
})
export class Container1Component implements OnInit {
  users$: Observable<Users>;
  error$ = new BehaviorSubject<boolean>(false);

  constructor(private api: FeatureService) {}

  ngOnInit() {
    this.users$ = this.api.getUsers().pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        this.error$.next(true);
        return throwError(err);
      })
    );
  }
}
