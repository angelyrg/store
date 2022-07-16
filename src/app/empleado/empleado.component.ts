import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  name = "Peter";
  lastname = "Parker";

  private age = 17;

  getAge(){
    return this.age;
  }


  changeCompany(value:String){}
  //checkAge(value:Number){}

  constructor() { }

  ngOnInit(): void {
  }

}
