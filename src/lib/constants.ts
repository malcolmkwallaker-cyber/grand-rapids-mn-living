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
    phone: '218-259-9837',
    email: 'malcolm.wallaker@teampemberton.com',
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
    phone: '218-245-7900',
    email: 'bridger@legacybridgere.com',
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
  { name: 'Grand Rapids', slug: 'grand-rapids', county: 'Itasca', primary: true, photo: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80' },
  { name: 'Bigfork', slug: 'bigfork', county: 'Itasca', photo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Coleraine', slug: 'coleraine', county: 'Itasca', photo: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=800&q=80' },
  { name: 'Bovey', slug: 'bovey', county: 'Itasca', photo: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80' },
  { name: 'Cohasset', slug: 'cohasset', county: 'Itasca', photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Hibbing', slug: 'hibbing', county: 'St. Louis', photo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Keewatin', slug: 'keewatin', county: 'Itasca', photo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Virginia', slug: 'virginia', county: 'St. Louis', photo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Duluth', slug: 'duluth', county: 'St. Louis', photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
  { name: 'Aitkin', slug: 'aitkin', county: 'Aitkin', photo: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=800&q=80' },
  { name: 'McGregor', slug: 'mcgregor', county: 'Aitkin', photo: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?auto=format&fit=crop&w=800&q=80' },
  { name: 'Deer River', slug: 'deer-river', county: 'Itasca', photo: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
  { name: 'Chisholm', slug: 'chisholm', county: 'St. Louis', photo: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=800&q=80' },
];
