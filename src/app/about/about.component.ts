import { Component, OnInit } from '@angular/core';
import { MetafrenzyService } from '../../providers/seo/metafrenzy/metafrenzy.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private readonly metafrenzyService: MetafrenzyService) { 

    this.metafrenzyService.setOpenGraph({
      title:"This is ABout Us Page Title",
      description:"This is about us description",
      image:"https://swadeshsoftwares.com/images/slider2.jpg"
  });

  }

  ngOnInit() {
  }

}
