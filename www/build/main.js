webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {RegisterPage} from "../register/register";
var AuthPage = (function () {
    function AuthPage(_fb, nav, forgotCtrl, menu, toastCtrl) {
        this._fb = _fb;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.auth = "login";
        this.menu.swipeEnable(false);
    }
    AuthPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    // login and go to home page
    AuthPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    AuthPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/auth/auth.html"*/`<!-- -->\n<ion-content padding class="profiles-bg">\n	<div class="auth-content">\n\n		<!-- Logo -->\n		<div padding-horizontal text-center>\n			<div class="logo">\n				<img src="assets/img/ionProperty-ico.png">\n			</div>\n			<h2 ion-text class="text-white" no-margin>\n				ion<strong>Property</strong>\n			</h2>\n		</div>\n\n		<div padding-vertical>\n		  <ion-segment [(ngModel)]="auth" color="light">\n		    <ion-segment-button value="login">\n		      Login\n		    </ion-segment-button>\n		    <ion-segment-button value="register">\n		      Register\n		    </ion-segment-button>\n		  </ion-segment>\n		</div>\n\n		<div [ngSwitch]="auth">\n			<!-- Login form -->\n			<div id="loginForm" *ngSwitchCase="\'login\'">\n				<form [formGroup]="onLoginForm" class="list-form">\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="mail" item-start class="text-white"></ion-icon>\n							Email\n						</ion-label>\n						<ion-input type="email" formControlName="email"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="lock" item-start class="text-white"></ion-icon>\n							Password\n						</ion-label>\n						<ion-input type="password" formControlName="password"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n				</form>\n\n				<p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n				<div>\n					<button ion-button icon-start block outline color="light" (click)="login()" [disabled]="!onLoginForm.valid">\n						<ion-icon name="log-in"></ion-icon>\n						SIGN IN\n					</button>\n\n					<p text-center ion-text color="light">Or Sign in with:</p>\n\n					<ion-grid class="btn-group">\n						<ion-row>\n							<button ion-button icon-only block class="btn-facebook col col-4">\n								<ion-icon name="logo-facebook"></ion-icon>\n							</button>\n							<button ion-button icon-only block class="btn-twitter col col-4">\n								<ion-icon name="logo-twitter"></ion-icon>\n							</button>\n							<button ion-button icon-only block class="btn-gplus col col-4">\n								<ion-icon name="logo-googleplus"></ion-icon>\n							</button>\n						</ion-row>\n					</ion-grid>\n\n				</div>\n			</div>\n\n			<div id="registerForm" *ngSwitchCase="\'register\'">\n		    <!-- Register form -->\n		    <form [formGroup]="onRegisterForm" class="list-form">\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="person" item-start class="text-white"></ion-icon>\n		          Full Name\n		        </ion-label>\n		        <ion-input type="text" formControlName="fullName"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">This field is required</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n		          Email\n		        </ion-label>\n		        <ion-input type="email" formControlName="email"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n		          Password\n		        </ion-label>\n		        <ion-input type="password" formControlName="password"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n		    </form>\n\n		    <div margin-top>\n		      <button ion-button block outline color="light" (click)="login()" [disabled]="!onRegisterForm.valid">\n		        SIGN UP\n		      </button>\n\n		      <p text-center ion-text color="light">Or Sign Up with:</p>\n\n		      <ion-grid class="btn-group">\n		        <ion-row>\n		          <button ion-button icon-only block class="btn-facebook col col-4">\n		            <ion-icon name="logo-facebook"></ion-icon>\n		          </button>\n		          <button ion-button icon-only block class="btn-twitter col col-4">\n		            <ion-icon name="logo-twitter"></ion-icon>\n		          </button>\n		          <button ion-button icon-only block class="btn-gplus col col-4">\n		            <ion-icon name="logo-googleplus"></ion-icon>\n		          </button>\n		        </ion-row>\n		      </ion-grid>\n		    </div>\n		  </div>\n\n		</div>\n\n\n	</div>\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/auth/auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_filter_property_filter__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_detail_property_detail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropertyListPage = (function () {
    function PropertyListPage(navCtrl, navParams, service, toastCtrl, modalCtrl, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
        this.proptype = this.navParams.get('proptype') || "";
        this.from = this.navParams.get('from') || "";
        // console.log(this.proptype);
    }
    PropertyListPage.prototype.openFilterModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__property_filter_property_filter__["a" /* PropertyFilterPage */]);
        // modal.onDidDismiss(data => {
        //   console.log(data);
        // });
        modal.present();
    };
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    PropertyListPage.prototype.favorite = function (property) {
        var _this = this;
        this.service.favorite(property)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        });
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    PropertyListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    PropertyListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.map("map").setView([42.361132, -71.070876], 14);
            __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    PropertyListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.layerGroup([]);
        this.properties.forEach(function (property) {
            if (property.lat, property.long) {
                var marker = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([property.lat, property.long]).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    PropertyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-list',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/property-list/property-list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="dark"></ion-icon>\n    </button>\n    <ion-title>\n      <span ion-text color="primary">Properties <span *ngIf="from === \'home\'" class="fw300">(for {{proptype}})</span></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openFilterModal()">\n        <ion-icon name="funnel" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n<div padding *ngIf="from !== \'home\'">\n  <ion-segment [(ngModel)]="proptype">\n    <ion-segment-button value="">\n      All\n    </ion-segment-button>\n    <ion-segment-button value="sale">\n      For Sale\n    </ion-segment-button>\n    <ion-segment-button value="rent">\n      For Rent\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n    <div *ngIf="viewMode===\'list\'">\n        <ion-card *ngFor="let property of properties | termSearch:proptype:\'label\'" margin-bottom>\n          <div class="card-img-wrap">\n            <ion-fab bottom right edge>\n              <button ion-fab mini (click)="favorite(property)">\n                <ion-icon name="star"></ion-icon>\n              </button>\n            </ion-fab>\n            <img src="{{property.thumbnail}}" tappable (click)="openPropertyDetail(property)">\n            <span ion-text class="card-img-price fw700 text-black">\n              <ion-icon ios="ios-pricetag-outline" md="md-pricetag" color="primary"></ion-icon>\n              {{ property.price }}\n              <sup ion-text color="dark" class="fw500" *ngIf="property.period === \'week\'">/week</sup>\n              <sup ion-text color="dark" class="fw500" *ngIf="property.period === \'month\'">/month</sup>\n            </span>\n            <span ion-text class="card-img-status sale fw300 text-white" [ngClass]="{\'rent\': property.label === \'rent\', \'sale\': property.label === \'sale\'}">\n              {{ property.label }}\n            </span>\n          </div>\n          <ion-card-content>\n            <ion-card-title ion-text color="dark" tappable (click)="openPropertyDetail(property)" no-margin no-padding>\n              {{property.title}}\n            </ion-card-title>\n            <p ion-text color="primary" no-margin>\n              {{property.city}}, {{property.state}}\n            </p>\n\n            <hr margin-vertical>\n\n            <p ion-text color="dark">\n              <ion-icon name="moon"></ion-icon> {{property.bedrooms}} |\n              <ion-icon name="leaf"></ion-icon> {{property.bathrooms}}\n            </p>\n          </ion-card-content>\n        </ion-card>\n    </div>\n\n    <div *ngIf="viewMode === \'map\'" style="width:100%;height:100%;" id="map"></div>\n\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode">\n        <ion-segment-button value="list">\n            <ion-icon name="list"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n            <ion-icon name="map"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/property-list/property-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
    ], PropertyListPage);
    return PropertyListPage;
}());

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chat_detail_chat_detail__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrokerDetailPage = (function () {
    function BrokerDetailPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.broker = this.navParams.data;
        service.findById(this.broker.id).then(function (broker) { return _this.broker = broker; });
    }
    BrokerDetailPage.prototype.openChat = function (proptype) {
        // console.log(proptype);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */]);
    };
    BrokerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-broker-detail',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/broker-detail/broker-detail.html"*/`<ion-header>\n	<ion-navbar>\n		<ion-title>\n			<span ion-text color="primary">Broker</span>\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="broker lightest-bg">\n\n	<ion-card>\n\n		<ion-card-content class="profiles-bg">\n			<img src="{{broker.picture}}">\n			<h2 class="fw500">{{broker.name}}</h2>\n			<h3 ion-text color="light">{{broker.title}}</h3>\n		</ion-card-content>\n\n		<ion-list>\n			<a href="tel:{{broker.Phone__c}}" ion-item>\n				<ion-icon name="call" item-left></ion-icon>\n				<p ion-text color="primary">Call Office</p>\n				<h2 ion-text color="dark">{{broker.phone}}</h2>\n			</a>\n			<a href="tel:{{broker.phone}}" ion-item>\n				<ion-icon name="call" item-left></ion-icon>\n				<p ion-text color="primary">Call Mobile</p>\n				<h2 ion-text color="dark">{{broker.mobilePhone}}</h2>\n			</a>\n			<a href="tel:{{broker.phone}}" ion-item>\n				<ion-icon name="text" item-left></ion-icon>\n				<p ion-text color="primary">Text</p>\n				<h2 ion-text color="dark">{{broker.mobilePhone}}</h2>\n			</a>\n			<a href="mailto:{{broker.email}}" ion-item>\n				<ion-icon name="mail" item-left></ion-icon>\n				<p ion-text color="primary">Email</p>\n				<h2 ion-text color="dark">{{broker.email}}</h2>\n			</a>\n		</ion-list>\n\n		<button ion-button icon-start large full color="dark" (click)="openChat()">\n		  <ion-icon name="chatboxes"></ion-icon>\n		  Chat with Broker\n		</button>\n\n	</ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/broker-detail/broker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */]])
    ], BrokerDetailPage);
    return BrokerDetailPage;
}());

