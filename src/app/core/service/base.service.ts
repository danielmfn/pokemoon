import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BaseService {

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) {}

}
