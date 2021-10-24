import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FeedbackService } from "../feedbacks.service";
import { OverviewComponent } from "./overview.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ConfirmationDialogService } from "src/app/shared/confirmationdialog.service";
import { FeedbackMockService } from "../feedbacks.service.mock";
import { of } from "rxjs";
import { FeedbackResponse } from "src/app/models/Response/feedback-response.model";

describe('OverviewComponent', () => {
    let component: OverviewComponent;
    let fixture: ComponentFixture<OverviewComponent>;
    let feedbackService: FeedbackService;
    let confirmationDialogService: ConfirmationDialogService;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
            RouterTestingModule
        ],
        declarations: [
            OverviewComponent
        ],
        providers: [
            {
                provide: FeedbackService,
                useclass: FeedbackMockService
            },
            {
                provide: ConfirmationDialogService,
                useclass: ConfirmationDialogService
            }
        ]
      }).compileComponents();
      fixture = TestBed.createComponent(OverviewComponent);
      component = fixture.componentInstance;
      feedbackService = TestBed.inject(FeedbackService);
      confirmationDialogService = TestBed.inject(ConfirmationDialogService);
    });

    it('should create the overview component', () => {
        expect(component).toBeTruthy();
      });

    it('should get feedback request when ngOnInit() is called', () => {
        component.ngOnInit();
        expect(component.feedbackModel).toBeDefined();
    });

    // fit('should submit feedback when submitFeedback() is called', () => {
    //     spyOn(confirmationDialogService, "confirm").and.returnValue(of());
    //     spyOn(feedbackService, "submitFeedback").and.returnValue(of(new FeedbackResponse()));
    //     component.submitFeedback();
    //     expect(component.loading).toBeFalse();
    // });
});