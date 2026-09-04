import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-support',
  templateUrl: './support.html',
})
export class Support {
  constructor() {
    inject(Seo).update({
      title: 'Support | Finance',
      description: 'Get help with Finance: bug reports, feature requests, and general feedback.',
      path: 'support',
    });
  }
}
