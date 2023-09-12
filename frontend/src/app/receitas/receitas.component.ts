import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasService } from './receitas.service';
import { IReceitas } from './receitas.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})

export class ReceitasComponent {

  receitas$ = new Observable<IReceitas[]>();

  constructor(private ReceitasService: ReceitasService) {
    this.getMedicamentos();
  }

  getMedicamentos() {   
    this.receitas$ = this.ReceitasService.obterTodasReceitas();
  }

}
