import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindRepoService } from '../find-repo.service';

@Component({
  selector: 'app-follower-content',
  templateUrl: './follower-content.component.html',
  styleUrls: ['./follower-content.component.css']
})
export class FollowerContentComponent implements OnInit {

  username:string;
  userfollower;
  config
  @Input() public FollowerCount

  constructor(private activateroute: ActivatedRoute,private repo:FindRepoService) {
  
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems:this.FollowerCount
    }

    this.activateroute.params.subscribe(params => {
      this.username=this.activateroute.snapshot.params.id;
    this.repo.findFollowers(this.username,this.config.currentPage).subscribe((data)=>{
      console.log(data)
      this.userfollower=data;
    })
  })
   }

  ngOnInit(): void {
    this.config.totalItems=this.FollowerCount
  }

  pageChanged(event){
    console.log(event);
  
    this.config.currentPage=event;
    this.repo.findFollowers(this.username,this.config.currentPage).subscribe((data)=>{
      console.log(data)
      this.userfollower=data;
    })
  }
}
