import { Component } from '@angular/core';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent {
  data = [{
    title: 'Title one',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iusto?',
    button: 'Ver mas'
  },
  {
    title: 'Title two',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iusto?',
    button: 'Ver un poco mas mas'
  },{
    title: 'Title three',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iusto?',
    button: 'no ver mas'
  }
]
}
