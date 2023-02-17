import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  display:boolean=false
  names:string[]=['kuku','john','simon','peter']

  employees=[
  {name:'kuku', salary:'1000', age:'34',country:'sudan'},
  {name:'kuku', salary:'1000', age:'64',country:'sudan'},
  {name:'wright', salary:'10004', age:'34',country:'kenya'},
  {name:'tutu', salary:'1440', age:'32',country:'ethiopia'},
  {name:'ngocho', salary:'1880', age:'24',country:'burundi'},
  {name:'osman', salary:'1900', age:'314',country:'canada'}
];

  showwarning(){
    this.display=true
  }
}
