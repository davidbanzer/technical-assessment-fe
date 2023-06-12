import { Component, OnInit } from '@angular/core';
import { StringsProblemService } from '../../../../data/services/api/strings-problem.service';

@Component({
  selector: 'app-strings-problem',
  templateUrl: './strings-problem.component.html',
  styleUrls: ['./strings-problem.component.scss']
})
export class StringsProblemComponent implements OnInit {
  
  textArea1: string = '';
  problemResult: string = '';

  constructor(private stringsProblemService: StringsProblemService) { }

  ngOnInit(): void {
  }

  calculateMaxValue(){
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
      if(res.success){
        this.problemResult = res.data.max_value;
        console.log(res.message);
      }
    });
    
  }

  

}
