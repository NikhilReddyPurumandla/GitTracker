import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import { ChartsModule } from 'ng2-charts';
import {  Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  moduleId:module.id,
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers:[GithubService],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class StatusComponent implements OnInit {

  user:any;
  branch:any;
  commit:any;
  day:any;
  graph:any;
  repo:string;
  date:string;
  username:string;
  barChartLabels:any;
  barChartType:any;
  barChartLegend:boolean;
  barChartData:any;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

 

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
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
  this._githubService.getDate().subscribe(day => {
    this.day = day;
   
  });
  this._githubService.getCommits().subscribe(commit => {
      this.commit = commit;
 
  });
  this._githubService.getBranches().subscribe(branch => {
    this.branch = branch;
   
});

this._githubService.getGraph().subscribe(graph => {
  this.graph = graph;
  
  for (let num of graph){
    
     this.barChartLabels = [num.login];
    console.log(this.barChartLabels);
   this.barChartType = 'bar';
   this.barChartLegend= true;
  
   this.barChartData = [
     {data: [num.contributions], label: 'Contributions'},
    
   ];
   console.log(this.barChartData);
  
       }
});

    }
}