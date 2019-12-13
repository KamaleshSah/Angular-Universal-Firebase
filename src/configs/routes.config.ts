import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  heroes: 'blog-detail',
};

const routesNames = {
  home: '',
  about:'about',
  plan:'plan',
  trainer:'trainer',
  contact:'contact',
  blog:'blog',
  error404: '404',
  blogdetails:'blog-detail/:blogid',
  heroes: {
    basePath: basePaths.heroes
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    about: `/${routesNames.about}`,
    plan: `/${routesNames.plan}`,
    trainer: `/${routesNames.trainer}`,
    contact: `/${routesNames.contact}`,
    blog: `/${routesNames.blog}`,
    error404: `/${routesNames.error404}`,
    
    heroes: {
      detail: getHeroDetail
    }
  }
};

export function getHeroDetail(id) {
  console.log(basePaths.heroes);
  console.log(id);
  return `/blog-detail/${id}`;
}
