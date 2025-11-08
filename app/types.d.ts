type User = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  addresses: Array<{
    country: string;
    city: string;
    address1: string;
    address2: string;
    zipCode: string;
    addressType: string;
    createdAt: Date;
  }>;
  role: string;
  avatar: {
    public_id: string;
    url: string;
  };
};

type Shop = {
  _id: string;
  name: string;
  email: string;
  password: string;
  description: string;
  address: string;
  phoneNumber: number;
  role: string;
  avatar: {
    public_id: string;
    url: string;
  };
  withdrawMethod: any;
  availableBalance: number;
  transections: {
    id: string;
    amount: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  zipCode: number;
  createdAt: Date;
};

type EventType = {
  _id: string;
  name: string;
  description: string;
  category: string;
  startDate: Date;
  endDate: Date;
  status: string;
  tags: string;
  price: number;
  discountPrice: number;
  stock: number;
  images: {
    public_id: string;
    url: string;
  }[];

  shop: Shop;
  sold_out: number;
  createdAt: Date;
};

type Withdraw = {
  _id: string;
  seller: Shop;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

type Product = {
  _id: string;
  name: string;
  description: string;
  category: string;
  tags: string;
  reviews: {
    user: any;
    rating: number;
    comment: string;
    productId: string;
    createdAt: Date;
  }[];
  ratings: number;
  price: number;
  stock: number;
  images: {
    public_id: string;
    url: string;
  }[];
  shop: Shop;
  sold_out: number;
  createdAt: Date;
};

type Order = {
  _id: string;
  cart: any[];
  shippingAddress: any;
  user: any;
  totalPrice: number;
  status: string;
  paymentInfo: {
    id: string;
    status: string;
    type: string;
  };
  paidAt: Date;
  deliveredAt: Date;
  createdAt: Date;
};

type Message = {
  _id: string;
  conversationId: string;
  text: string;
  sender: string;
  images: {
    public_id: string;
    url: string;
  };
};

type Coupon = {
  _id: string;
  name: string;
  value: number;
  shop: Shop;
  usedFor: number;
  maxUsage: number;
  createdAt: Date;
};

type Conversation = {
  _id: string;
  groupTitle: string;
  userId: User;
  participentId: Shop;
  lastMessage: string;
  lastMessageId: string;
};

type Address = {
  _id: string;
  country: string;
  city: string;
  address1: string;
  address2: string;
  zipCode: number;
  addressType: string;
  createdAt: Date;
};
