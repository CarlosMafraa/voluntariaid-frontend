import {Routes} from '@angular/router';
import {Home} from './modules/home/home';
import {VoluntaryList} from './modules/voluntary/voluntary-list/voluntary-list';
import {VoluntaryForm} from './modules/voluntary/voluntary-form/voluntary-form';
import {MissionForm} from './modules/mission/mission-form/mission-form';
import {MissionList} from './modules/mission/mission-list/mission-list';
import {VoluntaryDetails} from './modules/voluntary/voluntary-details/voluntary-details';
import {MissionDetails} from './modules/mission/mission-details/mission-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Tela Principal',
    children: [
      {
        path: 'voluntaryForm',
        component: VoluntaryForm,
        title: 'Formulário de Voluntário'
      },
      {
        path: 'voluntaryDetails/:id',
        component: VoluntaryDetails,
        title: 'Visualização de Voluntário'
      },
      {
        path: 'voluntary',
        component: VoluntaryList,
        title: 'Lista de Voluntários'
      },
      {
        path: 'missionForm',
        component: MissionForm,
        title: 'Formulário de Missão'
      },
      {
        path: 'missionDetails/:id',
        component: MissionDetails,
        title: 'Visualização de Missão'
      },
      {
        path: 'mission',
        component: MissionList,
        title: 'Lista de Missões'
      },
      {
        path: '',
        component: VoluntaryList,
        pathMatch: 'full'
      }
    ]
  }
];
