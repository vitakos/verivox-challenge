import { Injectable } from '@angular/core';
import { IBenefitService } from './benefit.service.interface';
import { Observable, of } from 'rxjs';
import { Benefit } from '../models/benefit';
import { Tariff } from '../models/tariff';

@Injectable({
    providedIn: 'root'
})
export class BenefitService implements IBenefitService {
  private mockBenefits: Benefit[] = [
    {
      benefitId: 1001,
      caption: 'Tariff Benefit 1',
      description: 'Free Service 1'
    },
    {
      benefitId: 1002,
      caption: 'Tariff Benefit 2',
      description: 'Free Service 2'
    },
    {
      benefitId: 1003,
      caption: 'Tariff Benefit 3',
      description: 'Free Service 3'
    },
    {
      benefitId: 1004,
      caption: 'Tariff Benefit 4',
      description: 'Free Service 4'
    },
    {
      benefitId: 1005,
      caption: 'Tariff Benefit 5',
      description: 'Free Service 5'
    },
    {
      benefitId: 1006,
      caption: 'Tariff Benefit 6',
      description: 'Free Service 6'
    }
  ];

  get(benefitId: number): Observable<Benefit> {
    const index = this.mockBenefits.findIndex((benefit: Benefit) => benefitId === benefit.benefitId);
    return of(index < 0 ? null as Benefit : this.mockBenefits[index]);
  }

  getForTariff(tariff: Tariff): Observable<Benefit[]> {
    const values = this.mockBenefits.filter(benefit => tariff.benefitIds.indexOf(benefit.benefitId) >= 0);
    return of(values);
  }

  save(benefit: Benefit): Observable<Benefit> {
    if (benefit.benefitId) {
      const newBenefit = new Benefit(benefit);
      const index = this.mockBenefits.findIndex((benefit2: Benefit) => benefit.benefitId === benefit2.benefitId);
      if (index < 0) {
        this.mockBenefits[index] = newBenefit;
      } else {
        this.mockBenefits.push(newBenefit);
      }
      return of(newBenefit);
    } else {
      throw new Error('Benefit must have a benefitId.');
    }
  }

  deleteBenefit(benefitId: number): Observable<string> {
    const index = this.mockBenefits.findIndex((benefit: Benefit) => benefitId === benefit.benefitId);
    if (index < 0) {
      return of(null as string);
    }
    const [removed] = this.mockBenefits.splice(index, 1);
    return of(removed.caption);
  }
}
