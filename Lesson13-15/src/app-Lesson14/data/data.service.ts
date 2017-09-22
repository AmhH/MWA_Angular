import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  student = [{
    id: '1',
    name: "Alem Bekagn",
    studId: "12345",
    email: "alemBe@gmail.com"
  },
  {
    id: '2',
    name: "Zare new",
    studId: "98765",
    email: "zare@gmail.com"
  },
  {
    id: '3',
    name: "Iyalef new",
    studId: "34567",
    email: "alef@gmail.com"
  },
  {
    id: '4',
    name: "Zemene minm",
    studId: "54679",
    email: "minm@gmail.com"
  }]

  constructor() { }

  getdata() {
    return this.student;
  }
}
