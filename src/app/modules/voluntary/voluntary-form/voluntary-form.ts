import {Component, effect, inject, input, OnInit, signal, WritableSignal} from '@angular/core';
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
import {VoluntaryResponse} from '../../../shared/interfaces/voluntary-response';
import {VoluntaryCreate} from '../../../shared/interfaces/voluntary-create';
import {VoluntaryService} from '../../../services/voluntary/voluntary-service';
import {Router} from '@angular/router';
import {NgxMaskDirective} from 'ngx-mask';
import {MatIcon} from '@angular/material/icon';

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
    TitleCasePipe,
    NgxMaskDirective,
    MatIcon
  ],
  templateUrl: './voluntary-form.html',
  styleUrl: './voluntary-form.scss'
})
export class VoluntaryForm implements OnInit {
  public voluntaryForm!: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  private service: VoluntaryService = inject(VoluntaryService);
  private router: Router = inject(Router);
  readonly tipoSanguineoOptions: WritableSignal<TipoSanguineo[]> = signal(Object.values(TipoSanguineo));
  readonly situacaoSaudeOptions: WritableSignal<SituacaoSaude[]> = signal(Object.values(SituacaoSaude));
  public voluntary = input<VoluntaryResponse>();
  public isPresent = signal(false);

  ngOnInit(): void {
    this.initForm();
    const voluntary = this.voluntary();
    if (voluntary) {
      console.log(voluntary)
      this.voluntaryForm.patchValue(voluntary);
      this.isPresent.set(true);
      this.disableFieldsForEdit();
    }
  }

  initForm(): void {
    this.voluntaryForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      passaporte: ['',[ Validators.required, Validators.maxLength(8)]],
      dataNascimento: ['', Validators.required],
      idade: [{value: '', disabled: true}],
      telefone: ['', [Validators.required, Validators.maxLength(11)]],
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
    if (this.voluntaryForm.invalid) {
      this.voluntaryForm.markAllAsTouched();
      return;
    }

    const formValue = this.voluntaryForm.getRawValue();

    const voluntaryCreate: VoluntaryCreate = {
      nomeCompleto: formValue.nomeCompleto,
      cpf: formValue.cpf,
      passaporte: formValue.passaporte,
      dataNascimento: formValue.dataNascimento,
      telefone: formValue.telefone,
      email: formValue.email,
      profissao: formValue.profissao,
      anosExperiencia: Number(formValue.anosExperiencia),
      tipoSanguineo: formValue.tipoSanguineo,
      situacaoSaude: formValue.situacaoSaude
    };

    this.service.createVoluntary(voluntaryCreate)
      .then(response => {
        this.voluntaryForm.reset();
        this.router.navigate(['/voluntary']).then();
      })
      .catch(error => {
      }).finally(() => {

    })
  }

  public onCancel(): void {
    this.voluntaryForm.reset();
  }

  public formatTipoSanguineo(tipo: string): string {
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
