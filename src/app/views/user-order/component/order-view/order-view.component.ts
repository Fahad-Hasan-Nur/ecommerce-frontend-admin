import { DelivaryLocationInfo } from './../../../../common/model/delivary-location-info';
import { DelivaryContactInfo } from './../../../../common/model/delivary-contact-info';
import { ImageService } from './../../../../service/image/image.service';
import { ProductService } from './../../../../service/product/product.service';
import { UserOrder } from './../../../../common/model/user-order';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserCartProduct } from '../../../../common/model/user-cart-product';
import { UserTransactionService } from '../../../../service/user-order/user-transaction.service';
import { OrderService } from '../../../../service/user-order/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  public retrievedImage: any;
  public base64Data: any;
  public retrieveResonse: any;
  public data: UserOrder;
  public viewLocation:boolean=false;
  constructor(
    public customerInfo: DelivaryContactInfo,
    public locationInfo: DelivaryLocationInfo,
    private userTransactionService: UserTransactionService,
    private imageService: ImageService,
    private productService: ProductService,
    private orderService: OrderService,
    private dialogRef: MatDialogRef<OrderViewComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.data = data.data;
    this.data = this.getOrderDetail(this.data);
    this.getCustomerInfo();
    if(this.data.status=="CONFIRMED"){
      this.viewLocation=true;
      this.getLocationInfo();
    }
  }
  getOrderDetail(ob: UserOrder): UserOrder {
    this.userTransactionService.getProductByOrder(ob.id).subscribe
      (
        (response) => {
          ob.userCartProduct = response;
          ob.userCartProduct.forEach(element => {
            element = this.getProduct(element);
          });
        },
        (err) => {
          console.log(err)
        }
      )
    return ob;
  }

  getProduct(ob: UserCartProduct): UserCartProduct {
    this.productService.getProductById(ob.productId).subscribe
      (
        (response) => {
          ob.product = response;
          ob.brandName = ob.product.brandName;
          ob = this.getImage(ob);
        },
        (error) => console.log(error),
      );
    return ob;
  }
  getImage(ob: UserCartProduct): UserCartProduct {
    this.imageService.getImageById(ob.product.imageId).subscribe
      (
        (response) => {
          this.retrieveResonse = response;
          this.base64Data = this.retrieveResonse.picByte;
          ob.image = 'data:image/jpeg;base64,' + this.base64Data;
        },
        (error) => console.log(error),
      );
    return ob;
  }

  getCustomerInfo() {
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
  getLocationInfo(){
    this.orderService.getDelivaryLocationInfoById(this.data.delivaryLocationInfoId).subscribe
      (
        (response) => {
          this.locationInfo = response;
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
