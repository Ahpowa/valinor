import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {
  key: string = 'test_ba6ed1152ec2afd50a380c4b03a6ba';

  constructor(private httpClient:HttpClient) { }

  getTabela(teste: string) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.key}`
    });
    const requestOptions = {headers:headers};
    return this.httpClient.get('https://api.github.com/search/repositories?q='+ teste);
  }
}
