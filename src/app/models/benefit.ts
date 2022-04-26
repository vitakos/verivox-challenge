export class Benefit {
  benefitId: number;
  caption: string;
  description: string;

  constructor(data: any) {
    this.benefitId = data.benefitId;
    this.caption = data.caption || '';
    this.description = data.description || '';
  }
}
