import { products } from './products';
import type { Product } from '@/data/products';
export type CaseStudy = {
  flag: string;
  tag: string;
  title: string;
  body: string;
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    flag: '🇩🇪',
    tag: 'Historic Renovation · Nuremberg, Germany',
    title: '18th-century baroque façade retrofit passes KfW 55 standard',
    body:
      'The Denkmalschutz (heritage protection) authority required zero visual change to the sandstone façade. Our aerogel blanket at 22 mm — installed between existing render layers — achieved U=0.19 W/m²K. Project passed BEG audit, qualifying the owner for €38,000 in subsidies.',
    metrics: [
      { value: '22mm', label: 'Total Thickness' },
      { value: '0.19', label: 'U-Value W/m²K' },
      { value: '€38k', label: 'Subsidy Obtained' },
    ],
  },
  {
    flag: '🇳🇱',
    tag: 'New Build Passivhaus · Utrecht, Netherlands',
    title: 'Hemp fiber + SEPS hybrid wall achieves PHI Standard with negative-carbon wall assembly',
    body:
      'Architect specified 80 mm hemp board (HF-50) + 60 mm SEPS for the wall assembly, targeting Passivhaus Institut certification. Achieved U=0.12 W/m²K. Hemp board sequestered an estimated 42 kgCO₂/m³ — the entire project claimed 120 tonnes of carbon credit.',
    metrics: [
      { value: '0.12', label: 'U-Value W/m²K' },
      { value: '120T', label: 'CO₂ Sequestered' },
      { value: 'PHI', label: 'Certified' },
    ],
  },
  {
    flag: '🇦🇹',
    tag: 'Industrial Retrofit · Vienna, Austria',
    title: 'District heating pipeline insulation reduces energy loss by 68%',
    body:
      'Aging pre-insulated pipes in Vienna’s 3rd district were losing 34% of transported energy. Flexible aerogel pipe sections (TC-AG15) were installed without excavation via slip-over method. Annual energy recovery: 8,400 MWh.',
    metrics: [
      { value: '68%', label: 'Loss Reduction' },
      { value: '8.4GWh', label: 'Annual Recovery' },
      { value: '2.3yr', label: 'Payback' },
    ],
  },
  {
    flag: '🇳🇴',
    tag: 'Campervan Fleet · Oslo, Norway',
    title: 'Campervan conversion company cuts interior temperature swing by 31 °C with VIP + aerogel hybrid',
    body:
      'A Norwegian campervan conversion company needed to certify 30 units for Arctic operation (−40 °C). VIP panels in walls + aerogel floor mat reduced heat loss by 78% vs. their previous PIR setup, recovering 12 cm of interior height per vehicle.',
    metrics: [
      { value: '78%', label: 'Heat Loss Cut' },
      { value: '12cm', label: 'Height Gained' },
      { value: '−40°C', label: 'Tested' },
    ],
  },
];

export type Application = {
  tab: string;
  icon: string;
  label: string;
  title: string;
  body: string;
  gradient: string;
  specs: { k: string; v: string }[];
};

