import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { ShippedOrderComponent } from './shipped-order/shipped-order.component';
import { ConfirmedOrderComponent } from './confirmed-order/confirmed-order.component';
import { UserOrderComponent } from './user-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MENU_NAME, URL_NAME } from '../../common/constant/nav.constant'
import { PendingOrderComponent } from './pending-order/pending-order.component';
const routes: Routes = [
  {
    path: '',
    component: UserOrderComponent,
    children: [
      {
        path: URL_NAME.PENDING_ORDER,
        component: PendingOrderComponent,
        data: {
          title: MENU_NAME.PENDING_ORDER
        },
      },
      {
        path: URL_NAME.CONFIRMED_ORDER,
        component: ConfirmedOrderComponent,
        data: {
          title: MENU_NAME.CONFIRMED_ORDER
        },
      },
      {
        path: URL_NAME.SHIPPED_ORDER,
        component: ShippedOrderComponent,
        data: {
          title: MENU_NAME.SHIPPED_ORDER
        },
      },
      {
        path: URL_NAME.COMPLETED_ORDER,
        component: CompletedOrderComponent,
        data: {
          title: MENU_NAME.COMPLETED_ORDER
        },
      },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOrderRoutingModule { }
