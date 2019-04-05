import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(private activatedRoutes: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id = this.activatedRoutes.snapshot.paramMap.get('id');
    this.movieService.getDetails(id)
      .subscribe(result => {
        console.log('Result:'+ result);
        this.information = result;
      })
  }
  openWebsite(){
    window.open(this.information.website, '_blank');
  }

}
