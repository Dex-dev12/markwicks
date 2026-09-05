---
target: markwicksservices.com.au (live site, full audit)
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 1
timestamp: 2026-08-04T13-32-15Z
slug: markwicksservices-com-au
---
Method: dual-agent (A: a361362fbccfc2877 · B: a5652db372b0a5f10)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | No loading state anywhere — images/contact form iframe can render blank with zero indicator |
| 2 | Match System / Real World | 4/4 | Real trade language + real regional geography, genuinely fluent |
| 3 | User Control and Freedom | 3/4 | Clean mobile menu close; no back-to-top on long single-scroll pages |
| 4 | Consistency and Standards | 2/4 | Silent CSS bug flattens heading weight sitewide; button radius mixes `rounded-lg`/`rounded-full` inconsistently |
| 5 | Error Prevention | 3/4 | Required-field markers present on Contact form |
| 6 | Recognition Rather Than Recall | 4/4 | Consistent icon-per-service system, contact info repeated at every touchpoint |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode marketing site, no power-user path applies |
| 8 | Aesthetic and Minimalist Design | 3/4 | Disciplined palette, but ~15 near-identical section formulas + unresolved placeholder content dilutes the finish |
| 9 | Error Recovery | 2/4 | No inline validation/error/empty state observed in the reviewed surface |
| 10 | Help and Documentation | n/a | Not applicable to a marketing site |
| **Total** | | **23/32** | **Good (71%)** |

## Design Specificity Verdict

