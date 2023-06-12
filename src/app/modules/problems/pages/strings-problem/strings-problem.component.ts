import { Component, OnInit } from '@angular/core';
import { StringsProblemService } from '../../../../data/services/api/strings-problem.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-strings-problem',
  templateUrl: './strings-problem.component.html',
  styleUrls: ['./strings-problem.component.scss']
})
export class StringsProblemComponent implements OnInit {
  
  textArea1: string = '';
  problemResult: string = '';

  constructor(
    private stringsProblemService: StringsProblemService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  calculateMaxValue(){
    this.spinner.show();

    let string = this.textArea1;

    if(string.length < 1){
      alert('Please enter a string');
      return;
    }
    if (string.indexOf('\n') !== -1){
      alert('Please enter a string without line breaks');
      return;
    }

    this.stringsProblemService.calculateMaxValue(string).subscribe((res: any) => {
      this.spinner.hide();
      if(res.success){
        this.problemResult = res.data.max_value;
        console.log(res.message);
      }
    });
    
  }

  

}
