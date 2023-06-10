import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessProblemComponent } from './pages/chess-problem/chess-problem.component';
import { StringsProblemComponent } from './pages/strings-problem/strings-problem.component';
import { ProblemsRoutingModule } from './problems-routing.module';



@NgModule({
  declarations: [
    ChessProblemComponent,
    StringsProblemComponent
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule
  ]
})
export class ProblemsModule { }
