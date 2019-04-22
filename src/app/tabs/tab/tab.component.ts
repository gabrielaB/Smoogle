import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {ResultModel} from '../../shared/models/result.model';
import {SearchService} from '../../shared/services/search.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  title: string;
  thumbnail: string;
  results: ResultModel[] = [];

  constructor(private searchService: SearchService) {

  }

  update(event) {

    this.searchService.getAllImagesResults(event.target.value)
      .pipe(debounceTime(200))
      .subscribe(res => {
        console.log(res);

      });
  }
}
