import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

import { FindRepoService } from '../find-repo.service';
import { debounceTime } from 'rxjs/operators'
import  {distinctUntilChanged} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   profile;
   results;

  constructor(private activateroute: ActivatedRoute,private repo:FindRepoService) {
    this.profile=new FormGroup({
      'profileName':new FormControl('',Validators.required)
   })
   this.activateroute.params.subscribe(params => {
      this.profile.reset();
  });
  }
   
  ngOnInit(): void {
    this.profile.valueChanges.pipe(debounceTime(200))
    .pipe(distinctUntilChanged())
 .subscribe(profile =>this.repo.findUser(this.profile.value.profileName)
 .subscribe((data) => this.results= data.items));
      
  }

}
