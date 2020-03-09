import { Component, OnInit, OnChanges } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

export interface PackingListData {
  _id: number
  plNumber: string
  lotName: string
  totalWeight: string
  balance: string
  picture: string
  totalQuantity: number
  dispatchDate: string
  status: string
  link: string
}
@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.scss']
})
export class PackingListComponent implements OnInit {
  headers = ["PL Number", "Lot Name", "Total Weight", "Total Quantity", "Dispatch Date", "Status", ""];
  rows = []
  data = {
    "_id": 0,
    "lotId": "ID-23690",
    "lotName": "Duct/33",
    "totalWeight": 988.84,
    "picture": "http://placehold.it/32x32",
    "dispatchedWeight": 100,
    "totalQuantity": 38,
    "dispatchDate": "2014-01-18T02:22:57 -06:-30",
    "status": "DISPATCHED",
    "link": "http://www.pdf995.com/samples/pdf.pdf",
    "packingList": [
      {
        "id": 0,
        "markNumber": "0-FW-785-1230",
        "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
        "set": [
          {
            "id": 0,
            "setName": "LOADL1010"
          },
          {
            "id": 1,
            "setName": "LOADL1010"
          },
          {
            "id": 2,
            "setName": "LOADL1102"
          }
        ],
        "priority": [
          {
            "id": 0,
            "priority": "2eyehehehteP11010"
          },
          {
            "id": 1,
            "priority": "2eyehehehteP11010"
          },
          {
            "id": 2,
            "priority": "2eyehehehteP1010"
          },
          {
            "id": 3,
            "priority": "2eyehehehteP1102"
          }
        ],
        "unitWeight": 594.19,
        "availableQuantity": 50
      },
      {
        "id": 1,
        "markNumber": "0-FW-785-1200",
        "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
        "set": [
          {
            "id": 0,
            "setName": "LOADL11010"
          },
          {
            "id": 1,
            "setName": "LOADL1102"
          },
          {
            "id": 2,
            "setName": "LOADL11010"
          }
        ],
        "priority": [
          {
            "id": 0,
            "priority": "2eyehehehteP102"
          },
          {
            "id": 1,
            "priority": "2eyehehehteP11010"
          },
          {
            "id": 2,
            "priority": "2eyehehehteP1102"
          },
          {
            "id": 3,
            "priority": "2eyehehehteP11010"
          }
        ],
        "unitWeight": 3330.99,
        "availableQuantity": 50
      }
    ]
  }

  constructor(private appService: AppService, private _router: Router) { }

  ngOnInit() {
    this.appService.getPackingList().subscribe((rs: any) => {
      for (let i of rs) {
        i['dispatchDate'] = new Date(i['dispatchDate'].split(' ')[0]).toDateString()
      }
      this.rows = rs
      console.log(this.rows, 'sd')
    })
  }

  openCreatePackingList(id) {
    this._router.navigate([
      'create',
      id
    ])
  }

}
