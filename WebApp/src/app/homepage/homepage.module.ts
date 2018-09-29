import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'start',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'start',
  //   component: StartPageModule
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}
