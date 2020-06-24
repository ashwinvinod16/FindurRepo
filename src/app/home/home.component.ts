import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FindRepoService } from '../find-repo.service';
import { debounceTime } from 'rxjs/operators'
import  {distinctUntilChanged} from 'rxjs/operators';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile;
  results;
  
  constructor(private activateroute: ActivatedRoute,private repo:FindRepoService) { 

    this.profile=new FormGroup({
      'profileName':new FormControl('',Validators.required)
   })
  }

  ngOnInit(): void {
    this.profile.valueChanges.pipe(debounceTime(200))
    .pipe(distinctUntilChanged())
 .subscribe(profile =>this.repo.findUser(this.profile.value.profileName)
 .subscribe((data) => this.results= data.items));
      
  }


  searchprofile(){

  }

}
