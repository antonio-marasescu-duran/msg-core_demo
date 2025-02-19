import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InputType, ThemeType } from 'msg-core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field-examples',
  templateUrl: './input-field-examples.component.html',
  styleUrls: ['./input-field-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldExamplesComponent implements OnInit {
  protected readonly InputType = InputType;
  protected readonly ThemeType = ThemeType;
  protected readonly validationErrors = new Map<string, string>([
    ['pattern', 'The input must contain only lowercase letters.'],
    ['minlength', 'The input must be at least some characters long.'],
    ['maxlength', 'The input must not exceed the number of characters.'],
    ['required', 'Required']
  ]);
  protected exampleFormGroup!: FormGroup<{
    field1: FormControl<string>;
    field2: FormControl<string>;
    field3: FormControl<string>;
  }>;

  ngOnInit() {
    this.exampleFormGroup = new FormGroup({
      field1: new FormControl<string>('Test Text', {
        validators: [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(3),
          Validators.pattern('^[a-z]+$')
        ],
        nonNullable: true
      }),
      field2: new FormControl<string>('', {
        validators: [Validators.required, Validators.maxLength(13)],
        nonNullable: true
      }),
      field3: new FormControl<string>('', {
        validators: [Validators.required, Validators.maxLength(7)],
        nonNullable: true
      })
    });
  }
}
