import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedbacks.service';
import { delay, finalize } from "rxjs/operators";
import { ConfirmationDialogService } from 'src/app/shared/confirmationdialog.service';
import { FeedbackRequest } from 'src/app/models/Request/feedback-request.model';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit{

    feedbackModel: FeedbackRequest | undefined = undefined;
    loading: boolean = false;
    constructor(
        private router: Router,
        private feedbackService: FeedbackService,
        private confirmationDialogService: ConfirmationDialogService){
    }

    public ngOnInit(): void {
        this.feedbackModel = this.feedbackService.feedbackRequest$.value;
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
                        () => { 
                            delay(5000);
                            this.router.navigateByUrl(''); 
                        },
                        () => console.log("Failed")
                    );
            }
        });
    }
}
