import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonType, ButtonVariant, ButtonWidthType } from 'msg-core';

@Component({
  selector: 'app-button-examples',
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExamplesComponent {
  protected readonly ButtonWidthType = ButtonWidthType;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonType = ButtonType;

  protected onHandleButtonClick(text: string) {
    console.info('onHandleButtonClick', text);
  }
}
