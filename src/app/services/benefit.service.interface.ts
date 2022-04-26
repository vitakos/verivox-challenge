import { Observable } from 'rxjs';
import { Benefit } from '../models/benefit';
import { Tariff } from '../models/tariff';

export interface IBenefitService {
  // Retrieves one benefit
  get(benefitId: number): Observable<Benefit>;

  getForTariff(tariff: Tariff): Observable<Benefit[]>;

  // adds or update a benefit, benefitId is required
  save(benefit: Benefit): Observable<Benefit>;

  // removes the benefit identidied by benefitId
  deleteBenefit(benefitId: number): Observable<string>;
}
