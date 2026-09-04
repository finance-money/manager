import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.html',
})
export class Terms {
  constructor() {
    inject(Seo).update({
      title: 'Terms of Use | Finance',
      description: 'The terms that apply to using the Finance app.',
      path: 'terms',
    });
  }
}
