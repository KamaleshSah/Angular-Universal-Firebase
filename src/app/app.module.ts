import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlanComponent } from './plan/plan.component';
import { TrainerComponent } from './trainer/trainer.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';

import { MetafrenzyService } from '../providers/seo/metafrenzy/metafrenzy.service';
import { MetafrenzyModule } from '../providers/seo/metafrenzy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PlanComponent,
    TrainerComponent,
    LoginComponent,
    BlogComponent,
    BlogdetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ 
      appId: 'angular-universal-firebase' 
    }),
   AppRoutingModule,
   MetafrenzyModule,
  ],
  providers: [MetafrenzyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
