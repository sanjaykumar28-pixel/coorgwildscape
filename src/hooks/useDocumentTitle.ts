import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title.includes(BUSINESS_CONFIG.brandName)
      ? title
      : `${title} | ${BUSINESS_CONFIG.brandName}`;
    document.title = fullTitle;

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', fullTitle);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);
}
