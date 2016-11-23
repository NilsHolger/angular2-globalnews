import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideSettings: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
            this.router.events
            .map(event => event instanceof NavigationStart)
            .subscribe(() => {
              this.hideSettings = "/news" !== this.router.url ? true : false;
            });
   }
  ngOnInit() {
  }

}
