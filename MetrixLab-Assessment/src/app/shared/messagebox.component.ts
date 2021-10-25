import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'message-box',
  templateUrl: './messagebox.component.html',
})
export class MessageBoxComponent {
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  
  constructor(private activeModal: NgbActiveModal) { }

  public close() {
    this.activeModal.close();
  }
}