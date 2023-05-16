import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AddUserComponent } from '../../User/add-user/add-user.component';
import { ViewUserComponent } from '../../User/view-user/view-user.component';
import { ViewDetailComponent } from '../../User/view-detail/view-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddProductComponent } from '../../Product/add-product/add-product.component';
import { ViewProductComponent } from '../../Product/view-product/view-product.component';
import { ViewOrdersComponent } from '../../Orders/view-orders/view-orders.component';
import { ViewProductDetailsComponent } from '../../Product/view-product-details/view-product-details.component';
import { ViewVendorComponent } from '../../User/view-vendor/view-vendor.component';
import { ViewCreatorComponent } from '../../User/view-creator/view-creator.component';
import { LoginComponent } from '../../login/login.component';
import { AddCategoryComponent } from '../../Category/add-category/add-category.component';
import { ViewCategoryComponent } from '../../Category/view-category/view-category.component';
import { OrderDetailsComponent } from '../../Orders/order-details/order-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AddUserComponent,
    ViewUserComponent,
    ViewDetailComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewOrdersComponent,
    ViewProductDetailsComponent,
    ViewVendorComponent,
    ViewCreatorComponent,
    LoginComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    OrderDetailsComponent,
  ]
})

export class AdminLayoutModule {}
