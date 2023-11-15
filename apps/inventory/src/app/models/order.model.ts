enum OrderStatus {
  Processing = 1,
  InTransit = 2,
  Fulfilled = 3,
  Pending = 4,
  Cancelled = 5,
  Returned = 6,
  Delivered = 7,
  AwaitingPayment = 8,
  AwaitingPickup = 9,
  AwaitingShipment = 10,
  Completed = 11,
  Closed = 12,
  Shipped = 13,
  Disputed = 14,
  VerificationRequired = 15,
  PartiallyShipped = 16,
  Refunded = 17,
}

const randomFirstNames = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
  'Jane',
  'Oscar',
  'Peggy',
  'Quentin',
  'Rene',
  'Steve',
  'Trent',
  'Victor',
  'Walter',
  'Xavier',
  'Yvonne',
  'Zelda',
];

const randomLastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Davis',
  'Miller',
  'Wilson',
  'Moore',
  'Taylor',
  'Anderson',
  'Thomas',
  'Jackson',
  'White',
  'Harris',
  'Martin',
  'Thompson',
  'Garcia',
  'Martinez',
  'Robinson',
  'Clark',
  'Rodriguez',
  'Lewis',
  'Lee',
  'Walker',
  'Hall',
  'Allen',
  'Young',
  'Hernandez',
  'King',
  'Wright',
  'Lopez',
  'Hill',
  'Scott',
  'Green',
  'Adams',
  'Baker',
  'Gonzalez',
  'Nelson',
];

export class Order {
  constructor(
    public id: number,
    public customer_name: string,
    public order_date: Date,
    public order_status: string,
    public order_total: number
  ) {
    this.id = id;
    this.order_date = order_date;
    this.order_status = order_status;
    this.order_total = order_total;
  }
}

function generateRandomName(): string {
  const names = [];

  for (let i = 0; i < 30; i++) {
    let name = '';
    name += randomFirstNames[i] + ' ' + randomLastNames[i];
    names.push(name);
  }

  return names[Math.floor(Math.random() * names.length)];
}

function getRandomOrderStatus(): string {
  return OrderStatus[Math.floor(Math.random() * 17) + 1];
}

function getRandomDateWithinPastYear(): Date {
  const currentDate = new Date();
  const pastDate = new Date();
  pastDate.setFullYear(currentDate.getFullYear() - 1);

  const timeDiff = currentDate.getTime() - pastDate.getTime();
  const randomTime = pastDate.getTime() + Math.random() * timeDiff;

  return new Date(randomTime);
}

const fillWithRandomData = (itemCount: number): Order[] => {
  const orders: Order[] = [];

  for (let i = 0; i < itemCount; i++) {
    const randomStatus: string = getRandomOrderStatus()
      .split(/(?=[A-Z])/)
      .join(' ');
    const randomDateWithinPastYear = getRandomDateWithinPastYear();
    const randomName = generateRandomName();
    orders.push(
      new Order(
        i + (i + 1) * 100,
        randomName,
        randomDateWithinPastYear,
        randomStatus,
        Math.floor(Math.random() * 100)
      )
    );
  }
  return orders;
};

export const mockOrders = () => {
  const orders: Order[] = fillWithRandomData(10);
  return orders;
};
