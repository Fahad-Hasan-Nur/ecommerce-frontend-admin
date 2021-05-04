import { UserPaymentViewComponent } from './../component/user-payment-view/user-payment-view.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { success_message } from '../../../common/constant/messages';
import { UserOrder } from '../../../common/model/user-order';
import { ToastService } from '../../../common/service/toast.service';
import { AdminService } from '../../../service/admin/admin.service';
import { OrderService } from '../../../service/user-order/order.service';
import { OrderViewComponent } from '../../user-order/component/order-view/order-view.component';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.scss']
})
export class UserPaymentsComponent implements OnInit {

  public data:UserOrder[];
  constructor(private storage:AdminService, private orderService:OrderService, protected dialog: MatDialog,private toastService:ToastService) { }
  public loading:boolean=false;
  public displayedColumns: string[] = ['Creation Time', 'Payment Method','Payment Info','action'];
  public dataSource = new MatTableDataSource;
  public showFilters: boolean;
  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.orderService.getAllUserOrderByStatus("PAYMENT_VERIFICATION").subscribe
      (
        (response) => {
          this.data = response;
          this.dataSource.data = response as UserOrder[];
          console.log(this.data)
        },
        (error) => console.log(error),
      );
  }

  public applyFilter(filterValue: any) {
      this.dataSource.filter = filterValue.value.trim().toLowerCase();
  }
  public search(data) {  }

  openDialogView(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        data: data
    };
    this.dialog.open(UserPaymentViewComponent, dialogConfig);
  }

  public confirmOrder(data:UserOrder) {
    data.updatedBy = this.storage.usersStorage().id;
    data.status="CONFIRMED";
    this.orderService.updateOrderStatus(data).subscribe
      (
        (response) => {
          this.toastService.openSnackBar(success_message.UPDATED_SUCCESSFULLY, this.toastService.ACTION_SUCESS, this.toastService.CLASS_NAME_SUCESS);
          setTimeout(null, 10000);
          window.location.reload();
        }, (error) => {
          console.log(error);
          this.toastService.openSnackBar(success_message.FAILD, this.toastService.ACTION_WRONG, this.toastService.CLASS_NAME_WRONG);

        });

  }

  public cancelOrder(data:UserOrder){

    this.orderService.deleteUserOrder(data.id).subscribe(
      (response) => {
        this.toastService.openSnackBar(success_message.DELETED_SUCCESSFULLY, this.toastService.ACTION_SUCESS, this.toastService.CLASS_NAME_SUCESS);
        this.loading = false;
        setTimeout(null, 10000);
          window.location.reload();
      },
      (error) => {console.log(error),
      this.toastService.openSnackBar(error.error.text, this.toastService.ACTION_WRONG, this.toastService.CLASS_NAME_WRONG);
      setTimeout(alert, 10000);
      window.location.reload();
      });
  }
}



