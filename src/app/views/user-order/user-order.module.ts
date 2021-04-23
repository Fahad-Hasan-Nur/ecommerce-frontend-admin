import { DelivaryLocationInfo } from './../../common/model/delivary-location-info';
import { DelivaryContactInfo } from './../../common/model/delivary-contact-info';
import { ShippedOrderComponent } from './shipped-order/shipped-order.component';
import { ConfirmedOrderComponent } from './confirmed-order/confirmed-order.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { UserOrderRoutingModule } from './user-order-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrderComponent } from './user-order.component';
import { PendingOrderComponent } from './pending-order/pending-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../material.module';
import { OrderViewComponent } from './component/order-view/order-view.component';



@NgModule({
  declarations: [
    UserOrderComponent,
    PendingOrderComponent,
    CompletedOrderComponent,
    ConfirmedOrderComponent,
    ShippedOrderComponent,
    OrderViewComponent
  ],
  imports: [
    CommonModule,
    UserOrderRoutingModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents:[OrderViewComponent],
  providers:[DelivaryContactInfo,DelivaryLocationInfo]
})
export class UserOrderModule { }
