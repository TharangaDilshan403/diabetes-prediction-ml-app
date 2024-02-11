import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardContent, MatCardFooter, MatCardActions, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCard, MatToolbar, MatLabel, MatFormField, MatInput, ReactiveFormsModule, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ml_ijse_fe';

  diabetesCalculationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.diabetesCalculationForm = this.formBuilder.group({
      pregnancies: ['', Validators.required],
      glucose: ['', [Validators.required]],
      bloodPressure: ['', [Validators.required]],
      skinThickness: ['', [Validators.required]],
      insulin: ['', [Validators.required]],
      bmi: ['', [Validators.required]],
      diabetesPedigree: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }
  calculate() {
    console.log('Form values:', this.diabetesCalculationForm.value);
  }

}
