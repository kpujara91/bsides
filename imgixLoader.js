'use client'

const BASE_URL = 'https://staging.multiqos.com';

export default function imgixLoader({ src, width, quality }) {
    const url = new URL(src, BASE_URL);

    const params = url.searchParams;
    
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 50).toString())
    return url.pathname;
}