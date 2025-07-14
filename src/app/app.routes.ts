import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { VoluntaryList } from './modules/voluntary/voluntary-list/voluntary-list';
import { VoluntaryForm } from './modules/voluntary/voluntary-form/voluntary-form';
import { MissionForm } from './modules/mission/mission-form/mission-form';
import { MissionList } from './modules/mission/mission-list/mission-list';
import { VoluntaryDetails } from './modules/voluntary/voluntary-details/voluntary-details';
import { MissionDetails } from './modules/mission/mission-details/mission-details';
import {App} from './app';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Página Home',
  },
  {
    path: 'voluntary',
    component: VoluntaryList,
    title: 'Lista de Voluntários',
  },
  {
    path: 'voluntaryForm',
    component: VoluntaryForm,
    title: 'Formulário de Voluntário',
  },
  {
    path: 'voluntaryDetails/:id',
    component: VoluntaryDetails,
    title: 'Visualização de Voluntário',
  },
  {
    path: 'mission',
    component: MissionList,
    title: 'Lista de Missões',
  },
  {
    path: 'missionForm',
    component: MissionForm,
    title: 'Formulário de Missão',
  },
  {
    path: 'missionDetails/:id',
    component: MissionDetails,
    title: 'Visualização de Missão',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: '',
  },
]
