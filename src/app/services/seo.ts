import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// TODO: confirm the GitHub Pages URL (or custom domain) once the repo is
// created and Pages is enabled, and keep it in sync with sitemap.xml / robots.txt.
export const SITE_URL = 'https://cpeteradison.github.io/finance-web';
const SITE_NAME = 'Finance';

export interface SeoData {
  /** Full <title> text. */
  title: string;
  /** Meta description (~150–160 chars). */
  description: string;
  /** Route path without leading slash. Use '' for the home page. */
  path: string;
}

/**
 * Sets per-page title, description, and canonical URL. Called from each page
 * component so the values are baked into the prerendered static HTML at build
 * time (good for crawlers).
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update({ title, description, path }: SeoData): void {
    const url = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.setCanonical(url);

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
