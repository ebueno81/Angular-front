import { ApplicationConfig, Component, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importar provideHttpClient
import { ToastrModule } from 'ngx-toastr'; // Importar ToastrModule

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(ToastrModule.forRoot()) // Configurar ToastrModule aquí
  ]
};
