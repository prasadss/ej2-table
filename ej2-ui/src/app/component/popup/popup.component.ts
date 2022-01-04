import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @ViewChild('ejDialog') ejDialog: DialogComponent;
  public visible: Boolean = false;

  type=''
  
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;


  // Sample level code to handle the button click action
  public onOpenDialog = function (event: any): void {
    // Call the show method to open the Dialog
    this.type = event
    this.ejDialog.show();
  };
  // Sample level code to hide the Dialog when click the Dialog overlay
  public onOverlayClick: EmitType<object> = () => {
    this.ejDialog.hide();
  };
}
