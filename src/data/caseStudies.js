export const CASE_STUDIES = [
  {
    slug: 'tafe-nsw-multi-site',
    client: 'TAFE NSW',
    title: 'Multi-Site Grounds Maintenance',
    category: 'Commercial Grounds Maintenance',
    summary: 'Scheduled mowing and grounds upkeep across multiple TAFE NSW campuses in the Bathurst region, on a fixed recurring cycle.',
    detail: "Institutional campuses are judged on how they look every day of term, not how they look the week after a tidy up, and that makes them a scheduling problem as much as a grounds one. This work runs as a standing contract across multiple sites on a fixed recurring cycle, with the frequency tightening through spring and summer growth and easing back over winter. The practical constraint on a campus is people: noisy equipment has to be planned around teaching hours and access paths have to stay clear while students and staff move through. Mowing and edging to a set standard, garden bed maintenance, and keeping car parks and entries clear of clippings make up the bulk of each visit.",
    img: '/images/campus-grounds-department-education.jpg',
    alt: 'Department of Education signage and grounds at a TAFE NSW campus car park',
    placeholder: false,
  },
  {
    slug: 'rural-site-drainage',
    client: 'Rural Property, Bathurst',
    title: 'Site Drainage & Excavation',
    category: 'Earthworks & Excavation',
    summary: 'Trenching and site drainage work around a rural home, preparing the ground ahead of landscaping.',
    detail: "Drainage is the part of a rural property that only gets attention once it has already caused a problem. This job involved trenching and site drainage around a rural home ahead of landscaping, getting water directed away from the building before anything was built or planted on top of it. Around Bathurst and the Central West, rock at shallow depth is common enough that it has to be planned for rather than discovered, and it is the usual reason a trench takes longer than the metres suggest. Doing the drainage first means the landscaping that follows sits on ground that sheds water instead of holding it.",
    img: '/images/rural-site-drainage.jpg',
    alt: 'Bobcat excavator trenching for drainage alongside a rural home',
    placeholder: false,
  },
  {
    slug: 'native-garden-refresh',
    client: 'Residential Property, Bathurst',
    title: 'Native Garden Bed Refresh',
    category: 'Landscaping',
    summary: 'A low-maintenance native garden bed refresh with gravel edging and feature lighting for a Bathurst home.',
    detail: "Native plantings suit this region for a practical reason: they handle the frosts that come through a Bathurst winter and the dry stretches that follow in summer without needing to be nursed. This refresh replaced a tired bed with low-maintenance natives, gravel over a properly prepared base so it stays put rather than sinking into soft fill, and edging set so the lawn and the bed stay separated instead of creeping into each other. Feature lighting extends how the garden reads after dark, which matters more than it sounds on a front yard that is mostly seen on the way in and out.",
    img: '/images/native-garden-bed-lights.jpg',
    alt: 'Native grass garden bed with gravel path and feature lighting',
    placeholder: false,
  },
  {
    slug: 'residential-lawn-care',
    client: 'Residential Property, Bathurst',
    title: 'Residential Lawn Care',
    category: 'Residential Services',
    summary: 'Ongoing mowing and lawn care keeping a Bathurst front yard healthy and presentable year-round.',
    detail: "An ongoing round rather than a one-off cut. Growth around Bathurst is genuinely seasonal, so the interval moves through the year: weekly or fortnightly through spring and early summer when the lawn is running, easing back over winter when it barely moves. Holding one fixed interval across twelve months either lets the lawn get away and forces a scalping cut to recover it, or pays for visits in July that achieve very little. Edging, weeding and green waste removal go with the mowing, and clippings and prunings leave on the truck rather than being left in a pile.",
    img: '/images/residential-lawn-care.jpg',
    alt: 'Neatly mowed residential front lawn',
    placeholder: false,
  },
  {
    slug: 'rural-shed-site-prep',
    client: 'Rural Property, Central West NSW',
    title: 'Rural Shed Site Preparation',
    category: 'Earthworks & Excavation',
    summary: 'Excavation and site works for a new shed and water tank on a rural Central West property.',
    detail: "A shed and a water tank both need a level, compacted pad, and getting that wrong shows up later as settling and doors that stop closing square. This job covered the excavation and site works: cutting and filling to a consistent grade, compacting the fill rather than just spreading it, and setting the falls so water runs away from the structures instead of pooling against them. Rural sites usually have room to work, which means the larger skid steers and the E50 can move material efficiently, with the tipper and tray trucks taking off whatever has to leave the property.",
    img: '/images/rural-shed-site-prep.jpg',
    alt: 'Bobcat excavator working beside a newly built rural shed and water tank',
    placeholder: false,
  },
  {
    slug: 'water-tank-installation',
    client: 'Rural Property, Central West NSW',
    title: 'Water Tank Installation & Drainage',
    category: 'Earthworks & Excavation',
    summary: 'Trenching and excavation to install a new rural water tank alongside site drainage works.',
    detail: "Tank installations are mostly a groundwork job. The pad has to be level and properly compacted to carry the weight of a full tank, and the trenching for the plumbing has to be set to the right depth and fall in ground that frequently turns up rock partway through. This work combined the tank excavation with site drainage, which is the sensible sequence: doing both in one mobilisation rather than bringing machinery back a second time once the tank is already in the way.",
    img: '/images/water-tank-installation.jpg',
    alt: 'Bobcat excavator trenching for a new rural water tank installation',
    placeholder: false,
  },
]

// Page-level copy for /portfolio. The tiles show what was done; this covers how
// a job gets scoped and what the photographs cannot show.
export const PORTFOLIO_PAGE = {
  intro:
    "The work below spans the range we cover: standing grounds contracts on institutional campuses, excavation and drainage on rural properties, and residential landscaping and lawn care around Bathurst. They are deliberately different kinds of job, because most of what we do sits somewhere between a recurring maintenance round and a one-off project, and the same crews and machinery cover both ends of that.",
  sections: [
    {
      heading: 'What a photograph does not show',
      body:
        "On most of these jobs the visible result is the smaller half of the work. A garden bed that drains properly, a shed pad that does not settle, a trench cut to the right fall through ground with rock in it: none of that photographs well, and all of it is what determines whether the job is still right in three years. It is also where the cost usually sits. Access, slope, ground conditions and how much material has to come in or go out move a price far more than the finished area does.",
    },
    {
      heading: 'How a job gets scoped',
      body:
        "Nearly everything is quoted after a site visit rather than over the phone, because the things that change a job are the things you find on site. Recurring work is scoped by agreeing a standard and a frequency and pricing against that. Projects are scoped by walking the site, working out what has to be moved and where it goes, and pricing the groundwork honestly rather than discovering it halfway through. Where a maintenance client needs project work, it is scheduled around the existing visits instead of being treated as a separate engagement.",
    },
    {
      heading: 'Working across the Central West',
      body:
        "These jobs sit across Bathurst, Kelso and the wider Central West, and conditions change quickly across that area. Ground that drains freely around Orange behaves differently to the sandstone country toward Lithgow, and the frost window that governs when turf can be laid runs several weeks apart between the two. Scheduling and method follow the district rather than a single regional calendar.",
    },
  ],
}
