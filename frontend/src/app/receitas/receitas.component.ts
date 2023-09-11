import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      receitas works!
    </p>
  `,
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {

}
