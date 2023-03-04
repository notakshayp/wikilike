import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicslistComponent } from './components/topicslist/topicslist.component';
import { TopicspageComponent } from './components/topicspage/topicspage.component';

const routes: Routes = [
  { path: '', redirectTo: '/learn', pathMatch: 'full' },
  { path: 'learn', component: TopicslistComponent },
  {path:'topic',component:TopicspageComponent},
  { path: '**', component: TopicslistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
