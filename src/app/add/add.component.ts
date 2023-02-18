import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() sentdata=new EventEmitter<{name:string, role:string}>()
   Addperson(name:HTMLInputElement, role:HTMLSelectElement){
    this.sentdata.emit({name:name.value,role:role.value})

  }



  
}
