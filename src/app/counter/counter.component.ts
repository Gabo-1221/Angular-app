import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  @Input() title!:String;
  @Output() counterEmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0 ;
    console.log("creando componente");
  }


  setCounter(): void {
    this.counter = this.counter+1;
    sessionStorage.setItem('counter', this.counter.toString())
    this.counterEmit.emit(this.counter);
  }
}
