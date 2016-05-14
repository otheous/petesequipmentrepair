import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'repair-services',
  template: `
    <h3>Services</h3>
    <ul>
      <li *ngFor="#repairService of repairServices">
        {{repairService}}
      </li>
    </ul>
  `
})
export class RepairServicesComponent implements OnInit {
  repairServices: String[];

  ngOnInit() {
    this.repairServices = REPAIR_SERVICES;
  }
}

export var REPAIR_SERVICES: String[] = [
  'Engine Servicing',
  'Regular Maintenace',
  'Heavy Machinery Stuff'
]
