import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SiteRoute } from './routes';
const appRoutes : Routes = SiteRoute;

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
            enableTracing: false,
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {}