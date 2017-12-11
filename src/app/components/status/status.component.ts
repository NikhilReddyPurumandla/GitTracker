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
  b:any;
  d:any;
  e:boolean;
  f:any;
  g:any;


  username:string;
  barChartLabels:any;
  barChartType:any;
  barChartLegend:boolean;
  barChartData:any;
  link:any;
  edate:any;
  sdate:any;
  date:any;
  lang:any=[];
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
   arr:any=[];
   arr1:any=[];
   c:any=[];
   p:any=[];
   year:any=[];
   log:any=[];
   con:any;
   a:any=[];
   a1:any=[];
 

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  constructor(private _githubService:GithubService){
        
  }

  ngOnInit() {
    
}

getDate(){
  
  this._githubService.updateSdate(this.sdate);
  console.log("hello",this.sdate);
  this._githubService.updateEdate(this.edate);
  console.log("date",this.edate);
  this._githubService.getDateCommits().subscribe(date => {
    this.date=date;
    console.log("api values",this.date);
    
  })
}
   
  getDetails(){
   
   this.arr.length=0;
   this.arr1.length=0;
   
    this._githubService.updateUsername(this.username.split('/')[3]);
    this._githubService.updateRepo(this.username.split('/')[4]);
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
this._githubService.getLang().subscribe(lang => {
  this.lang = lang;
 console.log("langs are",lang);
});
this._githubService.getC().subscribe(c=>{
this.c=c;
console.log("hi",c);
})
this._githubService.getP().subscribe(p=>{
  this.p=p;
  console.log("hello",p);
  })
  this._githubService.getYear().subscribe(year=>{
    this.year=year;
    console.log("year",year);
    })
  
    this._githubService.getLog().subscribe(log=>{
      this.log=log;
      console.log("logs",log);
      })
this._githubService.getGraph().subscribe(graph => {
  this.graph = graph;
   this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
    };
    
  for (let num of graph){
  
    this.arr.push(num.login);
    let x: any= this.arr;
    this.barChartLabels = x;

   
   this.barChartType = 'bar';
   this.barChartLegend= true;

   this.arr1.push(num.contributions),
   this.barChartData = [
    
     {data: this.arr1, label: 'Contributions'},
    
   ];
   
  
   
       
      }
      this._githubService.getCon().subscribe(con => {
        this.con = con;
         this.g = {
          scaleShowVerticalLines: false,
          responsive: true
          };
          
        for (let k of con){
          
        
        
          this.a.push(k.week);
          let y: any= this.a;
          this.b = y;
      
         
         this.d = 'bar';
         this.e= true;
      
         this.a1.push(k.total),
         this.f = [
          
           {data: this.a1, label: 'Contributions'},
          
         ];
         
        console.log("log y",this.b)
         console.log("log x",this.f);
             
            }
             
          
      });
    
});


    }
    public chartClicked(e:any):void {
      console.log(e);
      }
       
      public chartHovered(e:any):void {
      console.log(e);
      }

      
}
