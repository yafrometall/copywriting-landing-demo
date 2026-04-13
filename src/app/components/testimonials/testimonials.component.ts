import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Carlos Mendoza',
      role: 'Corredor Amateur',
      avatar: '🏃‍♂️',
      content: 'Llevo 3 semanas con el TechFit X1 y es increíble. El GPS es súper preciso y la batería dura exactamente lo que prometen. ¡Lo recomiendo al 100%!',
      rating: 5,
    },
    {
      name: 'Ana García',
      role: 'Entrenadora Personal',
      avatar: '💪',
      content: 'Lo uso con todos mis clientes. El monitoreo cardíaco en tiempo real me ayuda a diseñar entrenamientos más efectivos. Calidad profesional a precio accesible.',
      rating: 5,
    },
    {
      name: 'Miguel Torres',
      role: 'Triatleta',
      avatar: '🏊‍♂️',
      content: 'Probé smartwatches de $300+ y el TechFit X1 no tiene nada que envidiarles. El SpO2 es una功能 que uso después de cada entrenamiento intenso.',
      rating: 5,
    },
    {
      name: 'Laura Jiménez',
      role: 'Yoga & Wellness Coach',
      avatar: '🧘‍♀️',
      content: 'Me encanta que puedo monitorear mi sueño y oxigenación. Es elegante, ligero y perfecto para cualquier actividad. ¡Mis alumnos también lo quieren!',
      rating: 5,
    },
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
