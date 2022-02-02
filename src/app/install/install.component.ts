import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  installForm = new FormGroup({
    url: new FormControl('',Validators.required)
  })
  onSubmit(){
      this.router.navigate(['/dashboard']);
      
  }
  get url()
  {
    return this.installForm.get('url');
  }
}
