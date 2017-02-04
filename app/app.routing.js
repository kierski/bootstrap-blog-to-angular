"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home.component");
var new_features_component_1 = require("./components/pages/new_features.component");
var press_component_1 = require("./components/pages/press.component");
var hires_component_1 = require("./components/pages/hires.component");
var about_component_1 = require("./components/pages/about.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'features',
        component: new_features_component_1.FeaturesComponent
    },
    {
        path: 'press',
        component: press_component_1.PressComponent
    },
    {
        path: 'hires',
        component: hires_component_1.HiresComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map