import { environment } from '../../../environments/environment';

const SERVICE_API = environment.GATEWAY_URL;


const USERS_SERVICE = SERVICE_API + '/users/';
export const USERS_API = {
    GET_USERS_BY_USER_ID: USERS_SERVICE,
};

export const GREETING_SERVICE = SERVICE_API + '/greetings';

const PRODUCT_SERVICE = SERVICE_API + 'api/product/';
export const PRODUCT_API = {
    GET_PRODUCTS: PRODUCT_SERVICE + 'getAll/',
    ADD_PRODUCT: PRODUCT_SERVICE,
    UPDATE_PRODUCT: PRODUCT_SERVICE,
    GET_PRODUCT_BY_ID: PRODUCT_SERVICE,
    GET_PRODUCT_BY_SUB_CATEGORY_ID: PRODUCT_SERVICE+ 'getAllBySubCategory/',
    ADD_VARIATION: PRODUCT_SERVICE+'addVariation/',
    GET_VARIATION_BY_PRODUCT_ID: PRODUCT_SERVICE + 'getAllVariation/',
    UPDATE_VARIATION: PRODUCT_SERVICE+'updateVariation/',


};
const LOGIN_SERVICE = SERVICE_API + 'api/auth/';
export const LOGIN_API = {
    LOGIN: LOGIN_SERVICE + 'admin/login',
    REGISTRATION:LOGIN_SERVICE+'user/register/',
    ACTIVATE: LOGIN_SERVICE+'confirm-account/'
};

const CATEGORY_SERVICE = SERVICE_API + 'api/category/';
export const CATEGORY_API = {
    GET_CATEGORY: CATEGORY_SERVICE + 'getAll/',
    ADD_CATEGORY: CATEGORY_SERVICE,
    GET_CATEGORY_BY_ID: CATEGORY_SERVICE,
    UPDATE_CATEGORY: CATEGORY_SERVICE,
};
const BRAND_SERVICE = SERVICE_API + 'api/brand/';
export const BRAND_API = {
    GET_BRAND: BRAND_SERVICE + 'getAll/',
    ADD_BRAND: BRAND_SERVICE,
    GET_BRAND_BY_ID: BRAND_SERVICE,
    UPDATE_BRAND: BRAND_SERVICE,
};
const SUB_CATEGORY_SERVICE = SERVICE_API + 'api/subCategory/';
export const SUB_CATEGORY_API = {
    GET_SUB_CATEGORIES: SUB_CATEGORY_SERVICE + 'getAll/',
    GET_SUB_CATEGORY_BY_CATEGORY: SUB_CATEGORY_SERVICE + 'getAll/',
    ADD_SUB_CATEGORY: SUB_CATEGORY_SERVICE,
    GET_SUB_CATEGORY_BY_ID: SUB_CATEGORY_SERVICE,
    UPDATE_SUB_CATEGORY: SUB_CATEGORY_SERVICE,

};
const IMAGE_SERVICE = SERVICE_API + 'api/image/';
export const IMAGE_API = {
    GET_IMAGE_BY_ID: IMAGE_SERVICE + 'get/',
    ADD_IMAGE: IMAGE_SERVICE+ 'upload/',
};
const ADMIN_SERVICE = SERVICE_API + 'api/admin/';
export const ADMIN_API = {
    GET_ADMIN_BY_ID: ADMIN_SERVICE + 'getById/',
    GET_ADMIN_BY_EMAIL: ADMIN_SERVICE + 'getByEmail/',
    GET_ADMINS: ADMIN_SERVICE +'getAll/',
    ADD_ADMIN: ADMIN_SERVICE ,
    ADD_VERIFIED_DEALER_INFO: ADMIN_SERVICE +'addVerifiedDealerInfo/',
    UPDATE_ADMIN: ADMIN_SERVICE ,
    GET_ACTIVE_DEALER: ADMIN_SERVICE +'getAll/activeDealer/' ,
    GET_INACTIVE_DEALER: ADMIN_SERVICE +'getAll/inactiveDealer/',
    VERIFY_DEALER:ADMIN_SERVICE+'verifyDealer/',
    REJECT_DEALER: ADMIN_SERVICE+'rejectDealer/' ,
    GET_VERIFIED_DEALER_INFO: ADMIN_SERVICE+'verifiedDealerInfo/' ,
    


};
const REQUISITION_SERVICE = SERVICE_API + 'api/requisition/';
export const REQUISITION_API = {
    GET_ON_CART_REQUISITION: REQUISITION_SERVICE + 'getOnCart/',
    GET_COMPLETE_REQUISITION: REQUISITION_SERVICE + 'getComplete/',
    ADD_REQUISITION: REQUISITION_SERVICE ,
    GET_REQUISITION_BY_ID: REQUISITION_SERVICE ,
    GET_REQUISITION_BY_STATUS: REQUISITION_SERVICE +'getByStatus/',
    UPDATE_REQUISITION: REQUISITION_SERVICE ,
    DELETE_REQUISITION: REQUISITION_SERVICE ,
    PROCESS_REQUISITION:REQUISITION_SERVICE+'processRequisition/',
    COMPLETE_REQUISITION:REQUISITION_SERVICE+ 'completeRequisition/',
    VERIFY_REQUISITION:REQUISITION_SERVICE+ 'verifyRequisition/',
    ADD_REQUISITION_PRODUCT: REQUISITION_SERVICE+'addRequisitionProduct/',
    GET_REQUISITION_PRODUCT_BY_REQUISITION: REQUISITION_SERVICE+'getAllRequisitionProduct/',
};

const TRANSACTON_SERVICE = SERVICE_API + 'api/transaction/';
export const TRANSACTON_API = {
    ADD_TRANSACTON: TRANSACTON_SERVICE ,
    GET_TRANSACTON_BY_ID: TRANSACTON_SERVICE ,
    GET_TRANSACTON_BY_USER: TRANSACTON_SERVICE +'getAllByUserId/',
    GET_TRANSACTON_BY_REQUISITION: TRANSACTON_SERVICE +'getAllByRequisitionId/',
    PROCESS_TRANSACTION:TRANSACTON_SERVICE+'processTransaction/',
    COMPLETE_TRANSACTION:TRANSACTON_SERVICE+ 'completeTransaction/',
    GET_TRANSACTON_BY_STATUS: TRANSACTON_SERVICE +'getByStatus/',
    DELETE_TRANSACTON: TRANSACTON_SERVICE ,


};


