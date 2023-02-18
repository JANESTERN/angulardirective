import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'directive';
  data:{name:string, role:string}[]=[{name:'wright', role:'student'}];
  day= new Date().getDay()

  Addperson(event:{name:string, role:string}){
    this.data.push({name:event.name, role:event.role})

  }

  delete(i:number){
    this.data.splice(i,1)
  }
}
