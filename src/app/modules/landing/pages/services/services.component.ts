import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private viewportScroller = inject(ViewportScroller);

  services = [
    {
      id: 'branding',
      title: 'Branding & Strategy',
      description: 'Construimos identidades de marca memorables que resuenan con tu audiencia. Desde el logotipo hasta la voz de la marca, definimos una estrategia sólida para diferenciarte en el mercado.',
      features: ['Diseño de Identidad Visual', 'Estrategia de Comunicación', 'Manual de Marca', 'Rebranding Corporativo'],
      icon: '🎨',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'social-media',
      title: 'Impulso de Redes Sociales',
      description: 'Maximizamos tu presencia digital con contenido estratégico y gestión profesional. Creamos comunidades leales y aumentamos el engagement con tu marca.',
      features: ['Gestión de Comunidades', 'Creación de Contenido Viral', 'Calendarios Editoriales', 'Análisis de Métricas'],
      icon: '🚀',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'seo',
      title: 'SEO & Posicionamiento',
      description: 'Haz que te encuentren primero. Optimizamos tu sitio web para escalar posiciones en los motores de búsqueda y atraer tráfico orgánico de calidad.',
      features: ['Auditoría SEO', 'Optimización On-Page', 'Estrategia de Backlinks', 'SEO Local'],
      icon: '🔍',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'audiovisual',
      title: 'Producción Audiovisual',
      description: 'Contamos historias a través de video y fotografía de alta calidad. Contenido visual impactante que captura la esencia de tu marca.',
      features: ['Videos Promocionales', 'Fotografía de Producto', 'Edición Profesional', 'Animación 2D/3D'],
      icon: '🎬',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 'marketing-campaigns',
      title: 'Campañas de Marketing',
      description: 'Estrategias integrales de publicidad pagada (Ads) y marketing digital orientadas a resultados y conversión de leads.',
      features: ['Google Ads', 'Meta Ads (Facebook/Instagram)', 'Email Marketing', 'Funnels de Venta'],
      icon: '💡',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      id: 'web-apps',
      title: 'Desarrollo de Web Apps',
      description: 'Aplicaciones web modernas, rápidas y escalables. Transformamos tus ideas en plataformas digitales funcionales y atractivas.',
      features: ['Landing Pages de Alta Conversión', 'E-commerce', 'Paneles Administrativos', 'Webs Corporativas'],
      icon: '🖥️',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      id: 'mobile-apps',
      title: 'Desarrollo de Apps',
      description: 'Lleva tu negocio al bolsillo de tus clientes. Desarrollamos aplicaciones móviles nativas o híbridas con una experiencia de usuario impecable.',
      features: ['Apps iOS y Android', 'Diseño UX/UI Móvil', 'Integración con APIs', 'Mantenimiento y Soporte'],
      icon: '📱',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'crm',
      title: 'Sistema de Gestión de CRM',
      description: 'Centraliza la relación con tus clientes. Implementamos y personalizamos sistemas CRM para optimizar tus ventas y seguimiento.',
      features: ['Seguimiento de Leads', 'Automatización de Ventas', 'Reportes en Tiempo Real', 'Integración Multicanal'],
      icon: '👥',
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    {
      id: 'ai-integration',
      title: 'Integración de IA',
      description: 'El futuro es ahora. Implementamos soluciones de Inteligencia Artificial para automatizar procesos y mejorar la toma de decisiones.',
      features: ['Chatbots Inteligentes', 'Análisis Predictivo', 'Automatización de Procesos', 'Personalización con IA'],
      icon: '✨',
      gradient: 'from-teal-400 to-blue-500'
    }
  ];

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Small timeout to allow view to render
        setTimeout(() => {
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  }
}
