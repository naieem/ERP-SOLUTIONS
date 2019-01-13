const SiteRoute = [
    {
        path: 'about',
        loadChildren: './business/about/about.module#AboutModule',
        data: {
            MenuShow: true,
            MenuTitle: 'About',
            Route:'/about'
        }
    }, {
        path: 'contact',
        loadChildren: './business/contact/contact.module#ContactModule',
        data: {
            MenuShow: true,
            MenuTitle: 'Contact',
            Route:'/contact'
        }
    }, {
        path: '',
        loadChildren:'./business/home/home.module#HomeModule',
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