import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';

import {AuthPage} from '../pages/auth/auth';
import {InitialPage} from '../pages/initial/initial';
import {HomePage} from '../pages/home/home';
import {MyAccountPage} from '../pages/my-account/my-account';
import {SettingsPage} from '../pages/settings/settings';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyFilterPage} from '../pages/property-filter/property-filter';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {PreApprovedPage} from '../pages/pre-approved/pre-approved';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {SupportPage} from '../pages/support/support';
import {NotificationsPage} from '../pages/notifications/notifications';
import {MessageListPage} from '../pages/message-list/message-list';
import {MessageDetailPage} from '../pages/message-detail/message-detail';
import {YourPropertyPage} from '../pages/your-property/your-property';
import {ChatDetailPage} from '../pages/chat-detail/chat-detail';
import {InvoicesPage} from '../pages/invoices/invoices';
import {CheckoutPage} from '../pages/checkout/checkout';

import { PipesModule } from '../pipes/pipes.module';

import {MessageService} from "../providers/message-service-mock";
import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";
import {InvoiceService} from "../providers/invoice-service-mock";
import {ChatService} from "../providers/chat-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    InitialPage,
    HomePage,
    MyAccountPage,
    SettingsPage,
    AboutPage,
    SupportPage,
    PropertyListPage,
    PropertyFilterPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    PreApprovedPage,
    NotificationsPage,
    MessageListPage,
    MessageDetailPage,
    YourPropertyPage,
    ChatDetailPage,
    InvoicesPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      locationStrategy: 'path',
      iconMode: 'md',
      mode: 'md'
    }),
    IonicStorageModule.forRoot({
      name: '__ionPropertyDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    InitialPage,
    HomePage,
    MyAccountPage,
    SettingsPage,
    AboutPage,
    SupportPage,
    PropertyListPage,
    PropertyFilterPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    PreApprovedPage,
    NotificationsPage,
    MessageListPage,
    MessageDetailPage,
    YourPropertyPage,
    ChatDetailPage,
    InvoicesPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    PropertyService,
    BrokerService,
    MessageService,
    InvoiceService,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
