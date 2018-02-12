import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';

import {AuthPage} from '../pages/auth/auth';
import {InitialPage} from '../pages/initial/initial';
import {HomePage} from '../pages/home/home';
import {MyAccountPage} from '../pages/my-account/my-account';
import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {SupportPage} from '../pages/support/support';
import {PreApprovedPage} from '../pages/pre-approved/pre-approved';
import {MessageListPage} from '../pages/message-list/message-list';
import {YourPropertyPage} from '../pages/your-property/your-property';
import {InvoicesPage} from '../pages/invoices/invoices';

export interface MenuItem {
	title: string;
	component: any;
	icon: string;
}

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = InitialPage;

	homeItem: any;

	initialItem: any;

	messagesItem: any;

	invoicesItem: any;

	appMenuItems: Array<MenuItem>;

	yourPropertyMenuItems: Array<MenuItem>;

	accountMenuItems: Array<MenuItem>;

	helpMenuItems: Array<MenuItem>;

	constructor(public platform: Platform) {
		this.initializeApp();

		this.homeItem = { component: HomePage };
		this.initialItem = { component: InitialPage };
		this.messagesItem = { component: MessageListPage};
		this.invoicesItem = { component: InvoicesPage};

		this.appMenuItems = [
			{title: 'Properties', component: PropertyListPage, icon: 'home'},
			{title: 'Brokers', component: BrokerListPage, icon: 'people'},
			{title: 'Favorites', component: FavoriteListPage, icon: 'star'},
			{title: 'Get Pre-Approved', component: PreApprovedPage, icon: 'checkmark-circle'},
		];

		this.yourPropertyMenuItems = [
			{title: 'Rent Out', component: YourPropertyPage, icon: 'clipboard'},
			{title: 'Sell', component: YourPropertyPage, icon: 'cash'},
			{title: 'Lease', component: YourPropertyPage, icon: 'grid'}
		];


		this.accountMenuItems = [
			{title: 'Authentication', component: AuthPage, icon: 'log-in'},
			{title: 'My Account', component: MyAccountPage, icon: 'contact'},
			{title: 'Logout', component: InitialPage, icon: 'log-out'},
		];

		this.helpMenuItems = [
			{title: 'About', component: AboutPage, icon: 'information-circle'},
			{title: 'Support', component: SupportPage, icon: 'call'},
		];

	}

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
