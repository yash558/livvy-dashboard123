import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddUserComponent } from 'app/User/add-user/add-user.component';
import { ViewUserComponent } from 'app/User/view-user/view-user.component';
import { ViewVendorComponent } from 'app/User/view-vendor/view-vendor.component';
import { ViewCreatorComponent } from 'app/User/view-creator/view-creator.component';
import { ViewDetailComponent } from 'app/User/view-detail/view-detail.component';
import { AddProductComponent } from 'app/Product/add-product/add-product.component';
import { ViewProductComponent } from 'app/Product/view-product/view-product.component';
import { ViewOrdersComponent } from 'app/Orders/view-orders/view-orders.component';
import { ViewProductDetailsComponent } from 'app/Product/view-product-details/view-product-details.component';
import { AddCategoryComponent } from 'app/Category/add-category/add-category.component';
import { ViewCategoryComponent } from 'app/Category/view-category/view-category.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from 'app/auth.guard';
import { OrderDetailsComponent } from 'app/Orders/order-details/order-details.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',      component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent,canActivate:[AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'add-user',        component: AddUserComponent,canActivate:[AuthGuard]},
    { path: 'add-user/:id',        component: AddUserComponent },
    { path: 'view-user',        component: ViewUserComponent,canActivate:[AuthGuard]},
    { path: 'view-vendor',        component: ViewVendorComponent,canActivate:[AuthGuard]},
    { path: 'view-creator',        component: ViewCreatorComponent,canActivate:[AuthGuard]},
    { path: 'view-detail/:id',        component: ViewDetailComponent},
    { path: 'add-product',        component: AddProductComponent },
    { path: 'add-product/:id',        component: AddProductComponent },
    { path: 'view-product',        component: ViewProductComponent,canActivate:[AuthGuard]},
    { path: 'view-product-details',  component: ViewProductDetailsComponent },
    { path: 'view-orders',        component: ViewOrdersComponent,canActivate:[AuthGuard]},
    { path: 'add-category',        component: AddCategoryComponent },
    { path: 'add-category/:id',        component: AddCategoryComponent },
    { path: 'view-category',        component: ViewCategoryComponent,canActivate:[AuthGuard]},
    { path: 'view-order-details',  component: OrderDetailsComponent },

];
