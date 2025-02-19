import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonType, CardContainerType } from 'msg-core';

@Component({
  selector: 'app-card-examples',
  templateUrl: './card-examples.component.html',
  styleUrls: ['./card-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardExamplesComponent implements OnInit {
  protected readonly CardContainerType = CardContainerType;
  protected readonly ButtonType = ButtonType;

  ngOnInit() {}
}
