import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
// import { ViewEncapsulation } from '@angular/compiler/src/core';

enum ViewEncapsulation {
  None = 2
}
@Component({
  selector: 'app-create-packing-list',
  templateUrl: './create-packing-list.component.html',
  styleUrls: ['./create-packing-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePackingListComponent implements OnInit {
  oneAtATime: boolean = true;
  packingListHeaders = ["Mark Number", "Drawing", "Set", "Priority", "Unit Weight", "Total Quantity", "Quantity in PL" ,  "Weight in PL"];
  headers = ["Mark Number", "Drawing", "Set", "Priority", "Unit Weight", "Available Quantity", "Total Weight", ""];
  packingListData = []
  rows = [
    {
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
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 2445.31,
          "availableQuantity": 50
        }
      ]
    },
    {
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
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 2445.31,
          "availableQuantity": 50
        }
      ]
    },
    {
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
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 2445.31,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 1,
      "lotId": "ID-23690",
      "lotName": "Structures/31",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2016-10-27T12:58:23 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1458.42,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 648.2,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2402.81,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 1,
      "lotId": "ID-23690",
      "lotName": "Structures/31",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2016-10-27T12:58:23 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1458.42,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 648.2,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2402.81,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 1,
      "lotId": "ID-23690",
      "lotName": "Structures/31",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2016-10-27T12:58:23 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1458.42,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 648.2,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2402.81,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 1,
      "lotId": "ID-23690",
      "lotName": "Structures/31",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2016-10-27T12:58:23 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1458.42,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 648.2,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2402.81,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 1,
      "lotId": "ID-23690",
      "lotName": "Structures/31",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2016-10-27T12:58:23 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1458.42,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 648.2,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2402.81,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 2,
      "lotId": "ID-3445",
      "lotName": "Duct/33",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 37,
      "dispatchDate": "2014-12-09T04:09:53 -06:-30",
      "status": "PENDING_VERIFICATION",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2488.42,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 1411.31,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3671.78,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 2,
      "lotId": "ID-3445",
      "lotName": "Duct/33",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 37,
      "dispatchDate": "2014-12-09T04:09:53 -06:-30",
      "status": "PENDING_VERIFICATION",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 2488.42,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL11010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 1411.31,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3671.78,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 3,
      "lotId": "ID-23690",
      "lotName": "Components/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 27,
      "dispatchDate": "2019-12-07T11:10:37 -06:-30",
      "status": "DRAFT",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 628.76,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3258.82,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 89.18,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 3,
      "lotId": "ID-23690",
      "lotName": "Components/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 27,
      "dispatchDate": "2019-12-07T11:10:37 -06:-30",
      "status": "DRAFT",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 628.76,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3258.82,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 89.18,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 3,
      "lotId": "ID-23690",
      "lotName": "Components/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 27,
      "dispatchDate": "2019-12-07T11:10:37 -06:-30",
      "status": "DRAFT",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 628.76,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3258.82,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 89.18,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 3,
      "lotId": "ID-23690",
      "lotName": "Components/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 27,
      "dispatchDate": "2019-12-07T11:10:37 -06:-30",
      "status": "DRAFT",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 628.76,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3258.82,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 89.18,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 3,
      "lotId": "ID-23690",
      "lotName": "Components/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 27,
      "dispatchDate": "2019-12-07T11:10:37 -06:-30",
      "status": "DRAFT",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 628.76,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3258.82,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 89.18,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 3,
      "lotId": "ID-23690",
      "lotName": "Components/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 27,
      "dispatchDate": "2019-12-07T11:10:37 -06:-30",
      "status": "DRAFT",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 628.76,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL11010"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3258.82,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 89.18,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 4,
      "lotId": "ID-23690",
      "lotName": "Duct/33",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2017-06-10T03:44:50 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 221.91,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 61.07,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 3111.73,
          "availableQuantity": 24
        }
      ]
    },
    {
      "_id": 4,
      "lotId": "ID-23690",
      "lotName": "Duct/33",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2017-06-10T03:44:50 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 221.91,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 61.07,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 3111.73,
          "availableQuantity": 24
        }
      ]
    },
    {
      "_id": 4,
      "lotId": "ID-23690",
      "lotName": "Duct/33",
      "totalWeight": 20.04,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2017-06-10T03:44:50 -06:-30",
      "status": "VERIFIED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
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
              "priority": "2eyehehehteP102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 221.91,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
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
          "unitWeight": 61.07,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 3111.73,
          "availableQuantity": 24
        }
      ]
    },
    {
      "_id": 5,
      "lotId": "ID-23690",
      "lotName": "Duct/33",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2019-01-18T11:25:37 -06:-30",
      "status": "DISPATCHED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
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
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 1780.74,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3410.01,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 1778.68,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 5,
      "lotId": "ID-23690",
      "lotName": "Duct/33",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2019-01-18T11:25:37 -06:-30",
      "status": "DISPATCHED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
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
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 1780.74,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3410.01,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 1778.68,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 5,
      "lotId": "ID-23690",
      "lotName": "Duct/33",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 10,
      "totalQuantity": 25,
      "dispatchDate": "2019-01-18T11:25:37 -06:-30",
      "status": "DISPATCHED",
      "link": "http://www.pdf995.com/samples/pdf.pdf",
      "packingList": [
        {
          "id": 0,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
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
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 1780.74,
          "availableQuantity": 50
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1200",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL1102"
            },
            {
              "id": 1,
              "setName": "LOADL1102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP1010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP102"
            }
          ],
          "unitWeight": 3410.01,
          "availableQuantity": 24
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 1778.68,
          "availableQuantity": 50
        }
      ]
    },
    {
      "_id": 6,
      "lotId": "ID-3445",
      "lotName": "Structures/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 100,
      "totalQuantity": 21,
      "dispatchDate": "2015-05-07T01:45:00 -06:-30",
      "status": "DRAFT",
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
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
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
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1616.29,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
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
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 613.1,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 1810.6,
          "availableQuantity": 24
        }
      ]
    },
    {
      "_id": 6,
      "lotId": "ID-3445",
      "lotName": "Structures/31",
      "totalWeight": 988.84,
      "picture": "http://placehold.it/32x32",
      "dispatchedWeight": 100,
      "totalQuantity": 21,
      "dispatchDate": "2015-05-07T01:45:00 -06:-30",
      "status": "DRAFT",
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
              "setName": "LOADL102"
            },
            {
              "id": 2,
              "setName": "LOADL1010"
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
              "priority": "2eyehehehteP11010"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1102"
            }
          ],
          "unitWeight": 1616.29,
          "availableQuantity": 24
        },
        {
          "id": 1,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-00413",
          "set": [
            {
              "id": 0,
              "setName": "LOADL102"
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
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP11010"
            }
          ],
          "unitWeight": 613.1,
          "availableQuantity": 50
        },
        {
          "id": 2,
          "markNumber": "0-FW-785-1230",
          "drawingNumber": "ERC-MP-2081-BBC-04-FD-0044",
          "set": [
            {
              "id": 0,
              "setName": "LOADL11010"
            },
            {
              "id": 1,
              "setName": "LOADL1010"
            },
            {
              "id": 2,
              "setName": "LOADL102"
            }
          ],
          "priority": [
            {
              "id": 0,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 1,
              "priority": "2eyehehehteP1102"
            },
            {
              "id": 2,
              "priority": "2eyehehehteP102"
            },
            {
              "id": 3,
              "priority": "2eyehehehteP1010"
            }
          ],
          "unitWeight": 1810.6,
          "availableQuantity": 24
        }
      ]
    }
  ]
  data = []
  constructor(private appService: AppService, private activatedRoute: ActivatedRoute, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('url id', id)
      for (let i of this.rows){
        if (i['_id'] == id) {
          this.data.push(i)
        }
      }
      console.log(this.data)
      this._cd.detectChanges()

    })

  }


  convertSet(set) {
    if (set.length > 1)
    return  {
      text: set.map((i)=> i.setName).slice(0,1).join(' '),
      extra: set.length - 1
    }
  }

  convertPriority(p) {
    if (p.length > 1) {
    return {
      text: p.map((i)=> i.priority).slice(0,1).join(' '),
      extra: p.length - 1
    }  
    }
    
  }

  addPackingList(lotIndex, drawingIndex) {
    console.log(lotIndex)
    console.log(drawingIndex)
    let lotItem = this.data[lotIndex]
    let drawingItem = lotItem['packingList'][drawingIndex]
    lotItem['packingList'].length = 0;
    lotItem['packingList'].push(drawingItem);
    this.packingListData.push(lotItem)
    console.log(this.packingListData)

  }
}
