import {Routes} from '@angular/router';
import {Home} from './modules/home/home';
import {VoluntaryList} from './modules/voluntary/voluntary-list/voluntary-list';
import {VoluntaryForm} from './modules/voluntary/voluntary-form/voluntary-form';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Tela Principal',
    children: [
      {
        path: 'voluntaryForm',
        component: VoluntaryForm
      },
      {
        path: '',
        component: VoluntaryList
      }
    ]
  }
];
