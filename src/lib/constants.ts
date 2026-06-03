export const SITE = {
  name: 'Grand Rapids Minnesota Living',
  tagline: 'Your Local Real Estate Experts in Northern Minnesota',
  url: 'https://grandrapidsminnesota.com',
  description:
    'Malcolm Wallaker and Bridger Hopkins with Pemberton Real Estate — the top-rated real estate agents serving Grand Rapids MN and surrounding northern Minnesota communities.',
  twitterHandle: '@grandrapidsmn',
  defaultOgImage: '/images/og-default.jpg',
};

export const BROKERAGE = {
  name: 'Pemberton Real Estate',
  address: 'Grand Rapids, MN',
  phone: 'PLACEHOLDER_PHONE',
  email: 'PLACEHOLDER_EMAIL',
  license: 'PLACEHOLDER_LICENSE',
  website: 'https://pembertonrealestateco.com',
  social: {
    facebook: 'https://www.facebook.com/PembertonRE/',
    instagram: 'https://www.instagram.com/pemberton_realestate/',
  },
};

export const AGENTS = [
  {
    name: 'Malcolm Wallaker',
    slug: 'malcolm-wallaker',
    title: 'REALTOR®',
    brokerage: 'Pemberton Real Estate',
    phone: 'PLACEHOLDER_PHONE',
    email: 'PLACEHOLDER_EMAIL',
    image: '/images/malcolm-wallaker.jpg',
    bio: "Malcolm Wallaker is one of Grand Rapids, MN's top-rated REALTORS®, specializing in residential homes, cabins, and lakefront properties across northern Minnesota. With deep roots in the Grand Rapids community, Malcolm brings unmatched local knowledge to every transaction.",
    specialties: ['Residential', 'Lakefront & Cabins', 'First-Time Buyers', 'Relocation'],
    cities: ['Grand Rapids', 'Cohasset', 'Bigfork', 'Deer River', 'Coleraine', 'Bovey'],
    reviews: { rating: 5.0, count: 0 },
    website: 'https://movedwithmalcolm.com',
    social: {
      facebook: 'https://www.facebook.com/malcolm.wallaker',
      instagram: 'https://www.instagram.com/malcolm_wallaker/',
      zillow: 'https://www.zillow.com/profile/MalcolmWallaker',
      googleBusiness: 'https://share.google/7X15dvz5dKeiqdwfX',
    },
  },
  {
    name: 'Bridger Hopkins',
    slug: 'bridger-hopkins',
    title: 'REALTOR®',
    brokerage: 'Pemberton Real Estate',
    phone: 'PLACEHOLDER_PHONE',
    email: 'PLACEHOLDER_EMAIL',
    image: '/images/bridger-hopkins.jpg',
    bio: 'Bridger Hopkins is a trusted REALTOR® with Pemberton Real Estate, serving buyers and sellers throughout the Iron Range, Hibbing, Virginia, and the greater Grand Rapids area. Known for his straightforward approach and deep market knowledge.',
    specialties: ['Iron Range Properties', 'Investment Properties', 'Sellers', 'New Construction'],
    cities: ['Hibbing', 'Virginia', 'Chisholm', 'Keewatin', 'Aitkin', 'McGregor'],
    reviews: { rating: 5.0, count: 0 },
    website: 'https://northernmnre.com',
    social: {
      googleBusiness: 'https://share.google/7noO8q7B6wGs0qGFx',
      // Add Bridger's Facebook/Instagram/Zillow here when available
    },
  },
];

export const CITIES = [
  { name: 'Grand Rapids', slug: 'grand-rapids', county: 'Itasca', primary: true },
  { name: 'Bigfork', slug: 'bigfork', county: 'Itasca' },
  { name: 'Coleraine', slug: 'coleraine', county: 'Itasca' },
  { name: 'Bovey', slug: 'bovey', county: 'Itasca' },
  { name: 'Cohasset', slug: 'cohasset', county: 'Itasca' },
  { name: 'Hibbing', slug: 'hibbing', county: 'St. Louis' },
  { name: 'Keewatin', slug: 'keewatin', county: 'Itasca' },
  { name: 'Virginia', slug: 'virginia', county: 'St. Louis' },
  { name: 'Duluth', slug: 'duluth', county: 'St. Louis' },
  { name: 'Aitkin', slug: 'aitkin', county: 'Aitkin' },
  { name: 'McGregor', slug: 'mcgregor', county: 'Aitkin' },
  { name: 'Deer River', slug: 'deer-river', county: 'Itasca' },
  { name: 'Chisholm', slug: 'chisholm', county: 'St. Louis' },
];
