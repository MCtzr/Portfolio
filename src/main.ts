import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { GlobalVariablesService } from 'src/app/components/global-variables.service';
import { Subscription } from 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
