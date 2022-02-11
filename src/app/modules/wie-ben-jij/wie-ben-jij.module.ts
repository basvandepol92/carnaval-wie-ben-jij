import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'result/:id', component: ResultComponent },  
];

@NgModule({
  declarations: [HomeComponent, SurveyComponent, HeaderComponent, QuestionComponent, ResultComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WieBenJijModule { }
