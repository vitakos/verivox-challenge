import { Benefit } from './benefit';

export class Tariff {
  tarifId: number;
  name: string;
  downStream: number;
  upStream: number;
  price: number;
  benefitIds: number[];
  benefits?: Benefit[];

  constructor(data: any) {
    this.tarifId = data.tarifId;
    this.name = data.name;
    this.downStream = data.downStream;
    this.upStream = data.upStream;
    this.price = data.price;
    this.benefitIds = data.benefitIds;
    this.benefits = null;
  }
}
