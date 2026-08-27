// Real cars24.com.au blog content. Covers are the v4 illustration exports,
// copied into /public/covers/australia. Categories mirror the AU site's own
// taxonomy: Car Guide, Car Advice, Car News, Car Review.
const cover = (name, alt) => ({
  url: `/covers/australia/${name}.png`,
  alternativeText: alt,
})

export const auPosts = [
  {
    id: 'suvs-ground-clearance', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 SUVs with the highest ground clearance in Australia',
    summary: 'Ranked by ground clearance, off-road usability and real-world practicality — the SUVs that clear ruts, gutters and rough tracks with ease.',
    thumbnail: cover('best-used-suvs-in-australia-v3-image1', 'SUV on rough terrain'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-27 09:00:00', readTime: '9 min read',
    href: 'https://www.cars24.com.au/car-guide/top-10-suvs-with-highest-ground-clearance-australia-2026/',
  },
  {
    id: 'affordable-sedans', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: '5 best affordable sedans under $30k in Australia',
    summary: 'Affordable sedans still offer strong value in Australia — here are five that balance running costs, comfort and reliability under $30,000.',
    thumbnail: cover('top-10-most-affordable-cars-of-2025-in-australia-v3-image1', 'Affordable sedan'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-23 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-guide/5-best-affordable-sedans-under-30k-australia/',
  },
  {
    id: 'evs-largest-boot-space', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 5 EVs with the largest boot space in Australia (2026)',
    summary: 'Ranked by boot space, practicality and everyday usability for Australian families, road trips and active lifestyles.',
    thumbnail: cover('what-to-check-before-buying-a-used-ev-in-2026-v3-image1', 'Electric vehicles in the Australian Hyundai line-up'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-22 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-guide/top-5-evs-with-largest-boot-space-australia-2026/',
  },
  {
    id: 'new-cars-coming', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'New cars on the way to Australia to look out for',
    summary: 'A wave of EVs, PHEVs and SUVs is headed for Australia — the upcoming models worth waiting for before you buy.',
    thumbnail: cover('top-10-affordable-performance-cars-in-australia-in-2026-v3-image1', 'New cars arriving'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-21 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-guide/new-cars-on-the-way-to-australia-2026/',
  },
  {
    id: 'cheapest-new-suvs', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 7 cheapest new SUVs under $30K in Australia',
    summary: 'Affordable SUV buyers now have more choice than ever — seven of the cheapest new SUVs you can drive away for under $30,000.',
    thumbnail: cover('best-used-suvs-in-australia-for-2025-v3-image1', 'Compact SUV'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-20 09:00:00', readTime: '8 min read',
    href: 'https://www.cars24.com.au/car-guide/top-7-cheapest-new-suvs-under-30k-australia/',
  },
  {
    id: 'luxury-evs', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 5 luxury EVs in Australia for 2026',
    summary: 'Premium electric motoring in Australia, ranked — five luxury EVs that pair long range with genuine cabin quality.',
    thumbnail: cover('what-to-check-before-buying-a-used-ev-in-2026-v3-image1', 'Luxury electric car'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-18 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-guide/top-5-luxury-evs-australia-2026/',
  },
  {
    id: 'hybrid-suvs', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 hybrid SUVs in Australia in 2026',
    summary: 'Fuel savings without range anxiety — the hybrid SUVs leading Australia in efficiency, space and everyday value.',
    thumbnail: cover('top-10-hybrid-suvs-in-australia-in-2026-v3-image1', 'Hybrid SUV'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-15 09:00:00', readTime: '9 min read',
    href: 'https://www.cars24.com.au/car-guide/best-hybrid-suvs-australia-2026/',
  },
  {
    id: 'family-suvs-50k', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 family SUVs under $50k in Australia',
    summary: 'Space, safety and value for growing families — ten SUVs that do the school run and the road trip for under $50,000.',
    thumbnail: cover('top-10-family-suvs-under-50k-in-australia-v3-image1', 'Family SUV'),
    authors: [{ name: 'Sylvie C.' }], publishedAt: '2026-06-12 09:00:00', readTime: '8 min read',
    href: 'https://www.cars24.com.au/car-guide/top-10-family-suvs-under-50k-in-australia/',
  },
  {
    id: 'seven-seater-suvs', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Best 7-seater SUVs under $50,000 in Australia',
    summary: 'Seven seats without the seven-figure price — the best three-row SUVs in Australia priced below $50,000.',
    thumbnail: cover('7-seater-suvs-in-australia-under-50000-specs-features-v3-image1', 'Seven-seater SUV'),
    authors: [{ name: 'Utsav Das' }], publishedAt: '2026-06-08 09:00:00', readTime: '10 min read',
    href: 'https://www.cars24.com.au/car-guide/7-seater-suvs/',
  },
  {
    id: 'fuel-efficient', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: '10 most fuel-efficient cars in Australia',
    summary: 'Lower your running costs at the bowser — the ten most fuel-efficient cars you can buy in Australia right now.',
    thumbnail: cover('10-most-fuel-efficient-cars-australia-cars24-australia-v3-image1', 'Fuel-efficient car'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-06-05 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-guide/10-most-fuel-efficient-cars-australia/',
  },
  {
    id: 'best-used-suvs-2025', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Best used SUVs in Australia for 2025',
    summary: 'From compact crossovers to rugged 4WDs — the used SUVs that hold value and stay dependable on Australian roads.',
    thumbnail: cover('best-used-suvs-in-australia-for-2025-v3-image1', 'Used SUV lineup'),
    authors: [{ name: 'Megan C' }], publishedAt: '2026-05-30 09:00:00', readTime: '11 min read',
    href: 'https://www.cars24.com.au/car-guide/10-best-used-suvs-australia-2025/',
  },
  {
    id: 'used-family-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Best used family cars in Australia for reliability',
    summary: 'The used family cars that keep going — models proven for reliability, space and low cost of ownership.',
    thumbnail: cover('best-used-family-cars-in-australia-for-reliability-v3-image1', 'Used family car'),
    authors: [{ name: 'Megan C' }], publishedAt: '2026-05-26 09:00:00', readTime: '9 min read',
    href: 'https://www.cars24.com.au/car-guide/best-used-family-cars-australia-reliability/',
  },
  {
    id: 'small-used-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Best small used cars to buy in Australia',
    summary: 'Easy to park, cheap to run — the best small used cars for first-time buyers and city commuters in Australia.',
    thumbnail: cover('best-small-used-cars-to-buy-in-australia-v3-image1', 'Small used car'),
    authors: [{ name: 'Megan C' }], publishedAt: '2026-05-22 09:00:00', readTime: '8 min read',
    href: 'https://www.cars24.com.au/car-guide/best-small-used-cars-australia/',
  },
  {
    id: 'micro-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Best micro cars in Australia',
    summary: 'Tight parking, efficient commutes and shopping practicality — the best micro cars for Australian city driving.',
    thumbnail: cover('best-micro-cars-in-australia-v3-image1', 'Micro city car'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-05-18 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-guide/best-micro-cars-in-australia/',
  },
  {
    id: 'reliable-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 most reliable cars in Australia',
    summary: 'Confidence you can count on — the cars with the strongest reliability records across body types in Australia.',
    thumbnail: cover('top-10-most-reliable-cars-in-australia-v3-image1', 'Reliable car lineup'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-05-14 09:00:00', readTime: '9 min read',
    href: 'https://www.cars24.com.au/car-guide/top-10-most-reliable-cars-australia/',
  },
  {
    id: 'road-trip-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 best cars for road trips in Australia',
    summary: 'Comfort, range and boot space for the long haul — the cars built for coastal runs and outback highways.',
    thumbnail: cover('top-10-best-cars-for-road-trips-in-australia-v3-image1', 'Car ready for road trip'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-05-10 09:00:00', readTime: '8 min read',
    href: 'https://www.cars24.com.au/car-guide/best-cars-for-road-trips-australia-2025/',
  },
  {
    id: 'towing-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: '10 best cars for towing in 2025',
    summary: 'Serious towing capacity for caravans, boats and trailers — ten vehicles that pull their weight in Australia.',
    thumbnail: cover('10-best-cars-for-towing-in-2025-v3-image1', 'Vehicle towing a trailer'),
    authors: [{ name: 'Utsav Das' }], publishedAt: '2026-04-21 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-guide/10-best-cars-for-towing-in-2025/',
  },
  {
    id: 'dual-cab-utes', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 4WD dual-cab utes in Australia for 2025',
    summary: 'Work to weekend — the dual-cab 4WD utes that handle the job site, the tow bar and the off-road track.',
    thumbnail: cover('top-10-4wd-dual-cab-utes-in-australia-for-2025-v3-image1', '4WD dual-cab ute'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-04-14 09:00:00', readTime: '10 min read',
    href: 'https://www.cars24.com.au/car-guide/top-10-4wd-dual-cab-utes-australia-2025/',
  },
  {
    id: 'top-4wds', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 10 4WDs in Australia for 2025',
    summary: 'Built for adventure — the 4WDs that tackle rocky, coastal and outback terrain across Australia.',
    thumbnail: cover('top-10-4wds-in-australia-for-2025-v3-image1', '4WD on rugged terrain'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-04-07 09:00:00', readTime: '10 min read',
    href: 'https://www.cars24.com.au/car-guide/top-10-4wds-australia-2025/',
  },
  {
    id: 'fastest-cars', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'Top 5 fastest cars in the world in 2026',
    summary: 'The fastest production cars on earth in 2026 — hypercars pushing the limits of speed and aerodynamics.',
    thumbnail: cover('top-5-fastest-cars-in-the-world-in-2026-v3-image1', 'Hypercar at speed'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-04-02 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-guide/top-5-fastest-cars-in-the-world-in-2026/',
  },
  {
    id: 'bmw-ev-lineup', category: 'Car Guide', categoryKey: 'guide', region: 'Australia',
    title: 'BMW EV line-up in Australia 2026',
    summary: 'Every BMW electric model available in Australia for 2026, with range, positioning and who each one suits.',
    thumbnail: cover('5-best-ev-vans-in-australia-in-2026-v3-image1', 'BMW electric car'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-03-28 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-guide/bmw-ev-lineup-australia-2026/',
  },
  {
    id: 'byd-comparison', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'BYD Australia market comparison in 2026',
    summary: 'How BYD stacks up in the Australian market in 2026 — models, value and where the brand fits against rivals.',
    thumbnail: cover('best-selling-chinese-cars-in-australia-2025-cars24-australia-v3-image1', 'BYD electric vehicle'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-03-24 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-advice/byd-australia-market-comparison-in-2026/',
  },
  {
    id: 'revs-check-guide', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'The Ultimate Guide to a REVS Check',
    summary: 'A REVS check is one of the most important steps when buying or selling a used car — what it shows and how to run one.',
    thumbnail: cover('revs-check-explained-how-to-check-a-used-car-for-finance-risk-v3-image1', 'Used-car finance check'),
    authors: [{ name: 'Ella J' }], publishedAt: '2025-11-08 09:00:00', readTime: '8 min read',
    href: 'https://www.cars24.com.au/car-advice/revs-check-guide-in-australia/',
  },
  {
    id: 'revs-check-nsw', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'How to do a REVS check in NSW',
    summary: 'A step-by-step guide to verifying a used car in NSW for finance owing, theft and write-off history before you buy.',
    thumbnail: cover('revs-check-nsw-guide-how-to-verify-a-used-car-v3-image1', 'NSW vehicle verification'),
    authors: [{ name: 'Ella J' }], publishedAt: '2025-12-09 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-advice/how-to-do-revs-check-in-nsw/',
  },
  {
    id: 'rego-renewal', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'A guide to rego renewal in Australia and why it matters',
    summary: 'A complete overview of vehicle registration renewal across Australia — the process, timing and why staying current matters.',
    thumbnail: cover('a-guide-to-rego-renewal-in-australia-and-why-it-matters-v3-image1', 'Rego renewal paperwork'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-04-16 09:00:00', readTime: '11 min read',
    href: 'https://www.cars24.com.au/car-advice/guide-to-rego-renewal-in-australia-and-why-matters/',
  },
  {
    id: 'used-car-warranty', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'Do used cars come with a warranty in Australia?',
    summary: 'What cover you actually get on a used car in Australia — statutory warranties, dealer cover and what to check before you sign.',
    thumbnail: cover('do-used-cars-come-with-a-warranty-in-australia-2026-guide-v3-image1', 'Used car under warranty'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-03-20 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-advice/do-used-cars-come-with-a-warranty/',
  },
  {
    id: 'ev-resale', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'EV resale value and depreciation in Australia',
    summary: 'How electric cars hold their value in Australia — the factors driving EV depreciation and how to protect resale.',
    thumbnail: cover('ev-resale-value-and-depreciation-in-australia-v3-image1', 'EV resale value'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-03-16 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-advice/resale-value-of-evs/',
  },
  {
    id: 'too-many-kms', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'How many kms is too many for a used car?',
    summary: 'Odometer reading is only half the story — how to judge a used car on condition, service history and how it was driven.',
    thumbnail: cover('how-many-kms-is-too-many-for-a-used-car-a-guide-for-australian-buyers-v3-image1', 'Used car inspection'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-03-12 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-advice/how-many-kms-is-too-many-for-a-used-car/',
  },
  {
    id: 'ancap-ratings', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'ANCAP safety ratings explained before buying used',
    summary: 'What ANCAP star ratings really mean and how to use them when shopping for a safe used car in Australia.',
    thumbnail: cover('used-car-inspection-checklist-what-to-inspect-first-v3-image1', 'Car safety rating'),
    authors: [{ name: 'Team Cars24' }], publishedAt: '2026-03-08 09:00:00', readTime: '7 min read',
    href: 'https://www.cars24.com.au/car-advice/ancap-safety-ratings-explained/',
  },
  {
    id: 'service-history', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: '7 reasons service history matters more than low mileage',
    summary: 'Maintenance records tell you more than the odometer — seven reasons service history is the number that counts.',
    thumbnail: cover('10-most-affordable-hybrid-cars-of-2025-prices-and-specs-detailed-v3-image1', 'Service logbook'),
    authors: [{ name: 'Ash' }], publishedAt: '2026-07-13 09:00:00', readTime: '6 min read',
    href: 'https://www.cars24.com.au/car-advice/why-service-history-matters-more-than-low-kilometres/',
  },
  {
    id: 'luxury-car-tax', category: 'Car Advice', categoryKey: 'advice', region: 'Australia',
    title: 'Luxury Car Tax in Australia 2026: thresholds, rules and exemptions',
    summary: 'The current Luxury Car Tax thresholds, how it is calculated and the exemptions that can reduce or remove it in 2026.',
    thumbnail: cover('trade-in-your-car-in-australia-best-practices-for-top-value-v3-image1', 'Luxury car tax'),
    authors: [{ name: 'Megan C' }], publishedAt: '2026-06-29 09:00:00', readTime: '8 min read',
    href: 'https://www.cars24.com.au/car-advice/luxury-car-tax-australia-2026-thresholds-changes/',
  },
]

// Copy source: `au/Australia Blogs - Data sheet.xlsx` → `Selected Blogs`.
// Only editorial fields are imported from the sheet. Its remote Hero Image
// column is intentionally ignored so every card continues to use `au/v4` art.
const selectedBlogContent = {
  'suvs-ground-clearance': {
    title: 'Top 10 SUVs with the highest ground clearance in Australia',
    summary: 'Looking for a high ground clearance SUV in Australia? These 10 models offer strong off-road capability and touring confidence in 2026.',
  },
  'affordable-sedans': {
    title: '5 best affordable sedans under $30K in Australia (2026)',
    summary: 'Looking for an affordable sedan in Australia? These five sedans under $30,000 combine value, comfort and everyday usability for budget-conscious buyers.',
  },
  'evs-largest-boot-space': {
    title: 'Top 5 EVs with the largest boot space in Australia (2026)',
    summary: 'Ranked by boot space, practicality and everyday usability for Australian families, road trips and active lifestyles.',
  },
  'new-cars-coming': {
    title: 'New cars on the way to Australia to look out for (2026)',
    summary: 'Explore new cars coming to Australia, including upcoming EVs, PHEVs and SUVs from Nissan, Hyundai, Ford, Volkswagen, BYD, Chery and more.',
  },
  'cheapest-new-suvs': {
    title: 'Top 7 cheapest new SUVs under $30K in Australia in 2026',
    summary: 'Compare the seven cheapest SUVs under $30,000 in Australia for 2026, including pricing, features, recent launches and the best-value budget SUV.',
  },
  'luxury-evs': {
    title: 'Top 5 luxury EVs in Australia for 2026',
    summary: 'Compare Australia’s top luxury EVs for 2026, including the Porsche Taycan, BMW i7, Mercedes-Benz EQE, Zeekr 009 and Lotus Eletre.',
  },
  'hybrid-suvs': {
    title: 'Top 10 hybrid SUVs in Australia in 2026',
    summary: 'Looking for the best hybrid SUV in Australia for 2026? These top models combine fuel efficiency, performance and practicality for modern drivers.',
  },
  'family-suvs-50k': {
    title: 'Top 10 family SUVs under $50K in Australia',
    summary: 'Explore the top 10 family SUVs under $50K in Australia, combining safety, space, technology and value for money.',
  },
  'seven-seater-suvs': {
    title: '7-seater SUVs in Australia under $50,000 — specs and features',
    summary: 'Searching for a 7-seater SUV that fits your budget? Discover top options under $50,000 in Australia with a guide to prices, specifications and essential features.',
  },
  'fuel-efficient': {
    title: '10 most fuel-efficient cars in Australia',
    summary: 'Looking to save on fuel? Here are the 10 most fuel-efficient cars in Australia, from plug-in hybrid SUVs to efficient utes available now.',
  },
  'best-used-suvs-2025': {
    title: 'Best used SUVs in Australia for 2025',
    summary: 'From compact city crossovers to rugged family 4WDs, here are the top used SUVs in Australia that deliver comfort, value and long-term reliability.',
  },
  'used-family-cars': {
    title: 'Best used family cars in Australia for reliability',
    summary: 'Looking for a reliable used family car in Australia? These five models are known for durability, safety and long-term dependability.',
  },
  'small-used-cars': {
    title: 'Best small used cars to buy in Australia',
    summary: 'Looking for a reliable small used car in Australia? These five models offer the best mix of value, efficiency and everyday usability.',
  },
  'micro-cars': {
    title: 'Best micro cars in Australia',
    summary: 'From true micro cars to light hatchbacks, these are the best small cars in Australia for city driving, efficiency and everyday affordability.',
  },
  'reliable-cars': {
    title: 'Top 10 most reliable cars in Australia',
    summary: 'These ten cars are best known for their reliability among Australian buyers, from durable utes to trusted small hatchbacks.',
  },
  'road-trip-cars': {
    title: 'Top 10 best cars for road trips in Australia',
    summary: 'Here are the top 10 best cars for road trips, from family-friendly SUVs and rugged off-roaders to EVs and open-top sports cars.',
  },
  'towing-cars': {
    title: '10 best cars for towing in 2025',
    summary: 'Discover the top 10 towing vehicles for 2025, from heavy-duty utes to SUVs and hybrids, and find out which one best suits your needs.',
  },
  'dual-cab-utes': {
    title: 'Top 10 4WD dual-cab utes in Australia for 2025',
    summary: 'From powerful workhorses to family-friendly off-roaders, here are the top 10 4WD dual-cab utes combining rugged performance, practicality and everyday comfort.',
  },
  'top-4wds': {
    title: 'Top 10 4WDs in Australia for 2025',
    summary: 'From rugged off-roaders to practical family SUVs, explore the best 4WDs in Australia for reliability, comfort and adventure-ready performance.',
  },
  'fastest-cars': {
    title: 'Top 5 fastest cars in the world in 2026',
    summary: 'Discover the fastest cars in the world, from record-breaking Bugattis to next-generation electric hypercars pushing the limits of speed.',
  },
  'bmw-ev-lineup': {
    title: 'BMW EV line-up in Australia 2026',
    summary: 'A complete guide to BMW’s electric vehicle range in Australia, covering key EV models, performance, driving range and who each model suits.',
  },
  'byd-comparison': {
    title: 'BYD Australia market comparison in 2026',
    summary: 'Compare BYD’s 2026 Australian line-up—from the Atto 3, Dolphin and Seal to the Sealion 6—to find which model delivers the best value.',
  },
  'revs-check-guide': {
    title: 'REVS check explained: How to check a used car for finance and risk',
    summary: 'A REVS check is essential before buying a used car. Learn what it shows, how to perform one in Australia and how it helps uncover finance or stolen-vehicle risks.',
  },
  'revs-check-nsw': {
    title: 'REVS check NSW guide: How to verify a used car',
    summary: 'A REVS check in NSW lets you review a vehicle’s legal and financial status before buying. Discover how the PPSR system works for used-car buyers.',
  },
  'rego-renewal': {
    title: 'A guide to rego renewal in Australia and why it matters',
    summary: 'Learn the essentials of rego renewal in Australia, why it matters and the steps involved in completing a smooth renewal.',
  },
  'used-car-warranty': {
    title: 'Do used cars come with a warranty in Australia? 2026 guide',
    summary: 'Learn how used-car warranties, statutory cover, extended warranties and Cars24 protection work in Australia.',
  },
  'ev-resale': {
    title: 'EV resale value and depreciation in Australia',
    summary: 'We break down electric-car depreciation in Australia, why it happens and which EV models hold their value best.',
  },
  'too-many-kms': {
    title: 'How many kms is too many for a used car? An Australian buyer’s guide',
    summary: 'Learn how mileage, service history and driving conditions affect the reliability of a used car in Australia.',
  },
  'ancap-ratings': {
    title: 'ANCAP safety ratings explained before buying used',
    summary: 'ANCAP safety ratings explained through a used-car lens, including what changed in the 2026 update.',
  },
  'service-history': {
    title: '7 reasons service history matters more than low mileage',
    summary: 'Discover why service history matters more than low mileage when buying a used car, and how it can reveal hidden issues and overall vehicle health.',
  },
  'luxury-car-tax': {
    title: 'Luxury Car Tax in Australia 2026: thresholds, changes and exemptions',
    summary: 'Find out which vehicles attract Luxury Car Tax, how much you could pay and the legal ways buyers may be able to reduce the cost.',
  },
}

// Topic-specific detail copy for every Australia article currently surfaced by
// the app. The opening paragraph comes from the Selected Blogs description;
// these supporting sections turn that source material into a scannable local
// article without falling back to the shared design-demo copy.
const auArticleProfiles = {
  'suvs-ground-clearance': [
    ['Why ground clearance matters', 'Extra clearance can reduce underbody contact on rutted tracks, rough regional roads and steep driveways, but suspension design and approach angles still shape real-world capability.'],
    ['The SUVs worth comparing', 'The shortlist spans road-friendly crossovers, family touring SUVs and dedicated off-roaders, so buyers can compare capability without treating every high-riding vehicle as the same kind of tool.'],
    ['Choose for the roads you drive', 'Balance clearance with ride comfort, access, fuel use, towing needs and how often you genuinely leave sealed roads. The highest number is not automatically the best everyday choice.'],
  ],
  'affordable-sedans': [
    ['Why sedans still make sense', 'Sedans continue to offer an efficient shape, secure boot space and composed road manners, often at a lower price than similarly equipped SUVs.'],
    ['What value under $30K looks like', 'A useful comparison weighs purchase price against safety equipment, cabin comfort, fuel use, servicing costs and the availability of parts and support.'],
    ['Picking the right affordable sedan', 'Prioritise the way the car will be used most often—commuting, family duties or longer motorway trips—then compare total ownership costs rather than the sticker price alone.'],
  ],
  'evs-largest-boot-space': [
    ['How the five EVs compare', 'Boot measurements vary depending on whether every seat is in use or the rear rows are folded. Looking at both figures gives families a more realistic view of day-to-day and maximum carrying capacity.'],
    ['The boot-space leaders', 'The Tesla Model Y leads for maximum capacity, followed by the Skoda Enyaq and Mercedes-Benz EQB, with the Volkswagen ID.4 and Hyundai Ioniq 9 completing the shortlist.'],
    ['Why EV boot space matters', 'A practical EV needs to carry passengers, charging equipment and everyday luggage without creating unnecessary compromises for family trips, outdoor gear or longer journeys.'],
  ],
  'new-cars-coming': [
    ['What is arriving in Australia', 'The upcoming mix includes electric cars, plug-in hybrids, family SUVs and refreshed mainstream models from established and emerging brands.'],
    ['What to watch before launch', 'Australian pricing, final specifications, charging support, safety ratings and delivery timing can differ from overseas announcements, so local confirmation matters.'],
    ['Wait or buy now?', 'Waiting makes sense when a new model directly answers a missing need. If the current market already meets your budget and use case, availability and proven ownership support may matter more.'],
  ],
  'cheapest-new-suvs': [
    ['What under $30K buys in 2026', 'Budget SUVs focus on compact dimensions and everyday practicality, but equipment, warranty coverage and drive-away pricing can vary significantly between variants.'],
    ['Where the strongest value sits', 'Compare standard safety technology, boot space, rear-seat usability, fuel consumption and servicing requirements before treating two similarly priced SUVs as equivalent.'],
    ['Check the full ownership cost', 'Dealer charges, insurance, scheduled servicing and resale prospects can change the value equation, especially when a higher trim pushes beyond the advertised entry price.'],
  ],
  'luxury-evs': [
    ['What defines a luxury EV', 'The Porsche Taycan, BMW i7, Mercedes-Benz EQE, Zeekr 009 and Lotus Eletre take different approaches to performance, comfort, space and technology.'],
    ['Range is only one comparison', 'Charging speed, ride quality, cabin refinement, software, rear-seat comfort and usable luggage space often separate premium EVs more clearly than headline range figures.'],
    ['Match the EV to your routine', 'Consider home charging, regular trip length, public charging access and passenger needs before paying for performance or battery capacity that may rarely be used.'],
  ],
  'hybrid-suvs': [
    ['Why hybrid SUVs are popular', 'Hybrid systems can reduce fuel use in stop-start driving while retaining the quick refuelling and long-distance convenience familiar to petrol-car owners.'],
    ['How the leading models differ', 'Some hybrids prioritise urban efficiency, while others focus on family space, stronger performance or all-wheel-drive confidence. Boot packaging and towing limits also vary.'],
    ['Choosing the right hybrid', 'Compare real-world economy, rear-seat room, luggage capacity, warranty terms and the price premium over an equivalent petrol model for your expected annual driving.'],
  ],
  'family-suvs-50k': [
    ['What families need under $50K', 'The strongest family SUVs balance usable cabin space, active safety, easy child-seat access and enough luggage capacity for everyday routines and longer trips.'],
    ['The features that matter daily', 'A wide rear opening, practical storage, clear visibility, comfortable second-row seating and sensible controls often matter more than attention-grabbing specification-sheet extras.'],
    ['Find the best family fit', 'Test the exact variant with your own child seats, pram or regular luggage, and check drive-away pricing because option packs can quickly move a vehicle beyond budget.'],
  ],
  'seven-seater-suvs': [
    ['Seven seats without overspending', 'Sub-$50,000 seven-seaters range from occasional-use third rows to genuinely family-friendly layouts, so seat count alone does not describe practicality.'],
    ['Check the third row properly', 'Assess access, headroom, legroom, air vents and how much boot space remains with every seat raised. Some layouts work best for children or shorter journeys.'],
    ['Compare the complete package', 'Safety equipment, towing capacity, servicing, fuel use and drive-away pricing should sit alongside seating flexibility when choosing a long-term family vehicle.'],
  ],
  'fuel-efficient': [
    ['What fuel efficiency means in practice', 'Official consumption figures provide a consistent comparison, but traffic, payload, weather and driving style determine what owners see in everyday use.'],
    ['The different paths to lower fuel use', 'Efficient petrol engines, conventional hybrids, plug-in hybrids and economical diesels suit different trip patterns and access to charging.'],
    ['Work out your likely savings', 'Compare fuel type, annual kilometres, servicing and purchase price. A slightly less efficient car can still cost less overall if it is cheaper to buy and maintain.'],
  ],
  'best-used-suvs-2025': [
    ['What makes a strong used SUV', 'The best used SUVs combine a sound reliability record with practical space, readily available servicing and features that still feel useful several years after launch.'],
    ['Compact, family or off-road?', 'City crossovers, medium family SUVs and rugged 4WDs solve different problems. Narrow the field by size and use before comparing individual models.'],
    ['Inspect the individual vehicle', 'Service history, tyre condition, previous repairs and how the SUV was used matter as much as model reputation. A pre-purchase inspection remains essential.'],
  ],
  'used-family-cars': [
    ['Reliability starts with the right model', 'Durable engineering, sensible servicing requirements and strong parts support help a family car stay dependable as kilometres accumulate.'],
    ['Safety and practicality still count', 'A reliable car must also fit child seats, passengers and luggage comfortably while offering safety technology appropriate to its age and price.'],
    ['Condition beats reputation alone', 'Even a well-regarded model can be a poor buy if maintenance was neglected. Verify service records, inspect wear and arrange an independent mechanical check.'],
  ],
  'small-used-cars': [
    ['Why small used cars deliver value', 'Compact dimensions, modest fuel use and lower consumable costs can make a well-chosen small car ideal for commuting and first-time ownership.'],
    ['The five-car shortlist', 'The selected models balance reliability, efficiency and everyday usability rather than chasing the lowest purchase price or the longest equipment list.'],
    ['What to inspect before buying', 'Check service history, tyres, brakes, accident repairs and signs of heavy urban use. Confirm that rear space and boot capacity work for your routine.'],
  ],
  'micro-cars': [
    ['Built for Australian city driving', 'True micro cars and light hatchbacks make parking easier and keep running costs manageable, particularly for short urban trips.'],
    ['Small outside, usable inside', 'Door access, seating position, rear-seat space and boot shape can vary widely even when two cars occupy a similar road footprint.'],
    ['Choose beyond the purchase price', 'Safety equipment, motorway stability, servicing support and resale demand help determine whether the smallest option is also the smartest long-term choice.'],
  ],
  'reliable-cars': [
    ['What reliability really covers', 'Dependability includes more than avoiding breakdowns: predictable servicing, available parts and the ability to tolerate everyday Australian conditions all matter.'],
    ['Why these ten stand out', 'The shortlist crosses utes, SUVs, sedans and hatchbacks to show that reliability is available across different budgets and vehicle types.'],
    ['Buy the history, not only the badge', 'Model reputation is a starting point. A documented service record, careful inspection and evidence of responsible ownership provide stronger protection.'],
  ],
  'road-trip-cars': [
    ['What makes a great road-trip car', 'Long-distance comfort, stable handling, useful luggage space and sensible range matter more after several hours on the road than they do during a short test drive.'],
    ['Different trips need different cars', 'Family SUVs, off-roaders, EVs and open-top sports cars each suit a different kind of escape, from highway touring to remote tracks or weekend drives.'],
    ['Plan around the whole journey', 'Consider passenger comfort, fuel or charging stops, spare-tyre provision, driver-assistance features and the surfaces you expect to encounter.'],
  ],
  'towing-cars': [
    ['Start with the real towing task', 'Caravans, boats and work trailers place different demands on a vehicle, so loaded trailer weight and intended terrain should define the shortlist.'],
    ['Capacity is more than one number', 'Tow rating, payload, gross combination mass, tow-ball load, wheelbase and cooling all influence how confidently a vehicle handles a trailer.'],
    ['Set up the combination safely', 'Confirm legal limits for the exact variant, allow for passengers and cargo, and use suitable braking and weight-distribution equipment where required.'],
  ],
  'dual-cab-utes': [
    ['Workhorse and family car in one', 'Modern dual-cab utes combine load carrying and four-wheel-drive hardware with cabins designed for commuting, family use and long-distance touring.'],
    ['Where the top ten differ', 'Payload, towing, rear-seat comfort, off-road systems, ride quality and safety equipment vary enough to make the right choice highly use-case dependent.'],
    ['Choose for loaded conditions', 'Test how the ute will be used with accessories, passengers and cargo in mind, because added weight affects payload, handling and towing calculations.'],
  ],
  'top-4wds': [
    ['What separates a true 4WD', 'Low-range gearing, strong clearance, suitable tyres and durable underbody protection distinguish serious off-road vehicles from road-focused all-wheel drives.'],
    ['Capability versus everyday comfort', 'Rugged construction improves confidence away from sealed roads, but size, fuel use and ride quality can create compromises during urban driving.'],
    ['Match the vehicle to the adventure', 'Touring range, payload, towing, parts support and the difficulty of planned tracks should guide the decision more than image or maximum capability alone.'],
  ],
  'fastest-cars': [
    ['How the speed frontier is moving', 'Record-breaking combustion hypercars now compete with advanced electric machines that deliver enormous acceleration through instant torque and sophisticated power control.'],
    ['What makes a car truly fast', 'Power is only part of the equation. Aerodynamics, tyre capability, gearing, weight, cooling and stability determine whether performance can be used safely.'],
    ['Headline claims need context', 'Manufacturer targets, independently verified runs and limited-production prototypes are not always directly comparable, so the conditions behind every speed figure matter.'],
  ],
  'bmw-ev-lineup': [
    ['BMW’s electric range in Australia', 'The line-up spans compact premium models, executive sedans and larger SUVs, giving buyers different balances of space, performance and driving range.'],
    ['How the models compare', 'Battery capacity, charging speed, cabin packaging, performance and standard equipment help clarify who each BMW EV is designed to suit.'],
    ['Choosing the right BMW EV', 'Match the model to daily distance, home-charging access, passenger needs and budget before deciding whether additional range or performance is worthwhile.'],
  ],
  'byd-comparison': [
    ['BYD’s 2026 Australian range', 'The Atto 3, Dolphin, Seal, Sealion 6 and other models cover small-car, sedan, SUV and plug-in-hybrid needs at different price points.'],
    ['Where each model delivers value', 'Size, battery range, charging, interior space and standard equipment create clearer differences than brand positioning alone.'],
    ['Which BYD suits which buyer', 'Urban drivers, families and long-distance users should prioritise different combinations of efficiency, practicality and charging access.'],
  ],
  'revs-check-guide': [
    ['What a REVS check reveals', 'Australia’s PPSR-based check can identify registered security interests and help flag whether a vehicle has been recorded as stolen or written off.'],
    ['How to complete the check', 'Use the vehicle identification number, enter it carefully through the official service and compare the returned details with the car and seller’s documents.'],
    ['Act on any warning signs', 'Do not proceed until finance interests, identity inconsistencies or history concerns are resolved. A history check complements rather than replaces a mechanical inspection.'],
  ],
  'revs-check-nsw': [
    ['REVS and PPSR in NSW', 'The old REVS terminology remains common, but used-car financial and status checks are now completed through the national Personal Property Securities Register.'],
    ['Verify the vehicle before paying', 'Check the VIN against the car and paperwork, run the official search close to purchase and keep the certificate with the transaction records.'],
    ['What to do if a result is unclear', 'Pause the purchase and ask the seller to resolve any registered interest or identity mismatch. Independent inspection is still needed for mechanical condition.'],
  ],
  'rego-renewal': [
    ['Why rego renewal matters', 'Current registration keeps a vehicle legally recorded for road use and helps avoid penalties, interrupted insurance arrangements and administrative complications.'],
    ['The renewal process', 'Requirements, inspection rules and payment timing differ by state or territory, so owners should follow the instructions on their local registration notice.'],
    ['Before you renew', 'Confirm contact details, compulsory insurance where applicable, inspection requirements and the renewal period that best suits the way the vehicle is used.'],
  ],
  'used-car-warranty': [
    ['What warranty cover may apply', 'Coverage can depend on the seller, vehicle age, kilometres, purchase price and state rules, with statutory and optional extended protection serving different roles.'],
    ['Read the exclusions carefully', 'Wear items, maintenance, pre-existing faults and claim procedures may sit outside cover, so buyers should understand both the promise and the limits.'],
    ['Protect yourself before purchase', 'Review the written warranty, inspect the vehicle, keep service records and confirm who handles claims before signing the contract.'],
  ],
  'ev-resale': [
    ['Why EV depreciation varies', 'Rapid technology changes, new-car pricing, battery confidence and shifting demand can influence used EV values differently from established petrol models.'],
    ['What supports stronger resale', 'Desirable range, dependable charging, transferable warranty coverage, software support and clear battery-health information can make a used EV easier to value.'],
    ['Plan for ownership and exit', 'Consider purchase incentives, charging savings, expected holding period and future buyer confidence rather than judging the decision on depreciation alone.'],
  ],
  'too-many-kms': [
    ['Mileage needs context', 'A higher-kilometre car with consistent servicing and mostly open-road use can be a better prospect than a neglected low-kilometre vehicle.'],
    ['Read the signs around the odometer', 'Service records, tyre and brake wear, interior condition, cold-start behaviour and previous repairs help show whether the displayed kilometres make sense.'],
    ['Decide on condition, not a magic number', 'Judge the car against its age, model reputation, maintenance needs and asking price, then confirm the assessment with an independent inspection.'],
  ],
  'ancap-ratings': [
    ['What an ANCAP rating tells you', 'ANCAP combines crash protection and active-safety testing into a rating tied to the protocols used in the year the vehicle was assessed.'],
    ['Why the test year matters', 'A five-star result under an older protocol is not directly equivalent to a five-star result under newer, more demanding requirements.'],
    ['Use ratings when buying used', 'Compare test year, detailed category scores and the safety equipment fitted to the exact variant rather than relying only on the headline number.'],
  ],
  'service-history': [
    ['Why low kilometres can mislead', 'A lightly driven vehicle may still suffer from missed time-based servicing, short-trip wear, ageing fluids or long periods sitting unused.'],
    ['What a complete history reveals', 'Invoices and stamped records show whether maintenance was performed on schedule and can expose recurring repairs, neglected items or inconsistencies with the odometer.'],
    ['How to verify the record', 'Match dates and kilometres across documents, contact servicing workshops where practical and combine the paperwork review with an independent inspection.'],
  ],
  'luxury-car-tax': [
    ['When Luxury Car Tax applies', 'LCT is generally connected to a vehicle’s taxable value above the applicable threshold, with separate treatment available for qualifying fuel-efficient vehicles.'],
    ['How the amount is determined', 'The calculation applies to the value above the threshold rather than the whole purchase price, but dealer pricing and tax treatment can affect the final figure.'],
    ['Check current thresholds and exemptions', 'Rules and thresholds can change between financial years, so buyers should confirm current Australian Taxation Office guidance for the exact transaction.'],
  ],
}

auPosts.forEach((post) => {
  Object.assign(post, selectedBlogContent[post.id])
  const profile = auArticleProfiles[post.id]
  if (profile) {
    post.sections = profile.map(([heading, detail], index) => ({
      heading,
      paragraphs: index === 0 ? [post.summary, detail] : [detail],
    }))
  }

  if (post.id === 'evs-largest-boot-space') {
    post.sections = [
      {
        heading: 'Boot space at a glance',
        paragraphs: [
          post.summary,
          'EV packaging can create more usable storage than a similarly sized combustion car. Flat floors, compact drivetrains, underfloor compartments and, on some models, a front boot all contribute to carrying capacity.',
          'The headline litre figure is only the starting point. Opening width, load height, boot shape and the flexibility of the rear seats determine how useful that volume feels with prams, luggage, sports equipment or camping gear.',
        ],
        table: {
          caption: 'Boot-space figures from the Cars24 Australia comparison; capacity can vary by variant and seating configuration.',
          headers: ['Model', 'All seats up', 'Rear rows down'],
          rows: [
            ['Tesla Model Y', '854L + 117L', '2,183L'],
            ['Skoda Enyaq', '585L', '1,710L'],
            ['Volkswagen ID.4', '543L', '1,575L'],
            ['Mercedes-Benz EQB', '495L', '1,710L'],
            ['Hyundai Ioniq 9', '338L', '908L'],
          ],
        },
      },
      {
        heading: 'Tesla Model Y — 2,183 litres',
        paragraphs: [
          'The Model Y is the storage benchmark in this group. Its 854-litre rear compartment is supported by a 117-litre front boot, giving owners separate spaces for everyday luggage and smaller items.',
          'Folding the rear seats opens up to 2,183 litres. A broad opening, flat load area and additional underfloor storage make that capacity easy to use without requiring the exterior size of a traditional full-size SUV.',
        ],
      },
      {
        heading: 'Skoda Enyaq — 1,710 litres',
        paragraphs: [
          'The Enyaq focuses on a conventional, well-shaped luggage area rather than relying on extra storage compartments. Its 585-litre boot is the largest all-seats-up figure here after the Model Y.',
          'With the rear seats folded, capacity grows to 1,710 litres. The square load space helps owners use the quoted volume efficiently, making the Enyaq a strong family option for bulky luggage and road-trip equipment.',
        ],
      },
      {
        heading: 'Volkswagen ID.4 — 1,575 litres',
        paragraphs: [
          'Volkswagen’s ID.4 offers 543 litres with the seats raised and 1,575 litres when the rear row is folded. That is enough for family holidays, airport luggage and larger household loads while retaining manageable dimensions.',
          'It trades some outright capacity against the Enyaq for a slightly more compact everyday feel. Its strength is balance: useful cargo volume, comfortable passenger accommodation and urban-friendly proportions.',
        ],
      },
      {
        heading: 'Mercedes-Benz EQB — 1,710 litres',
        paragraphs: [
          'The EQB begins with a more modest 495-litre boot, but folding its rear seating expands the available space to 1,710 litres—the same maximum quoted for the Enyaq.',
          'Its key advantage is configuration flexibility. Available seven-seat packaging lets families prioritise extra passengers when needed, then recover a large load area when those seats are not in use.',
        ],
      },
      {
        heading: 'Hyundai Ioniq 9 — 908 litres',
        paragraphs: [
          'The three-row Ioniq 9 has the smallest all-seats-up figure in this comparison at 338 litres because much of its cabin is dedicated to carrying six or seven occupants.',
          'Reconfiguring the seating increases cargo capacity to 908 litres. It cannot match the five-seat leaders for maximum volume, but it serves households that need genuine people-moving ability alongside electric driving.',
        ],
      },
      {
        heading: 'Why EV boot space matters in 2026',
        paragraphs: [
          'As Australian households increasingly use an EV as their primary car, luggage capacity matters alongside range and charging. More usable storage can reduce reliance on roof boxes and make long-distance family travel simpler.',
          'Buyers should test the space rather than relying on litres alone. A flat floor, practical seat-folding arrangement, underfloor storage, front boot and a wide opening may be more valuable than a larger but awkwardly shaped compartment.',
        ],
      },
      {
        heading: 'Which large-boot EV should you choose?',
        paragraphs: [
          'Choose according to the way the space will be used. The Model Y leads for maximum combined capacity; the Enyaq and ID.4 provide strong everyday family practicality; the EQB adds seating flexibility; and the Ioniq 9 prioritises carrying more people.',
          'The best answer is therefore not simply the largest number. Storage shape, seating requirements, passenger comfort and day-to-day loading habits should decide which EV is the most practical fit.',
        ],
      },
    ]
  }
})

// Cards and the featured hero open the in-app detail page at /au/blog/:id.
// The original cars24.com.au article stays available as sourceUrl.
auPosts.forEach((post) => {
  post.sourceUrl = post.href
  post.href = `/au/blog/${post.id}`
})

// Single featured story for the dark "Featured blog" hero.
export const auFeaturedPost = auPosts.find((p) => p.id === 'service-history')

export const auFilters = [
  { key: 'all', label: 'All' },
  { key: 'guide', label: 'Car Guide' },
  { key: 'advice', label: 'Car Advice' },
]
