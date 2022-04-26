import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff';


export interface ITariffService {
  // retrieves all Tariff
  getAll(): Observable<Tariff[]>;

  // adds or update a Tariff
  save(tariff: Tariff): Observable<Tariff>;

  deleteTarif(tarifId: number): Observable<string>;
}
