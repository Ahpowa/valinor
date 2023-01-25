import { OnInit, ViewChild} from '@angular/core';
import { Component } from '@angular/core';
import { TabelaService } from './services/tabela.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  preserveWhitespaces: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tabela: any;
  posts: any;
  p: number = 1;
  displayedColumns = ['name'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchTerm!:string;

  
  ngOnInit(): void {
    this.tabelaService.getTabela('node').subscribe(res => {
      this.tabela = res

      this.dataSource = new MatTableDataSource(this.tabela.items)
     this.dataSource.paginator = this.paginator 
    });
  }

  changePage(event: PageEvent) {

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.tabela.length) {
      endIndex = this.tabela.length;
    }
    this.tabela = this.tabela.items.slice(startIndex, endIndex)


    //console.log(event)
  }
  loadData() {
    //aqui você carrega seus dados
  }
  StartSearch(): void{
    this.tabelaService.getTabela(this.searchTerm).subscribe(res => {
    this.tabela = res
    this.dataSource = new MatTableDataSource(this.tabela.items)
    this.dataSource.paginator = this.paginator 

    });
  }
  constructor(private tabelaService: TabelaService) { 
   
  }

}
