import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionType } from 'src/app/models/Enum/position-type.enum';
import { FeedbackService } from '../feedbacks.service';

@Component({
    selector: 'question-4',
    templateUrl: './question4.component.html'
})
export class Question4Component implements OnInit {

    q4Answer: string[] = [];
    topicOptions: string[] = [];
    constructor(
        private router: Router,
        private feedbackService: FeedbackService) {
    }

    public ngOnInit(): void {
        let feedbackRequest = this.feedbackService.feedbackRequest$.value;
        switch (parseInt(feedbackRequest.PositionType?.toString() ?? "0")) {
            case PositionType.SoftwareEngineer:
                this.topicOptions = [
                    "Frontend",
                    "Backend",
                    "Database",
                    "CI-CD",
                    "Azure"
                ];
                break;
            case PositionType.ResearchManager:
                this.topicOptions = [
                    "Areas of research",
                    "Data processing",
                    "Data analysis",
                    "People management",
                    "Time management"
                ];
                break;
            default:
                break;
        }
    }

    public saveAndProceed() {
        let feedbackRequest = this.feedbackService.feedbackRequest$.value;
        feedbackRequest.Topics = this.q4Answer;
        this.feedbackService.feedbackRequest$.next(feedbackRequest);
        this.router.navigateByUrl('/question-5');
    }
}