import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { FeedbackRequest } from "../models/Request/feedback-request.model";
import { FeedbackResponse } from "../models/Response/feedback-response.model";
import { FeedbackServiceInterface } from "./feedbacks.service.interface";

@Injectable()
export class FeedbackService implements FeedbackServiceInterface {

    private baseUrl: string;
    public feedbackRequest$: BehaviorSubject<FeedbackRequest>= new BehaviorSubject<FeedbackRequest>(new FeedbackRequest());

    constructor(
        private http: HttpClient
    ){
        this.baseUrl = environment.apiUrl;
    }

    public submitFeedback(request: FeedbackRequest): Observable<any> {
        const url = `${this.baseUrl}api/feedback`;
        return this.http.post(url, request);
    }
}