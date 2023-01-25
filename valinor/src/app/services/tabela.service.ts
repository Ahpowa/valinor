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
    return this.httpClient.get('https://api.github.com/search/repositories?q='+ teste);
  }
}