export const applications: Application[] = [
  {
    tab: 'Historic Buildings',
    icon: '🏰',
    label: 'Historic Buildings',
    title: 'Maximum R-value, zero millimetre sacrifice',
    body:
      'Heritage buildings demand thermal upgrades without altering façade profiles. Our aerogel blanket system delivers λ=0.015 at only 20–30 mm — passing Germany’s EnEV requirements while maintaining original wall thickness.',
    gradient: 'linear-gradient(135deg,rgba(14,165,233,0.15),rgba(99,102,241,0.10))',
    specs: [
      { k: 'Recommended Product', v: 'Aerogel TC-AG15' },
      { k: 'Typical Thickness', v: '20–25 mm' },
      { k: 'Achieved R-Value', v: '≥ 1.4 m²K/W' },
      { k: 'Compliance', v: 'EnEV / BEG Ready' },
    ],
  },
  {
    tab: 'Industrial Piping',
    icon: '🏭',
    label: 'Industrial Piping',
    title: 'High-temp resistant. Flexible. Fire-safe.',
    body:
      'Petrochemical plants, LNG facilities and district heating pipelines. Our industrial aerogel blanket wraps curved surfaces, withstands 650 °C, and cuts thermal bridging losses by up to 70%.',
    gradient: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(239,68,68,0.10))',
    specs: [
      { k: 'Recommended Product', v: 'Aerogel TC-AG15 (Industrial)' },
      { k: 'Max Temperature', v: '650°C' },
      { k: 'Form Factor', v: 'Blanket / Pipe Section' },
      { k: 'Standard', v: 'ASTM C592 / EN 14304' },
    ],
  },
  {
    tab: 'Campervan / RV',
    icon: '🚐',
    label: 'Campervan / RV Retrofit',
    title: 'Ultra-light. Ultra-thin. Perfect R-value in 10 mm.',
    body:
      'Vanlife and RV builders lose precious interior space to thick insulation. VIP panels at 20–25 mm and aerogel at 10 mm offer R-values competing with 80 mm PIR — keeping every centimetre of living space.',
    gradient: 'linear-gradient(135deg,rgba(34,197,94,0.15),rgba(20,184,166,0.10))',
    specs: [
      { k: 'Recommended Products', v: 'VIP-25 + TC-AG10' },
      { k: 'Space Saving vs PIR', v: '~70mm recovered' },
      { k: 'Weight', v: '~4 kg/m² (VIP)' },
      { k: 'MOQ (DIY-friendly)', v: 'From 10 m²' },
    ],
  },
  {
    tab: 'EV Battery Pack',
    icon: '⚡',
    label: 'EV Battery Thermal Management',
    title: 'Thermal runaway containment. Passed UL 2580.',
    body:
      'EV manufacturers need cell-to-cell insulation that contains thermal runaway while staying compressed below 3 mm. Our aerogel pads resist 1100 °C events, giving safety systems critical time to respond.',
    gradient: 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(14,165,233,0.10))',
    specs: [
      { k: 'Product', v: 'Aerogel EV-Pad EP-03' },
      { k: 'Thickness', v: '0.5 – 5 mm' },
      { k: 'Temp Resistance', v: 'Up to 1100°C' },
      { k: 'Certification', v: 'UL 2580 / UN 38.3' },
    ],
  },
  {
    tab: 'Passivhaus',
    icon: '🏠',
    label: 'Passivhaus / Zero Energy',
    title: 'Bio-based. Carbon-negative. PHPP-ready.',
    body:
      'Passivhaus designers increasingly specify hemp fibre for healthy hygrothermal behaviour, zero off-gassing and embedded carbon credits. Pairs perfectly with SEPS for cost-optimised wall assemblies.',
    gradient: 'linear-gradient(135deg,rgba(34,197,94,0.15),rgba(16,185,129,0.10))',
    specs: [
      { k: 'Recommended Products', v: 'HF-50 + CC-30' },
      { k: 'Carbon Footprint', v: '-50 kgCO₂/m³' },
      { k: 'Humidity Buffering', v: 'Class 3 MBV' },
      { k: 'Certifications', v: 'PHI / BREEAM / LEED' },
    ],
  },
];

