import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '💓',
      title: 'Ritmo Cardíaco 24/7',
      description: 'Monitoreo continuo de tu frecuencia cardíaca con sensores de última generación. Recibe alertas si tu ritmo se sale de los parámetros normales.',
    },
    {
      icon: '🩸',
      title: 'Oxígeno en Sangre (SpO2)',
      description: 'Mide tu nivel de oxigenación en tiempo real. Ideal para entrenamientos de altitud y monitoreo de salud durante el sueño.',
    },
    {
      icon: '📍',
      title: 'GPS Integrado',
      description: 'Rastrea tus rutas de running, ciclismo y senderismo sin necesidad de llevar tu teléfono. Precisión milimétrica en cada movimiento.',
    },
    {
      icon: '🔋',
      title: 'Batería de 7 Días',
      description: 'Olvídate de cargar tu reloj cada noche. Con una sola carga, el TechFit X1 te acompaña toda la semana sin interrupciones.',
    },
    {
      icon: '💧',
      title: 'Resistente al Agua IP68',
      description: 'Nada, llueve o suda sin preocupaciones. Resistente al agua hasta 50 metros de profundidad.',
    },
    {
      icon: '📱',
      title: 'Notificaciones Smart',
      description: 'Recibe llamadas, mensajes y alertas de tus apps directamente en tu muñeca. Nunca pierdas lo que importa.',
    },
  ];
}
