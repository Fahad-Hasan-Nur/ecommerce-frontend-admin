import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { success_message } from '../../../common/constant/messages';
import { UserOrder } from '../../../common/model/user-order';
import { ToastService } from '../../../common/service/toast.service';
import { AdminService } from '../../../service/admin/admin.service';
import { OrderService } from '../../../service/user-order/order.service';
import { OrderViewComponent } from '../component/order-view/order-view.component';

@Component({
  selector: 'app-confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {
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
    this.orderService.getAllUserOrderByStatus("CONFIRMED").subscribe
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

  public shippedOrder(data:UserOrder) {

    data.updatedBy = this.storage.usersStorage().id;
    data.status="SHIPPED";
    this.orderService.updateOrderStatus(data).subscribe
      (
        (response) => {
          this.toastService.openSnackBar(success_message.UPDATED_SUCCESSFULLY, this.toastService.ACTION_SUCESS, this.toastService.CLASS_NAME_SUCESS);
        }, (error) => {
          console.log(error);
          this.toastService.openSnackBar(success_message.FAILD, this.toastService.ACTION_WRONG, this.toastService.CLASS_NAME_WRONG);

        });

  }
  public verifyPayment(data?){

  }
}

