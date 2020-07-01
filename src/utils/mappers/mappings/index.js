
export const Reservation = {
  id: 'id',
  quantity: 'quantity',
  status_time: 'statusTime',
  date_needed: 'dateNeeded',
  delivery_date: 'deliveryDate',
  special_request: 'specialRequest',
  customer_id: 'customerId',
  customer_name: 'customerName',
  user_id: 'userId',
};

export const Product = {
  id: 'id',
  name: 'name',
  type: 'type',
  breed: 'breed',
  image: 'image',
  age: 'age',
  is_unique: 'isUnique',
  quantity: 'quantity',
  status: 'status',
  imageUrl: 'imageUrl'
};

export const Order = {
  status: 'status',
  requestCount: 'requestCount',
  product: Product,
  reservation: Reservation,
};

export const Request = {
  product_id: 'productId',
  swinecart_id: 'swineCartId',
  request_quantity: 'quantity',
  date_needed: 'dateNeeded',
  delivery_date: 'deliveryDate',
  special_request: 'specialRequest',
  customer_id: 'customerId',
  customer_name: 'customerName',
  customer_province: 'customerProvince',
  user_id: 'userId'
};

export const BreederProfile = {
  id: 'id',
  contactPerson_mobile: 'contactPersonMobile',
  contactPerson_name: 'contactPersonName',
  img_path: 'logoUrl',
  officeAddress_addressLine1: 'addressLine1',
  officeAddress_addressLine2: 'addressLine2',
  officeAddress_province: 'province',
  officeAddress_zipCode: 'zipCode',
  office_landline: 'officeLandline',
  office_mobile: 'officeMobile',
  produce: 'produce',
  website: 'website',
};