export type Industry = {
  slug: string;
  icon: string;
  name: string;
  headline: string;
  body: string;
  gradient: string;
  productSlugs: string[];
  specs: { k: string; v: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'historic-restoration',
    icon: '🏰',
    name: 'Historic Restoration',
    headline: 'Insulate without touching the façade',
    body:
      'Listed-building authorities in Germany, the Netherlands and Austria forbid any change to façade profiles, window reveals or roof pitch. Internal insulation trades interior volume for performance — until the wall gets so thick it displaces floor area. Aerogel solves this: at 22 mm it reaches U=0.19 W/m²K where mineral wool needs 120 mm.',
    gradient: 'linear-gradient(135deg,rgba(14,165,233,0.16),rgba(99,102,241,0.08))',
    productSlugs: ['aerogel-blanket-tc-ag15', 'vacuum-insulation-panel-vip-25'],
    specs: [
      { k: 'Typical Specification', v: 'Aerogel TC-AG15 @ 20–25 mm' },
      { k: 'Achieved U-Value', v: '0.19 W/m²K' },
      { k: 'Subsidy Eligibility', v: 'KfW 55 / BEG / EnEV' },
      { k: 'Lead Time', v: '12 working days' },
    ],
  },
  {
    slug: 'new-build-residential',
    icon: '🏗️',
    name: 'New Build Residential',
    headline: 'Hit zero-energy targets without blowing the budget',
    body:
      'A Passivhaus envelope normally needs premium materials at premium prices. Our hybrid approach pairs bio-based hemp board for the inner, moisture-buffering layer with SEPS graphite EPS for the cost-optimised outer layer, reaching PHI certification at roughly 40% of the cost of an all-vapour-open premium system.',
    gradient: 'linear-gradient(135deg,rgba(34,197,94,0.16),rgba(20,184,166,0.08))',
    productSlugs: ['hemp-fiber-board-hf-50', 'seps-graphite-eps-se-031'],
    specs: [
      { k: 'Typical Specification', v: 'HF-50 80 mm + SE-031 60 mm' },
      { k: 'Achieved U-Value', v: '0.12 W/m²K' },
      { k: 'Carbon Balance', v: '−42 kgCO₂/m³' },
      { k: 'Certification', v: 'PHI / BREEAM / LEED' },
    ],
  },
  {
    slug: 'industrial-petrochemical',
    icon: '🏭',
    name: 'Industrial & Petrochemical',
    headline: 'Stop losing energy through the pipework',
    body:
      'Petrochemical plants, LNG terminals and district-heating networks lose a third of their transported energy to pipe insulation — most of it at flanges, valves and supports where thermal bridging dominates. Our pipe-section aerogel wraps those interruptions and cuts the loss by up to 70%, installed slip-over without excavation.',
    gradient: 'linear-gradient(135deg,rgba(245,158,11,0.16),rgba(239,68,68,0.08))',
    productSlugs: ['aerogel-blanket-tc-ag15', 'carbonised-cork-board-cc-30'],
    specs: [
      { k: 'Max Service Temperature', v: '650 °C' },
      { k: 'Loss Reduction', v: 'Up to 70%' },
      { k: 'Installation', v: 'Slip-over, no excavation' },
      { k: 'Standard', v: 'ASTM C592 / EN 14304' },
    ],
  },
  {
    slug: 'cold-chain-logistics',
    icon: '🥶',
    name: 'Cold Chain & Logistics',
    headline: 'Keep refrigeration energy out of your P&L',
    body:
      'Cold rooms and refrigerated vehicles are sized by U-value: every 0.01 W/m²K above target shows up directly as compressor run-time. VIP panels at 20–30 mm let you hit −25 °C setpoints in rooms where the envelope depth simply does not exist. Class A1 cores mean no additional fire strategy is needed.',
    gradient: 'linear-gradient(135deg,rgba(99,102,241,0.16),rgba(14,165,233,0.08))',
    productSlugs: ['vacuum-insulation-panel-vip-25', 'carbonised-cork-board-cc-30'],
    specs: [
      { k: 'Typical Specification', v: 'VIP-25 @ 25 mm' },
      { k: 'Achieved U-Value', v: '0.07 W/m²K' },
      { k: 'Fire Class', v: 'A1 non-combustible' },
      { k: 'Service Life', v: '25+ years, no degradation' },
    ],
  },
  {
    slug: 'marine-rv',
    icon: '⛵',
    name: 'Marine & RV',
    headline: 'Recover interior space you thought you had lost',
    body:
      'Boat and camper builders give up 80–120 mm of living space to PIR just to reach an acceptable R-value. VIP at 25 mm and aerogel at 10 mm match or beat that performance, recovering roughly 70 mm of headroom and floor area per unit while dropping the kerb weight by 60%.',
    gradient: 'linear-gradient(135deg,rgba(34,197,94,0.16),rgba(245,158,11,0.08))',
    productSlugs: ['vacuum-insulation-panel-vip-25', 'aerogel-blanket-tc-ag15'],
    specs: [
      { k: 'Typical Specification', v: 'VIP-25 + TC-AG10' },
      { k: 'Space Recovered', v: '~70 mm per surface' },
      { k: 'Panel Weight', v: '~4 kg/m²' },
      { k: 'Tested To', v: '−40 °C operating' },
    ],
  },
  {
    slug: 'ev-battery',
    icon: '⚡',
    name: 'EV & Energy Storage',
    headline: 'Contain thermal runaway at 0.5 mm',
    body:
      'Cell-to-pack architectures need inter-cell barriers that survive a 1100 °C propagation event without adding meaningful pack mass or volume. Our EP-03 aerogel pads compress to under 3 mm, carry UL 2580 and UN 38.3 documentation, and are supplied as cut-to-drawing parts so they drop straight into existing pack tooling.',
    gradient: 'linear-gradient(135deg,rgba(14,165,233,0.16),rgba(99,102,241,0.08))',
    productSlugs: ['aerogel-blanket-tc-ag15'],
    specs: [
      { k: 'Product', v: 'Aerogel EV-Pad EP-03' },
      { k: 'Compressed Thickness', v: '0.5 – 3 mm' },
      { k: 'Event Resistance', v: 'Up to 1100 °C' },
      { k: 'Certification', v: 'UL 2580 / UN 38.3' },
    ],
  },
];

