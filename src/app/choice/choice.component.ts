import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { LocalStorageService } from '../local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  agents = [];
  sources = {};
  urlData;

  constructor(
    private router: Router, private route: ActivatedRoute, private newsApiService: NewsApiService,
    private localStorageService: LocalStorageService) {
     }

  ngOnInit() {
    this.newsApiService.fetchSources().subscribe((agents) => {
      this.agents = agents.sources;
    },
    error => console.log('error!'));
    this.sources = this.localStorageService.getObject('agents');
    if (Object.keys(this.sources).length > 0){
      this.router.navigate(['/news']);
    }
    this.route.params.subscribe((obj) => {
      if (obj['data']){
        this.router.navigate(['/settings']);
      }
    });
  }
  select(value){
    if (!this.sources[value]){
        this.sources[value] = true;
    } else {
      delete this.sources[value];
    }
      this.localStorageService.setObject('agents', this.sources);
  }
  goToNews() {
    this.router.navigate(['/news']);
  }
  atLeastOne(){
    return Object.keys(this.sources).length > 0;
  }
}
