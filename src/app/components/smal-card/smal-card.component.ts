import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  templateUrl: './smal-card.component.html',
  styleUrls: ['./smal-card.component.css']
})
export class SmalCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string = "0"

  constructor(){}

  ngOnInit(): void {

  }
}