//# sourceMappingURL=broker-detail.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_brokers__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BrokerService = (function () {
    function BrokerService() {
    }
    BrokerService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_brokers__["a" /* default */]);
    };
    BrokerService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_brokers__["a" /* default */][id - 1]);
    };
    BrokerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], BrokerService);
    return BrokerService;
}());

//# sourceMappingURL=broker-service-mock.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_detail_message_detail__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageListPage = (function () {
    function MessageListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.messages = [];
        this.getMessages();
        // console.log(this.messages);
    }
    MessageListPage.prototype.itemTapped = function (message) {
        // console.log('itemTapped: ', message);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_detail_message_detail__["a" /* MessageDetailPage */], message);
    };
    MessageListPage.prototype.deleteItem = function (message) {
        var _this = this;
        this.service.delMessage(message)
            .then(function () {
            _this.getMessages();
            // console.log('deleteItem: ', this.messages)
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    MessageListPage.prototype.getMessages = function () {
        var _this = this;
        this.service.getMessages()
            .then(function (data) { return _this.messages = data; });
    };
    MessageListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-list',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/message-list/message-list.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="dark"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text color="primary">Messages</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n    <ion-card *ngIf="!messages.length" class="primary-bg" margin-top>\n      <ion-card-content>\n      	<p text-center class="text-white">You have no messages yet.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let message of messages">\n            <button ion-item (click)="itemTapped(message)" [ngClass]="{\'light-bg\': !message.read}">\n                <h2 [ngClass]="{\'fw700\': !message.read}">\n                    <ion-icon name="mail" color="primary" *ngIf="!message.read"></ion-icon>\n                    <ion-icon name="mail-open" color="primary" *ngIf="message.read"></ion-icon>\n                    {{message.title}}\n                </h2>\n                <p>{{message.senderName}} ∙ {{message.date | date: \'MM/dd/yyyy\'}}</p>\n            </button>\n            <ion-item-options>\n                <button ion-button color="danger" (click)="deleteItem(message)">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/message-list/message-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__["a" /* MessageService */]])
    ], MessageListPage);
    return MessageListPage;
}());

//# sourceMappingURL=message-list.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_messages__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService() {
        this.messageCounter = 0;
        this.messages = __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */];
        console.log('mock messages: ', __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */]);
        console.log(this.messages);
    }
    MessageService.prototype.findById = function (id) {
        console.log(id);
        return Promise.resolve(this.messages[id - 1]);
    };
    MessageService.prototype.getMessages = function () {
        return Promise.resolve(this.messages);
    };
    MessageService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    MessageService.prototype.delMessage = function (message) {
        var index = this.messages.indexOf(message);
        if (index > -1) {
            this.messages.splice(index, 1);
        }
        return Promise.resolve();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=message-service-mock.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/settings/settings.html"*/`<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <span ion-text color="primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="dark" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Foots (ft²)</ion-option>\n        <ion-option value="K">Meters (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Profile Messages?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="dark" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>\n\n  <!--sign out button-->\n  <!-- <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button> -->\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyFilterPage = (function () {
    function PropertyFilterPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.radiusmiles = 5;
        this.minmaxbeds = {
            upper: 10,
            lower: 1
        };
        this.minmaxbaths = {
            upper: 10,
            lower: 1
        };
        this.minmaxprice = {
            upper: 5000000,
            lower: 100000
        };
    }
    PropertyFilterPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    PropertyFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-filter',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/property-filter/property-filter.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button round color="dark" (click)="closeModal()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>\n    	<span ion-text color="primary">Search Filter</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item margin-bottom>\n    <ion-label color="primary" stacked>\n    	<span ion-text color="dark" class="fw500">ZipCode Area</span>\n    </ion-label>\n    <ion-input type="number" placeholder="Put your zipcode preference area"></ion-input>\n  </ion-item>\n\n	<ion-item>\n	  <ion-label class="no-margin-bottom">\n	  	<span ion-text color="dark" class="fw500">Radius:</span> <span ion-text color="primary"> {{radiusmiles}} Mile(s)</span></ion-label>\n	  <ion-range min="1" max="100" step="1" value="1" class="no-padding-top" [(ngModel)]="radiusmiles">\n	  </ion-range>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label class="no-margin-bottom">\n	  	<span ion-text color="dark" class="fw500">Min/Max Bedroom(s)</span> <span ion-text color="primary"> {{minmaxbeds.lower}} to {{minmaxbeds.upper}}</span></ion-label>\n	  	<ion-range dualKnobs="true" [(ngModel)]="minmaxbeds" min="1" max="10" step="1" class="no-padding-top"></ion-range>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label class="no-margin-bottom">\n	  	<span ion-text color="dark" class="fw500">Min/Max Bathroom(s):</span> <span ion-text color="primary"> {{minmaxbaths.lower}} to {{minmaxbaths.upper}}</span></ion-label>\n	  	<ion-range dualKnobs="true" [(ngModel)]="minmaxbaths" min="1" max="10" step="1" class="no-padding-top"></ion-range>\n	</ion-item>\n\n	<ion-item margin-bottom>\n	  <ion-label class="no-margin-bottom">\n	  	<span ion-text color="dark" class="fw500">Min/Max Price:</span> <span ion-text color="primary"> $ {{minmaxprice.lower}} to $ {{minmaxprice.upper}}</span></ion-label>\n	  	<ion-range dualKnobs="true" [(ngModel)]="minmaxprice" min="100000" max="5000000" step="50000" class="no-padding-top"></ion-range>\n	</ion-item>\n\n	<button ion-button block color="primary" (click)="closeModal()">Filter Results</button>\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/property-filter/property-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], PropertyFilterPage);
    return PropertyFilterPage;
}());

//# sourceMappingURL=property-filter.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_mock__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDetailPage = (function () {
    function ChatDetailPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.message = this.navParams.data;
    }
    ChatDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-detail',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/chat-detail/chat-detail.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Michael Jones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="dark-bg">\n\n    <div class="message-wrap" padding>\n\n        <div class="message left">\n            <img class="user-img" alt="" src="../assets/img/avatar.jpeg">\n\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p><span class="text-white bold">Michael Jones</span> <span ion-text color="light">a few seconds ago</span></p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class="message right">\n            <img class="user-img" alt="" src="../assets/img/avatar.jpeg">\n\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p><span class="text-white bold">Me</span> <span ion-text color="light">a few seconds ago</span></p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer class="dark-bg">\n  <ion-toolbar color="dark">\n\n    <ion-grid no-margin>\n      <ion-row no-margin>\n        <ion-col col col-9 no-margin no-padding>\n          <ion-item>\n            <ion-textarea placeholder="Enter Message..." rows="1"></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col col col-3 no-margin no-padding>\n          <button ion-button full color="primary" no-margin tappable icon-only>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/chat-detail/chat-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_mock__["a" /* ChatService */]])
    ], ChatDetailPage);
    return ChatDetailPage;
}());

