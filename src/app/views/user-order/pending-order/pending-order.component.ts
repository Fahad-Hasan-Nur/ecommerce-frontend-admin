import { AdminService } from './../../../service/admin/admin.service';
import { Admin } from './../../../common/model/admin';
import { OrderViewComponent } from './../component/order-view/order-view.component';
import { OrderService } from './../../../service/user-order/order.service';
import { UserOrder } from './../../../common/model/user-order';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ToastService } from '../../../common/service/toast.service';
import { success_message } from '../../../common/constant/messages';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.scss']
})
export class PendingOrderComponent  implements OnInit {

  public data:UserOrder[];
  constructor(private storage:AdminService, private orderService:OrderService, protected dialog: MatDialog,private toastService:ToastService) { }
  public loading:boolean=false;
  public displayedColumns: string[] = ['Creation Time', 'Payment Method','action'];
  public dataSource = new MatTableDataSource;
  public showFilters: boolean;
  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;

  public ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.orderService.getAllUserOrderByStatus("PENDING").subscribe
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
    this.dialog.open(OrderViewComponent, dialogConfig);
  }

  public confirmOrder(data:UserOrder) {
    data.updatedBy = this.storage.usersStorage().id;
    data.status="CONFIRMED";
    this.updateData(data);
  }
  public verifyPayment(data:UserOrder){
    data.updatedBy = this.storage.usersStorage().id;
    data.status="PAYMENT_VERIFICATION";
    this.updateData(data);
  }
  public cancelOrder(data:UserOrder){
    this.orderService.deleteUserOrder(data.id).subscribe(
      (response) => {
        this.toastService.openSnackBar(success_message.DELETED_SUCCESSFULLY, this.toastService.ACTION_SUCESS, this.toastService.CLASS_NAME_SUCESS);
        this.loading = false;
        setTimeout(alert, 10000);
      window.location.reload();
      },
      (error) => {console.log(error),
      this.toastService.openSnackBar(error.error.text, this.toastService.ACTION_WRONG, this.toastService.CLASS_NAME_WRONG);
      
      });
  }
  updateData(data:UserOrder){
    this.orderService.updateOrderStatus(data).subscribe
    (
      (response) => {
        this.toastService.openSnackBar(success_message.ORDER_CONFIRM, this.toastService.ACTION_SUCESS, this.toastService.CLASS_NAME_SUCESS);
        setTimeout(alert, 10000);
        window.location.reload();
      }, (error) => {
        console.log(error);
        this.toastService.openSnackBar(success_message.FAILD, this.toastService.ACTION_WRONG, this.toastService.CLASS_NAME_WRONG);

      });
  }
}


