import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { FeedbackRequest } from "../models/Request/feedback-request.model";
import { FeedbackResponse } from "../models/Response/feedback-response.model";
import { FeedbackService } from "./feedbacks.service";

describe("FeedbackService", () => {
    let service: FeedbackService;
    let backend: HttpTestingController;
    let baseUrl: string = environment.apiUrl;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                FeedbackService
            ]
        });
        service = TestBed.inject(FeedbackService);
        backend = TestBed.inject(HttpTestingController);
    });

    it("should create a FeedbackService", () => {
        expect(service).toBeTruthy();
    });

    it("should get feedbackresponse when submitFeedback() is called", () => {
        let response = undefined;
        service.submitFeedback(new FeedbackRequest()).subscribe(res => response = res);
        const requestWrapper = backend.expectOne(`${baseUrl}api/feedback`);
        expect(requestWrapper.request.method).toEqual("POST");
    });
    
});