**LLM assessment:** Mixed pass — genuinely bespoke *content* wrapped in a templated *structural/motion system*. Real jobsite photography, hyper-local geography (Kelso, Bathurst, Orange, Lithgow, Oberon, O'Connell, Blayney, Portland, Wallerawang), named founders (Clay, Cory, Claudia Markwick), institution-specific credibility claims (TAFE NSW, WHS/ABN) — this is not a reskinned template at the content layer. But every section on every page repeats the identical eyebrow → heading → CTA → card-grid formula, animated by the same `gsap.from(x:±40, opacity:0, power3.out)` pattern roughly 15 times across 5 pages. Content = bespoke. Skeleton and motion = componentized. It reads specific on first impression (what matters most) but an attentive second look reveals the machinery.

**Deterministic scan:** `detect.mjs` found 2 findings in `src/index.css`, none in `src/pages`/`src/components`:
- `gradient-text` (index.css:42, warning) — **but zero usages anywhere in the codebase.** Dead CSS, not an active AI-slop pattern on the live site. Downgraded to cleanup item, not a visible defect.
- `codex-grid-background` (index.css:59, advisory) — **one usage**, `Home.jsx:385` on the closing StatsCta section. Visually confirmed live: a subtle red hairline grid behind "Ready to put your grounds on a schedule?" This is a real, visible generic-template tell.

Two AI-slop checklist items the LLM raised as risks were specifically checked and **ruled out** by the mechanical pass: the Services page is a genuine zig-zag image-left/text-right alternating layout (not "everything centered"), and button radius is *inconsistent* (`rounded-lg` vs `rounded-full` mixed across CTAs) rather than "identically rounded everywhere" — a real consistency bug the LLM pass didn't catch, but not the AI-slop pattern originally suspected.

**Visual overlays:** No live browser injection was used this run (URL-based critique, evidence gathered via independent screenshot passes instead per the assessment agents' methodology).

## Overall Impression

The site earned its client sign-off honestly — the Hero, the founder story, and the real jobsite photography are doing genuine, specific persuasive work that a generic landscaping template could not replicate. The biggest opportunity isn't a redesign, it's closing the gap between "the parts that got custom attention" (Hero, copy, photos) and "the parts that are still running on template defaults" (repeated section motion, a CSS bug flattening most headings, and — most importantly — two sections still showing fabricated placeholder content in the exact spot meant to build trust with a skeptical B2B/council audience).

## What's Working

1. **The Hero is a genuine peak, not a generic one.** Real truck/trailer photo (not stock) + Ken Burns drift + scroll parallax + a serif-italic accent line reads premium without leaning on gradient text or glassmorphism, and the subhead immediately signals commercial/council buyer over homeowner lawn care — correct positioning from word one.
2. **The copy voice avoids trade-site cliché.** "Our Story" names real people with a real founding arc; "Why Choose Us" makes verifiable claims (WHS system, ABN, named institution types) instead of "we take pride in quality service."
3. **The dark full-bleed ServicesPreview grid** (dimmed photo + red icon chip on near-black) is a distinct visual motif, reinforcing "commercial contractor" rather than the default white-card SaaS look.

## Priority Issues

**[P0] Sitewide CSS bug silently flattens heading weight**
- **What:** `src/index.css:41-43` — `.font-display.font-bold, .font-display.font-semibold { font-weight: 300 }`. Any heading coded `font-bold` renders thin unless it *also* carries a separate `.font-heavy` class. Only the Hero H1 and the wordmark use `.font-heavy`; every other H2/H3 sitewide (Intro, Testimonials, ServicesPreview, RecentWork, StatsCta, Why Choose Us, Our Story, every page-banner title on About/Services/Portfolio/Contact) does not.
- **Why it matters:** This isn't a style choice — it's an unintentional cascade trap that removes weight as a working hierarchy signal on ~90% of the site's headings, confirmed visually (page-banner titles render visibly thin despite `font-bold` in the markup). It's also fragile: any future heading added without knowing to also tack on `.font-heavy` will silently break the same way.
- **Fix:** Remove the override, or convert it to an explicit opt-in token instead of silently trapping Tailwind's own `font-bold` utility.
- **Suggested command:** `/impeccable harden`

**[P1] Fabricated placeholder content live in the two highest-trust sections**
- **What:** Home's Testimonials section shows 3 cards reading literally "[Client name]" / "[Organisation]" / "Awaiting client testimonial." The Trusted-By marquee shows 4 of 5 entries as bracket placeholders (`[Council Name]`, `[Strata Body]`, `[Property Group]`, `[School / Campus]`) — and unlike the Testimonials cards (which carry an "Example" badge), the marquee placeholders carry **no** such label.
- **Why it matters:** Both assessments independently flagged this as the top issue. These sections exist specifically to convert a skeptical council/strata/school audience — showing visibly fake content in that exact slot, on a page the client already reviewed and approved, actively undermines the credibility case the rest of the copy works hard to build. The unlabeled marquee brackets are worse than the labeled testimonial cards: a non-technical visitor may misread `[Council Name]` as an oddly-formatted real client rather than an obvious placeholder.
- **Fix:** Pull both sections until real quotes/logos exist — a shorter, honest homepage reads more credible than one with fake social proof — or replace with the compliance/years-in-business trio the Hero already handles well.
- **Suggested command:** `/impeccable clarify`

**[P2] Button radius inconsistency (`rounded-lg` vs `rounded-full`)**
- **What:** Two different corner-radius tokens are mixed across CTA buttons with no apparent logic: `rounded-lg` on the Navbar CTA and the Home hero's two buttons; `rounded-full` on About, Portfolio, ServiceDetail, and Home's mid/lower-page CTAs.
- **Why it matters:** A detail-level consistency break the LLM pass didn't catch on its own — exactly the kind of thing that reads as "unfinished" on closer inspection even though the overall button language (heavily rounded, pill-leaning) feels coherent at a glance.
- **Fix:** Pick one radius token for all primary/secondary CTAs and apply it everywhere.
- **Suggested command:** `/impeccable layout`

**[P2] No loading state for images or the Contact form iframe**
- **What:** No `<img>` on the site uses `loading="lazy"`/`decoding="async"` or any skeleton state; the embedded GHL contact form iframe has no fallback/loading content at all.
- **Why it matters — with a caveat:** The design-review pass observed multiple images and the form rendering as blank boxes for several seconds across repeated tests. The mechanical pass traced this back further: direct `curl` checks confirmed the same image files return 200 with real payloads, and the "blank" images in one screenshot rendered fine moments later on a different page capture — the signature of a headless-Chrome screenshot-timing race, not proof the images are actually broken for a real visitor on a normal connection. The contact-form blank panel is reported with lower confidence for the same reason (the iframe and its embed script both return 200 directly). **What's still a genuine, code-level gap regardless:** there is no loading/skeleton state defined anywhere, so on a slower real-world connection (a real risk for the regional/rural visitors this business serves) the same blank-box experience is a real possibility, just not conclusively proven by this test.
- **Fix:** Add `loading="lazy"`/`decoding="async"` to below-the-fold images, and a lightweight "Loading form…" skeleton for the Contact iframe until it fires `onload`.
- **Suggested command:** `/impeccable optimize`

**[P3] Homogeneous section rhythm and motion across all 5 pages**
- **What:** Every section on every page repeats the same eyebrow→heading→CTA→card-grid layout and near-identical `gsap.from` slide-fade timing (~15 instances, no variation in easing, offset, or stagger except the Hero).
- **Why it matters:** Individually fine, collectively a tell — exactly the kind of uniform, copy-pasted motion system that undercuts the "authored specifically for this contractor" impression once a visitor scrolls past page one.
- **Fix:** Vary entrance direction/stagger/easing across at least 2-3 sections, or invest in one additional true signature moment beyond the Hero.
- **Suggested command:** `/impeccable animate`

## Persona Red Flags

**Jordan (confused first-timer — e.g. a strata manager evaluating cold)**
- Sees `[Council Name]` / `[Strata Body]` in the Trusted-By strip with no "Example" label anywhere near it — brackets read as a developer convention, not an obvious placeholder signal to a non-technical visitor.
- Every ServiceDetail page ends identically with just "Get in Touch," no expectation-setting about what happens after submitting (quote turnaround, site-visit process).

**Casey (distracted mobile user, thumb-scrolling)**
- The mobile hamburger menu has no enter/exit transition — a raw conditional render that pops in/out instantly, on the single most-animated site in this review, for the one interaction every mobile visitor definitely triggers.
- The Hero's "15+ Years" count-up fires once via IntersectionObserver — a fast flick-scroller is likely to blow past it mid-count and never see the number land.

## Minor Observations

- Custom red scrollbar thumb is a nice on-brand touch (Chrome/Edge only, degrades silently elsewhere — fine).
- Footer "Areas Served" is a comma-run wall of 8 town names — a missed opportunity for a small map/badge treatment given how central "local, Bathurst region" is to the story.
- "Learn more" is used as link text verbatim 7-8 times with no per-service differentiation — a screen-reader user tabbing through hears "Learn more, Learn more, Learn more…" with no context carried in the link text itself.
- Only one explicit custom `focus:` style exists anywhere in `src/` (a form input in `shared.jsx:109`) — nav links and all `.magnetic-btn` CTAs rely on browser default focus outlines, unverified visually.
- Contrast: two independent spot-checks of similar-looking tokens produced different pass/fail reads for different specific instances (some white-on-dark combinations computed under 4.5:1 AA, others over) — inconsistent enough across the site that it's worth a real contrast-checker pass rather than trusting either manual estimate.

## Questions to Consider

1. Every H2 sitewide is coded `font-bold` but quietly renders at weight 300 — was a thin editorial heading weight ever the intended look anywhere, or is this purely an accident nobody caught because the client reviewed the site on a call instead of pixel-inspecting the type?
2. Would you rather ship with zero testimonials than three visibly fake ones, given the client already approved the page containing them?
3. If every GSAP scroll animation were stripped out tonight, would a council procurement officer evaluating this business notice — or is the real differentiator (the Markwick family story, the real jobsite photos) doing all the actual persuasion work regardless of motion?
