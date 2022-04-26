import { Injectable } from '@angular/core';
import { ITariffService } from './tariff.service.interface';
import { Observable, of } from 'rxjs';
import { Tariff } from '../models/tariff';

@Injectable({
    providedIn: 'root'
})
export class TariffService implements ITariffService {
  private mockTariffs: Tariff[] = [
    {
      tarifId: 1,
      name: 'Tariff Name 1',
      upStream: 30,
      downStream: 100,
      price: 210.55,
      benefitIds: [1001, 1002, 1003]
    },
    {
      tarifId: 2,
      name: 'Tariff Name 2',
      upStream: 8,
      downStream: 24,
      price: 144.25,
      benefitIds: [1002, 1003, 1005]
    },
    {
      tarifId: 3,
      name: 'Tariff Name 3',
      upStream: 12,
      downStream: 50,
      price: 160.53,
      benefitIds: [1001, 1004, 1005]
    },
    {
      tarifId: 4,
      name: 'Tariff Name 4',
      upStream: 12,
      downStream: 16,
      price: 123.45,
      benefitIds: [1004, 1005, 1006]
    },
    {
      tarifId: 5,
      name: 'Tariff Name 5',
      upStream: 20,
      downStream: 60,
      price: 180.72,
      benefitIds: [1001, 1002, 1004]
    }
];

  getAll(): Observable<Tariff[]> {
    return of(this.mockTariffs);
  }

  save(tariff: Tariff): Observable<Tariff> {
    if (tariff.tarifId) {
      const newTarif = new Tariff(tariff);
      const index = this.mockTariffs.findIndex((tariff2: Tariff) => tariff.tarifId === tariff2.tarifId);
      if (index < 0) {
        this.mockTariffs[index] = newTarif;
      } else {
        this.mockTariffs.push(newTarif);
      }
      return of(newTarif);
    } else {
      throw new Error('Tariff must have a tarifId.');
    }
  }

  deleteTarif(tarifId: number): Observable<string> {
    const index = this.mockTariffs.findIndex((tariff: Tariff) => tarifId === tariff.tarifId);
    if (index < 0) {
      return of(null as string);
    }
    const [removed] = this.mockTariffs.splice(index, 1);
    return of(removed.name);
  }
}
