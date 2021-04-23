import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DelivaryContactInfo } from '../../../../common/model/delivary-contact-info';
import { UserCartProduct } from '../../../../common/model/user-cart-product';
import { UserOrder } from '../../../../common/model/user-order';
import { ImageService } from '../../../../service/image/image.service';
import { ProductService } from '../../../../service/product/product.service';
import { OrderService } from '../../../../service/user-order/order.service';
import { UserTransactionService } from '../../../../service/user-order/user-transaction.service';
import { OrderViewComponent } from '../../../user-order/component/order-view/order-view.component';

@Component({
  selector: 'app-user-payment-view',
  templateUrl: './user-payment-view.component.html',
  styleUrls: ['./user-payment-view.component.scss']
})
export class UserPaymentViewComponent implements OnInit {

  public retrievedImage: any;
  public base64Data: any;
  public retrieveResonse: any;
  public data: UserOrder;
  constructor(
    public customerInfo: DelivaryContactInfo,
    private userTransactionService: UserTransactionService,
    private imageService: ImageService,
    private productService: ProductService,
    private orderService: OrderService,
    private dialogRef: MatDialogRef<OrderViewComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.data = data.data;
    this.getCustomerInfo();
    console.log(this.data)
  }

  getCustomerInfo(){
    this.orderService.getDelivaryContactInfoById(this.data.delivaryContactInfoId).subscribe
      (
        (response) => {
          this.customerInfo = response;
        },
        (err) => {
          console.log(err)
        }
      )
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
