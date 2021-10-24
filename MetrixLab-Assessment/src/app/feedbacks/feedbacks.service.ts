import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        let headers = new HttpHeaders();
        headers = headers.append("Accept", "application/json");
        headers = headers.append("Content-Type", "application/json");
        const url = `${this.baseUrl}api/feedback`;
        const options = {
            body: request,
            headers: headers
        }
        return this.http.post(url, request, options);
    }
}