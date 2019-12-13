import { Component, OnInit } from '@angular/core';
import { MetafrenzyService } from '../../providers/seo/metafrenzy/metafrenzy.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private readonly metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setOpenGraph({
      title:"This is Contact Us Page Title",
      description:"This is Contact us description",
      image:"https://web7best.com/assets/snapshot/snap2.png"
  });

   }

  ngOnInit() {
  }

}
