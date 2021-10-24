import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PositionType } from 'src/app/models/Enum/position-type.enum';
import { FeedbackService } from '../feedbacks.service';

@Component({
  selector: 'question-3',
  templateUrl: './question3.component.html'
})
export class Question3Component {

    q3Answer: PositionType | undefined = undefined;
    constructor(
        private router: Router,
        private feedbackService: FeedbackService){
    }
 
    public saveAndProceed(){
        let feedbackRequest = this.feedbackService.feedbackRequest$.value;
        feedbackRequest.PositionType = this.q3Answer;
        this.feedbackService.feedbackRequest$.next(feedbackRequest);
        this.router.navigateByUrl('/question-4');
    }
}