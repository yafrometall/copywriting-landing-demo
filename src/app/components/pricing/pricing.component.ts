import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  private router = inject(Router);

  originalPrice = 149;
  launchPrice = 89;
  savings = this.originalPrice - this.launchPrice;

  onBuyNow(): void {
    this.router.navigate(['/checkout']);
  }
}
