import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessProblemComponent } from './pages/chess-problem/chess-problem.component';
import { StringsProblemComponent } from './pages/strings-problem/strings-problem.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'problem-1',
    component: ChessProblemComponent,
  },
  {
    path: 'problem-2',
    component: StringsProblemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }