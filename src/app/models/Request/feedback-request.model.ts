import { PositionType } from "../Enum/position-type.enum";

export class FeedbackRequest {
    IsInterviewTimeAndMannerClear: boolean | undefined;
    IsInterviewOnTime: boolean | undefined;
    FeedbackText: string | undefined;
    Topics: Array<string> | undefined;
    PositionType : PositionType | undefined;
}