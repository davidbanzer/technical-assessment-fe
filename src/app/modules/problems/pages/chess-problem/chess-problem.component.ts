import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChessProblemService } from '../../../../data/services/api/chess-problem.service';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/data/interfaces/ApiResponse';

@Component({
  selector: 'app-chess-problem',
  templateUrl: './chess-problem.component.html',
  styleUrls: ['./chess-problem.component.scss']
})
export class ChessProblemComponent implements OnInit{
  textArea1: string = '';
  problemResult: string = '';
  chessSubscription: Subscription | undefined;
  constructor(
    private spinner: NgxSpinnerService,
    private chessProblemService: ChessProblemService
  ){

  }
  ngOnInit(): void {
  }
  processInputData(): void{
    this.spinner.show();

    if(this.textArea1.length < 1){
      alert('Please enter a correct input');
      this.spinner.hide();
      return;
    }
    if (this.textArea1.indexOf('\n') === -1){
      alert('Please enter a correct input');
      this.spinner.hide();
      return;
    }
    
    if (/\d/.test(this.textArea1) === false){
      alert('Please enter a correct input');
      this.spinner.hide();
      return;
    }

    const lines = this.textArea1.split('\n');
    const n = parseInt(lines[0].split(' ')[0]);
    const k = parseInt(lines[0].split(' ')[1]);
    const rq = parseInt(lines[1].split(' ')[0]);
    const cq = parseInt(lines[1].split(' ')[1]);
    const obstacles = [];
    for(let i = 2; i < lines.length; i++){
      obstacles.push([parseInt(lines[i].split(' ')[0]), parseInt(lines[i].split(' ')[1])]);
    }
    this.chessSubscription = this.chessProblemService.queensAttack(n, k, rq, cq, obstacles).subscribe((res: ApiResponse)=>{
      this.spinner.hide();
      if(res.success){
        this.problemResult = res.data.attacks;
        console.log(res.message);
      }
    });    
  }

  ngOnDestroy(): void {
    if(this.chessSubscription){
      this.chessSubscription.unsubscribe();
    }
    
  }
}