//# sourceMappingURL=chat-detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_messages__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = (function () {
    function ChatService() {
        this.messageCounter = 0;
        this.messages = __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */];
        console.log('mock messages: ', __WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* default */]);
        console.log(this.messages);
    }
    ChatService.prototype.findById = function (id) {
        console.log(id);
        return Promise.resolve(this.messages[id - 1]);
    };
    ChatService.prototype.getMessages = function () {
        return Promise.resolve(this.messages);
    };
    ChatService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    ChatService.prototype.delMessage = function (message) {
        var index = this.messages.indexOf(message);
        if (index > -1) {
            this.messages.splice(index, 1);
        }
        return Promise.resolve();
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service-mock.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var messages = [
    {
        id: 1,
        title: "New Offer 25% OFF",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 2,
        senderName: "Caroline Broker",
        email: "caroline@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    },
    {
        id: 2,
        title: "New Offer 15% OFF by month!",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 3,
        title: "Visit our office today!",
        date: "2017-10-20T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 4,
        title: "You New property",
        date: "2017-10-09T00:00:00.000-0300",
        senderId: 5,
        senderName: "Jessica Stevens",
        email: "jessica@ionproperty.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    }
];
/* harmony default export */ __webpack_exports__["a"] = (messages);
//# sourceMappingURL=mock-messages.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_list_message_list__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage.prototype.messages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_list_message_list__["a" /* MessageListPage */]);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/notifications/notifications.html"*/`<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="primary" class="text-1x" (click)="messages()">\n  	<ion-icon name="mail"></ion-icon>\n  	New Offer 25% OFF\n  </button>\n  <button ion-item class="text-1x" (click)="messages()">\n  	<ion-icon name="mail-open"></ion-icon>\n  	New Offer 15% OFF by month!\n  </button>\n  <button ion-item class="text-1x" (click)="messages()">\n  	<ion-icon name="mail-open"></ion-icon>\n  	Visit our office today!\n  </button>\n  <button ion-item color="primary" class="text-1x" (click)="messages()">\n  	<ion-icon name="mail"></ion-icon>\n  	You New property\n  </button>\n</ion-list>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageDetailPage = (function () {
    function MessageDetailPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.message = this.navParams.data;
    }
    MessageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-detail',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/message-detail/message-detail.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">Message</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="message-header profiles-bg" padding>\n        <h5 ion-text color="light" class="fw700">{{message.title}}</h5>\n        <p ion-text no-margin color="light">{{message.date | date: \'MM/dd/yyyy\'}} ∙ by {{message.senderName}}</p>\n    </div>\n\n    <div padding-horizontal>\n\n        <p>\n            {{message.message}}\n        </p>\n\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/message-detail/message-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_message_service_mock__["a" /* MessageService */]])
    ], MessageDetailPage);
    return MessageDetailPage;
}());

//# sourceMappingURL=message-detail.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InitialPage = (function () {
    function InitialPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slideList = [
            {
                title: "What is <strong>ionProperty</strong>?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionProperty-ico.png",
            },
            {
                title: "Why ionProperty?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionProperty-ico.png",
            },
            {
                title: "Find your perfect home",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionProperty-ico.png",
            }
        ];
    }
    InitialPage.prototype.onSlideNext = function () {
        this.slides.slideNext(300);
    };
    InitialPage.prototype.onSlidePrev = function () {
        this.slides.slidePrev(300);
    };
    InitialPage.prototype.onLastSlide = function () {
        this.slides.slideTo(3, 300);
    };
    InitialPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    InitialPage.prototype.openAuthPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthPage */]);
    };
    InitialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitialPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], InitialPage.prototype, "slides", void 0);
    InitialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-initial',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/initial/initial.html"*/`<ion-content class="primary-bg">\n  <ion-slides pager="true" dir="{{dir}}">\n    <ion-slide *ngFor="let slide of slideList">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button class="text-white" (click)="onLastSlide()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image" alt="ionProperty Slide">\n      <h2 class="slide-title text-white" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description" class="text-white"></p>\n\n			<div padding>\n	      <button ion-button round block color="secondary" margin-top icon-end (click)="onSlideNext()">\n	      	Next\n	      	<ion-icon name="arrow-round-forward" color="light"></ion-icon>\n	    	</button>\n    	</div>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ionProperty-ico.png" alt="ionProperty Icon" class="slide-image" margin-top>\n      <h2 class="slide-title text-white" margin-bottom>Ready to Play?</h2>\n\n      <div padding>\n        <button ion-button large block round outline color="light" margin-top (click)="openAuthPage()">\n          Sign In / Sign Up\n        </button>\n        <button ion-button large block round outline color="light" margin-top (click)="openHomePage()">\n          Get Started\n        </button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/initial/initial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], InitialPage);
    return InitialPage;
}());

