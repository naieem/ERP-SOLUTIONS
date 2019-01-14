import { AuthGuard } from './packages/guard/auth.guard';
const SiteRoute = [
    {
        path: '',
        loadChildren:'./business/home/home.module#HomeModule',
        canLoad:[AuthGuard],
        data: {
            MenuShow: false
        }
    },
    {
        path: 'about',
        loadChildren: './business/about/about.module#AboutModule',
        // canLoad:[AuthGuard],
        data: {
            MenuShow: true,
            MenuTitle: 'About',
            Route:'/about'
        }
    }, {
        path: 'contact',
        loadChildren: './business/contact/contact.module#ContactModule',
        // canLoad:[AuthGuard],
        data: {
            MenuShow: true,
            MenuTitle: 'Contact',
            Route:'/contact'
        }
    },
    {
        path: 'login',
        loadChildren:'./packages/login/login.module#LoginModule',
        data: {
            MenuShow: false
        }
    },
    {
        path: '404',
        loadChildren:'./packages/page-not-found/page-not-found.module#PageNotFoundModule',
        data: {
            MenuShow: false
        }
    }, {
        path: '**',
        redirectTo:'/404',
    }
];
export {SiteRoute};