export type Cert = {
  badge: string;
  name: string;
  desc: string;
  tone?: 'tech' | 'eco' | 'warm' | 'danger';
};

export const certifications: Cert[] = [
  { badge: 'CE', name: 'CE Marking', desc: 'EU Declaration of Performance' },
  { badge: 'EN', name: 'EN 13163', desc: 'EPS Thermal Insulation' },
  { badge: 'ISO', name: 'ISO 9001', desc: 'Quality Management System' },
  { badge: '🌿', name: 'REACH', desc: 'No Hazardous Substances', tone: 'eco' },
  { badge: '🔥', name: 'EN 13501', desc: 'Fire Classification A1–B1', tone: 'danger' },
  { badge: 'RoHS', name: 'RoHS 3', desc: 'Hazardous Substances', tone: 'warm' },
];

export const tickerItems = [
  { strong: 'λ ≤ 0.016 W/(m·K)', rest: 'Aerogel Blanket' },
  { strong: 'VIP 0.004 W/(m·K)', rest: 'Vacuum Insulation Panel' },
  { strong: 'Fire Rating A1', rest: 'Non-Combustible Series' },
  { strong: 'CE / EN 13163', rest: 'Full EU Compliance' },
  { strong: 'MOQ 50 m²', rest: 'Small Order Accepted' },
  { strong: 'CIF Rotterdam', rest: 'DDP Available' },
  { strong: 'Free Sample', rest: 'Client Pays Freight' },
  { strong: '15,000+ Projects', rest: 'Across 40+ Countries' },
];

export const stats = [
  { count: 15000, suffix: '+', label: 'Projects Completed' },
  { count: 40, suffix: '+', label: 'Countries Served' },
  { count: 98, suffix: '%', label: 'Compliance Rate' },
  { count: 24, suffix: 'h', label: 'Quote Response Time' },
];

export const painPoints = [
  {
    icon: '🔬',
    iconClass: 'tech',
    label: 'Ultra-Thin & High-Tech',
    labelClass: '',
    title: 'Space-constrained? Heritage façade?',
    body:
      'When every millimetre counts — historic buildings, tiny apartments, caravan retrofits — aerogel and VIPs deliver 3–5× the thermal resistance of standard materials at ≤25 mm thickness.',
    cta: 'Explore Aerogel / VIP →',
    linkColor: 'var(--c-tech)',
    href: '/products#vip',
  },
  {
    icon: '🌿',
    iconClass: 'eco',
    label: 'Eco-Friendly & Bio-Based',
    labelClass: 'label-eco',
    title: 'Carbon-neutral mandate? LEED target?',
    body:
      'Hemp fibre and carbonised cork deliver negative-carbon footprints, zero VOC and healthy indoor air — meeting BREEAM, LEED and Passivhaus bio-material requirements out of the box.',
    cta: 'Explore Hemp / Cork →',
    linkColor: 'var(--c-eco)',
    href: '/products#hemp',
  },
  {
    icon: '⚡',
    iconClass: 'cost',
    label: 'Cost-Effective & Systems',
    labelClass: '',
    title: 'Large-scale ETICS? Tight budget?',
    body:
      'SEPS graphite EPS cuts heating loss by 20% vs. white EPS. Combined with underfloor mushroom boards, mesh, adhesive and anchor systems — one supplier, one SKU list, one shipping container.',
    cta: 'Explore SEPS / Systems →',
    linkColor: 'var(--c-warm)',
    href: '/products#seps',
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
