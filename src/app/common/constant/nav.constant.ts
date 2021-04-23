
export const ROLES = {
  ACCOUNT_MANAGER:'ACCOUNT_MANAGER',
  INVENTORY_MANAGER:'INVENTORY_MANAGER',
  DEALER_MANAGER:'DEALER_MANAGER',
  SUPER_ADMIN:'SUPER_ADMIN',
  ADMIN:'ADMIN',
  DEALER:'DEALER',
  ORDER_MANAGER:'ORDER_MANAGER'
};

export const MENU_NAME = {
  USER_ORDER:'User Order',
  PENDING_ORDER:'Pending Order',
  CONFIRMED_ORDER:'Confirmed Order',
  SHIPPED_ORDER:'Shipped Order',
  COMPLETED_ORDER:'Completed Order',
  PROFILE:'Profile',
  PRODUCT_ADD:'Add Product',
  PRODUCT_LIST: 'Product List',
  ACCOUNTS:'Accounts',
  ACCOUNTS_VERIFIED_TRANSACTION:'Verified Transaction',
  ACCOUNTS_UNVERIFIED_TRANSACTION:'Unverified Transaction',
  INVENTORY:'Inventory',
  INVENTORY_VERIFIED_REQUISITION:'Verified Requisition',
  INVENTORY_UNVERIFIED_REQUISITION:'Unverified Requisition',
  INVENTORY_UNDER_PROCESSING_REQUISITION:'Under Processing Requisition',
  INVENTORY_COMPLETE_REQUISITION:'Complete Requisition',
  DEALER_MANAGER:'Dealer Manager',
  VERIFIED_DEALER:'Verified Dealer',
  UNVERIFIED_DEALER:'Unverified Dealer',
  DEALER:'Dealer',
  DEALER_SHOP:'Shop',
  DEALER_CART:'Cart',
  DEALER_PURCHASE_HISTORY:'Purchase History',
  BRAND:'Brand',
  BRAND_LIST:'Brand List',
  BRAND_ADD:'Add Brand',
  SUB_CATEGORY:'Sub Category',
  SUB_CATEGORY_LIST:'Sub Category List',
  SUB_CATEGORY_ADD:'Add Sub Category',
  CATEGORY:'Category',
  CATEGORY_LIST:' Category List',
  CATEGORY_ADD:'Add Category',
  PRODUCT: 'Product',
  EMPLOYYE:'Employee',
  DEALER_COMPLETED_REQUISITION:'Completed Requisition',
  EMPLOYYE_LIST:' Emplyee List',
  EMPLOYYE_ADD:'Add Employee',
  USER_PAYMENTS:'User Payments',
};

