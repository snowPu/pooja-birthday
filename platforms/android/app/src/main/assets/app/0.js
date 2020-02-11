(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./assets/messages/messages_28.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages_28", function() { return messages_28; });
var messages_28 = {
    "sukanya": "Jee le apni zindagi!",
    "neha": "Jee le apni zindagi maa!",
    "phani": "Jee le apni zindagi puttu!",
    "rishabh": "Jee le apni zindagi pooja!",
    "sangeeta": "Jee le apni zindagi!",
    "kriti": "Jee le apni zindagi!"
};


/***/ }),

/***/ "./assets/messages/messages_29.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages_29", function() { return messages_29; });
var messages_29 = {
    "sukanya": "Jee le apni zindagi!",
    "neha": "Jee le apni zindagi maa!",
    "phani": "Jee le apni zindagi puttu!",
    "rishabh": "Jee le apni zindagi pooja!",
    "sangeeta": "Jee le apni zindagi!",
    "kriti": "Jee le apni zindagi!"
};


/***/ }),

/***/ "./assets/messages/messages_30.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages_30", function() { return messages_30; });
var messages_30 = {
    "sukanya": "Jee le apni zindagi!",
    "neha": "Jee le apni zindagi maa!",
    "phani": "Jee le apni zindagi puttu!",
    "rishabh": "Jee le apni zindagi pooja!",
    "sangeeta": "Jee le apni zindagi!",
    "kriti": "Jee le apni zindagi!"
};


/***/ }),

/***/ "./home/bottomBar/bottomBar.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}"

/***/ }),

/***/ "./home/bottomBar/bottomBar.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout height=\"60\" verticalAlignment=\"bottom\">\r\n\t<GridLayout columns=\"*, *, *, *\" height=\"60\" backgroundColor=\"#0D0D12\">\r\n\t\t<!-- <GridLayout #tabHighlight col=\"0\" backgroundColor=\"#F8A200\"></GridLayout> -->\r\n\t\t<GridLayout col=\"0\" (tap)=\"selectTab(0)\">\r\n\t\t\t<Image #image1 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"40\" width=\"40\"></Image>\r\n\t\t</GridLayout>\r\n\t\t<GridLayout col=\"1\" (tap)=\"selectTab(1)\">\r\n\t\t\t<Image #image2 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"40\" width=\"40\"></Image>\r\n\t\t</GridLayout>\r\n\t\t<GridLayout col=\"2\" (tap)=\"selectTab(2)\">\r\n\t\t\t<Image #image3 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"40\" width=\"40\"></Image>\r\n\t\t</GridLayout>\r\n\t\t<GridLayout col=\"3\" (tap)=\"selectTab(3)\">\r\n\t\t\t<Image #image4 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"40\" width=\"40\"></Image>\r\n\t\t</GridLayout>\r\n\t</GridLayout>\r\n\r\n</GridLayout>"

/***/ }),

/***/ "./home/bottomBar/bottomBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBarComponent", function() { return BottomBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timer__WEBPACK_IMPORTED_MODULE_2__);



