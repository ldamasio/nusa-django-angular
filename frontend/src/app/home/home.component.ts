import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>NUSA PEP 2023</h1>
    <p>
      Este projeto traz uma versão em Angular (Typescript) com o backend em Django (Python) para interagir com a API do Prontuário Eletrônico.
    </p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
