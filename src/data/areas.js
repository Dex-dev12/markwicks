// Service-area pages. One page per town, covering every service as it applies
// to that town, rather than a service x location matrix. The copy has to carry
// facts that are actually true of the place - elevation, rainfall, soil, the
// weed control authority - because a page that only swaps the town name into a
// template is a doorway page and gets treated as one.
export const AREAS = [
  {
    slug: 'orange',
    name: 'Orange',
    region: 'Central West NSW',
    postcode: '2800',
    lead: 'Landscaping, lawn mowing, grounds maintenance, acreage slashing and earthworks in Orange and the surrounding villages.',
    intro:
      "Orange is a different growing environment to Bathurst, and the work changes with it. The town sits higher, takes appreciably more rain, and runs on basalt country rather than the granite and sedimentary ground further east. In practice that means grass that grows harder and longer through the season, soil that drains better than most of the Central West, and a spring frost risk that runs later into the year than it does at home. We work across Orange and the villages around it, and the schedule is set to the district rather than copied from the Bathurst round.",
    sections: [
      {
        heading: 'Mowing and garden maintenance in Orange',
        body:
          "Orange averages roughly 900mm of rain a year against Bathurst's 705mm, and that difference shows up directly in the mowing cycle. Lawns here carry more growth for longer, and a fortnightly interval that holds a Bathurst lawn through spring will often leave an Orange lawn too long by the second week. We set the frequency to the property rather than the calendar, which through October and November usually means weekly. The upside of the extra rainfall is that lawns here hold condition through summer better than they do in drier parts of the region, so the work is about keeping up with growth rather than nursing stressed turf.",
      },
      {
        heading: 'Landscaping on basalt country',
        body:
          "The red-brown clay soils around Orange and Mount Canobolas are basalt-derived, deep and unusually free-draining for clay. For landscaping that is mostly good news: garden beds drain rather than sour, and turf establishes well once the ground is prepared properly. It does change how you build, though. Free-draining ground shifts water further and faster than heavy clay does, so retaining wall drainage and levels around a house need to account for where that water actually goes rather than assuming it will sit. We do the excavation ourselves, so the grading and the drainage are decided by the same crew that lays the beds and turf.",
      },
      {
        heading: 'Turf, planting and the frost window',
        body:
          "Elevation is the thing that catches people out. Orange runs from roughly 600 metres up past 1,300 near the mountain, and ground above 800 metres sees snow most winters. Spring frost is a genuine risk here well after Bathurst has cleared, which narrows the safe window for laying turf and putting new plants in. The practical answer is to hold new turf until the frost risk has properly passed rather than going early on the first warm week, and to favour early autumn while there is still heat in the ground. On higher blocks toward Canobolas that window is shorter again.",
      },
      {
        heading: 'Acreage, rural blocks and vineyard country',
        body:
          "A large share of the land around Orange is rural-residential and vineyard country rather than broadacre, which means smaller blocks with more edges, more infrastructure to work around and more that has to be cut by machine rather than driven over. We run slashers in several sizes across the Bobcat skid steers, a flail mower on the excavator for drains and rough edges, and a compact tractor for the open country. The extra rainfall that helps the lawns also drives paddock growth, so blocks here can get away faster than the equivalent block closer to Bathurst.",
      },
      {
        heading: 'Commercial grounds maintenance in Orange',
        body:
          "Our commercial work runs on standing schedules across schools, TAFE campuses, aged care, strata complexes and industrial sites, and it works the same way in Orange as it does in Bathurst: an agreed scope and frequency, the same crew on the cycle, and the noisy work planned around teaching hours and quiet periods rather than pushed straight through them. The one genuine difference is growth rate. Contracts written to a Bathurst frequency tend to need tightening for Orange sites through the peak of the season.",
      },
      {
        heading: 'Weed control and who regulates it here',
        body:
          "This is one place Orange genuinely differs administratively. The Central Tablelands Weeds Authority is the control authority for Bathurst Regional, Blayney, Lithgow and Oberon, but Orange City Council runs its own weed biosecurity function with council Biosecurity Officers. Priority weeds for the Central Tablelands are set regionally under the NSW Biosecurity Act 2015 and grouped as prevent, eradicate, contain and asset protection. We handle the spraying with buggy-mounted commercial equipment; for confirming what is declared on your land, Orange City Council is the right first call rather than the Bathurst authority.",
      },
      {
        heading: 'Getting to Orange, and how that affects scheduling',
        body:
          "Orange is under an hour from our base at Kelso along the Mitchell Highway, which is close enough that we run regular work there rather than treating it as an occasional trip. Job size still matters for scheduling: a day of acreage slashing or a landscaping project justifies the run comfortably, while a single small residential mow is easier to fit when we already have work in the district. If you are in Orange or one of the villages, it is worth asking what we already have scheduled nearby, because that often decides how soon we can get to you.",
      },
    ],
    faqs: [
      { q: 'Do you actually work in Orange, or only Bathurst?', a: 'We work in Orange regularly. It is under an hour from our base at Kelso along the Mitchell Highway, and we run both recurring and project work there rather than treating it as an occasional trip.' },
      { q: 'How is working in Orange different to Bathurst?', a: 'More rain, roughly 900mm a year against Bathurst 705mm, so grass grows harder and mowing cycles run tighter. Higher elevation, so spring frost runs later and snow is normal above 800 metres. And basalt-derived soils that drain much better than heavy clay.' },
      { q: 'When is the best time to lay turf in Orange?', a: 'Later than in Bathurst. Spring frost is a real risk here well after Bathurst has cleared, so it is worth waiting until the frost risk has properly passed rather than going on the first warm week. Early autumn also works while there is warmth in the ground.' },
      { q: 'Do you cover the villages around Orange?', a: 'Yes, including Millthorpe, Molong, Spring Hill, Lucknow, Nashdale and Borenore. How far out we go depends on the size of the job, so it is worth asking.' },
      { q: 'Who do I contact about priority weeds in Orange?', a: 'Orange City Council, which runs its own weed biosecurity function with Biosecurity Officers. That differs from Bathurst, Blayney, Lithgow and Oberon, which sit under the Central Tablelands Weeds Authority.' },
    ],
    img: '/images/services-header.jpg',
    alt: 'Grounds maintenance and landscaping work in the Central West',
  },
]

export const getAreaBySlug = (slug) => AREAS.find((a) => a.slug === slug)
