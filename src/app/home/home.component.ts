import { Component, OnInit } from '@angular/core';
import { MetafrenzyService } from '../../providers/seo/metafrenzy/metafrenzy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly metafrenzyService: MetafrenzyService) { 

    this.metafrenzyService.setOpenGraph({
      title:"WEB 7 BEST - find best and share best",
      description:"Find best content around the world from the best of best on latest news from India and the world. Headlines from Business, Technology, Bollywood, Cricket",
      image:"https://web7best.com/assets/snapshot/snap3.png"
  });

  this.metafrenzyService.setOpenGraphForTwitter({
    title:"This is Home Page",
    description:"This is Home Page Description",
	 image:"https://web7best.com/assets/snapshot/snap5.png"
   
});


  }

  ngOnInit() {
  }

}
