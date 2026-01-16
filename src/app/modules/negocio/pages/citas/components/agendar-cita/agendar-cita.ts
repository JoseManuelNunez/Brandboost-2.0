import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agendar-cita.html',
  styleUrl: './agendar-cita.css',
})
export class AgendarCita {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      cliente: ['', Validators.required],
      servicio: ['', Validators.required],
      adicional: [''],
      fecha: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9-]{10,15}$')]],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      notas: ['']
    });
  }

  onSubmit() {
    if (this.citaForm.valid) {
      console.log('Datos de la nueva cita:', this.citaForm.value);

    } else {
      console.log('Formulario inválido');
      Object.keys(this.citaForm.controls).forEach(key => {
        const control = this.citaForm.get(key);
        if (control?.invalid) {
          console.warn(`Campo '${key}' es inválido`);
        }
      });
    }
  }
}
