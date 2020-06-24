import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindRepoService } from '../find-repo.service';

@Component({
  selector: 'app-following-content',
  templateUrl: './following-content.component.html',
  styleUrls: ['./following-content.component.css']
})
export class FollowingContentComponent implements OnInit {

  username:string;
  userfollowing;
  config
  @Input() public FollowingCount

  constructor(private activateroute: ActivatedRoute,private repo:FindRepoService) {
  
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems:this.FollowingCount
    }

    this.activateroute.params.subscribe(params => {
      this.username=this.activateroute.snapshot.params.id;
    this.repo.findFollowing(this.username,this.config.currentPage).subscribe((data)=>{
      this.userfollowing=data;
    })
  })
   }

  ngOnInit(): void {
    this.config.totalItems=this.FollowingCount
  }

  pageChanged(event){

  
    this.config.currentPage=event;
    this.repo.findFollowing(this.username,this.config.currentPage).subscribe((data)=>{
    
      this.userfollowing=data;
    })
  }
}
