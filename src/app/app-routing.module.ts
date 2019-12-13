import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlanComponent } from './plan/plan.component';
import { TrainerComponent } from './trainer/trainer.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import {RoutesConfig} from '../configs/routes.config';
const routesNames = RoutesConfig.routesNames;
console.log(routesNames);
console.log(routesNames.heroes);
console.log(routesNames.heroes.basePath);
const routes: Routes = [
  {path: routesNames.home, component: HomeComponent, pathMatch: 'full'},
  {path: routesNames.about, component: AboutComponent},
  {path: routesNames.plan, component: PlanComponent},
  {path: routesNames.trainer, component: TrainerComponent},
  {path: routesNames.contact, component: ContactComponent},
  {path: routesNames.blog, component: BlogComponent},
  {path: routesNames.blogdetails, component: BlogdetailsComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
