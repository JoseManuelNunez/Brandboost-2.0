import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-servicio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nuevo-servicio.html',
  styleUrl: './nuevo-servicio.css',
})
export class NuevoServicio {
  servicioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.servicioForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      tipoPrecio: ['Precio Fijo', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      duracion: ['', Validators.required],
      comision: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      notas: ['']
    });
  }

  onSubmit() {
    if (this.servicioForm.valid) {
      console.log('Nuevo Servicio:', this.servicioForm.value);
    } else {
      console.log('Formulario de servicio inválido');
    }
  }
}
