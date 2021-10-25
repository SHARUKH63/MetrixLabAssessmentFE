import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedbacks.service';

@Component({
  selector: 'question-1',
  templateUrl: './question1.component.html'
})
export class Question1Component {

    q1Answer: boolean | undefined = undefined;
    constructor(
        private router: Router,
        private feedbackService: FeedbackService){
    }
 
    public saveAndProceed(){
        let feedbackRequest = this.feedbackService.feedbackRequest$.value;
        feedbackRequest.IsInterviewTimeAndMannerClear = this.q1Answer;
        this.feedbackService.feedbackRequest$.next(feedbackRequest);
        this.router.navigateByUrl('/question-2');
    }
}