import { ApplicationConfig, Component, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importar provideHttpClient
import { provideToastr, ToastrModule } from 'ngx-toastr'; // Importar ToastrModule
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { timeout } from 'rxjs';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr({timeOut:900, preventDuplicates:true}),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ]
};
