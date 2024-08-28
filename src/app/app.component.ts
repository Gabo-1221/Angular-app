import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: String = 'Hola mundo angular desde componentes ';

  subtitle = 'Contador con estado de session';
  users = ['pepe','Maria','Juan', 'Andres'];
  visivle:Boolean = false;

  counter:number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0 ;
  }
  setVisible(): void {
    this.visivle = this.visivle ? false : true;
    console.log('hemos hecho clic en setVisible');
  }
  setCounter(counter:number) : void {
    this.counter = counter
  }
}
