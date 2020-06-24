import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindRepoService } from '../find-repo.service';

@Component({
  selector: 'app-repo-content',
  templateUrl: './repo-content.component.html',
  styleUrls: ['./repo-content.component.css']
})
export class RepoContentComponent implements OnInit {

  username:string;
  config;
  userRepo;
  @Input() public RepoCount

  
  constructor(private activateroute: ActivatedRoute,private repo:FindRepoService) {
    
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems:this.RepoCount
    }


    this.activateroute.params.subscribe(params => {
      this.username=this.activateroute.snapshot.params.id;
    this.repo.finduserRepo(this.username,this.config.currentPage).subscribe((data)=>{
      console.log(data)
      this.userRepo=data;
    })
  })
   
  
  
   }

  ngOnInit(): void {
    
    this.config.totalItems=this.RepoCount
    console.log(this.config.totalItems)
  }
  pageChanged(event){
    console.log(event);
  
    this.config.currentPage=event;
    this.repo.finduserRepo(this.username,this.config.currentPage).subscribe((data)=>{
      console.log(data)
      this.userRepo=data;
    })
  }
}
