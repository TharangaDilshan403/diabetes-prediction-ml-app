import {Component, inject, signal} from '@angular/core';
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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardContent, MatCardFooter, MatCardActions, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCard, MatToolbar, MatLabel, MatFormField, MatInput, ReactiveFormsModule, MatButton,HttpClientModule],
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
      pressure: ['', [Validators.required]],
      thickness: ['', [Validators.required]],
      insulin: ['', [Validators.required]],
      bmi: ['', [Validators.required]],
      dpf: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }
  calculate() {
    if (this.diabetesCalculationForm.valid) {
      const formData = this.diabetesCalculationForm.value;
      this.sendData(formData).subscribe(response => {
        console.log('Response from server:', response.result);
        if(response.result==1){
          Swal.fire({
            title: "POSITIVE FOR DIABETES",
            text: "This person has a possibility of being diagnosed with diabetes.",
            icon: "warning"
          });
        }else{
          Swal.fire({
            title: "NEGATIVE FOR DIABETES",
            text: "This person faces the possibility of not being diagnosed with diabetes.",
            icon: "info"
          });
        }

      });
    }else{

    }
  }
  httpClient = inject(HttpClient)
  private endpointUrl = 'http://localhost:5000/endpoint';
  sendData(formData: any): Observable<any> {
    return this.httpClient.post<any>(this.endpointUrl, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
