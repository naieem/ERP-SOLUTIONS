import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private navigations:any[];
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    // console.log(this.coreService.getVisibleRoutes());
    this.navigations = this.coreService.getVisibleRoutes();
  }

}
