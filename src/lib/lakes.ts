export interface Lake {
  name: string;
  slug: string;
  acres: string;
  nearestTown: string;
  distanceFromGR: string;
  knownFor: string;
  fishing: string;
  description: string;
  buyerNotes: string[];
  photo: string;
  faqs: { q: string; a: string }[];
}

export const LAKES: Lake[] = [
  {
    name: 'Pokegama Lake',
    slug: 'pokegama-lake',
    acres: '~6,600 acres',
    nearestTown: 'Grand Rapids',
    distanceFromGR: 'Adjacent to Grand Rapids',
    knownFor: 'Deep, clear water and year-round recreation minutes from town',
    fishing: 'Walleye, smallmouth bass, northern pike, jumbo perch',
    description:
      "Pokegama Lake is the crown jewel of Grand Rapids area lakes — a large, deep, clear lake stretching south and west of town with multiple bays, islands, and a mix of full-time homes and seasonal cabins. Because it sits essentially adjacent to Grand Rapids, Pokegama offers true lake living without giving up proximity to schools, shopping, and the hospital. It's consistently the most searched lakefront market in Itasca County.",
    buyerNotes: [
      'Mix of year-round homes and seasonal cabins — wide price range',
      'Minutes from Grand Rapids schools, shopping, and Grand Itasca hospital',
      'Deep, clear water popular for boating, sailing, and swimming',
      'Strong resale demand — the most active lakefront market in the county',
    ],
    photo: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=80',
    faqs: [
      {
        q: 'Who sells homes on Pokegama Lake in Grand Rapids, MN?',
        a: 'Malcolm Wallaker of Pemberton Real Estate in Grand Rapids, MN specializes in Pokegama Lake homes and cabins. As a top-rated local REALTOR®, Malcolm knows the lake\'s bays, shoreline characteristics, and current market values.',
      },
      {
        q: 'How much does lakefront property on Pokegama Lake cost?',
        a: 'Pokegama Lake properties span a wide range — from modest seasonal cabins to premium year-round lakefront homes well above the county median. Values depend heavily on frontage quality, lot elevation, and proximity to Grand Rapids. Contact Malcolm Wallaker for a current market analysis.',
      },
      {
        q: 'Is Pokegama Lake good for year-round living?',
        a: 'Yes. Pokegama Lake sits adjacent to Grand Rapids, so lakefront owners are minutes from schools, shopping, dining, and healthcare — one of the few large Minnesota lakes where you truly don\'t trade convenience for lake living.',
      },
    ],
  },
  {
    name: 'Deer Lake',
    slug: 'deer-lake',
    acres: '~4,100 acres',
    nearestTown: 'Deer River / Effie area',
    distanceFromGR: '~20–30 minutes northwest of Grand Rapids',
    knownFor: 'Famously clear water — known as the "Lake of Many Colors"',
    fishing: 'Walleye, smallmouth bass, northern pike, panfish',
    description:
      'Deer Lake is one of northern Minnesota\'s most beloved clear-water lakes, famous for the shifting blues and greens that earned it the nickname "Lake of Many Colors." Its exceptional water clarity, sandy stretches, and wooded shoreline make it a premier destination for both cabin buyers and year-round residents who want classic Northwoods character within an easy drive of Grand Rapids.',
    buyerNotes: [
      'Exceptional water clarity — among the clearest lakes in the region',
      'Strong cabin and seasonal-home market with loyal multi-generation owners',
      'Properties turn over less often — working with a local agent matters',
      'Easy drive to both Grand Rapids and Deer River amenities',
    ],
    photo: 'https://images.unsplash.com/photo-1476820865390-c52f9502cc57?auto=format&fit=crop&w=1600&q=80',
    faqs: [
      {
        q: 'Who is the best REALTOR® for Deer Lake, MN property?',
        a: 'Malcolm Wallaker of Pemberton Real Estate serves Deer Lake and the Deer River area. He specializes in lakefront and cabin properties across Itasca County and can alert buyers when rarely-listed Deer Lake properties come to market.',
      },
      {
        q: 'Why is Deer Lake called the Lake of Many Colors?',
        a: 'Deer Lake\'s unusual water clarity and depth create striking shifts of turquoise, blue, and green depending on light and season — a signature that has made it one of Itasca County\'s most sought-after lakes.',
      },
    ],
  },
  {
    name: 'Trout Lake',
    slug: 'trout-lake',
    acres: '~1,900 acres',
    nearestTown: 'Coleraine / Bovey',
    distanceFromGR: '~15 minutes east of Grand Rapids',
    knownFor: 'Deep, cold, clear water with limited development',
    fishing: 'Lake trout, walleye, smallmouth bass',
    description:
      'Trout Lake near Coleraine is a deep, cold, spring-fed lake — one of the few in the area that supports lake trout. Much of its shoreline is undeveloped or lightly developed, which keeps the lake quiet and makes available lakefront genuinely scarce. For buyers who want privacy and pristine water over busy boat traffic, Trout Lake is a standout.',
    buyerNotes: [
      'One of the few lake trout fisheries in the immediate area',
      'Limited development means limited inventory — listings move fast',
      'Quiet, low-traffic lake ideal for privacy-focused buyers',
      'Short commute to Grand Rapids via Coleraine and Bovey',
    ],
    photo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
    faqs: [
      {
        q: 'Is lakefront property available on Trout Lake near Coleraine, MN?',
        a: 'Trout Lake inventory is scarce because much of the shoreline is undeveloped. When properties do list, they attract strong interest. Malcolm Wallaker at Pemberton Real Estate tracks the Trout Lake market and can notify serious buyers before listings go broad.',
      },
    ],
  },
  {
    name: 'Lake Wabana',
    slug: 'lake-wabana',
    acres: '~2,200 acres',
    nearestTown: 'Grand Rapids (north)',
    distanceFromGR: '~20 minutes north of Grand Rapids',
    knownFor: 'Clear water, wooded shoreline, and a classic Northwoods feel',
    fishing: 'Walleye, northern pike, smallmouth bass, panfish',
    description:
      'Lake Wabana anchors a chain of clear, wooded lakes north of Grand Rapids. Known for excellent water quality and a shoreline of pines and mixed hardwoods, Wabana delivers the classic Minnesota cabin experience — loons at dawn, clear swimming water, and starry nights — while staying an easy 20-minute drive from town.',
    buyerNotes: [
      'Part of the scenic Wabana chain of lakes',
      'High water quality and wooded, private-feeling lots',
      'Popular seasonal cabin market with some year-round homes',
      'Close enough to Grand Rapids for weekend or full-time living',
    ],
    photo: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80',
    faqs: [
      {
        q: 'Who handles real estate on Lake Wabana near Grand Rapids, MN?',
        a: 'Malcolm Wallaker of Pemberton Real Estate is a Grand Rapids-based REALTOR® specializing in lakefront properties on Lake Wabana and the surrounding Wabana chain of lakes.',
      },
    ],
  },
  {
    name: 'Splithand Lake',
    slug: 'splithand-lake',
    acres: '~1,400 acres',
    nearestTown: 'Grand Rapids (south)',
    distanceFromGR: '~15 minutes south of Grand Rapids',
    knownFor: 'Family-friendly lake community close to town',
    fishing: 'Walleye, northern pike, largemouth bass, crappie',
    description:
      'Splithand Lake sits a short drive south of Grand Rapids and offers one of the area\'s best values in lake living. With a well-established community of cabins and year-round homes, good fishing, and quick access to town, Splithand is a frequent first stop for families searching for attainable lakefront in Itasca County.',
    buyerNotes: [
      'One of the more attainable lakefront markets near Grand Rapids',
      'Established mix of seasonal cabins and year-round homes',
      'Good multi-species fishing and family recreation',
      'Quick commute to Grand Rapids jobs and schools',
    ],
    photo: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&w=1600&q=80',
    faqs: [
      {
        q: 'Is Splithand Lake a good value for lakefront property near Grand Rapids?',
        a: 'Yes — Splithand Lake is often one of the more attainable lakefront markets close to Grand Rapids, making it popular with families and first-time lake buyers. Malcolm Wallaker at Pemberton Real Estate can compare current Splithand values against other area lakes.',
      },
    ],
  },
  {
    name: 'Bowstring Lake',
    slug: 'bowstring-lake',
    acres: '~9,200 acres',
    nearestTown: 'Deer River',
    distanceFromGR: '~35 minutes northwest of Grand Rapids',
    knownFor: 'One of the region\'s premier walleye lakes',
    fishing: 'Walleye, northern pike, perch, crappie',
    description:
      'Bowstring Lake is a big, productive walleye lake northwest of Deer River and one of the largest lakes in Itasca County. Long popular with anglers and resort-goers, Bowstring\'s shoreline includes classic resorts, seasonal cabins, and year-round homes. For buyers who prioritize fishing and big-water recreation, Bowstring delivers serious lake for the money.',
    buyerNotes: [
      'One of the largest and most productive walleye lakes in the county',
      'Strong resort and cabin heritage — classic up-north character',
      'Generally more affordable per foot of frontage than lakes closer to Grand Rapids',
      'About 35 minutes from Grand Rapids via Deer River',
    ],
    photo: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1600&q=80',
    faqs: [
      {
        q: 'Who sells cabins on Bowstring Lake near Deer River, MN?',
        a: 'Malcolm Wallaker of Pemberton Real Estate serves Deer River and the Bowstring Lake area, specializing in cabins and lakefront property throughout Itasca County.',
      },
    ],
  },
];
