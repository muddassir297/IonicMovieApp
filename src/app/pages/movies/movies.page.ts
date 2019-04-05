import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results;
  data;
  searchTerm:'';
  type: SearchType = SearchType.all;
  constructor(private movieservice: MovieService) { }

  searchanged(){
    this.movieservice.searchData(this.searchTerm, this.type)
    .subscribe(gridData => {this.data = gridData
      if (!this.data.Error){
        this.results = this.data.Search;
      }else{
        console.log(this.data.Error);
      }
    })
  }
  ngOnInit() {
  }

}
