import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FeedbackService } from "../feedbacks.service";
import { FeedbackMockService } from "../feedbacks.service.mock";
import { Question5Component } from "../question5/question5.component";
import { Question4Component } from "./question4.component";

describe('Question4Component', () => {
    let component: Question4Component;
    let fixture: ComponentFixture<Question4Component>;
    let feedbackService: FeedbackService;
    let router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientTestingModule,
            RouterTestingModule.withRoutes([
                { path: '/question-5', component: Question5Component }
            ])
        ],
        declarations: [
            Question4Component
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
      fixture = TestBed.createComponent(Question4Component);
      component = fixture.componentInstance;
      feedbackService = TestBed.inject(FeedbackService);
    });

    it('should create the Question4 component', () => {
        expect(component).toBeTruthy();
      });

    it('should get redirect to question5 when saveAndProceed() is called', () => {
        component.saveAndProceed();
        expect(router.navigateByUrl).toHaveBeenCalledWith('/question-5');
    });

});