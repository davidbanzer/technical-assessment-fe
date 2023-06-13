import { Component, OnInit } from '@angular/core';
import { StringsProblemService } from '../../../../data/services/api/strings-problem.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/app/data/interfaces/ApiResponse';

@Component({
  selector: 'app-strings-problem',
  templateUrl: './strings-problem.component.html',
  styleUrls: ['./strings-problem.component.scss']
})
export class StringsProblemComponent implements OnInit {
  
  textArea2: string = '';
  problemResult: string = '';
  stringsSubscription: Subscription | undefined;
  constructor(
    private stringsProblemService: StringsProblemService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  processInputData(): void{
    this.spinner.show();

    let string = this.textArea2;

    if(string.length < 1){
      alert('Please enter a string');
      this.spinner.hide();
      return;
    }
    if (string.indexOf('\n') !== -1){
      alert('Please enter a string without line breaks');
      this.spinner.hide();
      return;
    }

    this.stringsSubscription = this.stringsProblemService.calculateMaxValue(string).subscribe((res: ApiResponse) => {
      this.spinner.hide();
      if(res.success){
        this.problemResult = res.data.max_value;
        console.log(res.message);
      }
    });
    
  }

  ngOnDestroy(): void {
    if(this.stringsSubscription){
      this.stringsSubscription.unsubscribe();
    }
  }

  

}
