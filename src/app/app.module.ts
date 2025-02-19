import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ButtonComponent,
  CardComponent,
  DialogComponent,
  InputFieldComponent,
  MainNavigationMenuComponent
} from 'msg-core';
import { ButtonExamplesComponent } from './components/button-examples/button-examples.component';
import { InputFieldExamplesComponent } from './components/input-field-examples/input-field-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogExamplesComponent } from './components/dialog-examples/dialog-examples.component';
import { CardExamplesComponent } from './components/card-examples/card-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonExamplesComponent,
    InputFieldExamplesComponent,
    DialogExamplesComponent,
    CardExamplesComponent
  ],
  imports: [
    BrowserModule,
    ButtonComponent,
    ReactiveFormsModule,
    InputFieldComponent,
    DialogComponent,
    CardComponent,
    MainNavigationMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
