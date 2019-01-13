import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.subscribe((data:any)=>{
      console.log(data);
    });
    // console.log(this.activeRoute.data);
  }

}
