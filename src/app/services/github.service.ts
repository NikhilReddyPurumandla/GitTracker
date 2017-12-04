import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = '';
    private repo='';
    private date='';
    private client_id = '41b7681364679e30d325';
    private client_secret='c32185af65cee9f03f1622e973f9840496e0c80c';
    
    constructor(private _http:Http){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUsername(username:string){
        this.username = username;
    }
    updateRepo(repo:string){
        this.repo = repo;
    }
    updateDate(date:string){
        this.date = date;
    }
    getContributors(){
         return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/contributors?client_id='+this.client_id+'&client_secret='+this.client_secret)
         .map(res => res.json());
    }
    getCommits() {
        
            return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/commits?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    getBranches() {
            
                return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/branches?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json())
    }

    getDate() {
        
            return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/commits?since=' + this.date+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    getGraph(){
        return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/contributors?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())
    }
}