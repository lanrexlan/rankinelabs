# Unsplash migration TODO

Network egress to Unsplash was blocked in this environment (`403 Forbidden` via proxy tunnel), so local binaries could not be fetched in this run.

## Required downloads and target files
- https://unsplash.com/photos/kKYDdRoTydk/download?force=true&w=2000 -> `/Images/hero/legal-page-hero-2400.jpg`
- https://unsplash.com/photos/HPjTJ_w9Bls/download?force=true&w=2000 -> `/Images/hero/about-hero-2400.jpg`
- https://unsplash.com/photos/8gAbl776pc0/download?force=true&w=2000 -> `/Images/hero/programmes-hero-2400.jpg`
- https://unsplash.com/photos/pLh_n9pnRhw/download?force=true&w=2000 -> `/Images/hero/home-slide-1-2400.jpg`
- https://unsplash.com/photos/ugnrXk1129g/download?force=true&w=2000 -> `/Images/hero/home-slide-2-2400.jpg`
- https://unsplash.com/photos/2vcHDUNYui4/download?force=true&w=2000 -> `/Images/hero/home-slide-3-2400.jpg`
- https://unsplash.com/photos/ws6CJRzdOg8/download?force=true&w=2000 -> `/Images/hero/contact-hero-2400.jpg`
- https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=2000&q=80 -> `/Images/hero/knowledge-hub-hero-2400.jpg`
- https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80 -> `/Images/hero/knowledge-hub-cta-ai-2400.jpg`
- https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80 -> `/Images/hero/team-hero-2400.jpg`
- https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=80 -> `/Images/hero/research-hero-lab-2400.jpg`
- https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1600&q=60 -> `/Images/hero/research-cta-computing-2400.jpg`
- https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-ai-construction-1200.jpg`
- https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-data-analysis-1200.jpg`
- https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-environmental-systems-1200.jpg`
- https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-construction-materials-1200.jpg`
- https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-road-infrastructure-1200.jpg`
- https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-pavement-systems-1200.jpg`
- https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80 -> `/Images/site/research-water-snapshot-1-1200.jpg`
- https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-water-monitoring-1200.jpg`
- https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-water-quality-1200.jpg`
- https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-flood-monitoring-1200.jpg`
- https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-water-treatment-1200.jpg`
- https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80 -> `/Images/site/research-satellite-mapping-1200.jpg`

## Post-download optimization plan
- Generate WebP and JPEG variants for 1200w/1800w/2400w where page module size warrants.
- Keep current gradient overlays and background position values unchanged.
