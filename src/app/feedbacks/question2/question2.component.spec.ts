import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FeedbackService } from "../feedbacks.service";
import { FeedbackMockService } from "../feedbacks.service.mock";
import { Question3Component } from "../question3/question3.component";
import { Question2Component } from "./question2.component";

describe('Question2Component', () => {
    let component: Question2Component;
    let fixture: ComponentFixture<Question2Component>;
    let feedbackService: FeedbackService;
    let router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientTestingModule,
            RouterTestingModule.withRoutes([
                { path: '/question-3', component: Question3Component }
            ])
        ],
        declarations: [
            Question2Component
        ],
        providers: [
            {
                provide: FeedbackService,
                useclass: FeedbackMockService
            },
            { 
                provide: Router, 
                useValue: router
            }
        ]
      }).compileComponents();
      fixture = TestBed.createComponent(Question2Component);
      component = fixture.componentInstance;
      feedbackService = TestBed.inject(FeedbackService);
    });

    it('should create the Question2 component', () => {
        expect(component).toBeTruthy();
      });

    it('should get redirect to question3 when saveAndProceed() is called', () => {
        component.saveAndProceed();
        expect(router.navigateByUrl).toHaveBeenCalledWith('/question-3');
    });

});