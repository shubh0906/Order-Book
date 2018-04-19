export class FormInput {
    price: number;
    filter:string;
    exchange:string
};

export const Filters = [
  {value: '/price_greater_than', viewValue: 'Price Greater Than'},
  {value: '/exchange', viewValue: 'Exchange'}];

export const Exchange =[
  {value: '/bitfinex', viewValue: 'Bitfinex'},
  {value: '/gdax', viewValue: 'Gdax'}];

export class Ask {
  ask:any[];
}

export class Bid {
  bid:any[];
}
