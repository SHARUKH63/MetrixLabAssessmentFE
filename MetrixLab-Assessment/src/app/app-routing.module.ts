import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedbacks/feedbacks.component';
import { OverviewComponent } from './feedbacks/overview/overview.component';
import { Question1Component } from './feedbacks/question1/question1.component';
import { Question2Component } from './feedbacks/question2/question2.component';
import { Question3Component } from './feedbacks/question3/question3.component';
import { Question4Component } from './feedbacks/question4/question4.component';
import { Question5Component } from './feedbacks/question5/question5.component';

const routes: Routes = [
  {
    path: "",
    component: FeedbackComponent
  },
  {
    path: "question-1",
    component: Question1Component
  },
  {
    path: "question-2",
    component: Question2Component
  },
  {
    path: "question-3",
    component: Question3Component
  },
  {
    path: "question-4",
    component: Question4Component
  },
  {
    path: "question-5",
    component: Question5Component
  },
  {
    path: "overview",
    component: OverviewComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
