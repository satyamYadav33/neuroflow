# Neuroflow — QA Test Plan

**Author:** QA  
**Date:** 2026-03-24  
**Status:** Waiting for Frontend Dev & Backend Dev completion

---

## Frontend Checks

| # | Check | Expected |
|---|-------|----------|
| F1 | `index.html` contains a hero section | Hero with title, subtitle, CTA buttons |
| F2 | Features grid with 3 feature cards | 3 cards in a CSS grid |
| F3 | Pricing table with 3 tiers | Starter ($0), Pro ($49), Enterprise ($199) |
| F4 | Contact form with name, email, message | All 3 fields present + submit button |
| F5 | Form submits to correct API endpoint | `POST /api/contact` with JSON body |
| F6 | Features/pricing pages call correct API | `GET /api/features`, `GET /api/pricing` |
| F7 | CSS file exists and uses dark theme | Dark backgrounds, light text, accent colors |
| F8 | Responsive design | Mobile breakpoints present |
| F9 | No broken links/references | All `href` and `src` attributes resolve |

## Backend Checks

| # | Check | Expected |
|---|-------|----------|
| B1 | `GET /api/features` returns 3 features | JSON array with 3 objects |
| B2 | `GET /api/pricing` returns 3 tiers | JSON array with 3 tier objects |
| B3 | `POST /api/contact` accepts body | Accepts `{name, email, message}` |
| B4 | `POST /api/contact` validates fields | Returns 400 if fields missing |
| B5 | Server serves static files | `index.html` accessible at root `/` |
| B6 | Express + middleware configured | `express.json()`, `express.static()` |
| B7 | `README.md` documents how to run | `node src/server.js` instructions present |

## Integration Checks

| # | Check | Expected |
|---|-------|----------|
| I1 | HTML API endpoints match server routes | `/api/features`, `/api/pricing`, `/api/contact` |
| I2 | Form submission format matches server expectation | JSON `{name, email, message}` |
| I3 | Feature/pricing data consistent | Same names/tiers in HTML and API |
