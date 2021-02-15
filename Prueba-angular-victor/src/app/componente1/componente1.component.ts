import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //images = ["https://i.pinimg.com/originals/5b/0a/fb/5b0afbfd74add7a5abcb393a8707d2e3.jpg","https://images2.alphacoders.com/468/thumb-1920-4682.jpg","https://www.xtrafondos.com/descargar.php?id=2842&resolucion=2560x1600"];

  constructor() { }

  ngOnInit(): void {
  }

} 

