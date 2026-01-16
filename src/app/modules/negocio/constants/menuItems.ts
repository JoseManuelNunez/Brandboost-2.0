export interface MenuItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Inicio',
    url: '/negocio/dashboard',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
  },
  {
    name: 'Citas',
    url: '/negocio/citas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
  },
  {
    name: 'Clientes',
    url: '/negocio/clientes',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
  },
  {
    name: 'Servicios',
    url: '/negocio/servicios',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>`
  },
  {
    name: 'Empleados',
    url: '/negocio/empleados',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`
  },
  {
    name: 'Nóminas',
    url: '/negocio/nominas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`
  },
  {
    name: 'Ventas',
    url: '/negocio/ventas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  }
];

export const BOTTOM_ITEMS: MenuItem[] = [
  {
    name: 'Control Whatsapp',
    url: '/negocio/whatsapp',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 16.05C16.32 16.94 15.17 17.18 14.39 17.18C13.88 17.17 13.56 17.17 11.23 16.19C8.32 14.97 6.41 12.02 6.27 11.83C6.12 11.64 5.09 10.27 5.09 8.85C5.09 7.43 5.81 6.74 6.09 6.45C6.38 6.16 6.84 6.13 7.12 6.13C7.38 6.13 7.63 6.14 7.82 6.18C8.03 6.22 8.56 7.51 8.62 7.65C8.69 7.79 8.76 7.98 8.66 8.17C8.56 8.36 8.47 8.48 8.32 8.65C8.18 8.82 8.02 8.92 8.19 9.21C8.36 9.5 8.94 10.45 9.8 11.22C10.9 12.2 11.8 12.51 12.12 12.65C12.44 12.79 12.62 12.77 12.8 12.57C12.98 12.37 13.6 11.5 13.81 11.19C14.03 10.89 14.24 10.93 14.53 11.04C14.81 11.14 16.33 11.89 16.64 12.05C16.95 12.2 17.06 12.28 17.11 12.38C17.16 12.47 17.16 13.48 16.64 16.05Z" /></svg>`
  },
  {
    name: 'Configuración',
    url: '/negocio/configuracion',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
  }
];
