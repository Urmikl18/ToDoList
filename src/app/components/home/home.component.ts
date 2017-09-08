import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <app-todotabs>
    <app-todotab tabTitle="All tasks" tabStatus = "all" [currentUser]="user"></app-todotab>
    <app-todotab tabTitle="Important" tabStatus = "important" [currentUser]="user"></app-todotab>
    <app-todotab tabTitle="Urgent" tabStatus = "urgent" [currentUser]="user"></app-todotab>
    <app-todotab tabTitle="Done" tabStatus = "done" [currentUser]="user"></app-todotab>
  </app-todotabs>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  user;

  constructor(private route:ActivatedRoute) {
    route.params.map((p:any) => p.user)
                .subscribe(
                  data => {
                    this.user = data;
                  });
  }

  ngOnInit() {
  }

}