//# sourceMappingURL=initial.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyAccountPage = (function () {
    function MyAccountPage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.profiledata = true;
    }
    // process send button
    MyAccountPage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profiles-bg',
            message: 'Your Data was Edited!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/my-account/my-account.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">My Account</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="profile light-bg">\n\n    <ion-card>\n      <ion-card-content class="profiles-bg">\n          <img src="assets/img/avatar.jpeg">\n          <h2 class="fw500">João Firmino</h2>\n          <h3 ion-text color="light">Customer</h3>\n          <button ion-button icon-start block outline margin-top color="light">\n            <ion-icon name="photos"></ion-icon>\n            Edit / Insert Avatar\n          </button>\n      </ion-card-content>\n\n			<div padding>\n	      <ion-list>\n\n	        <ion-item>\n	          <ion-label color="dark" stacked>Full Name:</ion-label>\n	          <ion-input type="text" placeholder="Ex..: Joe Doe" value="João Firmino"></ion-input>\n	        </ion-item>\n\n	        <ion-item>\n	          <ion-label color="dark" stacked>Email:</ion-label>\n	          <ion-input type="email" placeholder="Ex.: joe@doe.com" value="firminoata@gmail.com"></ion-input>\n	        </ion-item>\n\n	        <ion-item>\n	          <ion-label color="dark" stacked>Address:</ion-label>\n	          <ion-input type="text" placeholder="Ex.: Abey Road 5"></ion-input>\n	        </ion-item>\n\n				  <ion-item>\n				    <ion-label color="dark">City</ion-label>\n				    <ion-select>\n				      <ion-option value="nes">New York</ion-option>\n				      <ion-option value="n64">Los Angeles</ion-option>\n				      <ion-option value="ps">London</ion-option>\n				      <ion-option value="genesis">Paris</ion-option>\n				      <ion-option value="saturn">São Paulo</ion-option>\n				      <ion-option value="snes">Tokyo</ion-option>\n				      <ion-option value="snes">New Delhi</ion-option>\n				    </ion-select>\n				  </ion-item>\n\n				  <ion-item>\n				    <ion-label color="dark">State</ion-label>\n				    <ion-select>\n				      <ion-option value="nes">NY</ion-option>\n				      <ion-option value="n64">CA</ion-option>\n				      <ion-option value="ps">Greater London</ion-option>\n				      <ion-option value="genesis">Paris</ion-option>\n				      <ion-option value="saturn">SP</ion-option>\n				      <ion-option value="snes">Kantō</ion-option>\n				      <ion-option value="snes">Delhi</ion-option>\n				    </ion-select>\n				  </ion-item>\n\n					<ion-list radio-group margin-top margin-bottom>\n					  <ion-list-header no-margin no-padding>\n					    <span ion-text color="dark" class="fw500">User Type</span>\n					  </ion-list-header>\n\n					  <ion-item>\n					    <ion-label color="dark">Customer</ion-label>\n					    <ion-radio checked="true" value="customer"></ion-radio>\n					  </ion-item>\n\n					  <ion-item>\n					    <ion-label color="dark">Broker</ion-label>\n					    <ion-radio value="broker"></ion-radio>\n					  </ion-item>\n\n					  <ion-item>\n					    <ion-label color="dark">Agent</ion-label>\n					    <ion-radio value="agent"></ion-radio>\n					  </ion-item>\n					</ion-list>\n\n          <ion-item>\n          	<ion-label>Available to interact with Brokers?</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n	      </ion-list>\n			</div>\n\n			<button ion-button large full color="dark" (click)="sendData()">Edit</button>\n    </ion-card>\n\n    <div padding>\n      <p ion-text color="dark" no-margin>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n      </p>\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/my-account/my-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrokerListPage = (function () {
    function BrokerListPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        service.findAll().then(function (data) { return _this.brokers = data; });
    }
    BrokerListPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    BrokerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-broker-list',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/broker-list/broker-list.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="dark"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">Brokers</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n    <ion-list>\n\n        <button ion-item *ngFor="let broker of brokers" (click)="openBrokerDetail(broker)">\n            <ion-avatar item-left>\n                <img src="{{broker.picture}}"/>\n            </ion-avatar>\n            <h2 ion-text color="dark" class="fw500">{{broker.name}}</h2>\n            <p ion-text color="primary">{{broker.title}}</p>\n        </button>\n\n    </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/broker-list/broker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */]])
    ], BrokerListPage);
    return BrokerListPage;
}());

//# sourceMappingURL=broker-list.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.favorites = [];
        this.getFavorites();
        console.log(this.favorites);
    }
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], favorite.property);
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    FavoriteListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    FavoriteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-list',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/favorite-list/favorite-list.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="dark"></ion-icon>\n        </button>\n        <ion-title>\n        	<span ion-text color="primary">Favorites</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n    <ion-card *ngIf="!favorites.length" class="primary-bg" margin-top>\n      <ion-card-content>\n      	<p text-center class="text-white">You have no favorite properties.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let favorite of favorites">\n            <button ion-item (click)="itemTapped(favorite)">\n                <ion-thumbnail item-left>\n                    <img src="{{favorite.property.thumbnail}}"/>\n                </ion-thumbnail>\n                <h2>{{favorite.property.title}}</h2>\n                <p>{{favorite.property.city}}, {{favorite.property.state}} ∙ {{favorite.property.price}}</p>\n            </button>\n            <ion-item-options>\n                <button ion-button color="danger" (click)="deleteItem(favorite)">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/favorite-list/favorite-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */]])
    ], FavoriteListPage);
    return FavoriteListPage;
}());

//# sourceMappingURL=favorite-list.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/about/about.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">About</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="about-header profiles-bg" padding>\n        <img src="assets/img/ionProperty-ico220.png">\n    </div>\n\n    <div padding class="about-info">\n\n        <h4 ion-text color="dark">ionProperty Application</h4>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </p>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </p>\n\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/support/support.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">Support</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n\n    <div class="support-header">\n        <img src="assets/img/support-app.jpg">\n    </div>\n\n    <ion-card>\n\n<!--         <ion-card-content>\n            <img src="{{broker.picture}}"/>\n            <h2>{{broker.name}}</h2>\n            <h3>{{broker.title}}</h3>\n        </ion-card-content> -->\n\n        <ion-list>\n            <a href="tel:1111" ion-item>\n                <ion-icon name="call" item-start></ion-icon>\n                <p ion-text color="primary">Call to General Support</p>\n                <h2 ion-text color="dark">+1 (123) 456-7890</h2>\n            </a>\n            <a href="tel:1111" ion-item>\n                <ion-icon name="call" item-start></ion-icon>\n                <p ion-text color="primary">Call to Lease & Sale Support</p>\n                <h2 ion-text color="dark">+1 (123) 456-7890</h2>\n            </a>\n            <a href="mailto:support@ionproperty.ionic" ion-item>\n                <ion-icon name="mail" item-start></ion-icon>\n                <p ion-text color="primary">Email</p>\n                <h2 ion-text color="dark">support@ionproperty.ionic</h2>\n            </a>\n        </ion-list>\n\n    </ion-card>\n\n<!--     <div padding class="support-info">\n\n        <h4 ion-text color="dark">ionProperty Application</h4>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </p>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </p>\n\n    </div> -->\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreApprovedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreApprovedPage = (function () {
    function PreApprovedPage(_fb, navCtrl, loadingCtrl, toastCtrl) {
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    PreApprovedPage.prototype.ngOnInit = function () {
        this.onApprovedForm = this._fb.group({
            profiledata: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            propertyid: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            docnumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            annualincome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            loan: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // process send button
    PreApprovedPage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profiles-bg',
            message: 'Pre-Approved Data Sent!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    PreApprovedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pre-approved',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/pre-approved/pre-approved.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">Get Pre-Approved</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="preapproved lightest-bg">\n\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <p class="text-white">Complete the form with your assencial data for you loan credit analysis</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <form [formGroup]="onApprovedForm" class="list-form">\n          <ion-list margin-bottom>\n            <ion-item>\n              <ion-label>Use my account/profile data:</ion-label>\n              <ion-checkbox formControlName="profiledata"></ion-checkbox>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onApprovedForm.get(\'profiledata\').touched && onApprovedForm.get(\'profiledata\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Property ID Code:</ion-label>\n              <ion-input type="number" placeholder="Code here" formControlName="propertyid"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onApprovedForm.get(\'propertyid\').touched && onApprovedForm.get(\'propertyid\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Document Number:</ion-label>\n              <ion-input type="number" placeholder="Ex.: 12345678900" formControlName="docnumber"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onApprovedForm.get(\'docnumber\').touched && onApprovedForm.get(\'docnumber\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Annual Income:</ion-label>\n              <ion-input type="text" placeholder="Ex.: $100,000" formControlName="annualincome"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onApprovedForm.get(\'annualincome\').touched && onApprovedForm.get(\'annualincome\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Loan Required:</ion-label>\n              <ion-input type="text" placeholder="Ex.: $60,000" formControlName="loan"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onApprovedForm.get(\'loan\').touched && onApprovedForm.get(\'loan\').hasError(\'required\')">This field is required</p>\n\n          </ion-list>\n\n          <button ion-button block color="dark" (click)="sendData()" [disabled]="!onApprovedForm.valid">Send Data</button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n\n<!--     <div padding class="support-info">\n\n        <h4 ion-text color="dark">ionProperty Application</h4>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </p>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n        </p>\n\n    </div> -->\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/pre-approved/pre-approved.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */]])
    ], PreApprovedPage);
    return PreApprovedPage;
}());

