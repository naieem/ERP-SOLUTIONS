import {AuthGuard} from './packages/guard/auth.guard';
const SiteRoute = [
    {
        path: '',
        // redirectTo: '/list', pathMatch: 'full'
        loadChildren: './business/home/home.module#HomeModule',
        canActivate: [AuthGuard],
    }, {
        path: 'about',
        loadChildren: './business/about/about.module#AboutModule',
        canActivate: [AuthGuard],
        data: {
            MenuShow: true,
            MenuTitle: 'About',
            Route: '/about'
        }
    }, {
        path: 'contact',
        loadChildren: './business/contact/contact.module#ContactModule',
        canActivate: [AuthGuard],
        data: {
            MenuShow: true,
            MenuTitle: 'Contact',
            Route: '/contact'
        }
    },
    // {
    //     path: 'list',
    //     loadChildren: './business/home/home.module#HomeModule',
    //     canActivate: [AuthGuard],
    //     data: {
    //         MenuShow: true,
    //     }
    // }, 
    {
        path: 'login',
        loadChildren: './packages/login/login.module#LoginModule',
        canActivate: [AuthGuard],
        data: {
            MenuShow: false
        }
    }, {
        path: '404',
        loadChildren: './packages/page-not-found/page-not-found.module#PageNotFoundModule',
        data: {
            MenuShow: false
        }
    }, {
        path: '**',
        redirectTo: '/404'
    }
];
export {SiteRoute};