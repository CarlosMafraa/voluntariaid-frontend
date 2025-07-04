import {Component, inject, input, OnInit, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {VoluntaryResponse} from '../../../shared/interfaces/voluntary-response';
import {Pais} from '../../../shared/interfaces/pais';
import {MatIcon} from '@angular/material/icon';
import {CityService} from '../../../services/city/city-service';
import {Cidade} from '../../../shared/interfaces/cidade';
import {Avaliacao} from '../../../shared/enums/avaliacao';
import {VoluntaryService} from '../../../services/voluntary/voluntary-service';
import {MissionCreate} from '../../../shared/interfaces/mission-create';
import {MissionService} from '../../../services/mission/mission-service';
import {Router} from '@angular/router';
import {MissionResponse} from '../../../shared/interfaces/mission-response';

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
  public avaliacoes = signal([
    {value: Avaliacao.RUIM, viewValue: 'Ruim'},
    {value: Avaliacao.BOM, viewValue: 'Bom'},
    {value: Avaliacao.OTIMO, viewValue: 'Ótimo'}
  ])
  public cidades = signal<Cidade[]>([])
  public cityService = inject(CityService)
  public voluntaryService = inject(VoluntaryService);
  public missionService = inject(MissionService);
  public formBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  protected readonly String = String;
  public mission = input<MissionResponse>();
  public isPresent = signal(false);



  ngOnInit() {
    this.initForm();
    this.getCidades();
    this.getVoluntarios();

    const mission = this.mission();
    if (mission) {
      console.log(mission)
      this.preencherFormulario(mission);
      this.disableFieldsForEdit();
    }
  }

  private preencherFormulario(mission: MissionResponse): void {
    this.missaoForm.patchValue({
      voluntarioId: mission.voluntario.id,
      cidadeId: mission.cidade.id,
      dataInicio: new Date(mission.dataInicio),
      dataFim: new Date(mission.dataFim),
      avaliacaoFinal: mission.avaliacaoFinal,
      parecerCoordenador: mission.parecerCoordenador
    });
    this.isPresent.set(true);
  }

  public disableFieldsForEdit(): void {
    Object.keys(this.missaoForm.controls).forEach(field => {
      const control = this.missaoForm.get(field);
      if (control) {
        control.disable();
      }
    });
  }


  public getVoluntarios() {
    this.voluntaryService.getVoluntarios().then(r => {
      console.log(r);
      this.voluntarios.set(r)
    }).catch(e => console.log(e)).finally();
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

  public getCidades(): void {
    this.cityService.getCity().then(res => {
      console.log(res);
      this.cidades.set(res)
    }).catch(error => {
      console.log(error);
    }).finally(() => {

    })
  }

  public onSubmit(): void {
    if (this.missaoForm.invalid) {
      this.missaoForm.markAllAsTouched();
      return;
    }

    const formValue = this.missaoForm.getRawValue();

    const mission: MissionCreate = {
      dataInicio: formValue.dataInicio,
      dataFim: formValue.dataFim,
      avaliacaoFinal: formValue.avaliacaoFinal,
      parecerCoordenador: formValue.parecerCoordenador,
      cidadeId: Number(formValue.cidadeId),
      voluntarioId: Number(formValue.voluntarioId),
    };

    this.missionService.createMission(mission).then(() => {
        this.missaoForm.reset();
        this.router.navigate(['/mission']).then();
      })
      .catch(error => {
        console.error('Erro ao criar missão', error);
      })
      .finally(() => {
      });

  }

  public onCancel() {
    this.missaoForm.reset();
  }

}