//# sourceMappingURL=pre-approved.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourPropertyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YourPropertyPage = (function () {
    function YourPropertyPage(_fb, navCtrl, loadingCtrl, toastCtrl) {
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    YourPropertyPage.prototype.ngOnInit = function () {
        this.onYourPropertyForm = this._fb.group({
            profiledata: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            propertyTitle: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            propertyAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            propertyType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            bedrooms: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            bathrooms: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])],
            askPrice: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    // process send button
    YourPropertyPage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profiles-bg',
            message: 'Your property was registered!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    YourPropertyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'your-property',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/your-property/your-property.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text color="primary">Your Property</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="yourproperty lightest-bg">\n\n    <ion-card class="primary-bg">\n      <ion-card-content>\n        <p class="text-white">Complete the form with your property data to find the best customers.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <form [formGroup]="onYourPropertyForm" class="list-form">\n          <ion-list margin-bottom>\n            <ion-item>\n              <ion-label>Complement with my account/profile data:</ion-label>\n              <ion-checkbox formControlName="profiledata"></ion-checkbox>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'profiledata\').touched && onYourPropertyForm.get(\'profiledata\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Property title:</ion-label>\n              <ion-input type="text" placeholder="Type here..." formControlName="propertyTitle"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'propertyTitle\').touched && onYourPropertyForm.get(\'propertyTitle\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Property Address:</ion-label>\n              <ion-input type="text" placeholder="Type here..." formControlName="propertyAddress"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'propertyAddress\').touched && onYourPropertyForm.get(\'propertyAddress\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Property Type:</ion-label>\n              <ion-select formControlName="propertyType">\n                <ion-option value="house">House</ion-option>\n                <ion-option value="mansion">Mansion</ion-option>\n                <ion-option value="Apartment">Apartment</ion-option>\n                <ion-option value="comroom">Commercial Room</ion-option>\n                <ion-option value="farm">Farm</ion-option>\n              </ion-select>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'propertyType\').touched && onYourPropertyForm.get(\'propertyType\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Bed Rooms:</ion-label>\n              <ion-input type="number" placeholder="Ex.: 3" formControlName="bedrooms"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'bedrooms\').touched && onYourPropertyForm.get(\'bedrooms\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Bath Rooms:</ion-label>\n              <ion-input type="number" placeholder="2" formControlName="bathrooms"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'bathrooms\').touched && onYourPropertyForm.get(\'bathrooms\').hasError(\'required\')">This field is required</p>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Asking Price:</ion-label>\n              <ion-input type="text" placeholder="Ex.: $600,000" formControlName="askPrice"></ion-input>\n            </ion-item>\n            <p ion-text color="danger" class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'askPrice\').touched && onYourPropertyForm.get(\'askPrice\').hasError(\'required\')">This field is required</p>\n\n          </ion-list>\n\n          <div padding-vertical>\n            <h5 ion-text color="dark" margin-bottom class="fw500">Add Images of Property <span ion-text class="fw300">(Max. 5)</span></h5>\n            <button ion-button icon-only color="light">\n              <ion-icon name="photos" color="dark"></ion-icon>\n            </button>\n            <button ion-button icon-only color="light">\n              <ion-icon name="photos" color="dark"></ion-icon>\n            </button>\n            <button ion-button icon-only color="light">\n              <ion-icon name="photos" color="dark"></ion-icon>\n            </button>\n            <button ion-button icon-only color="light">\n              <ion-icon name="photos" color="dark"></ion-icon>\n            </button>\n            <button ion-button icon-only color="light">\n              <ion-icon name="photos" color="dark"></ion-icon>\n            </button>\n          </div>\n\n          <button ion-button block color="dark" (click)="sendData()" [disabled]="!onYourPropertyForm.valid">Send Data</button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/your-property/your-property.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */]])
    ], YourPropertyPage);
    return YourPropertyPage;
}());

//# sourceMappingURL=your-property.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invoice_service_mock__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicesPage = (function () {
    function InvoicesPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.invoices = [];
        this.getInvoices();
        // console.log(this.messages);
    }
    InvoicesPage.prototype.itemTapped = function () {
        // console.log('itemTapped: ', message);
        // this.navCtrl.push(InvoiceDetailPage, invoice);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */]);
    };
    InvoicesPage.prototype.getInvoices = function () {
        var _this = this;
        this.service.getInvoices().then(function (data) { return _this.invoices = data; });
    };
    InvoicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoices',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/invoices/invoices.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu" color="dark"></ion-icon>\n    </button>\n    <ion-title>\n      <span ion-text color="primary">Invoices</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n    <ion-card *ngIf="!invoices.length" class="primary-bg" margin-top>\n      <ion-card-content>\n      	<p text-center class="text-white">You have no invoices yet.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item *ngFor="let invoice of invoices" tapplable (click)="itemTapped()" [ngClass]="{\'detail-bg\': !invoice.paid}">\n      <ion-icon name="list-box" color="primary" item-start></ion-icon>\n      <h4 ion-text [ngClass]="{\'bold\': !invoice.paid}" color="dark">{{invoice.title}} • <span ion-text color="primary" class="text-sm bold">{{invoice.date | date: \'dd/MM/yyyy\'}}</span></h4>\n      <ion-badge *ngIf="!invoice.paid" color="danger">Pending</ion-badge>\n      <ion-badge *ngIf="invoice.paid" class="green-bg">Paid</ion-badge>\n      <ion-badge color="secondary" item-end>{{invoice.value}}</ion-badge>\n    </ion-item>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/invoices/invoices.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_invoice_service_mock__["a" /* InvoiceService */]])
    ], InvoicesPage);
    return InvoicesPage;
}());

//# sourceMappingURL=invoices.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_invoices__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceService = (function () {
    function InvoiceService() {
        this.invoiceCounter = 0;
        this.invoices = __WEBPACK_IMPORTED_MODULE_1__mock_invoices__["a" /* default */];
        console.log('mock invoices: ', __WEBPACK_IMPORTED_MODULE_1__mock_invoices__["a" /* default */]);
        console.log(this.invoices);
    }
    InvoiceService.prototype.getInvoices = function () {
        return Promise.resolve(this.invoices);
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InvoiceService);
    return InvoiceService;
}());

