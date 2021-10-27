import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedbacks.service';
import {  finalize } from "rxjs/operators";
import { ConfirmationDialogService } from 'src/app/shared/confirmationdialog.service';
import { FeedbackRequest } from 'src/app/models/Request/feedback-request.model';
import { FeedbackResponse } from 'src/app/models/Response/feedback-response.model';
import { PositionType } from 'src/app/models/Enum/position-type.enum';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit{

    feedbackModel: FeedbackRequest | undefined = undefined;
    positionType: string = "";
    loading: boolean = false;

    constructor(
        private feedbackService: FeedbackService,
        private confirmationDialogService: ConfirmationDialogService){
    }

    public ngOnInit(): void {
        this.feedbackModel = this.feedbackService.feedbackRequest$.value;
        this.positionType = this.feedbackModel.PositionType ? PositionType[this.feedbackModel.PositionType] : "";
    }
 
    public submitFeedback(){
        this.confirmationDialogService.confirm('Confirm', 'Do you want to submit the feedback?')
        .then((confirmed) => {
            if (confirmed){
                this.loading = true;
                let feedbackRequest = this.feedbackService.feedbackRequest$.value;
                this.feedbackService.submitFeedback(feedbackRequest)
                    .pipe(finalize(() => this.loading = false))
                    .subscribe(
                        (res: FeedbackResponse) => {
                            if (res.IsSuccessful){
                                this.confirmationDialogService.show('Feedback Submitted', `${res.Message}`);
                                setTimeout(function(){
                                    window.location.href = 'https://www.metrixlab.com/';
                                }, 5000);
                            }
                        },
                        () => {
                            this.confirmationDialogService.show('Feedback Submittion failed', '');
                        }
                    );
            }
        });
    }
}
