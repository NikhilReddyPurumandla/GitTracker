import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
@Component({
  moduleId:module.id,
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers:[GithubService]
})
export class StatusComponent implements OnInit {

  user:any;
  branch:any;
  commit:any;
  day:any;
  repo:string;
  date:string;
  username:string;
  
  constructor(private _githubService:GithubService){
      console.log('Github Component Init...');   
  }

  ngOnInit() {
    
  }
  getDetails(){
    this._githubService.updateUsername(this.username);
    this._githubService.updateRepo(this.repo);
    this._githubService.updateDate(this.date);
    this._githubService.getContributors().subscribe(user => {
      console.log(user);
      this.user = user;
  });
  
  this._githubService.getCommits().subscribe(commit => {
      this.commit = commit;
  
      
  });
  this._githubService.getBranches().subscribe(branch => {
    this.branch = branch;
   
});
this._githubService.getDate().subscribe(day => {
  this.day = day;
 
});
    }
}
