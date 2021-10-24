import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedbacks/feedbacks.component';
import { FeedbackService } from './feedbacks/feedbacks.service';
import { Question1Component } from './feedbacks/question1/question1.component';
import { Question2Component } from './feedbacks/question2/question2.component';
import { Question3Component } from './feedbacks/question3/question3.component';
import { Question4Component } from './feedbacks/question4/question4.component';
import { Question5Component } from './feedbacks/question5/question5.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from './feedbacks/overview/overview.component';
import { ConfirmationDialogService } from './shared/confirmationdialog.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    FeedbackService,
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
