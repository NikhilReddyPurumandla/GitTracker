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
  barChartOptions: any;

  user:any;
  branch:any;
  commit:any;
  day:any;
  graph:any;
  key:any;
  value:any;
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
   arr:any=[];
   arr1:any=[];
 

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
   this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
    };
    
  for (let num of graph){
   // for ( this.key in this.arr) {
    //}
    this.arr.push(num.login);
    let x: any= this.arr;
    this.barChartLabels = x;

   
   this.barChartType = 'bar';
   this.barChartLegend= true;
   //for ( this.value in this.arr1) {
    
   //}
   //let abc=this.arr1[this.value];
   this.arr1.push(num.contributions),
   this.barChartData = [
    
     {data: this.arr1, label: 'Contributions'},
    
   ];
   
  
   
       
      }
       
      console.log( this.barChartLabels);
      console.log(this.barChartData);
});


    }
    public chartClicked(e:any):void {
      console.log(e);
      }
       
      public chartHovered(e:any):void {
      console.log(e);
      }
}
