import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirmationdialog.component.html',
})
export class ConfirmationDialogComponent {
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() btnOkText: string | undefined;
  @Input() btnCancelText: string | undefined;
  
  constructor(private activeModal: NgbActiveModal) { }

  public close(value: boolean) {
    this.activeModal.close(value);
  }
}