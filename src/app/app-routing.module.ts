import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
import { ListCompComponent } from './list-comp/list-comp.component';


const routes: Routes = [
  { path: 'new', component: NewCompComponent },
  { path: 'list',      component: ListCompComponent },
  { path: '',
    redirectTo: '/new',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
