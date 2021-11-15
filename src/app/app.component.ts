import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
  oddNumbers:number[]=[2,4];
  evenNumbers:number[]=[1,3,5];
  onlyOdd: boolean = false
  title = 'learning-project';

}