//# sourceMappingURL=invoice-service-mock.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutPage = (function () {
    // trip data
    // public trip: any;
    // number of adults
    // public adults = 2;
    // date
    // public date = new Date();
    function CheckoutPage(nav, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // set sample data
        // this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Bill paid with Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/checkout/checkout.html"*/`<!-- -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text color="primary">Checkout</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="checkout lightest-bg">\n\n  <ion-card>\n    <ion-card-content class="checkout-info" no-padding>\n    <div class="checkout-image border-bottom" [ngStyle]="{\'background-image\': \'url(assets/img/properties/house01sq.jpg)\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col col-8>\n          <h2 ion-text color="dark" class="fw700" margin-bottom>House Rent Montly 12</h2>\n\n          <ion-card class="primary-bg" no-margin text-center>\n            <ion-card-content>\n              <span ion-text class="text-white">Amount</span>\n              <h2 ion-text no-margin class="fw700 text-white">$800</h2>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text color="primary" class="text-sm">Order Number</span>\n          <br/>\n          <ion-badge color="light">003454890</ion-badge>\n          <div margin-top>\n            <span ion-text color="primary" class="text-sm">Date of Expiration:</span>\n            <br/>\n            <ion-badge color="danger">12/10/2017</ion-badge>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <!--payment info-->\n  <div padding>\n    <h3>Payment Methods</h3>\n\n    <ion-segment color="dark" [(ngModel)]="paymethods">\n      <ion-segment-button value="creditcard" >\n        Credit card\n      </ion-segment-button>\n      <ion-segment-button value="paypal">\n        PayPal\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-card no-margin margin-vertical class="full-width">\n\n      <ion-card-content [ngSwitch]="paymethods">\n        <ion-grid *ngSwitchCase="\'creditcard\'">\n          <ion-row>\n            <ion-col no-padding text-center class="cc-flags">\n              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-padding>\n                <ion-input type="text" placeholder="Card Holder"></ion-input>\n  <!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-padding>\n                <ion-input placeholder="Card Number" type="number"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <ion-item no-padding>\n                <ion-select placeholder="MM" class="max-width full-width">\n                  <ion-option value="01">01</ion-option>\n                  <ion-option value="02">02</ion-option>\n                  <ion-option value="03">03</ion-option>\n                  <ion-option value="04">04</ion-option>\n                  <ion-option value="05">05</ion-option>\n                  <ion-option value="06">06</ion-option>\n                  <ion-option value="07">07</ion-option>\n                  <ion-option value="08">08</ion-option>\n                  <ion-option value="09">09</ion-option>\n                  <ion-option value="10">10</ion-option>\n                  <ion-option value="11">11</ion-option>\n                  <ion-option value="12">12</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4>\n              <ion-item no-padding>\n                <ion-select placeholder="YY" class="max-width full-width">\n                  <ion-option value="19">19</ion-option>\n                  <ion-option value="20">20</ion-option>\n                  <ion-option value="21">21</ion-option>\n                  <ion-option value="22">22</ion-option>\n                  <ion-option value="23">23</ion-option>\n                  <ion-option value="24">24</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4>\n              <ion-item no-padding>\n                <ion-input placeholder="CVV" type="number"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid *ngSwitchCase="\'paypal\'" padding>\n          <ion-row>\n            <ion-col no-padding text-center class="cc-flags">\n              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-padding>\n                <ion-input type="mail" placeholder="E-mail"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-padding>\n                <ion-input placeholder="Password" type="password"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n\n    </ion-card>\n\n    <!--submit button-->\n    <button ion-button color="dark" margin-top full tappable (click)="send()">Checkout</button>\n\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/checkout/checkout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(243);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_initial_initial__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_account_my_account__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_property_list_property_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_property_filter_property_filter__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_property_detail_property_detail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_broker_list_broker_list__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_broker_detail_broker_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pre_approved_pre_approved__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favorite_list_favorite_list__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_support_support__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notifications_notifications__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_message_list_message_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_message_detail_message_detail__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_your_property_your_property__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chat_detail_chat_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_invoices_invoices__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_checkout_checkout__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_pipes_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_message_service_mock__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_property_service_mock__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_broker_service_mock__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_invoice_service_mock__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_chat_service_mock__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_keyboard__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_initial_initial__["a" /* InitialPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_property_list_property_list__["a" /* PropertyListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_property_filter_property_filter__["a" /* PropertyFilterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_broker_list_broker_list__["a" /* BrokerListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pre_approved_pre_approved__["a" /* PreApprovedPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_message_list_message_list__["a" /* MessageListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_message_detail_message_detail__["a" /* MessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_your_property_your_property__["a" /* YourPropertyPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_invoices_invoices__["a" /* InvoicesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_checkout_checkout__["a" /* CheckoutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    locationStrategy: 'path',
                    iconMode: 'md',
                    mode: 'md'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionPropertyDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_27__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_initial_initial__["a" /* InitialPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_property_list_property_list__["a" /* PropertyListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_property_filter_property_filter__["a" /* PropertyFilterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_broker_list_broker_list__["a" /* BrokerListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pre_approved_pre_approved__["a" /* PreApprovedPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_message_list_message_list__["a" /* MessageListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_message_detail_message_detail__["a" /* MessageDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_your_property_your_property__["a" /* YourPropertyPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_invoices_invoices__["a" /* InvoicesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_checkout_checkout__["a" /* CheckoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_29__providers_property_service_mock__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_broker_service_mock__["a" /* BrokerService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_message_service_mock__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_invoice_service_mock__["a" /* InvoiceService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_chat_service_mock__["a" /* ChatService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_list_property_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_property_service_mock__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_detail_property_detail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, popoverCtrl, service) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.searchKey = "";
        this.findAll();
    }
    HomePage.prototype.openPropertyListPage = function (proptype) {
        // console.log(proptype);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_list_property_list__["a" /* PropertyListPage */], proptype);
    };
    HomePage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    HomePage.prototype.onCancel = function (event) {
        this.findAll();
    };
    HomePage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.navCtrl.canSwipeBack();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="dark"></ion-icon>\n    </button>\n    <ion-title>\n      <span ion-text color="primary" class="fw300">ion</span><span ion-text color="dark" class="fw700">Property</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="presentNotifications($event)">\n        <ion-icon name="notifications" color="primary"></ion-icon>\n      </button>\n      <button ion-button (click)="openSettingsPage()">\n        <ion-icon name="cog" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-6 no-padding>\n        <button ion-button full large no-margin color="primary" (click)="openPropertyListPage({proptype: \'sale\', from: \'home\'})">For Sale</button>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <button ion-button full large no-margin color="dark" (click)="openPropertyListPage({proptype: \'rent\', from: \'home\'})">For Rent</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"></ion-searchbar>\n\n  <h3 ion-text text-center color="dark" class="main-styled-border">Recently Added</h3>\n\n  <ion-list>\n    <button ion-item *ngFor="let property of properties" (click)="openPropertyDetail(property)">\n      <ion-thumbnail item-start>\n          <img src="{{property.thumbnail}}">\n      </ion-thumbnail>\n      <h2 ion-text color="dark">{{property.title}}</h2>\n      <h3 ion-text color="primary">{{property.city}}, {{property.state}} ∙ {{ property.price }}</h3>\n      <button ion-button round item-end color="light">\n        <ion-icon name="arrow-round-forward" color="primary"></ion-icon>\n      </button>\n    </button>\n  </ion-list>\n\n  <div padding>\n    <button ion-button round block color="primary" (click)="openPropertyListPage()">\n      See more\n    </button>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_property_service_mock__["a" /* PropertyService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_auth_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_initial_initial__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_account_my_account__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_broker_list_broker_list__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorite_list_favorite_list__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_support_support__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pre_approved_pre_approved__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_message_list_message_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_your_property_your_property__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_invoices_invoices__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_initial_initial__["a" /* InitialPage */];
        this.initializeApp();
        this.homeItem = { component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] };
        this.initialItem = { component: __WEBPACK_IMPORTED_MODULE_3__pages_initial_initial__["a" /* InitialPage */] };
        this.messagesItem = { component: __WEBPACK_IMPORTED_MODULE_12__pages_message_list_message_list__["a" /* MessageListPage */] };
        this.invoicesItem = { component: __WEBPACK_IMPORTED_MODULE_14__pages_invoices_invoices__["a" /* InvoicesPage */] };
        this.appMenuItems = [
            { title: 'Properties', component: __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__["a" /* PropertyListPage */], icon: 'home' },
            { title: 'Brokers', component: __WEBPACK_IMPORTED_MODULE_7__pages_broker_list_broker_list__["a" /* BrokerListPage */], icon: 'people' },
            { title: 'Favorites', component: __WEBPACK_IMPORTED_MODULE_8__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */], icon: 'star' },
            { title: 'Get Pre-Approved', component: __WEBPACK_IMPORTED_MODULE_11__pages_pre_approved_pre_approved__["a" /* PreApprovedPage */], icon: 'checkmark-circle' },
        ];
        this.yourPropertyMenuItems = [
            { title: 'Rent Out', component: __WEBPACK_IMPORTED_MODULE_13__pages_your_property_your_property__["a" /* YourPropertyPage */], icon: 'clipboard' },
            { title: 'Sell', component: __WEBPACK_IMPORTED_MODULE_13__pages_your_property_your_property__["a" /* YourPropertyPage */], icon: 'cash' },
            { title: 'Lease', component: __WEBPACK_IMPORTED_MODULE_13__pages_your_property_your_property__["a" /* YourPropertyPage */], icon: 'grid' }
        ];
        this.accountMenuItems = [
            { title: 'Authentication', component: __WEBPACK_IMPORTED_MODULE_2__pages_auth_auth__["a" /* AuthPage */], icon: 'log-in' },
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_5__pages_my_account_my_account__["a" /* MyAccountPage */], icon: 'contact' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_3__pages_initial_initial__["a" /* InitialPage */], icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
            { title: 'Support', component: __WEBPACK_IMPORTED_MODULE_10__pages_support_support__["a" /* SupportPage */], icon: 'call' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/app/app.html"*/`<ion-menu [content]="content" class="menu-bg">\n\n  <ion-header>\n    <ion-toolbar class="user-profile profiles-bg">\n\n      <div class="user-profile">\n        <ion-list no-margin>\n          <ion-item>\n\n            <ion-avatar item-left>\n              <img src="assets/img/avatar.jpeg">\n            </ion-avatar>\n\n            <h2 ion-text class="text-white fw700 text-15x">\n              João Firmino\n            </h2>\n            <p ion-text color="light">Customer</p>\n\n            <ion-badge color="light" class="text-primary">\n            	<ion-icon name="home"></ion-icon> Renter\n            </ion-badge>\n            <ion-badge color="light" class="text-primary">\n            	<ion-icon name="cash"></ion-icon> Paid\n            </ion-badge>\n\n          </ion-item>\n        </ion-list>\n\n	      <ion-grid no-padding>\n	        <ion-row class="other-data">\n	          <ion-col text-center class="column">\n		          <button ion-button icon-start small full menuClose no-margin color="dark" (click)="openPage(accountMenuItems[1])">\n		            <ion-icon name="contact"></ion-icon>\n		            My Account\n		          </button>\n	          </ion-col>\n	          <ion-col text-center class="column">\n		          <button ion-button icon-start small full menuClose no-margin color="dark" (click)="openPage(accountMenuItems[0])">\n		            <ion-icon name="log-out"></ion-icon>\n		            Log Out\n		          </button>\n	          </ion-col>\n	        </ion-row>\n	      </ion-grid>\n\n      </div>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n      <button menuClose ion-item (click)="openPage(homeItem)">\n        <ion-icon item-left name="browsers"></ion-icon>\n        Home\n      </button>\n      <button menuClose ion-item (click)="openPage(initialItem)">\n        <ion-icon item-left name="browsers"></ion-icon>\n        Initial <small>(introduction slides)</small>\n      </button>\n      <button menuClose ion-item (click)="openPage(messagesItem)">\n        <ion-icon item-left name="mail"></ion-icon>\n        Messages\n      </button>\n      <button menuClose ion-item (click)="openPage(invoicesItem)">\n        <ion-icon item-left name="list-box"></ion-icon>\n        Invoices\n      </button>\n    </ion-list>\n\n\n    <ion-list>\n      <ion-list-header no-margin>\n        <span ion-text color="dark" class="fw500">Realty</span>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header no-margin>\n        <span ion-text color="dark" class="fw500">Your Property</span>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of yourPropertyMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header no-margin>\n        <span ion-text color="dark" class="fw500">Help</span>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var properties = [
    {
        id: 1,
        address: "18 Henry st",
        city: "Cambridge",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "Stunning Victorian",
        bedrooms: 4,
        bathrooms: 3,
        long: -71.11095,
        lat: 42.35663,
        picture: "assets/img/properties/house01.jpg",
        thumbnail: "assets/img/properties/house01sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        label: "sale",
        period: "none",
        broker: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/brokers/caroline_seymor.jpg"
        }
    },
    {
        id: 2,
        address: "24 Pearl st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$1,200,000",
        title: "Ultimate Sophistication",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.10869,
        lat: 42.359103,
        picture: "assets/img/properties/house02.jpg",
        thumbnail: "assets/img/properties/house02sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        label: "sale",
        period: "none",
        broker: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/brokers/caroline_seymor.jpg"
        }
    },
    {
        id: 3,
        address: "61 West Cedar st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$1,500",
        title: "Modern City Living",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.070061,
        lat: 42.359986,
        picture: "assets/img/properties/house03.jpg",
        thumbnail: "assets/img/properties/house03sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "week",
        broker: {
            id: 2,
            name: "Michael Drukov",
            title: "Senior Broker",
            picture: "assets/img/brokers/michael_drukov.jpg"
        }
    },
    {
        id: 4,
        address: "32 Prince st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$8,000",
        title: "Stunning Colonial",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.110448,
        lat: 42.360642,
        picture: "assets/img/properties/house04.jpg",
        thumbnail: "assets/img/properties/house04sq.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "month",
        broker: {
            id: 3,
            name: "Jonathan Jones",
            title: "Senior Broker",
            picture: "assets/img/brokers/jonathan_jones.jpg"
        }
    },
    {
        id: 5,
        address: "211 Charles Street",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$2,000",
        title: "Waterfront in the City",
        bedrooms: 3,
        bathrooms: 2,
        long: -71.084454,
        lat: 42.368168,
        picture: "assets/img/properties/house05.jpg",
        thumbnail: "assets/img/properties/house05sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "week",
        broker: {
            id: 4,
            name: "Rosario Rodriguez",
            title: "Senior Broker",
            picture: "assets/img/brokers/rosario_rodriguez.jpg"
        }
    },
    {
        id: 6,
        address: "448 Hanover st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$7,200",
        title: "Quiet Retreat",
        bedrooms: 4,
        bathrooms: 2,
        long: -71.052617,
        lat: 42.366855,
        picture: "assets/img/properties/house06.jpg",
        thumbnail: "assets/img/properties/house06sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "month",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "assets/img/brokers/olivia_green.jpg"
        }
    },
    {
        id: 7,
        address: "127 Endicott st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$2,450",
        title: "City Living",
        bedrooms: 3,
        bathrooms: 1,
        long: -71.057352,
        lat: 42.365003,
        picture: "assets/img/properties/house07.jpg",
        thumbnail: "assets/img/properties/house07sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "month",
        broker: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "assets/img/brokers/miriam_aupont.jpg"
        }
    },
    {
        id: 8,
        address: "48 Brattle st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$1,100",
        title: "Heart of Harvard Square",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.121653,
        lat: 42.374117,
        picture: "assets/img/properties/house10.jpg",
        thumbnail: "assets/img/properties/house10sq.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "week",
        broker: {
            id: 7,
            name: "Michelle Lambert",
            title: "Senior Broker",
            picture: "assets/img/brokers/michelle_lambert.jpg"
        }
    },
    {
        id: 9,
        address: "121 Harborwalk",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "Seaport District Retreat",
        bedrooms: 3,
        bathrooms: 3,
        long: -71.049327,
        lat: 42.35695,
        picture: "assets/img/properties/house09.jpg",
        thumbnail: "assets/img/properties/house09sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        label: "sale",
        period: "none",
        broker: {
            id: 2,
            name: "Michael Drukov",
            title: "Senior Broker",
            picture: "assets/img/brokers/michael_drukov.jpg"
        }
    },
    {
        id: 10,
        address: "503 Park Drive",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$650,000",
        title: "City Living",
        bedrooms: 2,
        bathrooms: 2,
        long: -71.105475,
        lat: 42.347400,
        picture: "assets/img/properties/house08.jpg",
        thumbnail: "assets/img/properties/house08sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        label: "sale",
        period: "none",
        broker: {
            id: 1,
            name: "Caroline Seymor",
            title: "Senior Broker",
            picture: "assets/img/brokers/caroline_seymor.jpg"
        }
    },
    {
        id: 11,
        address: "95 Gloucester st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$690,000",
        title: "Architectural Details",
        bedrooms: 3,
        bathrooms: 3,
        lat: 42.349693,
        long: -71.084407,
        picture: "assets/img/properties/house11.jpg",
        thumbnail: "assets/img/properties/house11sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        label: "sale",
        period: "none",
        broker: {
            id: 4,
            name: "Rosario Rodriguez",
            title: "Senior Broker",
            picture: "assets/img/brokers/rosario_rodriguez.jpg"
        }
    },
    {
        id: 12,
        address: "145 Commonwealth ave",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$1,970",
        title: "Contemporary Luxury",
        bedrooms: 4,
        bathrooms: 3,
        lat: 42.352466,
        long: -71.075311,
        picture: "assets/img/properties/house12.jpg",
        thumbnail: "assets/img/properties/house12sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        label: "rent",
        period: "week",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "assets/img/brokers/olivia_green.jpg"
        }
    }
];
/* harmony default export */ __webpack_exports__["a"] = (properties);
//# sourceMappingURL=mock-properties.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var brokers = [
    {
        id: 1,
        name: "Caroline Seymor",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "caroline@ionproperty.com",
        picture: "assets/img/brokers/caroline_seymor.jpg"
    },
    {
        id: 2,
        name: "Michael Drukov",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michael@ionproperty.com",
        picture: "assets/img/brokers/michael_drukov.jpg"
    },
    {
        id: 3,
        name: "Jonathan Jones",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jonathan@ionproperty.com",
        picture: "assets/img/brokers/jonathan_jones.jpg"
    },
    {
        id: 4,
        name: "Rosario Rodriguez",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "rosario@ionproperty.com",
        picture: "assets/img/brokers/rosario_rodriguez.jpg"
    },
    {
        id: 5,
        name: "Olivia Green",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "olivia@ionproperty.com",
        picture: "assets/img/brokers/olivia_green.jpg"
    },
    {
        id: 6,
        name: "Miriam Aupont",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "miriam@ionproperty.com",
        picture: "assets/img/brokers/miriam_aupont.jpg"
    },
    {
        id: 7,
        name: "Michelle Lambert",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michelle@ionproperty.com",
        picture: "assets/img/brokers/michelle_lambert.jpg"
    },
    {
        id: 8,
        name: "Viktor Heinzbahn",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "victor@ionproperty.com",
        picture: "assets/img/brokers/viktor_heinzbahn.jpg"
    }
];
/* harmony default export */ __webpack_exports__["a"] = (brokers);
//# sourceMappingURL=mock-brokers.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var invoices = [
    {
        id: 1,
        title: "House Rent Montly 12",
        date: "2017-12-01T00:00:00.000-0300",
        senderName: "Caroline Broker",
        value: "$800",
        paid: false
    },
    {
        id: 2,
        title: "House Rent Montly 11",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        value: "$829",
        paid: true
    },
    {
        id: 3,
        title: "House Rent Montly 10",
        date: "2017-10-01T00:00:00.000-0300",
        senderName: "Michael Jones",
        value: "$800",
        paid: true
    },
    {
        id: 4,
        title: "House Rent Montly 9",
        date: "2017-09-01T00:00:00.000-0300",
        senderName: "Jessica Stevens",
        value: "$800",
        paid: true
    }
];
/* harmony default export */ __webpack_exports__["a"] = (invoices);
//# sourceMappingURL=mock-invoices.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__term_search__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__term_search__["a" /* TermSearchPipe */],
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__term_search__["a" /* TermSearchPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermSearchPipe = (function () {
    function TermSearchPipe() {
    }
    TermSearchPipe.prototype.transform = function (value, query, field) {
        return query ? value.reduce(function (prev, next) {
            if (next[field].includes(query)) {
                prev.push(next);
            }
            return prev;
        }, []) : value;
    };
    TermSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'termSearch',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], TermSearchPipe);
    return TermSearchPipe;
}());

//# sourceMappingURL=term-search.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_properties__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PropertyService = (function () {
    function PropertyService() {
        this.favoriteCounter = 0;
        this.favorites = [];
    }
    PropertyService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_properties__["a" /* default */]);
    };
    PropertyService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_properties__["a" /* default */][id - 1]);
    };
    PropertyService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_properties__["a" /* default */].filter(function (property) {
            return (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    PropertyService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    PropertyService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PropertyService);
    return PropertyService;
}());

