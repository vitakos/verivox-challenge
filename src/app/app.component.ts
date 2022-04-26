import { Component, HostListener } from '@angular/core';
import { ApplicationStateService } from './services/application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verivox-challenge';

  constructor(private appState: ApplicationStateService) { }

  @HostListener('window:resize') onResize() {
    this.appState.update();
  }
}
