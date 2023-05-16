import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export let ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userType: any;

  constructor() { }

  ngOnInit() {
    this.userType = sessionStorage.getItem('type');
    if(this.userType == "ADMIN"){
      ROUTES = [
        { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
        { path: '/view-user', title: 'User Management',  icon:'person', class: '' },
        { path: '/view-vendor', title: 'Vendor Management',  icon:'person', class: '' },
        { path: '/view-creator', title: 'Creator Management',  icon:'person', class: '' },
        { path: '/view-category', title: 'Category Management',  icon:'bubble_chart', class: '' },
        { path: '/view-product', title: 'Product Management',  icon:'unarchive', class: '' },
        { path: '/view-orders', title: 'Order Management',  icon:'content_paste', class: '' },
        // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
        // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
        // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    ];
  
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    else if(this.userType == "BUSINESS"){
      ROUTES = [
        { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
        { path: '/view-product', title: 'Product Management',  icon:'unarchive', class: '' },
        { path: '/view-orders', title: 'Order Management',  icon:'content_paste', class: '' },
    ];
  
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    else if(this.userType == "CREATOR"){
      ROUTES = [
        { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
        { path: '/view-product', title: 'Product Management',  icon:'unarchive', class: '' },
    ];
  
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
