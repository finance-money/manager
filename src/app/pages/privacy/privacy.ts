import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
})
export class Privacy {
  constructor() {
    inject(Seo).update({
      title: 'Privacy Policy | Finance',
      description:
        'How Finance handles your data: a local-first personal finance app with optional iCloud Sync. Learn what is stored and how it is used.',
      path: 'privacy',
    });
  }
}
