import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindRepoService } from '../find-repo.service';


@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {

  username:string;
  userDetails;
  userRepo;
  p:number=1
  mode='repositary';
  public repocount;
  public followercount
  public followingcount

  constructor(private activateroute: ActivatedRoute,private repo:FindRepoService) {

    this.activateroute.params.subscribe(params => {
     this.username=this.activateroute.snapshot.params.id;
    this.repo.finduserDetails(this.username).subscribe((data)=>{
        this.userDetails=data;
        this.repocount=this.userDetails.public_repos
        this.followercount=this.userDetails.followers
        this.followingcount=this.userDetails.following
    })
  })

  
}

   

  ngOnInit(): void {
  }
  modeRepo(){
    this.mode='repositary';
  }
  
  modeg(){
    this.mode='follower';
  }
   modef(){
     this.mode='following';
   }

  

  
}

