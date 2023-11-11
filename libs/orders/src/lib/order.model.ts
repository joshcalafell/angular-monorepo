export class Order {
  constructor(
    public id: number,
    public customer_name: string,
    public order_date: string,
    public order_status: string,
    public order_total: number
  ) {
    this.id = id;
    this.order_date = order_date;
    this.order_status = order_status;
    this.order_total = order_total;
  }
}
