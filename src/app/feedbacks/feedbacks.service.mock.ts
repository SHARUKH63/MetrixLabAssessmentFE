import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { FeedbackRequest } from "../models/Request/feedback-request.model";
import { FeedbackResponse } from "../models/Response/feedback-response.model";
import { FeedbackServiceInterface } from "./feedbacks.service.interface";

@Injectable()
export class FeedbackMockService implements FeedbackServiceInterface {
    public submitFeedback(request: FeedbackRequest): Observable<any> {
        return of(new FeedbackResponse());
    }
}