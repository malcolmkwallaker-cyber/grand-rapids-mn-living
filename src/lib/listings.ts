export type ListingStatus = 'active' | 'coming-soon' | 'pending' | 'sold';

export const STATUS_META: Record<ListingStatus, { label: string; badge: string; dot: string }> = {
  active: {
    label: 'Active',
    badge: 'bg-[#c9973a] text-white',
    dot: 'bg-emerald-400',
  },
  'coming-soon': {
    label: 'Coming Soon',
    badge: 'bg-[#2d5480] text-white',
    dot: 'bg-sky-300',
  },
  pending: {
    label: 'Pending',
    badge: 'bg-amber-500 text-white',
    dot: 'bg-amber-300',
  },
  sold: {
    label: 'Sold',
    badge: 'bg-slate-600 text-white',
    dot: 'bg-slate-300',
  },
};

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US')}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-US');
}

/** "41255 County Road 19, Deer River, MN 56636" */
export function fullAddress(listing: {
  address: string;
  city: string;
  state: string;
  zip: string;
}): string {
  return `${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`;
}

export function mapUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Sort: active and coming-soon first, then newest list date. */
export function sortListings<T extends { data: { status: ListingStatus; listDate: Date } }>(
  listings: T[],
): T[] {
  const rank: Record<ListingStatus, number> = {
    active: 0,
    'coming-soon': 1,
    pending: 2,
    sold: 3,
  };
  return [...listings].sort(
    (a, b) =>
      rank[a.data.status] - rank[b.data.status] ||
      b.data.listDate.valueOf() - a.data.listDate.valueOf(),
  );
}
