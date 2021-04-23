import { USERS_API } from './../../common/constant/api.constants';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { Observable } from 'rxjs';
import { AUTH } from "../../common/constant/global-variables.constant";
import { UserOrder } from "../../common/model/user-order";
import { DELIBVARY_CONTACT_INFO_API, DELIBVARY_LOCATION_INFO_API, USER_ORDER_API } from "../../common/constant/api.constants";
import { DelivaryLocationInfo } from "../../common/model/delivary-location-info";
import { DelivaryContactInfo } from "../../common/model/delivary-contact-info";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.storage.read(AUTH.TOKEN)
    });

    constructor(private _http: HttpClient,
        private storage: StorageService
    ) { }

    /**
   * Returns  UserOrder by user id.
   *
   * @returns UserOrder 
   */
    public getUserOrderByUserId(id): Observable<any> {
        return this._http.get<UserOrder>(USER_ORDER_API.GET_USER_ORDER_BY_USER_ID + id, { headers: this.reqHeader });
    }

    /**
 * Returns  List of UserOrder
 *
 * @returns UserOrder 
 */
    public getAllUserOrderByStatus(status): Observable<any> {
        return this._http.get<UserOrder>(USER_ORDER_API.GET_USER_ORDER_BY_STATUS + status, { headers: this.reqHeader });
    }

    /**
* Returns  DelivaryContactInfo by  id.
*
* @returns DelivaryContactInfo 
*/
    public getDelivaryContactInfoById(id): Observable<any> {
        return this._http.get<DelivaryContactInfo>(DELIBVARY_CONTACT_INFO_API.GET_DELIVARY_CONTACT_INFO_BY_ID + id, { headers: this.reqHeader });
    }

    /**
 * Returns  DelivaryContactInfo by  id.
 *
 * @returns DelivaryContactInfo 
 */
    public getDelivaryLocationInfoById(id): Observable<any> {
        return this._http.get<DelivaryLocationInfo>(DELIBVARY_LOCATION_INFO_API.GET_DELIBVARY_LOCATION_INFO_BY_ID + id, { headers: this.reqHeader });
    }

     /**
   * Update a  UserOrder.
   *
   * @param UserOrder
   * @returns UserOrder
   */
  public updateOrderStatus(ob:UserOrder){
    return this._http.put(USER_ORDER_API.UPDATE_ORDER,ob,{ headers: this.reqHeader });
  }
  /**
   * Returns  Delete UserOrder.
   *
   * @returns UserOrder 
   */
 public deleteUserOrder(id:string): Observable<any> {
    return this._http.delete(USER_ORDER_API.DELETE_ORDER+id ,{ headers: this.reqHeader });
  }

}