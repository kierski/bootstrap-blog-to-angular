"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./components/nav/nav.component");
var header_component_1 = require("./components/header/header.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var post_component_1 = require("./components/post/post.component");
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/pages/about.component");
var new_features_component_1 = require("./components/pages/new_features.component");
var press_component_1 = require("./components/pages/press.component");
var hires_component_1 = require("./components/pages/hires.component");
var footer_component_1 = require("./components/footer/footer.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            header_component_1.HeaderComponent,
            post_component_1.PostComponent,
            sidebar_component_1.SidebarComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            new_features_component_1.FeaturesComponent,
            press_component_1.PressComponent,
            hires_component_1.HiresComponent,
            footer_component_1.FooterComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map