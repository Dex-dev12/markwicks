import { Building2, Sprout, Tractor, Leaf, Shovel, Home as HomeIcon } from 'lucide-react'

export const SERVICES = [
  {
    slug: 'residential-services',
    icon: HomeIcon,
    title: 'Residential Services',
    text: 'Lawn mowing, garden maintenance and property upkeep for homes and weekenders across the Bathurst region.',
    body: "We still look after home and weekender properties across Bathurst and the Central West: mowing, garden maintenance, hedge trimming and the general upkeep that keeps a property presentable. Residential work runs alongside our commercial contracts, landscaping and earthworks rather than behind them: the same crews and machinery cover all of it, so a home lawn round and a school grounds contract sit in the same weekly schedule.",
    bullets: ['Lawn Mowing', 'Garden Maintenance', 'Hedge Trimming', 'Weed Control', 'Brush Cutting', 'Pressure Washing', 'Green Waste Removal', 'Property Maintenance'],
    intro: "Home properties around Bathurst run on a different rhythm to the rest of what we do. A lawn that looks fine in July needs cutting weekly by November, and the same block can go from frost-bound to knee-high inside a couple of months. Most of our residential work is a regular mowing and garden round set to that cycle, with the frequency moving through the year rather than staying fixed, plus the hedge trimming, edging and tidying that keeps a property looking maintained rather than merely mown.",
    sections: [
      {
        heading: "A round that follows the season",
        body: "Bathurst sits high enough that growth is genuinely seasonal. Through spring and early summer most lawns need cutting every week or two; through the coldest part of winter the grass barely moves and the same interval is more than the lawn needs. We set the schedule to follow that growth curve rather than holding one fixed interval all year, which keeps the lawn in better condition than letting it get away and then scalping it back.",
      },
      {
        heading: "Garden work through the year",
        body: "Mowing is the visible part, but the work that keeps a garden from slowly declining is the edging, weeding, hedge trimming and bed maintenance around it. Hedges hold their shape better cut little and often than cut hard once a year. Beds that are weeded and topped up on a cycle need far less intervention than beds left until they are overgrown. Green waste goes with us on the tray and tipper trucks rather than being left in a pile for you to deal with.",
      },
      {
        heading: "Weekenders and properties you are not living at",
        body: "A good share of the country around Bathurst is owned by people who are not there every week, and an unattended property tells on itself quickly. Lawns get away, gutters fill, and a place that looks empty looks empty to more than just the neighbours. A standing round means the property is kept presentable whether or not you are in it, and it means someone is on site regularly enough to notice a problem while it is still small.",
      },
      {
        heading: "Tidy-ups and the bigger jobs",
        body: "Not everything is a recurring round. Properties being prepared for sale, blocks that have been left for a season, gardens that need resetting rather than maintaining: those are one-off jobs, and they are often the point at which it makes sense to do the larger work as well. Because we also run landscaping and earthworks crews, a tidy-up that turns into new beds, a retaining wall or levelling work does not need another contractor brought in.",
      },
    ],
    faqs: [
      { q: "How often will you mow?", a: "It depends on the season and the property. Weekly or fortnightly through the growing months, easing back over winter when the grass stops moving, so the visits follow the growth rather than sitting on one fixed interval all year." },
      { q: "Do you do one-off mows, or only regular rounds?", a: "Both, though regular rounds work out better value and keep the lawn in better condition. One-off jobs are common for properties going on the market or blocks that have been left for a season." },
      { q: "Can you maintain a property when we are not there?", a: "Yes, and a fair amount of our residential work is exactly that. A standing schedule keeps a weekender or an unoccupied property presentable and means someone is on site often enough to spot a problem early." },
      { q: "Do you take the green waste away?", a: "Yes. Clippings, prunings and cleared material go with us on the tray and tipper trucks rather than being left on site." },
      { q: "Which areas do you cover?", a: "Bathurst and Kelso primarily, and across the Central West including Orange, Lithgow, Blayney and the surrounding districts depending on the property." },
    ],
    img: '/images/residential-lawn-care.jpg',
    alt: 'Neatly mowed residential front lawn',
    gallery: [
      { src: '/images/residential-lawn-care.jpg', alt: 'Neatly mowed residential front lawn' },
      { src: '/images/residential-garden-bed-edging.jpg', alt: 'Crew member edging a residential front garden bed' },
      { src: '/images/contact-header.jpg', alt: 'Established residential front yard with garden bed and lawn' },
    ],
  },
  {
    slug: 'commercial-grounds-maintenance',
    icon: Building2,
    title: 'Commercial Grounds Maintenance',
    text: 'Scheduled grounds maintenance for schools, TAFE NSW, aged care, strata and industrial sites across the Bathurst region.',
    body: "We run standing grounds-maintenance contracts across schools, TAFE NSW campuses, aged care facilities, strata complexes, industrial sites and commercial properties, on a fixed recurring schedule, so the site always looks the way it's supposed to without anyone having to chase us.",
    bullets: ['Schools', 'TAFE NSW', 'Aged Care', 'Strata', 'Industrial Sites', 'Commercial Properties', 'Scheduled Maintenance Programs'],
    intro: "Grounds maintenance on a commercial or institutional site is a scheduling problem as much as a landscaping one. The lawns, garden beds and hard surfaces need to look consistently presentable without anyone on site having to think about it, and the work has to happen around the people using the place: students between classes, residents in aged care, staff and deliveries on an industrial site. It is one of several things we do, and the machinery and crews that cover our landscaping and earthworks work cover it too.",
    sections: [
      {
        heading: 'How a standing contract works',
        body: "Most of our commercial work runs on a fixed recurring schedule agreed up front, rather than ad-hoc callouts. We agree the scope and frequency for each site, then the same crew works to that cycle through the year, adjusting for growth rates through spring and summer and tapering back over winter. The point of a standing schedule is that the site never drifts into looking neglected, and nobody at your end has to chase us to book the next visit. Because we also run earthmoving plant, Bobcat S770 and S650 skid steers and E50 and E20 excavators, larger jobs that come up on a site mid-contract can usually be handled by the same crew rather than tendered out separately.",
      },
      {
        heading: 'Working around occupied sites',
        body: "Schools, TAFE campuses, aged care facilities and hospitals all have periods where noisy equipment is a problem and areas that need to stay clear. We plan visits around those constraints rather than turning up and working through them. On education sites that usually means the bulk of the noisy work happens outside teaching hours or during breaks; on aged care and health sites it means keeping access paths clear and being conscious of residents and visitors moving through.",
      },
      {
        heading: 'What a site typically includes',
        body: "The exact scope varies, but a standing grounds contract usually covers mowing and edging to a set standard, garden bed maintenance and weeding, mulching on an agreed cycle, hedge and shrub trimming, and keeping car parks, footpaths and entries clear of clippings and debris. Larger sites often add seasonal work such as pruning, turf renovation or mulch top-ups scheduled into the annual cycle rather than quoted each time. Open areas and car parks are cut with commercial ride-ons, a Toro and a Kubota ZD1221, while a zero-turn handles the closer work around buildings, pathways and garden beds, and a utility buggy with commercial spraying equipment covers weed control across the site.",
      },
      {
        heading: 'Who we work with around Bathurst',
        body: "Our commercial work sits across schools, TAFE NSW campuses, aged care facilities, strata complexes, industrial sites and commercial properties through Bathurst, Kelso and the surrounding Central West. It runs alongside our residential rounds, landscaping and earthworks rather than instead of them, which is why a site can move between a standing maintenance schedule and a one-off project without bringing in another contractor.",
      },
    ],
    faqs: [
      { q: 'Do you work to a fixed schedule or on call?', a: 'Standing contracts run to a fixed recurring schedule agreed at the start, with the frequency adjusted across the seasons as growth rates change. Ad-hoc work can be arranged, but the recurring schedule is what keeps a site consistently presentable.' },
      { q: 'Can you work around school hours and occupied buildings?', a: 'Yes. On education, aged care and health sites we plan the noisy work around teaching hours, quiet periods and access requirements rather than working straight through them.' },
      { q: 'What areas around Bathurst do you cover?', a: 'Bathurst and Kelso primarily, extending across the Central West including Orange, Lithgow, Oberon, Blayney, Portland and Wallerawang depending on the site and schedule.' },
      { q: 'Do you handle one-off work as well as contracts?', a: 'Yes, though standing grounds contracts are the core of what we do. One-off projects such as landscaping, mulching or excavation are handled separately and can be scheduled alongside an existing contract.' },
      { q: 'How do we get a quote for a commercial site?', a: 'Get in touch and we will arrange a site visit to look at the areas involved, the standard you need and how often it should be maintained, then put together a schedule and price against that scope.' },
    ],
    img: '/images/parking-lot-mulch.jpg',
    alt: 'Completed commercial car park mulching and garden bed work',
    gallery: [
      { src: '/images/parking-lot-mulch.jpg', alt: 'Completed commercial car park mulching and garden bed work' },
      { src: '/images/commercial-mower-carpark.jpg', alt: 'Ride-on mower working a commercial car park garden bed' },
      { src: '/images/commercial-carpark-garden-bed.jpg', alt: 'Freshly mulched garden bed at a commercial car park' },
    ],
  },
  {
    slug: 'landscaping',
    icon: Sprout,
    title: 'Landscaping',
    text: 'Landscape renovations, garden beds and property makeovers for residential and commercial sites.',
    body: "From a single front yard transformation to a full property makeover, we handle landscaping work end to end: garden beds, decorative gravel, edging, retaining walls, and turf and site preparation, whether it's a stand-alone project or part of a larger commercial site.",
    bullets: ['Landscape Renovations', 'Front Yard Transformations', 'Garden Beds', 'Decorative Gravel', 'Edging', 'Turf Preparation', 'Site Preparation', 'Retaining Walls', 'Property Makeovers'],
    intro: "Landscaping covers a lot of ground, from a front yard that needs rethinking to the grounds around a new build. Most of what we take on around Bathurst sits between those two: garden beds reshaped and replanted, decorative gravel and edging laid, a retaining wall built to hold a slope, turf laid over ground that has been levelled properly first. Because we run our own earthmoving plant rather than hiring it in, the groundwork and the planting are handled by the same crew on the same job.",
    sections: [
      {
        heading: "Groundwork before planting",
        body: "Most landscaping that fails later fails at ground level: turf laid over ground that was never levelled, garden beds that hold water because nothing was done about drainage, gravel that sinks into soft fill. We do the earthworks ourselves with Bobcat S770 and S650 skid steers and E50 and E20 excavators, so levelling, spoil removal and drainage happen as part of the job rather than as a separate trade booked before us. On a sloped Bathurst block that groundwork is usually the larger half of the work, even though it is the part nobody sees afterwards.",
      },
      {
        heading: "Retaining walls and level changes",
        body: "A lot of blocks around Bathurst and Kelso sit on a grade, and getting usable flat space out of them means holding the soil back somewhere. We build retaining walls as part of a landscaping job or on their own, with the excavation, drainage behind the wall and backfill all handled together. Drainage is the part that decides whether a wall lasts: water building up behind a wall is what pushes it out of line over a few seasons, so the ag line and gravel behind it matter as much as the face you can see.",
      },
      {
        heading: "Garden beds, gravel and edging",
        body: "The finishing work is what a property is judged on day to day. That means beds shaped and mulched, edging set so the lawn and the beds stay separated instead of creeping into each other, and decorative gravel laid over a properly prepared base so it stays put. We can work to a plan you already have or lay something out with you on site, and on larger jobs it is usually easier to stage the work so the heavy machinery finishes before the planting starts.",
      },
      {
        heading: "Turf and lawn establishment",
        body: "New turf needs the soil underneath cultivated, levelled and topped up before anything is laid, which is where the compact tractor and front-end loader earn their place. Timing matters more here than in warmer parts of the state. Bathurst sits around 670 metres and gets hard frosts through winter, so turf laid late in the season sits dormant instead of rooting, and the safer windows are spring once the frosts have eased and early autumn while there is still warmth in the ground.",
      },
    ],
    faqs: [
      { q: "Do you do the excavation as well as the planting?", a: "Yes. We run our own Bobcat skid steers and excavators, so levelling, drainage and spoil removal are part of the same job rather than a separate contractor booked before us. On most landscaping jobs the groundwork is the larger part of the work." },
      { q: "Can you build retaining walls?", a: "Yes, either as part of a wider landscaping job or on their own. The excavation, drainage behind the wall and backfill are handled together, since drainage is what determines whether a wall stays where you put it." },
      { q: "When is the best time to lay turf around Bathurst?", a: "Spring once the heavy frosts have passed, or early autumn while there is still warmth in the ground. Turf laid into the cold sits dormant rather than rooting, and Bathurst gets harder frosts than lower parts of the state." },
      { q: "Do you do commercial landscaping as well as homes?", a: "Yes. The same crews and machinery cover residential front yards, commercial sites and the grounds work on our standing maintenance contracts." },
      { q: "How do you quote a landscaping job?", a: "We look at the site first. Access, slope, ground conditions and how much material has to come in or go out change the cost far more than the square metreage does, and none of that is visible from a photo." },
    ],
    img: '/images/gravel-pathway.jpg',
    alt: 'Landscaped gravel pathway and garden bed on a rural property',
    gallery: [
      { src: '/images/gravel-pathway.jpg', alt: 'Landscaped gravel pathway and garden bed on a rural property' },
      { src: '/images/landscaping-retaining-wall-build.jpg', alt: 'Timber retaining wall under construction in a backyard' },
      { src: '/images/landscaping-mulch-edging.jpg', alt: 'Freshly edged mulch garden bed along a rural property fence line' },
    ],
  },
  {
    slug: 'rural-acreage-services',
    icon: Tractor,
    title: 'Rural & Acreage Services',
    text: 'Acreage mowing, slashing and property maintenance for rural landholders across the Central West.',
    body: "Our equipment is built for the bigger properties that standard mowing services can't handle: acreage mowing, slashing, tractor work and general grounds maintenance for rural landholders, plus property clearing and fire hazard reduction ahead of the fire season.",
    bullets: ['Acreage Mowing', 'Slashing', 'Weed Management', 'Property Clearing', 'Grounds Maintenance', 'Tractor Work', 'Earthworks', 'Fire Hazard Reduction', 'Rural Property Maintenance'],
    intro: "Acreage is a different job from mowing a lawn, and most domestic mowing services are not set up for it. Paddocks that have got away over a wet spring, regrowth along fence lines, scrub that needs knocking back before summer: that work needs machinery with the weight and the attachments to handle it, and enough ground clearance to deal with uneven country. We run slashers in several sizes across our Bobcat skid steers, a flail mower on the excavator and a compact tractor, which covers most of what a rural block around the Central West throws up.",
    sections: [
      {
        heading: "Slashing and acreage mowing",
        body: "How a paddock gets cut depends on what is in it and how long it has been left. Grass that is simply long is straightforward. Ground that has been left through a wet season and gone to woody regrowth needs a heavier slasher and a slower pass, sometimes two at different heights. We match the machine to the block rather than the other way round: slashers in various sizes across the Bobcat S770 and S650, a flail mower on the excavator for rougher edges and drains, and the compact tractor for open country where speed matters more than manoeuvrability.",
      },
      {
        heading: "Fire hazard reduction before the season",
        body: "Fuel load around buildings, along fence lines and through the paddocks is the practical reason most rural landholders call us, and the timing is not flexible. Cutting back needs to happen while there is still enough moisture in the material to cut cleanly and well before conditions make machinery work unwise. Around the Central West that usually means booking through spring rather than waiting for the first hot week, when everyone rings at once and the window has already closed.",
      },
      {
        heading: "Property clearing and regrowth",
        body: "Blocks that have been left for a few seasons need more than a slasher. Woody regrowth, scrub and small saplings are handled with a forestry mulcher on the skid steer, which cuts and mulches in one pass instead of leaving material to be raked and burnt afterwards. For heavier clearing the excavators with grabs and buckets deal with stumps and larger material, and the tipper and tray trucks take away whatever has to leave the property.",
      },
      {
        heading: "Access, terrain and what we can reach",
        body: "Not every part of a rural block is reachable by every machine, and wet ground changes the answer week to week. We run the skid steers in both tracked and wheeled configurations for that reason: tracks spread the load on soft or sloped ground where wheels would dig in or lose traction, wheels are faster and gentler on established surfaces. Worth mentioning gates, creek crossings and soft patches when you call, because they decide which machine comes out.",
      },
    ],
    faqs: [
      { q: "How large a property can you handle?", a: "Anything from a few acres up to substantial rural holdings. The size matters less than the terrain and what has grown on it: a flat 50 acres of grass is a quicker job than 10 acres of steep, wooded regrowth." },
      { q: "When should paddocks be slashed for fire season?", a: "Through spring, while there is still moisture in the material. Waiting until conditions are already hot and dry means the window for safe machinery work has largely closed, and it is also when everyone else rings." },
      { q: "Can you work on steep or wet ground?", a: "Often, yes. We run the Bobcat skid steers in both tracked and wheeled configurations, and tracks spread the load on soft or sloping country. Tell us about soft patches and creek crossings when you call so the right machine comes out." },
      { q: "Do you do one-off slashing or only ongoing work?", a: "Both. Plenty of rural work is seasonal and one-off, particularly fire hazard reduction. Some landholders put it on a recurring schedule so it happens without having to be organised each year." },
      { q: "What areas do you cover for rural work?", a: "Bathurst and Kelso primarily, extending across the Central West to Orange, Lithgow, Oberon, Blayney, Portland and Wallerawang depending on the size of the job." },
    ],
    img: '/images/mower-mowing.jpg',
    alt: 'Commercial mower cutting a large rural paddock',
    gallery: [
      { src: '/images/mower-mowing.jpg', alt: 'Commercial mower cutting a large rural paddock' },
      { src: '/images/rural-truck-paddock.jpg', alt: 'Markwicks Services truck and trailer parked in a rural paddock' },
      { src: '/images/rural-paddock-slashing.jpg', alt: 'Slashed dry paddock on a rural Central West property' },
    ],
  },
  {
    slug: 'weed-management',
    icon: Leaf,
    title: 'Weed Management',
    text: 'Weed control and herbicide application for rural, commercial and noxious weed management needs.',
    body: "Weed control runs alongside most of our maintenance contracts, and we also take it on as a standalone job: herbicide applications, noxious weed management, and weed control across rural properties and commercial sites.",
    bullets: ['Weed Control', 'Noxious Weed Management', 'Herbicide Applications', 'Rural Weed Management', 'Commercial Weed Management'],
    intro: "Weed control sits inside most of our maintenance contracts rather than being sold separately, and it also gets taken on as standalone work for rural landholders and commercial sites. The equipment is a utility buggy fitted with commercial spraying gear, which covers ground faster than knapsack work and gets into the parts of a site a vehicle cannot reach.",
    sections: [
      {
        heading: "Spraying as part of a maintenance schedule",
        body: "On a standing grounds contract, spraying is scheduled rather than reactive. Garden beds, fence lines, car park edges, kerbs and the awkward strips that mowers cannot reach get treated on a cycle through the growing season, which is a good deal less work than letting them go and clearing them back later. Doing it on schedule also means it happens at the right point in the growth cycle, when treatment actually works, instead of after the weeds have set seed.",
      },
      {
        heading: "Noxious weeds and landholder obligations",
        body: "Under the NSW Biosecurity Act 2015, landholders carry a general biosecurity duty to manage weeds that pose a risk on their land, and priority weeds are set regionally rather than uniformly across the state. For rural landholders that duty is the usual reason weed control moves up the list. We handle the spraying side of it, and your local council weeds officer is the right first call for confirming what is a declared priority in your area.",
      },
      {
        heading: "Rural and commercial spraying",
        body: "Rural spraying is largely a coverage problem: fence lines, tracks, dam surrounds and paddock outbreaks spread across a lot of ground. Commercial sites are the opposite, mostly detail work around edges, beds and hard surfaces where appearance is what is being paid for. The buggy-mounted commercial spraying equipment handles both, and on rural blocks spraying is often paired with slashing so the block is cut and treated in the same visit rather than two.",
      },
    ],
    faqs: [
      { q: "Do you do weed control as a standalone job?", a: "Yes, though it is most often part of a wider maintenance contract or paired with slashing on a rural block, which usually works out better value than a separate visit." },
      { q: "When is the best time to spray?", a: "During active growth, before weeds set seed. Spraying after seed has dropped tidies up the current growth but does nothing about next season, which is why scheduled treatment beats reactive treatment." },
      { q: "Can you handle noxious and priority weeds?", a: "Yes. Priority weeds are set regionally under the NSW Biosecurity Act 2015, so what is declared varies by area. Your local council weeds officer can confirm what applies to your land." },
      { q: "Do you spray on commercial and public sites?", a: "Yes, as part of standing grounds contracts across schools, aged care, strata and industrial sites, where it is mostly edges, beds and hard surfaces." },
      { q: "Can spraying be combined with slashing?", a: "On rural properties that is the usual arrangement. Cutting the block and treating it in the same visit saves a second mobilisation." },
    ],
    img: '/images/weed-management.jpg',
    alt: 'Flail mower attachment clearing overgrown grass and weeds on a residential property',
    gallery: [
      { src: '/images/weed-management.jpg', alt: 'Flail mower attachment clearing overgrown grass and weeds on a residential property' },
    ],
  },
  {
    slug: 'earthworks-excavation',
    icon: Shovel,
    title: 'Earthworks & Excavation',
    text: 'Bobcat work, trenching and site preparation for small and large earthworks projects.',
    body: "Alongside our grounds maintenance work, we take on earthworks and excavation: bobcat work, trenching, levelling and site preparation, for jobs ranging from small residential projects to larger rural and commercial site works.",
    bullets: ['Excavation', 'Bobcat Work', 'Site Preparation', 'Trenching', 'Levelling', 'Property Clearing', 'Landscape Excavation', 'Rural Projects', 'Small and Large Earthworks'],
    intro: "Earthworks is the part of a job that decides how well everything after it goes, and it is usually the part with the least room for improvisation. We take it on both as standalone work and as the groundwork stage of our own landscaping and grounds jobs: levelling and site preparation, trenching for services and drainage, clearing, and the general shifting of material that a site needs before anything can be built or planted on it.",
    sections: [
      {
        heading: "The machines, and what each one suits",
        body: "We run Bobcat S770 and S650 skid steers in tracked and wheeled configurations, and Bobcat E50 and E20 excavators. The size difference matters more than it sounds. The E20 is the machine that fits through a side gate and works in a backyard without taking the fence out, while the E50 and the larger skid steers handle volume on open sites. Attachments cover most of the rest: earthmoving buckets, grabs, augers, forestry mulchers and slashers, so a machine that arrives for one task can usually handle the next without a second visit.",
      },
      {
        heading: "Site preparation and levelling",
        body: "Levelling looks simple and rarely is. Ground has to be cut and filled to a consistent grade, fill has to be compacted rather than just spread, and water has to be given somewhere to go that is not towards a building. Getting that wrong shows up later as settling, soft spots and drainage that runs the wrong way, by which point whatever was built on top has to come off to fix it. We would rather spend the extra time at this stage than come back to it.",
      },
      {
        heading: "Trenching and drainage",
        body: "Trenching for services, stormwater and ag lines is routine work, and most of the difficulty is in what is already underground. Existing services, rock and unexpected fill all change the job once the ground is open. Around Bathurst and the Central West rock at shallow depth is common enough to plan for, and it is the main reason a trenching job that looked straightforward on the surface takes longer than the metres suggest.",
      },
      {
        heading: "Tight access and residential sites",
        body: "Residential earthworks is mostly a problem of getting the machine to the work and the material out again. Narrow side access, established gardens, driveways that will not take weight and neighbours close on both sides all narrow the options. The E20 exists for exactly this, and the tipper and tray trucks handle spoil removal so material is not left stockpiled on a suburban block for weeks.",
      },
    ],
    faqs: [
      { q: "What size machines do you run?", a: "Bobcat S770 and S650 skid steers in tracked and wheeled configurations, and Bobcat E50 and E20 excavators, with buckets, grabs, augers, mulchers and slashers as attachments." },
      { q: "Can you get into a tight backyard?", a: "Usually. The E20 excavator is the machine for restricted access and will fit through most side gates. Worth measuring the narrowest point before we come out so we bring the right machine." },
      { q: "Do you do trenching for services and drainage?", a: "Yes, including stormwater and ag lines. Shallow rock is common around the Central West, so we plan for it rather than being surprised by it." },
      { q: "Do you supply an operator, or is it dry hire?", a: "We supply the machine and the operator and do the work. We are not a dry hire yard." },
      { q: "Do you remove the spoil?", a: "Yes. Tipper and tray trucks take material off site rather than leaving it stockpiled, which matters most on residential blocks where there is nowhere to put it." },
    ],
    img: '/images/bobcat-action.jpg',
    alt: 'Markwicks Services operating a Bobcat excavator on site',
    gallery: [
      { src: '/images/bobcat-action.jpg', alt: 'Markwicks Services operating a Bobcat excavator on site' },
      { src: '/images/earthworks-bobcat-auger-residential.jpg', alt: 'Bobcat with auger attachment drilling beside a residential home' },
      { src: '/images/earthworks-rural-excavation-pit.jpg', alt: 'Excavation pit and truck at a rural property earthworks site' },
    ],
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug)
}
