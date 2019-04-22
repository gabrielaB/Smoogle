import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ResultListModel} from '../models/result-list.model';

const baseUrl = 'https://www.googleapis.com/customsearch/v1?';
const apiKey = 'AIzaSyAW8kXc_Uj0lnJZgXbXjNnS_aR5xkkFrAk';
const  engineId = '007265588647443799769:evxil8xidxw';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient)  {
  }

  getAllImagesResults(query = 'dog'): Observable<ResultListModel> {
    return this.http.get<ResultListModel>(baseUrl + 'key=' + apiKey + '&cx=' + engineId + '&q=' + query);
  }
}