//# sourceMappingURL=property-service-mock.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertyDetailPage = (function () {
    function PropertyDetailPage(actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(function (property) { return _this.property = property; });
    }
    PropertyDetailPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    PropertyDetailPage.prototype.favorite = function (property) {
        var _this = this;
        this.propertyService.favorite(property)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        });
    };
    PropertyDetailPage.prototype.share = function (property) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    PropertyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-detail',template:/*ion-inline-start:"/Users/firmino/Projects/ionic/ionProperty/src/pages/property-detail/property-detail.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span ion-text color="primary">Property</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="lightest-bg">\n    <ion-card *ngIf="property.id">\n        <img src="{{property.picture}}">\n        <ion-card-content>\n            <h2 ion-text color="dark" class="card-title">{{property.title}}</h2>\n            <p ion-text color="primary">{{property.address}}, {{property.city}} {{property.state}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="moon"></ion-icon>\n                <h3>Bedrooms</h3>\n                <ion-note item-right>{{property.bedrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="leaf"></ion-icon>\n                <h3>Bathrooms</h3>\n                <ion-note item-right>{{property.bathrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Asking Price</h3>\n                <ion-note item-right>{{property.price}}</ion-note>\n            </ion-item>\n            <button ion-item (click)="openBrokerDetail(property.broker)">\n                <ion-avatar item-left>\n                    <img src="{{property.broker.picture}}"/>\n                </ion-avatar>\n                <h2>{{property.broker.name}}</h2>\n                <p>{{property.broker.title}}</p>\n            </button>\n        </ion-list>\n\n        <ion-item>\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n                <ion-icon name="star"></ion-icon>\n                Favorite\n            </button>\n            <button ion-button icon-left (click)="share(property)" clear item-right>\n                <ion-icon name="share"></ion-icon>\n                Share\n            </button>\n        </ion-item>\n\n    </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/firmino/Projects/ionic/ionProperty/src/pages/property-detail/property-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());

//# sourceMappingURL=property-detail.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map