import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { ServerErrorComponent } from './view/server-error/server-error.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { WelcomeComponent } from './view/welcome/welcome.component';

const routes: Routes = [
  {
    component: WelcomeComponent,
    path: "welcome"
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/welcome'
  },
  {
    component:SignInComponent,
    path:'sign-in'
  },
  {
    component:SignUpComponent,
    path:'sign-up'
  },
  {
    component:NotFoundComponent,
    path:'not-found'
  },
  {
    component:ServerErrorComponent,
    path:'server-error'
  },
  {
    component:DashboardComponent,
    path:'dashboard'
  },
  {
    component:NotFoundComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
