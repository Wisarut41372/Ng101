import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 user = {id: 1001 , 
  name:"Wisarut K.",
  address:"Thailand"}

  i:number = 0;
  nameInput:string="";

  sayHi(){
    return "Hi from" + this.user.name;
  }
  addCount(){
    this.i++;
  }
  delCount(){
    this.i--;
  }
  readName(name:string){
    console.log(name)
    this.nameInput = name;
  }
  valid: boolean = 1>2;
  validAge: boolean = false;

  readAge(Age: string){
    let a = parseInt(Age)
    this.validAge = a>=18 && a<=25
  }
  menus =["Shabu","KFC","MK","BBQ","SALAD"];
  courses=[
    {id: 1, title:"TypeScript"},
    {id: 2, title:"java"},
    {id: 3, title:"php"},
    {id: 4, title:"html"},
    {id: 5, title:"python"},
  ];
  
}
