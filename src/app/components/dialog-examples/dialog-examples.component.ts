import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonType, ButtonVariant, ButtonWidthType } from 'msg-core';

@Component({
  selector: 'app-dialog-examples',
  templateUrl: './dialog-examples.component.html',
  styleUrls: ['./dialog-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogExamplesComponent {
  protected readonly ButtonWidthType = ButtonWidthType;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonType = ButtonType;
  protected isDialogOpen = false;

  protected handleClick($event: MouseEvent) {
    $event.stopPropagation();
  }

  protected openDialog(): void {
    this.isDialogOpen = true;
  }

  protected closeDialog(): void {
    this.isDialogOpen = false;
  }

  protected onDialogClose() {
    this.closeDialog();
  }
}
