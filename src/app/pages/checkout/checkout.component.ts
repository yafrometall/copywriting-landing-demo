import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface CheckoutForm {
  nombre: string;
  email: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  numeroTarjeta: string;
  titularTarjeta: string;
  fechaExpiracion: string;
  cvv: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  form: CheckoutForm = {
    nombre: '',
    email: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    numeroTarjeta: '',
    titularTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
  };

  productPrice = 89;
  shipping = 0;
  total = this.productPrice + this.shipping;

  constructor(private router: Router) {}

  formatCardNumber(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  formatExpiry(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 2) {
      return digits.slice(0, 2) + '/' + digits.slice(2);
    }
    return digits;
  }

  onCardNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.form.numeroTarjeta = this.formatCardNumber(input.value);
  }

  onExpiryInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.form.fechaExpiracion = this.formatExpiry(input.value);
  }

  simulatePayment(): void {
    const errors: string[] = [];

    if (!this.form.nombre.trim()) errors.push('Nombre completo');
    if (!this.form.email.trim()) errors.push('Correo electrónico');
    if (!this.form.direccion.trim()) errors.push('Dirección');
    if (!this.form.ciudad.trim()) errors.push('Ciudad');
    if (!this.form.codigoPostal.trim()) errors.push('Código Postal');
    if (!this.form.numeroTarjeta.trim()) errors.push('Número de tarjeta');
    if (!this.form.titularTarjeta.trim()) errors.push('Nombre del titular');
    if (!this.form.fechaExpiracion.trim()) errors.push('Fecha de expiración');
    if (!this.form.cvv.trim()) errors.push('CVV');

    if (errors.length > 0) {
      alert('⚠️ Por favor, completa los siguiente campos:\n\n• ' + errors.join('\n• '));
      return;
    }

    alert('✅ Pago Simulado Efectuado Satisfactoriamente');
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
