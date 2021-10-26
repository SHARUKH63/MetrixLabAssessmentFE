import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FeedbackService } from "../feedbacks.service";
import { FeedbackMockService } from "../feedbacks.service.mock";
import { Question2Component } from "../question2/question2.component";
import { Question1Component } from "./question1.component";

describe('Question1Component', () => {
    let component: Question1Component;
    let fixture: ComponentFixture<Question1Component>;
    let feedbackService: FeedbackService;
    let router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientTestingModule,
            RouterTestingModule.withRoutes([
                { path: '/question-2', component: Question2Component }
            ])
        ],
        declarations: [
            Question1Component
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
      fixture = TestBed.createComponent(Question1Component);
      component = fixture.componentInstance;
      feedbackService = TestBed.inject(FeedbackService);
    });

    it('should create the Question1 component', () => {
        expect(component).toBeTruthy();
      });

    it('should get redirect to question2 when saveAndProceed() is called', () => {
        component.saveAndProceed();
        expect(router.navigateByUrl).toHaveBeenCalledWith('/question-2');
    });

});