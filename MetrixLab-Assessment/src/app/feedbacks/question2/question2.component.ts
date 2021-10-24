import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedbacks.service';

@Component({
  selector: 'question-2',
  templateUrl: './question2.component.html'
})
export class Question2Component {

    q2Answer: boolean | undefined = undefined;
    constructor(
        private router: Router,
        private feedbackService: FeedbackService){
    }
 
    public saveAndProceed(){
        let feedbackRequest = this.feedbackService.feedbackRequest$.value;
        feedbackRequest.IsInterviewOnTime = this.q2Answer;
        this.feedbackService.feedbackRequest$.next(feedbackRequest);
        this.router.navigateByUrl('/question-3');
    }
}