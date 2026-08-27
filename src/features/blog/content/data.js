const cover = (name, alt) => ({
  url: `/covers/text-free/${name}.jpg`,
  alternativeText: alt,
})

export const posts = [
  {
    id: 'road-safety', category: 'Road Safety', categoryKey: 'safety', badgeVariant: 'warning', region: 'UAE',
    title: 'Rethinking Road Safety: Beyond Human Error',
    summary: 'Most crashes get filed under “driver mistake.” We think that framing is the problem — and it hides the fixes that actually work.',
    thumbnail: cover('road-safety', 'Empty highway at dusk'), authors: [{ name: 'Muskan Yadav' }],
    publishedAt: '2026-06-30 09:00:00', readTime: '6 min read', href: '/blog/road-safety',
  },
  {
    id: 'trust', category: 'Culture', categoryKey: 'culture', badgeVariant: 'feature', region: 'India',
    title: 'The fastest way to build trust is to struggle together',
    summary: 'Trust isn’t built in the good quarters. It’s built when a team is under pressure and chooses to stay in the room.',
    thumbnail: cover('trust', 'Team working together'), authors: [{ name: 'Arjun Lal' }],
    publishedAt: '2026-06-25 09:00:00', readTime: '4 min read', href: '/blog/trust',
  },
  {
    id: 'perspectives', category: 'Culture', categoryKey: 'culture', badgeVariant: 'feature', region: 'Australia',
    title: 'Better Businesses Are Built By Different Perspectives',
    summary: 'Homogeneous teams move fast and miss things. Here’s how we design for productive disagreement.',
    thumbnail: cover('perspectives', 'Diverse team in discussion'), authors: [{ name: 'Dr. Sukhmani Pal' }],
    publishedAt: '2026-06-10 09:00:00', readTime: '5 min read', href: '/blog/perspectives',
  },
  {
    id: 'board', category: 'Company', categoryKey: 'company', badgeVariant: 'information', region: 'India',
    title: 'Infosys’ Jayesh Sanghrajka is joining our Board',
    summary: 'A note on the experience Jayesh brings, and what his addition signals about the road ahead for Cars24.',
    thumbnail: cover('board', 'Boardroom'), authors: [{ name: 'Ruchit Agarwal' }],
    publishedAt: '2026-06-08 09:00:00', readTime: '3 min read', href: '/blog/board',
  },
  {
    id: 'rc', category: 'Company', categoryKey: 'company', badgeVariant: 'information', region: 'India',
    title: 'RC Transfer: The Broken System We Are Fixing for India',
    summary: 'Ownership transfer is where trust in a used-car sale is won or lost. We rebuilt it from the paperwork up.',
    thumbnail: cover('rc', 'Vehicle documents'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-05-28 09:00:00', readTime: '6 min read', href: '/blog/rc',
  },
  {
    id: 'ai-loan', category: 'Technology', categoryKey: 'tech', badgeVariant: 'success', region: 'Australia',
    title: 'No Human in the Loop: Cars24’s First AI Loan Workflow',
    summary: 'What it took to take a loan approval from application to disbursal with no manual step in the middle.',
    thumbnail: cover('ai-loan', 'AI loan workflow'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-05-25 09:00:00', readTime: '5 min read', href: '/blog/ai-loan',
  },
  {
    id: 'scale', category: 'Culture', categoryKey: 'culture', badgeVariant: 'feature', region: 'UAE',
    title: 'What Organisations Stop Seeing As They Scale',
    summary: 'Growth quietly removes the feedback loops that made you good. Here’s how to keep them alive.',
    thumbnail: cover('scale', 'Growth chart on a wall'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-05-21 09:00:00', readTime: '4 min read', href: '/blog/scale',
  },
  {
    id: 'values', category: 'Company', categoryKey: 'company', badgeVariant: 'information', region: 'India',
    title: 'The Values That Will Shape The Next Chapter Of Cars24',
    summary: 'The principles we’re carrying forward, the ones we’re retiring, and why the difference matters.',
    thumbnail: cover('values', 'Team offsite'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-05-18 09:00:00', readTime: '5 min read', href: '/blog/values',
  },
  {
    id: 'labs', category: 'Technology', categoryKey: 'tech', badgeVariant: 'success', region: 'Australia',
    title: 'Introducing Cars24 Labs: Our $20 million bet on AI',
    summary: 'A dedicated team, a real budget, and a clear mandate — to make buying and selling a car feel effortless.',
    thumbnail: cover('ai-loan', 'Engineers at work'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-06-01 09:00:00', readTime: '7 min read', href: '/blog/labs',
  },
  {
    id: 'ev-fleet', category: 'Sustainable Mobility', categoryKey: 'sustainable', badgeVariant: 'success', region: 'India',
    title: 'Going Electric: What We Learned Wiring Up Our First EV Fleet',
    summary: 'Range anxiety is real, but so is the operating math. Here’s what changed once the numbers were in front of us.',
    thumbnail: cover('scale', 'Electric vehicle charging'), authors: [{ name: 'Muskan Yadav' }],
    publishedAt: '2026-05-14 09:00:00', readTime: '5 min read', href: '/blog/ev-fleet',
  },
  {
    id: 'carbon', category: 'Sustainable Mobility', categoryKey: 'sustainable', badgeVariant: 'success', region: 'Australia',
    title: 'Counting Carbon: How a Used Car Beats a New One',
    summary: 'The greenest car is often the one already built. We ran the lifecycle math and it surprised us.',
    thumbnail: cover('road-safety', 'Open road landscape'), authors: [{ name: 'Arjun Lal' }],
    publishedAt: '2026-05-10 09:00:00', readTime: '4 min read', href: '/blog/carbon',
  },
  {
    id: 'momentum-q2', category: 'Momentum', categoryKey: 'momentum', badgeVariant: 'information', region: 'India',
    title: 'Momentum Report: The Quarter That Bent the Curve',
    summary: 'A candid look at the metrics that moved, the ones that didn’t, and what we’re doubling down on next.',
    thumbnail: cover('values', 'Team celebrating a win'), authors: [{ name: 'Ruchit Agarwal' }],
    publishedAt: '2026-05-06 09:00:00', readTime: '6 min read', href: '/blog/momentum-q2',
  },
  {
    id: 'expansion', category: 'Momentum', categoryKey: 'momentum', badgeVariant: 'information', region: 'UAE',
    title: 'Crossing Borders: The Playbook Behind Our UAE Launch',
    summary: 'New market, same promise. How we translated a trust-first model into a very different city.',
    thumbnail: cover('board', 'City skyline at dusk'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-05-02 09:00:00', readTime: '5 min read', href: '/blog/expansion',
  },
  {
    id: 'design-system', category: 'Design', categoryKey: 'design', badgeVariant: 'feature', region: 'India',
    title: 'One Language: Building Turbo UI, Our Design System',
    summary: 'Hundreds of screens, one visual voice. The story of how we made consistency the default, not the chore.',
    thumbnail: cover('perspectives', 'Design system components'), authors: [{ name: 'Dr. Sukhmani Pal' }],
    publishedAt: '2026-04-28 09:00:00', readTime: '6 min read', href: '/blog/design-system',
  },
  {
    id: 'design-craft', category: 'Design', categoryKey: 'design', badgeVariant: 'feature', region: 'Australia',
    title: 'Details That Sell: Craft in the Car Listing Card',
    summary: 'A card is a small thing until a million people tap it. Here’s the obsessive work behind one component.',
    thumbnail: cover('trust', 'Designer at work'), authors: [{ name: 'Arjun Lal' }],
    publishedAt: '2026-04-24 09:00:00', readTime: '4 min read', href: '/blog/design-craft',
  },
  {
    id: 'inspection-ai', category: 'Technology', categoryKey: 'tech', badgeVariant: 'success', region: 'India',
    title: 'Seeing Dents With Software: AI Car Inspection at Scale',
    summary: 'Computer vision now flags what a rushed human eye misses. Here’s how we trained it and where it still needs us.',
    thumbnail: cover('ai-loan', 'AI inspecting a car'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-04-20 09:00:00', readTime: '6 min read', href: '/blog/inspection-ai',
  },
  {
    id: 'pricing-engine', category: 'Technology', categoryKey: 'tech', badgeVariant: 'success', region: 'Australia',
    title: 'The Price Is Right: Inside Our Real-Time Valuation Engine',
    summary: 'Millions of data points, one fair number in seconds. A look under the hood of how we price a used car.',
    thumbnail: cover('scale', 'Data dashboard'), authors: [{ name: 'Arjun Lal' }],
    publishedAt: '2026-04-16 09:00:00', readTime: '5 min read', href: '/blog/pricing-engine',
  },
  {
    id: 'women-wheel', category: 'Culture', categoryKey: 'culture', badgeVariant: 'feature', region: 'India',
    title: 'Women At The Wheel: Rewriting Who Buys A Car',
    summary: 'The buyer has changed faster than the showroom. What we heard when we actually listened.',
    thumbnail: cover('perspectives', 'Woman driving confidently'), authors: [{ name: 'Dr. Sukhmani Pal' }],
    publishedAt: '2026-04-12 09:00:00', readTime: '4 min read', href: '/blog/women-wheel',
  },
  {
    id: 'first-job', category: 'Culture', categoryKey: 'culture', badgeVariant: 'feature', region: 'UAE',
    title: 'My First 90 Days: Notes From A New Cars24 Hire',
    summary: 'Onboarding is a design problem too. One newcomer’s honest diary of ramping up in a fast company.',
    thumbnail: cover('trust', 'New employee at desk'), authors: [{ name: 'Muskan Yadav' }],
    publishedAt: '2026-04-08 09:00:00', readTime: '3 min read', href: '/blog/first-job',
  },
  {
    id: 'warranty', category: 'Company', categoryKey: 'company', badgeVariant: 'information', region: 'India',
    title: 'The 200-Point Promise: Why We Back Every Car We Sell',
    summary: 'A warranty is only as good as the process behind it. Here’s the checklist that earns the badge.',
    thumbnail: cover('rc', 'Warranty certificate'), authors: [{ name: 'Ruchit Agarwal' }],
    publishedAt: '2026-04-04 09:00:00', readTime: '5 min read', href: '/blog/warranty',
  },
  {
    id: 'roadtrip', category: 'Road Safety', categoryKey: 'safety', badgeVariant: 'warning', region: 'Australia',
    title: 'Before The Road Trip: A Pre-Drive Safety Ritual',
    summary: 'Five minutes of checks that quietly prevent the worst days. A simple ritual worth building.',
    thumbnail: cover('road-safety', 'Car ready for a road trip'), authors: [{ name: 'Arjun Lal' }],
    publishedAt: '2026-03-31 09:00:00', readTime: '4 min read', href: '/blog/roadtrip',
  },
  {
    id: 'hydrogen', category: 'Sustainable Mobility', categoryKey: 'sustainable', badgeVariant: 'success', region: 'UAE',
    title: 'Beyond Batteries: Is Hydrogen The Long-Haul Answer?',
    summary: 'Everyone talks EVs, but the freight lane tells a different story. We weigh the trade-offs honestly.',
    thumbnail: cover('scale', 'Hydrogen fuel station'), authors: [{ name: 'Vikram Chopra' }],
    publishedAt: '2026-03-27 09:00:00', readTime: '6 min read', href: '/blog/hydrogen',
  },
  {
    id: 'growth-loops', category: 'Momentum', categoryKey: 'momentum', badgeVariant: 'information', region: 'India',
    title: 'Growth Loops, Not Funnels: How Referrals Compound',
    summary: 'A funnel leaks; a loop feeds itself. The mechanics behind our most durable growth channel.',
    thumbnail: cover('values', 'Referral growth chart'), authors: [{ name: 'Ruchit Agarwal' }],
    publishedAt: '2026-03-23 09:00:00', readTime: '5 min read', href: '/blog/growth-loops',
  },
  {
    id: 'motion-design', category: 'Design', categoryKey: 'design', badgeVariant: 'feature', region: 'Australia',
    title: 'Motion With Meaning: Animation In The Cars24 App',
    summary: 'Good motion guides, it doesn’t decorate. Principles we use to keep transitions purposeful.',
    thumbnail: cover('board', 'Animation storyboard'), authors: [{ name: 'Dr. Sukhmani Pal' }],
    publishedAt: '2026-03-19 09:00:00', readTime: '4 min read', href: '/blog/motion-design',
  },
]

export const featured = posts.find((post) => post.id === 'ai-loan')

// Featured carousel: one story per Cars24 region.
export const regionFeatured = [
  { region: 'India', post: posts.find((post) => post.id === 'rc') },
  { region: 'Australia', post: posts.find((post) => post.id === 'ai-loan') },
  { region: 'UAE', post: posts.find((post) => post.id === 'road-safety') },
]

export const fresh = posts.filter((post) => post.id !== featured.id).slice(0, 9)
export const filters = [
  { key: 'all', label: 'All' },
  { key: 'company', label: 'Company' },
  { key: 'tech', label: 'Technology' },
  { key: 'culture', label: 'Culture' },
  { key: 'sustainable', label: 'Sustainable Mobility' },
  { key: 'momentum', label: 'Momentum' },
  { key: 'safety', label: 'Road Safety' },
  { key: 'design', label: 'Design' },
]

// Region filter for the All stories section (extreme-right dropdown).
export const regionFilters = [
  { value: 'all', label: 'All regions' },
  { value: 'India', label: 'India' },
  { value: 'Australia', label: 'Australia' },
  { value: 'UAE', label: 'UAE' },
]
