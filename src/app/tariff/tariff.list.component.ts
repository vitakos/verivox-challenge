import { Component, OnInit } from '@angular/core';
import { Tariff } from '../models/tariff';
import { TariffService } from '../services/tariff.service';
import { BenefitService } from '../services/benefit.service';
import { ApplicationStateService } from '../services/application-state.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff.list.component.html',
  styleUrls: ['./tariff.list.component.scss']
})
export class TariffListComponent implements OnInit {
  tariffs: Tariff[];
  selFilter = 'tarifId';
  selFilterDir = 'asc';

  constructor(
    private tariffService: TariffService,
    private benefitService: BenefitService
  ) { }

  ngOnInit(): void {
   this.tariffService.getAll().subscribe(tariffs => {
      this.tariffs = tariffs;
      this.tariffs.forEach(tariff => {
        this.benefitService.getForTariff(tariff).subscribe(items => tariff.benefits = items);
      });
    });
  }

  resort() {
    this.tariffs = this.tariffs.sort((a: Tariff, b: Tariff) => {
      const val1 = a[this.selFilter];
      const val2 = b[this.selFilter];
      if (this.selFilterDir === 'desc') {
        return val2 - val1;
      }
      return val1 - val2;
    });
  }

  changeFilter(evt: any) {
    this.selFilter = evt.target.value;
    this.resort();
  }

  changeFilterDir(evt: any) {
    this.selFilterDir = evt.target.value;
    this.resort();
  }
}
