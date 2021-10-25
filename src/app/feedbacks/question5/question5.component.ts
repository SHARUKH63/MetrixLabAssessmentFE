import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PositionType } from 'src/app/models/Enum/position-type.enum';
import { FeedbackService } from '../feedbacks.service';

@Component({
  selector: 'question-5',
  templateUrl: './question5.component.html'
})
export class Question5Component {

    q5Answer: string | undefined = undefined;
    constructor(
        private router: Router,
        private feedbackService: FeedbackService){
    }
 
    public saveAndProceed(){
        let feedbackRequest = this.feedbackService.feedbackRequest$.value;
        feedbackRequest.FeedbackText = this.q5Answer;
        this.feedbackService.feedbackRequest$.next(feedbackRequest);
        this.router.navigateByUrl('/overview');
    }
}