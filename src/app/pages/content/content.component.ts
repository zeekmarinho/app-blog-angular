import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = "https://blog.b2bstack.com.br/wp-content/uploads/2022/01/front-end-banner.jpg"
  contentTitle:string = "Bem vindo!"
  contentDescripition:string = "Bem vindo!"
  private id:string = "0"

  constructor(
    private router:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.router.paramMap.subscribe(value =>
      console.log(value.get("id"))
      
    )  
    
  }
}
