import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessProblemComponent } from './pages/chess-problem/chess-problem.component';
import { StringsProblemComponent } from './pages/strings-problem/strings-problem.component';
import { ProblemsRoutingModule } from './problems-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ChessProblemComponent,
    StringsProblemComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    SharedModule,
  ]
})
export class ProblemsModule { }
