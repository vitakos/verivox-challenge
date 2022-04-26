import { Component, OnInit, Input } from '@angular/core';
import { Tariff } from '../models/tariff';
import { ApplicationStateService } from '../services/application-state.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {
  @Input()
  tariff: Tariff;

  constructor(public appService: ApplicationStateService) { }

  ngOnInit(): void {
  }

}
