import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      pacientes works!
    </p>
  `,
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {

}
