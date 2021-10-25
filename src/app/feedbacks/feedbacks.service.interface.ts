import { Observable } from "rxjs";
import { FeedbackRequest } from "../models/Request/feedback-request.model";

export interface FeedbackServiceInterface {
    submitFeedback(request: FeedbackRequest): Observable<any>;
}