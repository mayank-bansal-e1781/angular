import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getPackingList() {
    return this.http.get('https://6bf71e19-331b-44d4-aef9-36750767d047.mock.pstmn.io/get-packing-list')
  }

  getPackingListById() {
    return this.http.get('https://6bf71e19-331b-44d4-aef9-36750767d047.mock.pstmn.io/getLotListByPackingId',{responseType: 'json'} )
  }
}
