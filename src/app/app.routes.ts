import { Routes } from '@angular/router';

export const routes: Routes = [
  //Routes for the web page
  {

    path: 'dashboard',
    loadComponent: () =>  import('./dashboard/dashboard/dashboard.component'),


    //THESE IS A CHILDREN COMPONENTS.
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
      }, 

      {
        path: 'view-transition2',
        title: 'View Transitio 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component')
      }, 
      {
        path: 'options-defer', 
        title: 'Options defer', 
        loadComponent: () => import('./dashboard/pages/options-defer/options-defer.component')
      }

    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }


];
