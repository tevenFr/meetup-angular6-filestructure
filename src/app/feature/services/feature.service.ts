import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// CREATION
import { throwError } from 'rxjs';
// OPERATORS
import { catchError, tap, map, retry, delay } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Users } from '../models/jsonpldr.model';

@Injectable()
export class FeatureService {
  api_url: string;

  constructor(private httpClient: HttpClient) {
    this.api_url = environment.API_URL;
  }

  getUsers() {
    return this.httpClient
      .get<Users>(this.api_url + '/users', {
        observe: 'response'
      })
      .pipe(
        delay(2000),
        tap(response => console.log(response)),
        map(response => response.body),
        retry(2),
        catchError(error => throwError('my custom error'))
      );
  }
}
