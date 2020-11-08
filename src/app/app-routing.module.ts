import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilanComponent } from './bilan/bilan.component';
import { AboutComponent } from './about/about.component';
import { DiscoursComponent } from './discours/discours.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'bilan', component: BilanComponent },
  {path: 'about', component: AboutComponent},
  {path: 'discours', component: DiscoursComponent},
  {path: 'prevention', component: PreventionComponent},
  {path: 'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
