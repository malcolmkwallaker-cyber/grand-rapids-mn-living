export interface GuideStep {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  intro: string;
  sections: { heading: string; body: string }[];
  tip?: string;
}

export interface Guide {
  type: 'buying' | 'selling';
  title: string;
  description: string;
  heroImage: string;
  steps: GuideStep[];
}

export const buyingGuide: Guide = {
  type: 'buying',
  title: "Home Buyer's Guide",
  description: "A complete step-by-step walkthrough to buying a home in northern Minnesota — from getting pre-approved to picking up your keys.",
  heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80',
  steps: [
    {
      slug: 'get-pre-approved',
      title: 'Get Pre-Approved',
      subtitle: 'Step 1 of 6',
      icon: '🏦',
      intro: 'Pre-approval is the foundation of a successful home purchase. It tells you exactly how much home you can afford and signals to sellers that you are a serious, qualified buyer.',
      sections: [
        {
          heading: 'Why Pre-Approval Matters',
          body: 'In a competitive market like northern Minnesota, sellers often receive multiple offers. A pre-approval letter from a reputable lender gives your offer instant credibility and can be the difference between winning and losing your dream home. Without it, most sellers and agents will not even schedule a showing.',
        },
        {
          heading: 'What Lenders Look At',
          body: 'Lenders will review your credit score, debt-to-income ratio, employment history, and bank statements. Aim for a credit score of 620 or higher for conventional loans — though higher scores unlock better interest rates. FHA loans can go as low as 580 with 3.5% down. Have two years of tax returns, recent pay stubs, and 60 days of bank statements ready.',
        },
        {
          heading: 'How Much Can You Afford?',
          body: 'A general rule of thumb is that your monthly housing costs (principal, interest, taxes, insurance) should not exceed 28% of your gross monthly income. Use this as your starting point, but remember to factor in closing costs (typically 2–5% of the loan amount) and moving expenses.',
        },
        {
          heading: 'Local Lender vs. Big Bank',
          body: 'We strongly recommend working with a local lender who knows the northern Minnesota market. They understand rural property quirks, well and septic requirements, and can often close faster than national lenders. We can connect you with trusted local mortgage professionals in Grand Rapids.',
        },
      ],
      tip: 'Getting pre-approved does not commit you to a lender — you can still shop rates. But do it within a 45-day window so multiple credit pulls only count as one hard inquiry.',
    },
    {
      slug: 'define-your-search',
      title: 'Define Your Search',
      subtitle: 'Step 2 of 6',
      icon: '🗺️',
      intro: 'Before you start touring homes, get clear on your must-haves, nice-to-haves, and deal-breakers. A focused search saves you time and prevents decision fatigue.',
      sections: [
        {
          heading: 'Choose the Right Community',
          body: 'Northern Minnesota offers dramatically different lifestyles from community to community. Grand Rapids is the hub for amenities, schools, and healthcare. Bigfork and Deer River offer a quieter, more rural feel. Hibbing and Virginia give you iron range character and affordable prices. Duluth is the metro option with lakeside living. We\'ve written detailed community guides for all 13 cities we serve — read them to find your fit.',
        },
        {
          heading: 'Must-Haves vs. Nice-to-Haves',
          body: 'Write two lists: absolute requirements (number of bedrooms, garage, school district, acreage) and features you\'d love but could live without (a lake lot, specific finishes, home office). This prevents you from falling in love with a home that doesn\'t meet your core needs, and helps your agent filter listings efficiently.',
        },
        {
          heading: 'Consider the Northern Minnesota Lifestyle',
          body: 'Our winters are real. Think about heated garages, insulation quality, heating costs, and road maintenance when buying rural. If you want a lake cabin or recreational property, factor in access roads, dock rights, and DNR setback requirements. These details matter and we know them well.',
        },
        {
          heading: 'Set Up Listing Alerts',
          body: 'Good homes in this market move quickly. We\'ll set you up with real-time MLS alerts so you hear about new listings the moment they hit the market — often before they appear on Zillow or Realtor.com.',
        },
      ],
      tip: 'Be honest about your commute tolerance. A 30-minute drive to Grand Rapids from a lake cabin sounds romantic in July but feels different in February.',
    },
    {
      slug: 'tour-homes',
      title: 'Tour Homes & Make Your Pick',
      subtitle: 'Step 3 of 6',
      icon: '🏡',
      intro: 'Touring homes is exciting — but it\'s also where buyers can get emotionally swept up and overlook red flags. Know what to look for so you fall in love with the right home.',
      sections: [
        {
          heading: 'What to Inspect During a Showing',
          body: 'Pay attention to the big-ticket items: roof age, furnace/boiler condition, water heater, foundation, and windows. In Minnesota, look for signs of water intrusion in basements and crawl spaces. Check for adequate insulation in the attic. A fresh coat of paint and new carpet are cheap — replacing a roof or HVAC is not.',
        },
        {
          heading: 'Well & Septic Considerations',
          body: 'Many rural northern Minnesota properties have private wells and septic systems. Ask for the most recent well water test results and septic inspection report. Find out how old the systems are and when they were last serviced. These systems can cost $15,000–$40,000 to replace, so due diligence here is critical.',
        },
        {
          heading: 'Trust Your Agent\'s Read',
          body: 'We\'ve toured hundreds of homes in this market. If we flag something during a showing — a musty smell, uneven floors, unusual disclosures — take it seriously. We\'re not trying to talk you out of a home, we\'re protecting your investment.',
        },
        {
          heading: 'Keep Notes on Each Home',
          body: 'After three or four showings, homes start to blur together. Take notes and photos at each property. Rate each one on your must-have list. This makes the final decision much clearer when you\'re ready to choose.',
        },
      ],
      tip: 'Visit a property you\'re serious about at least twice — once during the day and once in the evening or on a weekend to get a feel for the neighborhood at different times.',
    },
    {
      slug: 'make-an-offer',
      title: 'Make an Offer',
      subtitle: 'Step 4 of 6',
      icon: '✍️',
      intro: 'Writing a strong offer is part strategy, part psychology. We\'ll help you craft one that wins without overpaying.',
      sections: [
        {
          heading: 'How We Determine Offer Price',
          body: 'We\'ll run a Comparative Market Analysis (CMA) — looking at recent sales of similar homes in the area — to determine fair market value. In a seller\'s market you may need to offer at or above list price. In a buyer\'s market there\'s often room to negotiate. We\'ll tell you exactly where the market is and what strategy makes sense.',
        },
        {
          heading: 'Contingencies That Protect You',
          body: 'A strong offer includes contingencies: inspection (your right to back out if major issues are found), financing (your right to exit if your loan falls through), and appraisal (protection if the home appraises below the sale price). In hot markets, buyers sometimes waive contingencies to compete — we\'ll walk you through the risk of each.',
        },
        {
          heading: 'Earnest Money',
          body: 'Earnest money is a good-faith deposit (typically 1–3% of the purchase price) that shows the seller you\'re serious. It\'s held in escrow and applied to your down payment at closing. If you back out without cause, you may forfeit it — another reason your contingencies matter.',
        },
        {
          heading: 'Negotiating After the Offer',
          body: 'Sellers can accept, reject, or counter your offer. Counteroffers are common on price, closing date, or included items (appliances, fixtures). We\'ll negotiate on your behalf to get you the best possible terms.',
        },
      ],
      tip: 'A personal letter to the seller can sometimes make a difference in a multiple-offer situation — especially on a family home. We can help you write one.',
    },
    {
      slug: 'inspection-appraisal',
      title: 'Inspection & Appraisal',
      subtitle: 'Step 5 of 6',
      icon: '🔍',
      intro: 'Once your offer is accepted, two critical evaluations happen before you can close: the home inspection and the appraisal. Both protect you.',
      sections: [
        {
          heading: 'The Home Inspection',
          body: 'A licensed home inspector will spend 2–4 hours examining the property top to bottom — roof, foundation, electrical, plumbing, HVAC, insulation, and more. You should attend this inspection. The inspector\'s report will list every defect from minor to major. We\'ll help you understand which items to request repairs on, which to accept as-is, and which would be serious enough to walk away.',
        },
        {
          heading: 'Negotiating Repairs',
          body: 'After the inspection, you can ask the seller to make repairs, reduce the price, or provide a credit at closing. Sellers are not legally required to fix everything, but significant issues give you negotiating leverage. In some cases, we\'ll recommend bringing in specialists — a structural engineer, electrician, or septic inspector — for further evaluation.',
        },
        {
          heading: 'The Appraisal',
          body: 'Your lender will order a home appraisal to confirm the property is worth what you\'re paying. If the appraisal comes in below the purchase price, you have a few options: negotiate a lower price with the seller, make up the difference in cash, or walk away if your appraisal contingency allows it.',
        },
        {
          heading: 'Rural Property Considerations',
          body: 'Appraisals on rural and lake properties in northern Minnesota can be challenging — there are fewer comparable sales. Work with a lender who has experience with rural appraisals, and don\'t be surprised if it takes longer than a standard residential appraisal.',
        },
      ],
      tip: 'Never skip the home inspection, even on a brand-new build. Builders make mistakes too, and your inspector\'s report is a permanent record of the home\'s condition at the time of purchase.',
    },
    {
      slug: 'closing-day',
      title: 'Closing Day',
      subtitle: 'Step 6 of 6',
      icon: '🔑',
      intro: 'Closing day is the finish line. Here\'s what to expect and how to prepare so nothing slows you down.',
      sections: [
        {
          heading: 'The Week Before Closing',
          body: 'Do a final walk-through 24–48 hours before closing to confirm the property is in the agreed condition and any repairs were completed. Review your Closing Disclosure (provided 3 business days before closing) carefully — it lists your exact loan terms, monthly payment, and all closing costs.',
        },
        {
          heading: 'What to Bring',
          body: 'Bring a government-issued photo ID, your cashier\'s check or confirmation of wire transfer for closing costs and down payment, and any documents your lender or title company requested. Do not bring a personal check — most title companies won\'t accept them for large amounts.',
        },
        {
          heading: 'What Happens at the Closing Table',
          body: 'You\'ll sign a significant stack of documents — loan documents, title transfer, disclosures. The title company or closing attorney facilitates this. Once everything is signed and funds are transferred, the deed is recorded and you receive your keys. The whole process usually takes 60–90 minutes.',
        },
        {
          heading: 'After Closing',
          body: 'Change the locks. Update your address with the post office, your bank, and employer. Set up utility transfers in your name. And call us if you need contractor or service provider recommendations — we know the best local professionals in northern Minnesota.',
        },
      ],
      tip: 'Wire fraud is real. Never wire money based on emailed instructions without first calling your title company directly on a number you looked up yourself to confirm the wire details.',
    },
  ],
};

