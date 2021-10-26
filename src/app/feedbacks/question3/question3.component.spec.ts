import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FeedbackService } from "../feedbacks.service";
import { FeedbackMockService } from "../feedbacks.service.mock";
import { Question4Component } from "../question4/question4.component";
import { Question3Component } from "./question3.component";

describe('Question3Component', () => {
    let component: Question3Component;
    let fixture: ComponentFixture<Question3Component>;
    let feedbackService: FeedbackService;
    let router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientTestingModule,
            RouterTestingModule.withRoutes([
                { path: '/question-4', component: Question4Component }
            ])
        ],
        declarations: [
            Question3Component

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
      fixture = TestBed.createComponent(Question3Component);
      component = fixture.componentInstance;
      feedbackService = TestBed.inject(FeedbackService);
    });

    it('should create the Question3 component', () => {
        expect(component).toBeTruthy();
      });

    it('should get redirect to question4 when saveAndProceed() is called', () => {
        component.saveAndProceed();
        expect(router.navigateByUrl).toHaveBeenCalledWith('/question-4');
    });

});