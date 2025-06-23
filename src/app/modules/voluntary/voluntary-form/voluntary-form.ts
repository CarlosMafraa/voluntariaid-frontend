import {Component, effect, inject, input, Input, InputSignal, OnInit, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {TipoSanguineo} from '../../../shared/enums/tipo-sanguineo';
import {SituacaoSaude} from '../../../shared/enums/situacao-saude';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TitleCasePipe} from '@angular/common';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntario-response';

@Component({
  selector: 'app-voluntary-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    TitleCasePipe
  ],
  templateUrl: './voluntary-form.html',
  styleUrl: './voluntary-form.scss'
})
export class VoluntaryForm implements OnInit {
  public voluntaryForm!: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  readonly tipoSanguineoOptions: WritableSignal<TipoSanguineo[]> = signal(Object.values(TipoSanguineo));
  readonly situacaoSaudeOptions: WritableSignal<SituacaoSaude[]> = signal(Object.values(SituacaoSaude));
  public voluntary = input<VoluntaryResponse | null>();
  public isPresent = signal(false);

  constructor() {
    effect(() => {
      const voluntary = this.voluntary();
      if (voluntary) {
        this.voluntaryForm.patchValue(voluntary);
        this.isPresent.set(true);
        this.disableFieldsForEdit();
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.voluntaryForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]],
      passaporte: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      idade: [{value: '', disabled: true}],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profissao: ['', Validators.required],
      anosExperiencia: ['', [Validators.required, Validators.min(3)]],
      tipoSanguineo: ['', Validators.required],
      situacaoSaude: ['', Validators.required]
    });
  }

  public disableFieldsForEdit(): void {
    Object.keys(this.voluntaryForm.controls).forEach(field => {
      const control = this.voluntaryForm.get(field);
      if (control) {
        control.disable();
      }
    });
  }

  public onSubmit(): void {

  }

  public onCancel(): void {

  }

  formatTipoSanguineo(tipo: string): string {
    const tipoMap: Record<string, string> = {
      'A_POSITIVO': 'A+',
      'A_NEGATIVO': 'A-',
      'B_POSITIVO': 'B+',
      'B_NEGATIVO': 'B-',
      'AB_POSITIVO': 'AB+',
      'AB_NEGATIVO': 'AB-',
      'O_POSITIVO': 'O+',
      'O_NEGATIVO': 'O-'
    };
    return tipoMap[tipo] || tipo;
  }

  get tipoSanguineoControl(): FormControl<string> {
    return this.voluntaryForm.get('tipoSanguineo') as FormControl<string>;
  }

  get situacaoSaudeControl(): FormControl<string> {
    return this.voluntaryForm.get('situacaoSaude') as FormControl<string>;
  }

}
