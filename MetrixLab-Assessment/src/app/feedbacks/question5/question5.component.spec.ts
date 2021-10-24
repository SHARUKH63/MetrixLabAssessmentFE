import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FeedbackService } from "../feedbacks.service";
import { FeedbackMockService } from "../feedbacks.service.mock";
import { Question5Component } from "./question5.component";

describe('Question5Component', () => {
    let component: Question5Component;
    let fixture: ComponentFixture<Question5Component>;
    let feedbackService: FeedbackService;
    let router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientTestingModule,
            RouterTestingModule
        ],
        declarations: [
            Question5Component

        ],
        providers: [
            {
                provide: FeedbackService,
                useclass: FeedbackMockService
            }
        ]
      }).compileComponents();
      fixture = TestBed.createComponent(Question5Component);
      component = fixture.componentInstance;
      feedbackService = TestBed.inject(FeedbackService);
    });

    it('should create the Question1 component', () => {
        expect(component).toBeTruthy();
      });

    it('should get redirect to question2 when saveAndProceed() is called', () => {
        component.saveAndProceed();
        expect(router.navigateByUrl).toHaveBeenCalledWith(['/overview']);
    });

});