export const sellingGuide: Guide = {
  type: 'selling',
  title: "Home Seller's Guide",
  description: "Everything you need to know to sell your northern Minnesota home for top dollar — from prepping your property to handing over the keys.",
  heroImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80',
  steps: [
    {
      slug: 'prepare-your-home',
      title: 'Prepare Your Home',
      subtitle: 'Step 1 of 6',
      icon: '🛠️',
      intro: 'First impressions sell homes. The work you do before your home hits the market has a direct impact on sale price and time on market.',
      sections: [
        {
          heading: 'Declutter and Deep Clean',
          body: 'Buyers need to picture themselves living in your home — that\'s hard to do when your personality and belongings fill every corner. Clear out at least a third of your furniture and personal items, especially from closets and storage areas. Buyers always open doors. Then deep clean everything: windows, grout, appliances, baseboards. A clean home signals a well-maintained home.',
        },
        {
          heading: 'High-ROI Improvements',
          body: 'Not all upgrades are worth the investment. Focus on items with the highest return: fresh neutral-colored interior paint, updated light fixtures, new cabinet hardware, landscaping and curb appeal, and professional carpet cleaning (or replacement if severely worn). Avoid major kitchen or bathroom renovations right before selling — you rarely recoup the full cost.',
        },
        {
          heading: 'Address Deferred Maintenance',
          body: 'Buyers and their inspectors will find everything. It\'s far better to fix issues proactively — dripping faucets, stuck windows, missing deck boards, peeling exterior paint — than to have them flagged in an inspection report and used as negotiating ammunition against you.',
        },
        {
          heading: 'Northern Minnesota Specifics',
          body: 'Make sure your heating system has been recently serviced and has a clean filter. If you have a wood stove or fireplace, have the chimney cleaned. Ensure your roof has no obvious missing or damaged shingles. If you have a well and septic, consider getting them inspected proactively so there are no surprises.',
        },
      ],
      tip: 'Spend $300–$500 on a pre-listing home inspection. It gives you a complete picture of your home\'s condition and lets you fix issues on your timeline rather than under the pressure of a signed purchase agreement.',
    },
    {
      slug: 'pricing-strategy',
      title: 'Price It Right',
      subtitle: 'Step 2 of 6',
      icon: '💰',
      intro: 'Pricing is the most important decision you\'ll make as a seller. Too high and buyers skip it. Too low and you leave money on the table.',
      sections: [
        {
          heading: 'How We Determine List Price',
          body: 'We prepare a detailed Comparative Market Analysis (CMA) using recent sales of similar homes in your area — same general location, similar size, age, condition, and features. We look at sold prices (not list prices), days on market, and any concessions. This gives us a defensible price range rooted in data, not guesswork.',
        },
        {
          heading: 'The Danger of Overpricing',
          body: 'Overpriced homes sit on the market. Days on market is visible data — buyers and their agents notice it. A home that sits for 60+ days in our market develops a stigma that forces you to reduce price anyway, often below what you would have gotten with correct initial pricing. Price it right the first time.',
        },
        {
          heading: 'Lake and Rural Property Pricing',
          body: 'Pricing lake cabins, acreage, and rural properties in northern Minnesota requires specialized knowledge. Comparables are scarce and each property is unique. Factors like lake chain access, DNR shoreline classification, dock rights, road access, and hunting/recreational value all affect price. This is where local expertise matters more than any algorithm.',
        },
        {
          heading: 'Timing the Market',
          body: 'Northern Minnesota has seasonal rhythms. Spring (April–June) and summer are peak seasons for lake and recreational properties. Year-round residential homes in Grand Rapids and larger communities sell steadily throughout the year. We\'ll advise you on whether timing your listing makes sense for your specific property.',
        },
      ],
      tip: 'Online home value estimators (Zestimate, etc.) are notoriously inaccurate for rural and lake properties in our market. Don\'t rely on them to set your list price — ask us for a real CMA.',
    },
    {
      slug: 'listing-marketing',
      title: 'List & Market Your Home',
      subtitle: 'Step 3 of 6',
      icon: '📸',
      intro: 'How your home is presented online determines how many buyers walk through the door. Professional marketing is not optional — it\'s the job.',
      sections: [
        {
          heading: 'Professional Photography',
          body: 'Over 95% of buyers start their search online. Professional real estate photography is the single highest-ROI marketing investment a seller can make. We use professional photographers for every listing — not iPhone photos. For lake and acreage properties, we include drone aerial photography to showcase the full property and surroundings.',
        },
        {
          heading: 'MLS Listing & Syndication',
          body: 'Your home will be listed on the NorthStar MLS, which automatically syndicates to Zillow, Realtor.com, Redfin, Homes.com, and hundreds of other sites within 24 hours. We write compelling listing descriptions that highlight your home\'s unique features and the lifestyle it offers — not just a list of room sizes.',
        },
        {
          heading: 'Social Media & Digital Marketing',
          body: 'We promote your listing through targeted Facebook and Instagram ads to buyers actively searching in northern Minnesota and those looking to relocate from the Twin Cities, Chicago, and other metro areas. Lake properties especially attract out-of-state buyers who discover them online.',
        },
        {
          heading: 'Open Houses & Showings',
          body: 'We coordinate all showing requests through a professional showing service — you\'ll get a text notification before every showing and feedback afterward. For well-priced homes in good condition, we often host a strategic open house the first weekend on the market to generate early buzz and competing offers.',
        },
      ],
      tip: 'Clear out and clean before every showing, even last-minute ones. Buyers who show up with little notice are often the most motivated.',
    },
    {
      slug: 'reviewing-offers',
      title: 'Review & Negotiate Offers',
      subtitle: 'Step 4 of 6',
      icon: '📋',
      intro: 'When offers come in, price is just one of many factors. We\'ll help you evaluate the full picture and negotiate the best outcome.',
      sections: [
        {
          heading: 'What\'s in an Offer',
          body: 'A purchase agreement includes the offered price, earnest money amount, proposed closing date, contingencies (inspection, financing, appraisal), and any personal property included or excluded. We review every element — a higher price with weak financing or too many contingencies may be less attractive than a slightly lower offer from a cash buyer or highly qualified borrower.',
        },
        {
          heading: 'Multiple Offer Situations',
          body: 'If you receive multiple offers, we\'ll help you structure a "highest and best" deadline to maximize competition. We\'ll rank all offers based on price, terms, and buyer strength. Sometimes an offer $5,000 lower with no contingencies and a flexible closing date is the better choice. We\'ll lay out the trade-offs clearly.',
        },
        {
          heading: 'Countering and Negotiating',
          body: 'It\'s rare that a first offer is accepted without any back-and-forth. You can counter on price, closing date, what\'s included in the sale, and contingencies. We\'ll advise you on what\'s reasonable to push back on and where flexibility keeps the deal together.',
        },
        {
          heading: 'Buyer Financing Red Flags',
          body: 'We\'ll verify the buyer\'s pre-approval letter and, when appropriate, call their lender directly to assess the strength of their financing. A pre-approval from an unknown online lender is not the same as one from a local bank with a proven track record of closing on time.',
        },
      ],
      tip: 'Don\'t let emotion drive your response to a low offer. A lowball offer that opens a negotiation is better than silence. Counter strategically, not personally.',
    },
    {
      slug: 'under-contract',
      title: 'Under Contract',
      subtitle: 'Step 5 of 6',
      icon: '📝',
      intro: 'Once you accept an offer, you\'re "under contract." The deal isn\'t done, but you\'re close. Here\'s what happens next.',
      sections: [
        {
          heading: 'The Inspection Period',
          body: 'The buyer will hire a home inspector (typically 7–10 business days after acceptance). The inspection period is where most deals hit turbulence. Buyers may request repairs, price reductions, or closing credits. We\'ll help you respond strategically — some requests are reasonable, others are not. Our goal is keeping the deal together on terms that work for you.',
        },
        {
          heading: 'The Appraisal',
          body: 'If the buyer is financing, their lender will order an appraisal. If your home appraises at or above the purchase price, great. If it comes in low, you\'ll need to negotiate: reduce the price, have the buyer make up the difference in cash, or split the difference. In rare cases, the deal falls apart at this stage.',
        },
        {
          heading: 'Keep Your Home Ready',
          body: 'During the contract period, keep your home in showing condition. Buyers have the right to a final walk-through before closing. If the home looks significantly different from when they made their offer — damage, missing items, trash left behind — it can create last-minute problems.',
        },
        {
          heading: 'Start Planning Your Move',
          body: 'Book your movers early, especially for summer closings when moving companies are busy. Begin packing non-essential items. Notify utilities, your bank, post office, and employer of your upcoming move. Don\'t cancel utilities until after closing — the buyer\'s final walk-through requires them to be on.',
        },
      ],
      tip: 'If the buyer asks for repairs, resist the urge to do them yourself to save money. Use licensed contractors so there\'s a paper trail if questions arise later.',
    },
    {
      slug: 'closing-day',
      title: 'Closing Day',
      subtitle: 'Step 6 of 6',
      icon: '🎉',
      intro: 'The finish line. Closing day is typically smooth if everything has gone well. Here\'s how to be prepared.',
      sections: [
        {
          heading: 'Final Walk-Through',
          body: 'The buyer will do a final walk-through 24–48 hours before closing. The home should be in the same condition as when the purchase agreement was signed, with all agreed-upon repairs completed. Leave behind all items included in the sale (appliances, fixtures, keys, garage openers, manuals).',
        },
        {
          heading: 'What You\'ll Need',
          body: 'Bring a government-issued photo ID. You\'ll sign the deed and other transfer documents at the title company or with the closing attorney. As the seller, your paperwork is typically less than the buyer\'s. Closing usually takes 30–60 minutes.',
        },
        {
          heading: 'Proceeds and Payoffs',
          body: 'At closing, the title company will pay off your existing mortgage, deduct real estate commissions and closing costs, and send you the net proceeds — either as a check or wire transfer. You\'ll receive a settlement statement showing exactly how every dollar was allocated.',
        },
        {
          heading: 'After Closing',
          body: 'Leave all keys, garage door openers, mailbox keys, and any gate codes for the buyer. Leave behind manuals for appliances and major systems. If there are any quirks about the home (the trick to the sticky window, which breaker controls the garage), consider leaving a handwritten note — it\'s a kindness buyers always appreciate.',
        },
      ],
      tip: 'Keep copies of your closing disclosure and settlement statement. You may need them for tax purposes — consult your accountant about any capital gains implications from your sale.',
    },
  ],
};

export const guides = { buying: buyingGuide, selling: sellingGuide };
