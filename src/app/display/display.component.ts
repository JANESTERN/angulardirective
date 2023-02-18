import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
   @Input()data:{name:string, role:string}[]=[];

  delete(i:number){
    this.data.splice(i,1)

  }

}
