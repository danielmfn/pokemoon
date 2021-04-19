import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Card } from 'src/app/core/model/card';
import { BaseService } from 'src/app/core/service/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseService {

  private baseUrl = `${environment.API_BASE_PATH}`;
  private resource = '/v2/cards';

  constructor(http: HttpClient) {
    super(http);
  }

  findAll(): Observable<Card> {
    return this.http.get<Card>(this.baseUrl +  this.resource, this.httpOptions);
  }
}