export const URL = {
  USER_PAYMENTS:'/accounts/user-payments',
  USER_ORDER:'/user-order',
  PENDING_ORDER:'/user-order/pending-order',
  CONFIRMED_ORDER:'/user-order/confirmed-order',
  SHIPPED_ORDER:'/user-order/shipped-order',
  COMPLETED_ORDER:'/user-order/completed-order',
  PROFILE:'/profile',
  DEALER_COMPLETED_REQUISITION:'/dealer/completed',
  ACCOUNTS:'/accounts',
  ACCOUNTS_VERIFIED_TRANSACTION:'/accounts/verified-transaction',
  ACCOUNTS_UNVERIFIED_TRANSACTION:'/accounts/unverified-transaction',
  INVENTORY:'/inventory',
  INVENTORY_VERIFIED_REQUISITION:'/inventory/verified-requisition',
  INVENTORY_UNVERIFIED_REQUISITION:'/inventory/unverified-requisition',
  INVENTORY_UNDER_PROCESSING_REQUISITION:'/inventory/under-processing-requisition',
  INVENTORY_COMPLETE_REQUISITION:'inventory/complete-requisition',
  DEALER_MANAGER:'/dealer-manager',
  VERIFIED_DEALER:'/dealer-manager/verified-dealer',
  UNVERIFIED_DEALER:'/dealer-manager/unverified-dealer',
  DEALER:'/dealer',
  DEALER_SHOP:'/dealer/dealer-shop',
  DEALER_CART:'/dealer/dealer-cart',
  DEALER_PURCHASE_HISTORY:'/dealer/dealer-purchase-history',
  BRAND:'/brand',
  PRODUCT: '/product',
  CATEGORY: '/category',
  CATEGORY_ADD: '/category/category-add',
  CATEGORY_LIST: '/category/category-list',
  SUB_CATEGORY: '/sub-category',
  SUB_CATEGORY_ADD: '/sub-category/sub-category-add',
  SUB_CATEGORY_LIST: '/sub-category/sub-category-list',
  EMPLOYEE: '/employee',
  EMPLOYEE_ADD: '/employee/employee-add',
  EMPLOYEE_LIST: '/employee/employee-list',
  PRODUCT_ADD: '/product/product-add',
  PRODUCT_LIST: '/product/product-list',
  BRAND_ADD: '/brand/brand-add',
  BRAND_LIST: '/brand/brand-list',

};
export const URL_NAME = {
  USER_PAYMENTS:'user-payments',
  USER_ORDER:'user-order',
  PENDING_ORDER:'pending-order',
  CONFIRMED_ORDER:'confirmed-order',
  SHIPPED_ORDER:'shipped-order',
  COMPLETED_ORDER:'completed-order',
  PROFILE:'profile',
  ACCOUNTS:'accounts',
  ACCOUNTS_VERIFIED_TRANSACTION:'verified-transaction',
  ACCOUNTS_UNVERIFIED_TRANSACTION:'unverified-transaction',
  INVENTORY:'inventory',
  INVENTORY_VERIFIED_REQUISITION:'verified-requisition',
  INVENTORY_UNVERIFIED_REQUISITION:'unverified-requisition',
  INVENTORY_UNDER_PROCESSING_REQUISITION:'under-processing-requisition',
  INVENTORY_COMPLETE_REQUISITION:'complete-requisition',
  DEALER_MANAGER:'dealer-manager',
  VERIFIED_DEALER:'verified-dealer',
  UNVERIFIED_DEALER:'unverified-dealer',
  DEALER:'dealer',
  DEALER_SHOP:'dealer-shop',
  DEALER_CART:'dealer-cart',
  DEALER_COMPLETED_REQUISITION:'completed',
  DEALER_PURCHASE_HISTORY:'dealer-purchase-history',
  WELCOME:'welcome',
  BRAND:'brand',
  BRAND_ADD:'brand-add',
  BRAND_LIST:'brand-list',
  SUB_CATEGORY:'sub-category',
  SUB_CATEGORY_ADD:'sub-category-add',
  SUB_CATEGORY_LIST:'sub-category-list',
  CATEGORY:'category',
  CATEGORY_LIST:'category-list',
  CATEGORY_ADD:'category-add',
  EMPLOYEE:'employee',
  EMPLOYEE_ADD:'employee-add',
  EMPLOYEE_LIST:'employee-list',
  PRODUCT:'product',
  PRODUCT_ADD: 'product-add',
  PRODUCT_LIST: 'product-list',
  
};
export const ICON = {
  USER_PAYMENTS:'fa fa-users',
  USER_ORDER:'fa fa-first-order',
  PENDING_ORDER:'fa fa-spinner',
  CONFIRMED_ORDER:'fa fa-check-circle',
  SHIPPED_ORDER:'fa fa-send',
  COMPLETED_ORDER:'fa fa-check-square-o',
  PROFILE:'icon-people',
  ACCOUNTS:'fa fa-credit-card',
  ACCOUNTS_VERIFIED_TRANSACTION:'fa fa-credit-card-alt',
  ACCOUNTS_UNVERIFIED_TRANSACTION:'fa fa-cc-amex',
  INVENTORY:'fa fa-spinner',
  INVENTORY_VERIFIED_REQUISITION:'fa fa-check',
  INVENTORY_UNVERIFIED_REQUISITION:'fa fa-window-close',
  INVENTORY_UNDER_PROCESSING_REQUISITION:'fa fa-spinner',
  INVENTORY_COMPLETE_REQUISITION:'fa fa-check-square-o',
  DEALER_MANAGER:'icon-globe',
  VERIFIED_DEALER:'icon-user-following',
  UNVERIFIED_DEALER:'icon-user-unfollow',
  DEALER:'icon-people',
  DEALER_SHOP:'icon-basket-loaded',
  DEALER_CART:'icon-paper-clip',
  DEALER_PURCHASE_HISTORY:'icon-briefcase',
  DEALER_COMPLETED_REQUISITION:'fa fa-check-square-o',
  BRAND:'icon-tag',
  BRAND_ADD:'icon-puzzle',
  BRAND_LIST: 'icon-list',
  CATEGORY:'icon-menu',
  CATEGORY_ADD: 'icon-plus',
  CATEGORY_LIST: 'icon-eyeglass',
  PRODUCT:'icon-basket-loaded',
  PRODUCT_ADD: 'icon-plus',
  PRODUCT_LIST: 'icon-basket',
  SUB_CATEGORY:'icon-book-open',
  SUB_CATEGORY_ADD:'icon-wrench',
  SUB_CATEGORY_LIST:'icon-directions',
  EMPLOYEE:'icon-user',
  EMPLOYEE_ADD:'icon-user-following',
  EMPLOYEE_LIST:'icon-people',
};

