import { LaunchpadService } from './launchpad.service';
import { Launchpads } from './launchpads';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'SpaceX-launchpad';
  launchpadData: Launchpads;

  displayedColumns: string[] = ['name','link', 'region','launchpad'];
  clickedRows = new Set<LaunchpadElements>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  launchpads: LaunchpadElements[] = [];
  dataSource = new MatTableDataSource<LaunchpadElements>();
  constructor(private launchpadService: LaunchpadService) {
  }
  
  ngOnInit() {
    this.loadLaunchpads();
  }
  loadLaunchpads() {
    this.launchpadService.getLaunchpads().subscribe((data) => {
      _.forEach(data, (value, key) => {
        console.log(value);
        this.launchpads.push({
          'name': value.name,
          'region': value.region,
          'link': value.wikipedia,
          'launchpad': value.launches
        })
      })
      this.dataSource = new MatTableDataSource<LaunchpadElements>(this.launchpads);
      this.dataSource.paginator = this.paginator;
    });
      // .subscribe((data:Launchpads) => this.launchpadData=data);
    // console.log(this.launchpadData.launchpads);
    
    // for (let lp of this.launchpadData.launchpads) {
    //   this.launchpads.push({
    //     'name': lp.name,
    //     'region': lp.region,
    //     'link': lp.wikipedia,
    //     'launchpad': lp.launches
    //   });
    
    
  }
  ngAfterViewInit(): void {
     
      
    }
  }
  // toTableFormate(){
  //   // this.launchpadData.forEach(element => {
  //   // });
  // }
  



export interface LaunchpadElements {
  name: string;
  region: string;
  link: string;
  launchpad: string[];
}

// name, region, link to wikipedia page, the list of all the launches made on the launchpad (just name)