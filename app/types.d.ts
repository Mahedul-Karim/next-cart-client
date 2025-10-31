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
