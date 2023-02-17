import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';
  data:{name:string, role:string}[]=[];
  day= new Date().getDay()

  Addperson(name:HTMLInputElement, role:HTMLSelectElement){
    this.data.push({name:name.value, role:role.value})

  }

  delete(i:number){
    this.data.splice(i,1)
  }
}
