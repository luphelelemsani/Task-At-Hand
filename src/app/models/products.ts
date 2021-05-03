export class Products {
  id: string;
  name: string;
  category: string;
  price: string;
  currency: string;
  image: string;
  bestseller: boolean;
  featured: boolean;

  constructor(
    id: string,
    name: string,
    category: string,
    price: string,
    currency: string,
    image: string,
    bestseller: boolean,
    featured: boolean
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.currency = currency;
    this.image = image;
    this.bestseller = bestseller;
    this.featured = featured;
  }
}
