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
          "Our commercial work runs on standing schedules across schools, education campuses, aged care, strata complexes and industrial sites, and it works the same way in Orange as it does in Bathurst: an agreed scope and frequency, the same crew on the cycle, and the noisy work planned around teaching hours and quiet periods rather than pushed straight through them. The one genuine difference is growth rate. Contracts written to a Bathurst frequency tend to need tightening for Orange sites through the peak of the season.",
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
    serviceNotes: [
      {
        slug: 'landscaping',
        heading: 'Landscaping in Orange',
        body:
          "The basalt-derived red-brown clays around Orange drain far better than the heavy country elsewhere in the Central West, which is mostly an advantage: beds drain rather than sour, and turf establishes well on properly prepared ground. It does change how you build, though. Free-draining soil moves water further and faster, so retaining wall drainage and the levels around a house have to account for where that water actually ends up rather than assuming it will sit and soak. We do the excavation ourselves, so grading, drainage and planting are decided by one crew.",
      },
      {
        slug: 'residential-services',
        heading: 'Lawn mowing and garden maintenance in Orange',
        body:
          "Orange takes roughly 900mm of rain a year against Bathurst's 705mm, and that shows up directly in the mowing cycle. A fortnightly interval that comfortably holds a Bathurst lawn through spring will often leave an Orange lawn too long by the second week, so through October and November most properties here want weekly. The trade-off is that lawns in Orange hold condition through summer better than in drier parts of the region, so the work is keeping up with growth rather than nursing stressed turf.",
      },
      {
        slug: 'commercial-grounds-maintenance',
        heading: 'Commercial grounds maintenance in Orange',
        body:
          "Standing contracts run the same way here as in Bathurst: an agreed scope and frequency, the same crew on the cycle, and the noisy work planned around teaching hours, quiet periods and site access rather than pushed straight through them. The one difference worth writing into the contract is growth rate. A frequency set for a Bathurst site is usually too loose for an Orange one through the peak of the season, and a schedule that does not account for that is where institutional grounds start looking neglected in November.",
      },
      {
        slug: 'rural-acreage-services',
        heading: 'Acreage mowing and slashing in Orange',
        body:
          "Land around Orange is largely rural-residential and vineyard country rather than broadacre, which means smaller blocks with more edges, more infrastructure to work around and more that has to be cut by machine rather than driven over. The higher rainfall that helps the lawns also drives paddock growth, so blocks here get away faster than the equivalent block closer to Bathurst. We run slashers in several sizes across the Bobcat skid steers, a flail mower on the excavator for drains and rough edges, and a compact tractor for the open country.",
      },
      {
        slug: 'weed-management',
        heading: 'Weed control in Orange',
        body:
          "Orange is regulated differently to the rest of our area. The Central Tablelands Weeds Authority is the control authority for Bathurst Regional, Blayney, Lithgow and Oberon, while Orange City Council runs its own weed biosecurity function with council Biosecurity Officers. Priority weeds are set regionally under the NSW Biosecurity Act 2015 and grouped as prevent, eradicate, contain and asset protection. We handle the spraying with buggy-mounted commercial equipment; for confirming what is declared on your land, Orange City Council is the right first call.",
      },
      {
        slug: 'earthworks-excavation',
        heading: 'Earthworks and excavation in Orange',
        body:
          "Free-draining basalt country behaves differently under machinery to heavy clay, and it changes how a site is cut and filled. Fill still has to be compacted rather than spread, but water finds its way through this ground faster, so drainage falls and where stormwater is directed matter more than they might on tighter soil. We run Bobcat S770 and S650 skid steers in tracked and wheeled configurations and E50 and E20 excavators, the E20 being the machine for restricted residential access, with tipper and tray trucks for spoil.",
      },
    ],
    faqs: [
      { q: 'Do you actually work in Orange, or only Bathurst?', a: 'We work in Orange regularly. It is under an hour from our base at Kelso along the Mitchell Highway, and we run both recurring and project work there rather than treating it as an occasional trip.' },
      { q: 'How is working in Orange different to Bathurst?', a: 'More rain, roughly 900mm a year against Bathurst 705mm, so grass grows harder and mowing cycles run tighter. Higher elevation, so spring frost runs later and snow is normal above 800 metres. And basalt-derived soils that drain much better than heavy clay.' },
      { q: 'When is the best time to lay turf in Orange?', a: 'Later than in Bathurst. Spring frost is a real risk here well after Bathurst has cleared, so it is worth waiting until the frost risk has properly passed rather than going on the first warm week. Early autumn also works while there is warmth in the ground.' },
      { q: 'Do you cover the villages around Orange?', a: 'The surrounding district is covered as part of our Central West service area. How far out we go depends on the size of the job, so it is worth asking about your particular property.' },
      { q: 'Who do I contact about priority weeds in Orange?', a: 'Orange City Council, which runs its own weed biosecurity function with Biosecurity Officers. That differs from Bathurst, Blayney, Lithgow and Oberon, which sit under the Central Tablelands Weeds Authority.' },
    ],
    img: '/images/services-header.jpg',
    alt: 'Grounds maintenance and landscaping work in the Central West',
  },
  {
    slug: 'lithgow',
    name: 'Lithgow',
    region: 'Central West NSW',
    postcode: '2790',
    lead: "Landscaping, lawn mowing, grounds maintenance, acreage slashing and earthworks in Lithgow, Portland, Wallerawang and the surrounding district.",
    intro: "Lithgow sits about 300 metres higher than Bathurst and takes roughly 210mm more rain a year, and it is built on the sandstone country at the western edge of the Blue Mountains rather than the granite and basalt further west. Those three facts change most of what matters on a property here: how often grass needs cutting, how the ground behaves when you dig it, and how long the frost window runs. We work across Lithgow, Portland, Wallerawang and the villages around them, and the schedule is set to this district rather than carried across from the Bathurst round.",
    serviceNotes: [
      {
        slug: 'residential-services',
        heading: "Lawn mowing and garden maintenance in Lithgow",
        body: "Lithgow averages around 860mm of rain a year against Bathurst's 648mm, and the mean maximum sits near 18.2C against Bathurst's 20.8C. More water and less heat is a combination that keeps lawns growing steadily rather than in the hard bursts you get in drier towns, so the mowing cycle here is about consistency rather than chasing a spring surge. The trade-off is that ground stays wet longer after rain, so there are more weeks where the timing of a visit matters as much as the frequency.",
      },
      {
        slug: 'landscaping',
        heading: "Landscaping in Lithgow",
        body: "Sandstone country behaves differently to the basalt and granite further west. Rock sits shallow in a lot of Lithgow, which limits how deep beds can be cut and often decides whether a level change is built up rather than dug down. Retaining walls here are frequently the practical answer to a slope rather than a design choice. Because we run our own excavators, we find out what is actually under a site early rather than pricing a job on the assumption that it can be dug.",
      },
      {
        slug: 'earthworks-excavation',
        heading: "Earthworks and excavation in Lithgow",
        body: "Shallow sandstone is the defining constraint on excavation around Lithgow, and it is the main reason a trench that looks straightforward on the surface takes longer than the metres suggest. It changes machine selection too: rock is a job for the E50 rather than the E20, and there are sites where the answer is to redesign around it instead of trying to break through it. Higher rainfall also means drainage falls have to be right, because water that has nowhere to go on tight ground finds a building instead.",
      },
      {
        slug: 'rural-acreage-services',
        heading: "Acreage mowing and slashing in Lithgow",
        body: "Blocks around Lithgow, Portland and Wallerawang tend to be a mix of cleared paddock and timbered country, with more regrowth pressure than open grazing land carries. The extra rainfall drives that regrowth hard. We run slashers in several sizes across the Bobcat skid steers, a forestry mulcher for woody regrowth and scrub, and a flail mower on the excavator for drains and rough edges, which covers most of what these blocks need without burning or raking afterwards.",
      },
      {
        slug: 'commercial-grounds-maintenance',
        heading: "Commercial grounds maintenance in Lithgow",
        body: "Standing contracts run the same way here as in Bathurst: an agreed scope and frequency, the same crew on the cycle, and noisy work planned around teaching hours, quiet periods and site access. What changes is the seasonal shape. A Lithgow site holds growth later into autumn than a Bathurst one and starts slower in spring, so a frequency copied straight across usually ends up wrong at both ends of the year.",
      },
      {
        slug: 'weed-management',
        heading: "Weed control in Lithgow",
        body: "Lithgow sits under the Central Tablelands Weeds Authority, the same control authority as Bathurst Regional, Blayney and Oberon, so priority weed listings here match what applies at home rather than differing the way Orange does. Priority weeds are set regionally under the NSW Biosecurity Act 2015 and grouped as prevent, eradicate, contain and asset protection. Wetter ground and more regrowth mean blackberry and woody weeds are a bigger share of the work here than they are further west.",
      },
    ],
    faqs: [
      { q: "Do you travel to Lithgow?", a: "Yes. Lithgow is about an hour east of our base at Kelso, and we cover Portland and Wallerawang on the same runs. How far out we go depends on the size of the job, so it is worth asking." },
      { q: "How is Lithgow different to work in than Bathurst?", a: "Higher and wetter. Lithgow is around 950 metres against Bathurst's 650, takes roughly 860mm of rain against 648mm, and runs a couple of degrees cooler through the day. It also sits on sandstone rather than granite or basalt, which matters most for digging." },
      { q: "Does the rock affect what excavation you can do?", a: "Often, yes. Sandstone sits shallow across a lot of Lithgow, which is the usual reason a trench or a cut takes longer than the metres suggest. We would rather find that out on a site visit than discover it halfway through." },
      { q: "Do you cover Portland and Wallerawang?", a: "Yes, both, along with the villages around them. They sit in the same council area and the same growing conditions, so they run on the same schedule as Lithgow." },
      { q: "Who regulates priority weeds in Lithgow?", a: "The Central Tablelands Weeds Authority, which also covers Bathurst Regional, Blayney and Oberon. Priority weeds are set regionally under the NSW Biosecurity Act 2015." },
    ],
    img: '/images/services-header.jpg',
    alt: 'Grounds maintenance and landscaping work in the Central West',
  },
  {
    slug: 'oberon',
    name: 'Oberon',
    region: 'Central West NSW',
    postcode: '2787',
    lead: "Landscaping, lawn mowing, grounds maintenance, acreage slashing and earthworks in Oberon and the surrounding tablelands.",
    intro: "Oberon is the coldest town in New South Wales, and everything about maintaining a property there follows from that. It sits at about 1,113 metres, roughly 460 metres above Bathurst, takes snow most winters, and carries frosts through autumn, winter and spring rather than just the cold months. The practical effect is a growing season that opens late, closes early and gives you a much narrower window for anything that has to establish. We work across Oberon and the surrounding tablelands, and the calendar there is genuinely different to the one we run at home.",
    serviceNotes: [
      {
        slug: 'residential-services',
        heading: "Lawn mowing and garden maintenance in Oberon",
        body: "The mowing season in Oberon is short and intense rather than long and steady. Grass barely moves through the cold months, then runs hard once the ground finally warms, which means a schedule that holds a fixed interval year round is wrong most of the year here. We tighten right up through the short peak and ease off substantially outside it. Frost damage is also a real consideration: cutting frost-affected grass too short does more harm at this altitude than it would lower down.",
      },
      {
        slug: 'landscaping',
        heading: "Landscaping in Oberon",
        body: "Oberon has the narrowest planting and turf window of anywhere we work. Frosts run through autumn, winter and spring, so the safe period for laying turf or putting new plants in is genuinely short, and going early on a warm week is how new work gets killed. Planning around that matters more than anything else on an Oberon job. Frost heave also works on shallow structures over a winter, so footings and bases here want to be set deeper than the equivalent job in Bathurst.",
      },
      {
        slug: 'rural-acreage-services',
        heading: "Acreage mowing and slashing in Oberon",
        body: "Oberon is farming and forestry country, and a lot of the acreage work reflects that: pine plantation edges, timbered blocks and paddocks with more regrowth pressure than open grazing land. The forestry mulcher on the skid steer handles woody regrowth and scrub in one pass, and the excavators with grabs deal with stumps and heavier material. The short season compresses the work, so booking ahead matters more here than it does elsewhere.",
      },
      {
        slug: 'earthworks-excavation',
        heading: "Earthworks and excavation in Oberon",
        body: "Ground conditions at this altitude are dictated by water and cold. Wet, cold ground holds moisture far longer than it does in Bathurst, which narrows the window when heavy machinery can work a site without tearing it up. Frost also works on freshly disturbed ground over a winter, so compaction and drainage need to be right before the cold arrives rather than tidied up afterwards. We run tracked skid steers for exactly this kind of soft going.",
      },
      {
        slug: 'commercial-grounds-maintenance',
        heading: "Commercial grounds maintenance in Oberon",
        body: "A grounds contract written for a Bathurst site does not transfer to Oberon. The season is shorter at both ends, so the same annual visit count spread evenly leaves the site over-serviced in winter and under-serviced through the short growth peak. We write Oberon schedules with the visits weighted heavily toward the warm months, which costs the same over a year but keeps the site right when anyone is actually looking at it.",
      },
      {
        slug: 'weed-management',
        heading: "Weed control in Oberon",
        body: "Oberon sits under the Central Tablelands Weeds Authority alongside Bathurst Regional, Blayney and Lithgow, so priority weed listings match what applies at home. The difference is timing rather than the list. The spraying window is compressed by the short season, and treating during active growth means a narrower period here than anywhere else we work, so weed control in Oberon is booked to the season rather than fitted in around it.",
      },
    ],
    faqs: [
      { q: "Do you travel to Oberon?", a: "Yes. Oberon is under an hour from our base at Kelso. Larger jobs justify the run comfortably; smaller ones are easier to fit when we already have work in the district." },
      { q: "What makes Oberon different to work in?", a: "It is the coldest town in New South Wales, at around 1,113 metres against Bathurst's 650. Snow most winters, and frosts through autumn, winter and spring rather than just the cold months. The growing season opens late and closes early." },
      { q: "When can turf be laid in Oberon?", a: "Later than anywhere else we work, and the window is short. Frosts run well into spring here, so laying on the first warm week is how new turf gets killed. It is worth waiting until the frost risk has genuinely passed." },
      { q: "Does the short season change how contracts are scheduled?", a: "Yes. We weight the visits toward the warm months rather than spreading them evenly, because an even spread over-services an Oberon site in winter and under-services it through the short growth peak." },
      { q: "Who regulates priority weeds in Oberon?", a: "The Central Tablelands Weeds Authority, the same authority covering Bathurst Regional, Blayney and Lithgow, under the NSW Biosecurity Act 2015." },
    ],
    img: '/images/services-header.jpg',
    alt: 'Grounds maintenance and landscaping work in the Central West',
  },
  {
    slug: 'blayney',
    name: 'Blayney',
    region: 'Central West NSW',
    postcode: '2799',
    lead: "Landscaping, lawn mowing, grounds maintenance, acreage slashing and earthworks in Blayney and the Belubula Valley.",
    intro: "Blayney sits in the Belubula Valley at about 863 metres, with the hills around it rising to between 890 and 930. That valley setting is the thing that shapes the work: cold air drains off the surrounding hills and pools in the low ground, so the frost period here runs anywhere from five to eight months of the year and the town has recorded down to minus 10.6C, among the lowest in the Central West. Frost, not rainfall, is the constraint on a Blayney property.",
    serviceNotes: [
      {
        slug: 'landscaping',
        heading: "Landscaping in Blayney",
        body: "Cold air pooling in the valley means frost risk on a Blayney block is not uniform. The low corner of a property can sit several degrees colder than the top of the same block, and it is the low ground that stays frosted longest. That changes where new planting goes and when it goes in. Turf laid into cold ground sits dormant rather than rooting, and with a frost period that can run five to eight months, the safe establishment window here is materially shorter than Bathurst's.",
      },
      {
        slug: 'residential-services',
        heading: "Lawn mowing and garden maintenance in Blayney",
        body: "Blayney takes around 766mm of rain a year, appreciably more than Bathurst's 648mm, with a mean maximum near 18.3C and a mean minimum of 4.4C. More water and colder nights means growth that starts later and runs steadily rather than surging. Cutting frost-affected grass short is the main thing to avoid: at these minimums the lawn does not recover the way it would in a milder town, so through the frost months the mower goes up rather than down.",
      },
      {
        slug: 'rural-acreage-services',
        heading: "Acreage mowing and slashing in Blayney",
        body: "Blayney is livestock country, and the shire sits high enough that the whole district runs a cool-climate pasture pattern. Paddock work here is shaped by the frost calendar: the growth that has to be managed comes in a defined window rather than year round, so slashing and fire hazard reduction are scheduled to that rather than to a fixed date. We run slashers in several sizes across the Bobcat skid steers and a compact tractor for the open country.",
      },
      {
        slug: 'commercial-grounds-maintenance',
        heading: "Commercial grounds maintenance in Blayney",
        body: "Sites in Blayney need a schedule weighted to the growing months, because a frost period running five to eight months leaves a long stretch where mowing achieves very little. Getting that right is mostly about not paying for visits that do nothing in July while making sure the site is covered properly through the months it actually grows. The same crew, scope and standard applies; only the distribution across the year changes.",
      },
      {
        slug: 'earthworks-excavation',
        heading: "Earthworks and excavation in Blayney",
        body: "Valley ground holds water, and cold ground holds it longer. Around Blayney the practical consequence is that the window for working a site with heavy machinery without tearing it up is narrower than it looks, particularly on the low parts of a block. Drainage design matters more here than the average job: water that collects in a valley floor has nowhere obvious to go. We run the skid steers in tracked configuration for soft going.",
      },
      {
        slug: 'weed-management',
        heading: "Weed control in Blayney",
        body: "Blayney sits under the Central Tablelands Weeds Authority along with Bathurst Regional, Lithgow and Oberon, and Blayney Council also runs an annual weed control program across its townships and villages that includes blackberry. Priority weeds are set regionally under the NSW Biosecurity Act 2015. The long frost period compresses the effective spraying window, so treating during active growth means a tighter calendar than in warmer parts of the region.",
      },
    ],
    faqs: [
      { q: "Do you work in Blayney?", a: "Yes. Blayney is a short run southwest of our base at Kelso, close enough that we take both recurring rounds and project work there." },
      { q: "Why is frost such a big factor in Blayney?", a: "The town sits in the Belubula Valley with hills rising to 890-930 metres around it. Cold air drains off those hills and pools in the low ground, which is why the frost period runs five to eight months and Blayney has recorded down to minus 10.6C." },
      { q: "Does frost risk vary across a single property?", a: "It can, noticeably. The low corner of a block often sits colder and stays frosted longer than the top of the same block, which affects where new planting goes and when." },
      { q: "When should turf be laid in Blayney?", a: "After the frost risk has genuinely passed, which is later than in Bathurst. Turf laid into cold ground sits dormant instead of rooting." },
      { q: "Who regulates priority weeds in Blayney?", a: "The Central Tablelands Weeds Authority, and Blayney Council also runs an annual weed control program across its townships and villages that includes blackberry." },
    ],
    img: '/images/services-header.jpg',
    alt: 'Grounds maintenance and landscaping work in the Central West',
  },
]

