import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JoblistProvider } from '../../providers/joblist/joblist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  job: string;
  jobs: any;
  search: string;
  constructor(public navCtrl: NavController, public jobProv : JoblistProvider) {
  
  
  }

  ionViewDidLoad(){
    this.jobProv.getList(this.search).subscribe(jobs => {
      console.log(this.jobs = jobs.results);
    });
  }

  getSearch(){
    
    this.jobProv.getList(this.search).subscribe(jobs => {
      console.log(this.jobs = jobs.results);
    });
  }

  ionViewDidEnter(){
    this.search = 'Web Programmer';
  }
  clickJob(job){
    this.jobProv.viewJob(job);
  }

}
