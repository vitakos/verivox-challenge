import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApplicationStateService {
  private stateType = 'desktop';

  constructor() {
    this.update();
  }

  public getIsMobile(): boolean {
    return this.stateType === 'mobile';
  }

  public getIsTablet(): boolean {
    return this.stateType === 'tablet';
  }

  public getIsDesktop(): boolean {
    return this.stateType === 'desktop';
  }

  public update(): void {
    const iwidth = document.body.clientWidth;
    let newState = 'desktop';
    if (iwidth < 768) {
      newState = 'mobile';
    } else if (iwidth < 1024) {
      newState = 'tablet';
    }
    if (newState !== this.stateType) {
      this.stateType = newState;
    }
  }
}
