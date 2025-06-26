import {Component, inject, OnInit, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntario-response';
import {Pais} from '../../../shared/interfaces/pais';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-mission-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIcon
  ],
  templateUrl: './mission-form.html',
  styleUrl: './mission-form.scss'
})
export class MissionForm implements OnInit {
  public missaoForm!: FormGroup;
  public voluntarios = signal<VoluntaryResponse[]>([]);
  public paises = signal<Pais[]>([])
  public avaliacoes = signal<any[]>([])
  public cidades = signal<any[]>([])
  public formBuilder = inject(FormBuilder)

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.missaoForm = this.formBuilder.group({
      voluntarioId: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      cidadeId: ['', Validators.required],
      avaliacaoFinal: ['', Validators.required],
      parecerCoordenador: ['', [Validators.maxLength(500)]]
    });
  }

  public onSubmit(): void {

  }

  public onCancel() {
    this.missaoForm.reset();
  }
}