var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent() {
        this.selectedTab = 0;
        this.tabSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BottomBarComponent.prototype.ngOnInit = function () {
    };
    BottomBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(timer__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(function () { _this.animateCurrentImage(_this.image1); }, 100);
    };
    BottomBarComponent.prototype.selectTab = function (index) {
        var previousTab = this.selectedTab;
        if (index != this.selectedTab) {
            this.selectedTab = index;
            // this.tabHighlight.nativeElement.animate({
            // 	translate: { x: index * screen.mainScreen.widthDIPs / 5, y: 0 },
            // 	curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
            // 	duration: 300
            // })
            // this.animateCurrentImage(this.getImage(index));
            // this.animatePreviousImage(this.getImage(previousTab));
            this.tabSelected.emit(this.selectedTab);
        }
    };
    BottomBarComponent.prototype.getImage = function (index) {
        var currentImage;
        switch (index) {
            case 0:
                currentImage = this.image1;
                break;
            case 1:
                currentImage = this.image2;
                break;
            case 2:
                currentImage = this.image3;
                break;
            case 3:
                currentImage = this.image4;
                break;
            default:
                break;
        }
        return currentImage;
    };
    BottomBarComponent.prototype.animateCurrentImage = function (arg) {
        arg.nativeElement.animate({
            scale: { x: 1.2, y: 1.2 },
            curve: ui_enums__WEBPACK_IMPORTED_MODULE_1__["AnimationCurve"].cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    BottomBarComponent.prototype.animatePreviousImage = function (arg) {
        arg.nativeElement.animate({
            scale: { x: 1, y: 1 },
            curve: ui_enums__WEBPACK_IMPORTED_MODULE_1__["AnimationCurve"].cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabHighlight', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "tabHighlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image1', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image2', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image3', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image4', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BottomBarComponent.prototype, "tabSelected", void 0);
    BottomBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "BottomBar",
            template: __importDefault(__webpack_require__("./home/bottomBar/bottomBar.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/bottomBar/bottomBar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BottomBarComponent);
    return BottomBarComponent;
}());



/***/ }),

/***/ "./home/bottomBar/bottomBar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBarModule", function() { return BottomBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bottomBar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/bottomBar/bottomBar.component.ts");




var BottomBarModule = /** @class */ (function () {
    function BottomBarModule() {
    }
    BottomBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"]
            ],
            declarations: [
                _bottomBar_component__WEBPACK_IMPORTED_MODULE_3__["BottomBarComponent"]
            ],
            exports: [
                _bottomBar_component__WEBPACK_IMPORTED_MODULE_3__["BottomBarComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], BottomBarModule);
    return BottomBarModule;
}());



/***/ }),

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label text=\"Happy Birthday Pooja!\" class=\"actionBarLabel\"></Label>\n</ActionBar>\n\n\n<GridLayout tkExampleTitle tkToggleNavButton>\n\t<StackLayout row=\"0\">\n        <RadListView [items]=\"messagePhotoArray\" marginRight=\"-2\" *ngIf=\"tab == 0\">\n            <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\"\n                itemHeight=\"200\" spanCount=\"1\">\n            </ListViewGridLayout>\n            <ng-template tkListItemTemplate let-item=\"item\">\n                <GridLayout backgroundColor=\"White\">\n                    <GridLayout>\n                        <ios>\n                            <Image src=\"{{ item.photo }}\" stretch=\"aspectFill\"></Image>\n                        </ios>\n                        <android>\n                            <Image src=\"{{ item.photo }}\" stretch=\"aspectFill\"\n                                height=\"350\"></Image>\n\n                            <!-- <FrescoDrawee horizontalAlignment=\"stretch\" height=\"180\"\n                                imageUri=\"{{ item.imageSrc }}\"></FrescoDrawee> -->\n                        </android>\n                        <GridLayout verticalAlignment=\"bottom\">\n                            <StackLayout paddingTop=\"8\" paddingBottom=\"8\"\n                                paddingLeft=\"16\" paddingRight=\"16\" class=\"messageBox\">\n                                <Label text=\"{{ item.name }}\" class=\"messageName\"></Label>\n                                <Label text=\"{{ item.message }}\" class=\"messageMessage\"></Label>\n                            </StackLayout>\n                        </GridLayout>\n                    </GridLayout>\n                </GridLayout>\n            </ng-template>\n        </RadListView>\n        <RadListView [items]=\"messagePhotoArray\" marginRight=\"-2\" *ngIf=\"tab == 1\">\n            <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\"\n                itemHeight=\"200\" spanCount=\"1\">\n            </ListViewGridLayout>\n            <ng-template tkListItemTemplate let-item=\"item\">\n                <GridLayout backgroundColor=\"White\">\n                    <GridLayout>\n                        <ios>\n                            <Image src=\"{{ item.photo }}\" stretch=\"aspectFill\"></Image>\n                        </ios>\n                        <android>\n                            <Image src=\"{{ item.photo }}\" stretch=\"aspectFill\"\n                                height=\"350\"></Image>\n\n                            <!-- <FrescoDrawee horizontalAlignment=\"stretch\" height=\"180\"\n                                imageUri=\"{{ item.imageSrc }}\"></FrescoDrawee> -->\n                        </android>\n                        <GridLayout verticalAlignment=\"bottom\">\n                            <StackLayout paddingTop=\"8\" paddingBottom=\"8\"\n                                paddingLeft=\"16\" paddingRight=\"16\" class=\"messageBox\">\n                                <Label text=\"{{ item.name }}\" class=\"messageName\"></Label>\n                                <Label text=\"{{ item.message }}\" class=\"messageMessage\"></Label>\n                            </StackLayout>\n                        </GridLayout>\n                    </GridLayout>\n                </GridLayout>\n            </ng-template>\n        </RadListView>\n    </StackLayout>\n\n    \n\t<BottomBar row=\"1\" (tabSelected)=\"tabSelected($event)\"></BottomBar>\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_messages_messages_28__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./assets/messages/messages_28.ts");
/* harmony import */ var _assets_messages_messages_29__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./assets/messages/messages_29.ts");
/* harmony import */ var _assets_messages_messages_30__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./assets/messages/messages_30.ts");




var BIRTHDAY_28 = new Date(2020, 1, 11);
var BIRTHDAY_29 = new Date(2021, 1, 12);
var BIRTHDAY_30 = new Date(2022, 1, 12);
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.age = 27;
        this.messagePhotoArray = [];
        this.photoDIR = '~/assets/images/';
        this.tab = 0;
        this.setAge();
        this.setMessages();
        this.setMessagePhotoArray();
    }
    // locations: { city: string, country: string, imageSrc: string }[] = [
    //     { city: "Yarlford", country: "Aldorria", imageSrc: "https://placem.at/places?random=1&w=500&txt=0" },
    //     { city: "Paentmarwy", country: "Bahari", imageSrc: "https://placem.at/places?random=2&w=500&txt=0" },
    //     { city: "Landow", country: "Erewhon", imageSrc: "https://placem.at/places?random=3&w=500&txt=0" },
    //     { city: "Penrith", country: "Gilead", imageSrc: "https://placem.at/places?random=4&w=500&txt=0" },
    //     { city: "Aberystwyth", country: "Mandorra", imageSrc: "https://placem.at/places?random=5&w=500&txt=0" },
    //     { city: "Macclesfield", country: "Nambutu", imageSrc: "https://placem.at/places?random=6&w=500&txt=0" },
    //     { city: "Larnwick", country: "Deltora", imageSrc: "https://placem.at/places?random=77&w=500&txt=0" },
    //     { city: "Snowbush", country: "Islandia", imageSrc: "https://placem.at/places?random=8&w=500&txt=0" },
    //     { city: "Kelna", country: "Norteguay", imageSrc: "https://placem.at/places?random=55&w=500&txt=0" },
    //     { city: "Drumnacanvy", country: "Graznavia", imageSrc: "https://placem.at/places?random=44&w=500&txt=0" },
    //     { city: "Hartlepool", country: "Drasselstein", imageSrc: "https://placem.at/places?random=11&w=500&txt=0" },
    //     { city: "Timeston", country: "Brungaria", imageSrc: "https://placem.at/places?random=33&w=500&txt=0" }
    // ];
    HomeComponent.prototype.setAge = function () {
        var today = new Date();
        if (today >= BIRTHDAY_28 && today < BIRTHDAY_29) {
            this.age = 28;
        }
        if (today >= BIRTHDAY_29 && today < BIRTHDAY_30) {
            this.age = 29;
        }
        if (today >= BIRTHDAY_30) {
            this.age = 30;
        }
    };
    HomeComponent.prototype.setMessages = function () {
        if (this.age == 28) {
            this.messages = _assets_messages_messages_28__WEBPACK_IMPORTED_MODULE_1__["messages_28"];
        }
        else if (this.age == 29) {
            this.messages = _assets_messages_messages_29__WEBPACK_IMPORTED_MODULE_2__["messages_29"];
        }
        else if (this.age == 30) {
            this.messages = _assets_messages_messages_30__WEBPACK_IMPORTED_MODULE_3__["messages_30"];
        }
    };
    HomeComponent.prototype.setMessagePhotoArray = function () {
        for (var message in this.messages) {
            this.messagePhotoArray.push({
                name: message,
                message: this.messages[message],
                photo: this.photoDIR + message + '.jpg'
            });
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.tabSelected = function (args) {
        this.tab = args;
        console.log("tab selected: " + args);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _bottomBar_bottomBar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./home/bottomBar/bottomBar.module.ts");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUIListViewModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                _bottomBar_bottomBar_module__WEBPACK_IMPORTED_MODULE_6__["BottomBarModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVzc2FnZXMvbWVzc2FnZXNfMjgudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lc3NhZ2VzL21lc3NhZ2VzXzI5LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZXNzYWdlcy9tZXNzYWdlc18zMC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2JvdHRvbUJhci9ib3R0b21CYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2JvdHRvbUJhci9ib3R0b21CYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ib3R0b21CYXIvYm90dG9tQmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2JvdHRvbUJhci9ib3R0b21CYXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBTyxJQUFNLFdBQVcsR0FBRztJQUN2QixTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDLE1BQU0sRUFBRSwwQkFBMEI7SUFDbEMsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQyxTQUFTLEVBQUUsNEJBQTRCO0lBQ3ZDLFVBQVUsRUFBRSxzQkFBc0I7SUFDbEMsT0FBTyxFQUFFLHNCQUFzQjtDQUVsQzs7Ozs7Ozs7O0FDUkQ7QUFBQTtBQUFPLElBQU0sV0FBVyxHQUFHO0lBQ3ZCLFNBQVMsRUFBRSxzQkFBc0I7SUFDakMsTUFBTSxFQUFFLDBCQUEwQjtJQUNsQyxPQUFPLEVBQUUsNEJBQTRCO0lBQ3JDLFNBQVMsRUFBRSw0QkFBNEI7SUFDdkMsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxPQUFPLEVBQUUsc0JBQXNCO0NBQ2xDOzs7Ozs7Ozs7QUNQRDtBQUFBO0FBQU8sSUFBTSxXQUFXLEdBQUc7SUFDdkIsU0FBUyxFQUFFLHNCQUFzQjtJQUNqQyxNQUFNLEVBQUUsMEJBQTBCO0lBQ2xDLE9BQU8sRUFBRSw0QkFBNEI7SUFDckMsU0FBUyxFQUFFLDRCQUE0QjtJQUN2QyxVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLE9BQU8sRUFBRSxzQkFBc0I7Q0FDbEM7Ozs7Ozs7O0FDUEQsOEJBQThCLDJCQUEyQixrQkFBa0IsZUFBZSxHQUFHLEM7Ozs7Ozs7QUNBN0YsZ1ZBQWdWLGtDQUFrQyxpSkFBaUosa0NBQWtDLGlKQUFpSixrQ0FBa0MsaUpBQWlKLGtDQUFrQyxvRzs7Ozs7Ozs7QUNBMzRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEc7QUFDcEU7QUFFUDtBQVFuQztJQWFDO1FBVkEsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFPZCxnQkFBVyxHQUFHLElBQUksMERBQVksRUFBVSxDQUFDO0lBSW5ELENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFBQSxpQkFFQztRQURBLHdEQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUN0QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsNENBQTRDO1lBQzVDLG9FQUFvRTtZQUNwRSx3REFBd0Q7WUFDeEQsaUJBQWlCO1lBQ2pCLEtBQUs7WUFDTCxrREFBa0Q7WUFDbEQseURBQXlEO1lBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztJQUNGLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNiLElBQUksWUFBWSxDQUFDO1FBQ2pCLFFBQVEsS0FBSyxFQUFFO1lBQ2QsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1A7Z0JBQ0MsTUFBTTtTQUNQO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVELGdEQUFtQixHQUFuQixVQUFvQixHQUFRO1FBQzNCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixLQUFLLEVBQUUsdURBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixHQUFRO1FBQzVCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNyQixLQUFLLEVBQUUsdURBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2IsQ0FBQztJQUNILENBQUM7SUF2RTZDO1FBQTdDLCtEQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFlLHdEQUFVOzREQUFDO0lBRy9CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBQ25CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBQ25CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBQ25CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBRWpEO1FBQVQsNERBQU0sRUFBRTs7MkRBQTBDO0lBVnZDLGtCQUFrQjtRQU45QiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFFckIsbUdBQXlDOztTQUV6QyxDQUFDOztPQUNXLGtCQUFrQixDQTJFOUI7SUFBRCx5QkFBQztDQUFBO0FBM0U4Qjs7Ozs7Ozs7O0FDWC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBQ0Y7QUFFVjtBQWlCM0Q7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFmM0IsOERBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixvRkFBd0I7Z0JBQ3hCLGtGQUF1QjthQUN2QjtZQUNELFlBQVksRUFBRTtnQkFDYix1RUFBa0I7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsdUVBQWtCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNSLDhEQUFnQjthQUNoQjtTQUNELENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBO0FBQUo7Ozs7Ozs7OztBQ3JCNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsQzs7Ozs7OztBQ0F0Sixtc0JBQW1zQixjQUFjLGtKQUFrSixjQUFjLGtPQUFrTyxpQkFBaUIsNFZBQTRWLGFBQWEsbUZBQW1GLGdCQUFnQixxdEJBQXF0QixjQUFjLGtKQUFrSixjQUFjLGtPQUFrTyxpQkFBaUIsNFZBQTRWLGFBQWEsbUZBQW1GLGdCQUFnQixvVzs7Ozs7Ozs7QUNBbG5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQzBCO0FBQ0E7QUFDQTtBQUU1RSxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQVMxQztJQXVESTtRQXJEQSxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDOUIsUUFBRyxHQUFHLENBQUMsQ0FBQztRQWtESixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQW5ERCx1RUFBdUU7SUFDdkUsNEdBQTRHO0lBQzVHLDRHQUE0RztJQUM1Ryx5R0FBeUc7SUFDekcseUdBQXlHO0lBQ3pHLCtHQUErRztJQUMvRywrR0FBK0c7SUFDL0csNEdBQTRHO0lBQzVHLDRHQUE0RztJQUM1RywyR0FBMkc7SUFDM0csaUhBQWlIO0lBQ2pILG1IQUFtSDtJQUNuSCw2R0FBNkc7SUFDN0csS0FBSztJQUVMLDhCQUFNLEdBQU47UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxLQUFLLEdBQUcsV0FBVyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUNuRSxJQUFJLEtBQUssSUFBSSxXQUFXLElBQUksS0FBSyxHQUFHLFdBQVcsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDbkUsSUFBSSxLQUFLLElBQUksV0FBVyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FBRTtJQUVoRCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyx3RUFBVyxDQUFDO1NBQy9CO2FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLHdFQUFXLENBQUM7U0FDL0I7YUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsd0VBQVcsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCw0Q0FBb0IsR0FBcEI7UUFDSSxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztnQkFDeEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsTUFBTTthQUMxQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFVRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUdELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXBFUSxhQUFhO1FBUHpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7O09BRVcsYUFBYSxDQXFFekI7SUFBRCxvQkFBQztDQUFBO0FBckV5Qjs7Ozs7Ozs7O0FDaEIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBQ1M7QUFDWDtBQUVYO0FBQ1Q7QUFDYztBQWlCL0Q7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWZ0Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDZGQUE0QjtnQkFDNUIsb0ZBQXdCO2dCQUN4QixzRUFBaUI7Z0JBQ2pCLGtGQUF1QjtnQkFDdkIsMkVBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkRBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1lc3NhZ2VzXzI4ID0ge1xyXG4gICAgXCJzdWthbnlhXCI6IFwiSmVlIGxlIGFwbmkgemluZGFnaSFcIixcclxuICAgIFwibmVoYVwiOiBcIkplZSBsZSBhcG5pIHppbmRhZ2kgbWFhIVwiLFxyXG4gICAgXCJwaGFuaVwiOiBcIkplZSBsZSBhcG5pIHppbmRhZ2kgcHV0dHUhXCIsXHJcbiAgICBcInJpc2hhYmhcIjogXCJKZWUgbGUgYXBuaSB6aW5kYWdpIHBvb2phIVwiLFxyXG4gICAgXCJzYW5nZWV0YVwiOiBcIkplZSBsZSBhcG5pIHppbmRhZ2khXCIsXHJcbiAgICBcImtyaXRpXCI6IFwiSmVlIGxlIGFwbmkgemluZGFnaSFcIlxyXG4gICAgXHJcbn0iLCJleHBvcnQgY29uc3QgbWVzc2FnZXNfMjkgPSB7XHJcbiAgICBcInN1a2FueWFcIjogXCJKZWUgbGUgYXBuaSB6aW5kYWdpIVwiLFxyXG4gICAgXCJuZWhhXCI6IFwiSmVlIGxlIGFwbmkgemluZGFnaSBtYWEhXCIsXHJcbiAgICBcInBoYW5pXCI6IFwiSmVlIGxlIGFwbmkgemluZGFnaSBwdXR0dSFcIixcclxuICAgIFwicmlzaGFiaFwiOiBcIkplZSBsZSBhcG5pIHppbmRhZ2kgcG9vamEhXCIsXHJcbiAgICBcInNhbmdlZXRhXCI6IFwiSmVlIGxlIGFwbmkgemluZGFnaSFcIixcclxuICAgIFwia3JpdGlcIjogXCJKZWUgbGUgYXBuaSB6aW5kYWdpIVwiICBcclxufSIsImV4cG9ydCBjb25zdCBtZXNzYWdlc18zMCA9IHtcclxuICAgIFwic3VrYW55YVwiOiBcIkplZSBsZSBhcG5pIHppbmRhZ2khXCIsXHJcbiAgICBcIm5laGFcIjogXCJKZWUgbGUgYXBuaSB6aW5kYWdpIG1hYSFcIixcclxuICAgIFwicGhhbmlcIjogXCJKZWUgbGUgYXBuaSB6aW5kYWdpIHB1dHR1IVwiLFxyXG4gICAgXCJyaXNoYWJoXCI6IFwiSmVlIGxlIGFwbmkgemluZGFnaSBwb29qYSFcIixcclxuICAgIFwic2FuZ2VldGFcIjogXCJKZWUgbGUgYXBuaSB6aW5kYWdpIVwiLFxyXG4gICAgXCJrcml0aVwiOiBcIkplZSBsZSBhcG5pIHppbmRhZ2khXCIgIFxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW46IDE1O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBoZWlnaHQ9XFxcIjYwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXHJcXG5cXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqLCAqLCAqXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiMwRDBEMTJcXFwiPlxcclxcblxcdFxcdDwhLS0gPEdyaWRMYXlvdXQgI3RhYkhpZ2hsaWdodCBjb2w9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0Y4QTIwMFxcXCI+PC9HcmlkTGF5b3V0PiAtLT5cXHJcXG5cXHRcXHQ8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiICh0YXApPVxcXCJzZWxlY3RUYWIoMClcXFwiPlxcclxcblxcdFxcdFxcdDxJbWFnZSAjaW1hZ2UxIHNyYz1cXFwie3sgJ34vYXNzZXRzL2ltYWdlcy9iaXJ0aGRheS5wbmcnIH19XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB3aWR0aD1cXFwiNDBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdFxcdDxHcmlkTGF5b3V0IGNvbD1cXFwiMVxcXCIgKHRhcCk9XFxcInNlbGVjdFRhYigxKVxcXCI+XFxyXFxuXFx0XFx0XFx0PEltYWdlICNpbWFnZTIgc3JjPVxcXCJ7eyAnfi9hc3NldHMvaW1hZ2VzL2JpcnRoZGF5LnBuZycgfX1cXFwiIGhlaWdodD1cXFwiNDBcXFwiIHdpZHRoPVxcXCI0MFxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFx0XFx0PEdyaWRMYXlvdXQgY29sPVxcXCIyXFxcIiAodGFwKT1cXFwic2VsZWN0VGFiKDIpXFxcIj5cXHJcXG5cXHRcXHRcXHQ8SW1hZ2UgI2ltYWdlMyBzcmM9XFxcInt7ICd+L2Fzc2V0cy9pbWFnZXMvYmlydGhkYXkucG5nJyB9fVxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgd2lkdGg9XFxcIjQwXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdDwvR3JpZExheW91dD5cXHJcXG5cXHRcXHQ8R3JpZExheW91dCBjb2w9XFxcIjNcXFwiICh0YXApPVxcXCJzZWxlY3RUYWIoMylcXFwiPlxcclxcblxcdFxcdFxcdDxJbWFnZSAjaW1hZ2U0IHNyYz1cXFwie3sgJ34vYXNzZXRzL2ltYWdlcy9iaXJ0aGRheS5wbmcnIH19XFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB3aWR0aD1cXFwiNDBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSBcInRpbWVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJCb3R0b21CYXJcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vYm90dG9tQmFyLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vYm90dG9tQmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm90dG9tQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QFZpZXdDaGlsZCgndGFiSGlnaGxpZ2h0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHRhYkhpZ2hsaWdodDogRWxlbWVudFJlZjtcclxuXHRzZWxlY3RlZFRhYjogbnVtYmVyID0gMDtcclxuXHJcblx0QFZpZXdDaGlsZCgnaW1hZ2UxJywgeyBzdGF0aWM6IGZhbHNlIH0pIGltYWdlMTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKCdpbWFnZTInLCB7IHN0YXRpYzogZmFsc2UgfSkgaW1hZ2UyOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlMycsIHsgc3RhdGljOiBmYWxzZSB9KSBpbWFnZTM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZCgnaW1hZ2U0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGltYWdlNDogRWxlbWVudFJlZjtcclxuXHJcblx0QE91dHB1dCgpIHRhYlNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYW5pbWF0ZUN1cnJlbnRJbWFnZSh0aGlzLmltYWdlMSk7IH0sIDEwMCk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xyXG5cdFx0bGV0IHByZXZpb3VzVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcclxuXHRcdGlmIChpbmRleCAhPSB0aGlzLnNlbGVjdGVkVGFiKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSBpbmRleDtcclxuXHRcdFx0Ly8gdGhpcy50YWJIaWdobGlnaHQubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcclxuXHRcdFx0Ly8gXHR0cmFuc2xhdGU6IHsgeDogaW5kZXggKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyA1LCB5OiAwIH0sXHJcblx0XHRcdC8vIFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG5cdFx0XHQvLyBcdGR1cmF0aW9uOiAzMDBcclxuXHRcdFx0Ly8gfSlcclxuXHRcdFx0Ly8gdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuZ2V0SW1hZ2UoaW5kZXgpKTtcclxuXHRcdFx0Ly8gdGhpcy5hbmltYXRlUHJldmlvdXNJbWFnZSh0aGlzLmdldEltYWdlKHByZXZpb3VzVGFiKSk7XHJcblx0XHRcdHRoaXMudGFiU2VsZWN0ZWQuZW1pdCh0aGlzLnNlbGVjdGVkVGFiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEltYWdlKGluZGV4KSB7XHJcblx0XHRsZXQgY3VycmVudEltYWdlO1xyXG5cdFx0c3dpdGNoIChpbmRleCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0Y3VycmVudEltYWdlID0gdGhpcy5pbWFnZTE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UzO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0Y3VycmVudEltYWdlID0gdGhpcy5pbWFnZTQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY3VycmVudEltYWdlO1xyXG5cdH1cclxuXHJcblx0YW5pbWF0ZUN1cnJlbnRJbWFnZShhcmc6IGFueSkge1xyXG5cdFx0YXJnLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XHJcblx0XHRcdHNjYWxlOiB7IHg6IDEuMiwgeTogMS4yIH0sXHJcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigxLCAuMDIsIC40NSwgLjkzKSxcclxuXHRcdFx0ZHVyYXRpb246IDMwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhbmltYXRlUHJldmlvdXNJbWFnZShhcmc6IGFueSkge1xyXG5cdFx0YXJnLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XHJcblx0XHRcdHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcclxuXHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG5cdFx0XHRkdXJhdGlvbjogMzAwXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBCb3R0b21CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9ib3R0b21CYXIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Qm90dG9tQmFyQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRCb3R0b21CYXJDb21wb25lbnRcblx0XSxcblx0c2NoZW1hczogW1xuXHRcdE5PX0VSUk9SU19TQ0hFTUFcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJNb2R1bGUgeyB9IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJIYXBweSBCaXJ0aGRheSBQb29qYSFcXFwiIGNsYXNzPVxcXCJhY3Rpb25CYXJMYWJlbFxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG5cXG48R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG5cXHQ8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJtZXNzYWdlUGhvdG9BcnJheVxcXCIgbWFyZ2luUmlnaHQ9XFxcIi0yXFxcIiAqbmdJZj1cXFwidGFiID09IDBcXFwiPlxcbiAgICAgICAgICAgIDxMaXN0Vmlld0dyaWRMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIlxcbiAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0PVxcXCIyMDBcXFwiIHNwYW5Db3VudD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPC9MaXN0Vmlld0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiV2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvcz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5waG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lvcz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YW5kcm9pZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5waG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMzUwXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxGcmVzY29EcmF3ZWUgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgaGVpZ2h0PVxcXCIxODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVyaT1cXFwie3sgaXRlbS5pbWFnZVNyYyB9fVxcXCI+PC9GcmVzY29EcmF3ZWU+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5kcm9pZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmdUb3A9XFxcIjhcXFwiIHBhZGRpbmdCb3R0b209XFxcIjhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cXFwiMTZcXFwiIHBhZGRpbmdSaWdodD1cXFwiMTZcXFwiIGNsYXNzPVxcXCJtZXNzYWdlQm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLm5hbWUgfX1cXFwiIGNsYXNzPVxcXCJtZXNzYWdlTmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLm1lc3NhZ2UgfX1cXFwiIGNsYXNzPVxcXCJtZXNzYWdlTWVzc2FnZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJtZXNzYWdlUGhvdG9BcnJheVxcXCIgbWFyZ2luUmlnaHQ9XFxcIi0yXFxcIiAqbmdJZj1cXFwidGFiID09IDFcXFwiPlxcbiAgICAgICAgICAgIDxMaXN0Vmlld0dyaWRMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIlxcbiAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0PVxcXCIyMDBcXFwiIHNwYW5Db3VudD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPC9MaXN0Vmlld0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiV2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvcz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5waG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lvcz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YW5kcm9pZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5waG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMzUwXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxGcmVzY29EcmF3ZWUgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwic3RyZXRjaFxcXCIgaGVpZ2h0PVxcXCIxODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVyaT1cXFwie3sgaXRlbS5pbWFnZVNyYyB9fVxcXCI+PC9GcmVzY29EcmF3ZWU+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5kcm9pZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmdUb3A9XFxcIjhcXFwiIHBhZGRpbmdCb3R0b209XFxcIjhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cXFwiMTZcXFwiIHBhZGRpbmdSaWdodD1cXFwiMTZcXFwiIGNsYXNzPVxcXCJtZXNzYWdlQm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLm5hbWUgfX1cXFwiIGNsYXNzPVxcXCJtZXNzYWdlTmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLm1lc3NhZ2UgfX1cXFwiIGNsYXNzPVxcXCJtZXNzYWdlTWVzc2FnZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgXFxuXFx0PEJvdHRvbUJhciByb3c9XFxcIjFcXFwiICh0YWJTZWxlY3RlZCk9XFxcInRhYlNlbGVjdGVkKCRldmVudClcXFwiPjwvQm90dG9tQmFyPlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG1lc3NhZ2VzXzI4IGFzIG1lc3NhZ2VzXzI4IH0gZnJvbSAnLi4vYXNzZXRzL21lc3NhZ2VzL21lc3NhZ2VzXzI4JztcbmltcG9ydCB7IG1lc3NhZ2VzXzI5IGFzIG1lc3NhZ2VzXzI5IH0gZnJvbSAnLi4vYXNzZXRzL21lc3NhZ2VzL21lc3NhZ2VzXzI5JztcbmltcG9ydCB7IG1lc3NhZ2VzXzMwIGFzIG1lc3NhZ2VzXzMwIH0gZnJvbSAnLi4vYXNzZXRzL21lc3NhZ2VzL21lc3NhZ2VzXzMwJztcblxuY29uc3QgQklSVEhEQVlfMjggPSBuZXcgRGF0ZSgyMDIwLCAxLCAxMSk7XG5jb25zdCBCSVJUSERBWV8yOSA9IG5ldyBEYXRlKDIwMjEsIDEsIDEyKTtcbmNvbnN0IEJJUlRIREFZXzMwID0gbmV3IERhdGUoMjAyMiwgMSwgMTIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBhZ2U6IG51bWJlciA9IDI3O1xuICAgIG1lc3NhZ2VzO1xuICAgIG1lc3NhZ2VQaG90b0FycmF5ID0gW107XG4gICAgcGhvdG9ESVIgPSAnfi9hc3NldHMvaW1hZ2VzLyc7XG4gICAgdGFiID0gMDtcblxuICAgIC8vIGxvY2F0aW9uczogeyBjaXR5OiBzdHJpbmcsIGNvdW50cnk6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZyB9W10gPSBbXG4gICAgLy8gICAgIHsgY2l0eTogXCJZYXJsZm9yZFwiLCBjb3VudHJ5OiBcIkFsZG9ycmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209MSZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJQYWVudG1hcnd5XCIsIGNvdW50cnk6IFwiQmFoYXJpXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209MiZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJMYW5kb3dcIiwgY291bnRyeTogXCJFcmV3aG9uXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209MyZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJQZW5yaXRoXCIsIGNvdW50cnk6IFwiR2lsZWFkXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209NCZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJBYmVyeXN0d3l0aFwiLCBjb3VudHJ5OiBcIk1hbmRvcnJhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209NSZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJNYWNjbGVzZmllbGRcIiwgY291bnRyeTogXCJOYW1idXR1XCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209NiZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJMYXJud2lja1wiLCBjb3VudHJ5OiBcIkRlbHRvcmFcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvcGxhY2VzP3JhbmRvbT03NyZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJTbm93YnVzaFwiLCBjb3VudHJ5OiBcIklzbGFuZGlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209OCZ3PTUwMCZ0eHQ9MFwiIH0sXG4gICAgLy8gICAgIHsgY2l0eTogXCJLZWxuYVwiLCBjb3VudHJ5OiBcIk5vcnRlZ3VheVwiLCBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC9wbGFjZXM/cmFuZG9tPTU1Jnc9NTAwJnR4dD0wXCIgfSxcbiAgICAvLyAgICAgeyBjaXR5OiBcIkRydW1uYWNhbnZ5XCIsIGNvdW50cnk6IFwiR3Jhem5hdmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209NDQmdz01MDAmdHh0PTBcIiB9LFxuICAgIC8vICAgICB7IGNpdHk6IFwiSGFydGxlcG9vbFwiLCBjb3VudHJ5OiBcIkRyYXNzZWxzdGVpblwiLCBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC9wbGFjZXM/cmFuZG9tPTExJnc9NTAwJnR4dD0wXCIgfSxcbiAgICAvLyAgICAgeyBjaXR5OiBcIlRpbWVzdG9uXCIsIGNvdW50cnk6IFwiQnJ1bmdhcmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3BsYWNlcz9yYW5kb209MzMmdz01MDAmdHh0PTBcIiB9XG4gICAgLy8gXTtcblxuICAgIHNldEFnZSgpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAodG9kYXkgPj0gQklSVEhEQVlfMjggJiYgdG9kYXkgPCBCSVJUSERBWV8yOSkgeyB0aGlzLmFnZSA9IDI4OyB9XG4gICAgICAgIGlmICh0b2RheSA+PSBCSVJUSERBWV8yOSAmJiB0b2RheSA8IEJJUlRIREFZXzMwKSB7IHRoaXMuYWdlID0gMjk7IH1cbiAgICAgICAgaWYgKHRvZGF5ID49IEJJUlRIREFZXzMwKSB7IHRoaXMuYWdlID0gMzA7IH1cblxuICAgIH1cblxuICAgIHNldE1lc3NhZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5hZ2UgPT0gMjgpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlc18yODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFnZSA9PSAyOSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzXzI5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWdlID09IDMwKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXNfMzA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlUGhvdG9BcnJheSgpIHtcbiAgICAgICAgZm9yIChsZXQgbWVzc2FnZSBpbiB0aGlzLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VQaG90b0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlc1ttZXNzYWdlXSxcbiAgICAgICAgICAgICAgICBwaG90bzogdGhpcy5waG90b0RJUiArIG1lc3NhZ2UgKyAnLmpwZydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRBZ2UoKTtcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlcygpO1xuICAgICAgICB0aGlzLnNldE1lc3NhZ2VQaG90b0FycmF5KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgXG4gICAgdGFiU2VsZWN0ZWQoYXJnczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGFiID0gYXJncztcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWIgc2VsZWN0ZWQ6IFwiICsgYXJncyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJvdHRvbUJhck1vZHVsZSB9IGZyb20gXCIuL2JvdHRvbUJhci9ib3R0b21CYXIubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQm90dG9tQmFyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==