export const getAreaBySlug = (slug) => AREAS.find((a) => a.slug === slug)

// Towns we cover that do not have their own page yet. Listing them honestly on
// the hub is better than spinning up thin pages for places with no measurable
// search demand behind them.
// Kept deliberately in sync with the Google Business Profile service areas.
// Claiming towns on the site that the profile does not list is an avoidable
// inconsistency, and the profile is the authority on where they actually go.
export const ALSO_SERVICED = [
  'Bathurst', 'Kelso', "O'Connell", 'Portland', 'Wallerawang',
]

export const AREAS_PAGE = {
  intro:
    "We are based at Kelso, just outside Bathurst, and most of our recurring work sits inside the Bathurst and Kelso area. Beyond that we cover the Central West more broadly, and how far we travel depends on what the job is rather than on a fixed radius drawn on a map.",
  sections: [
    {
      heading: 'How far we travel, and why it depends on the job',
      body:
        "A day of acreage slashing or a landscaping project justifies a longer run than a single suburban lawn does, so the honest answer to how far we go is that it varies. Recurring residential rounds work best close to home or clustered with other work in the same district. Commercial contracts, rural work and project jobs travel further, because the machinery is already loaded and the day is already committed. If you are outside Bathurst, it is worth asking what we already have scheduled near you, since that often decides how soon we can get there.",
    },
    {
      heading: 'The Central West is not one growing region',
      body:
        "Conditions change quickly across this part of the state, and the work changes with them. Bathurst sits around 670 metres and takes roughly 705mm of rain a year. Orange runs from 600 metres up past 1,300 near Mount Canobolas and takes closer to 900mm, so grass grows harder and the frost window runs later. Oberon is higher again and colder. Ground varies just as much, from the basalt-derived soils around Orange to the heavier country elsewhere. A mowing frequency or a turf timetable that suits one town is often wrong for the next one over.",
    },
    {
      heading: 'Weed control is regulated differently depending where you are',
      body:
        "Priority weeds are set regionally under the NSW Biosecurity Act 2015, not uniformly across the state, and the control authority is not the same everywhere either. The Central Tablelands Weeds Authority covers Bathurst Regional, Blayney, Lithgow and Oberon, while Orange City Council runs its own weed biosecurity function with council Biosecurity Officers. We handle the spraying wherever you are; for confirming what is actually declared on your land, the right first call depends on which council area you sit in.",
    },
  ],
}
