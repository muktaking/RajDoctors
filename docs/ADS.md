# Ad placement (Google AdSense)

One component, `src/components/ad.js` (client `ca-pub-7807818541747006`, slot
`GATSBY_GOOGLE_DATA_AD_SLOT`). Every slot is a quiet card with a small
"Advertisement" / "বিজ্ঞাপন" label and a fixed reserved height (no CLS). Ads are
requested only when the slot is within 300px of the viewport, and the slot
collapses when AdSense reports `unfilled` or the ad script is blocked.
In `gatsby develop` (or with `localStorage.rd.adPreview = "1"`) a striped
placeholder shows the position instead of a live ad.

| Page | Ads |
| --- | --- |
| District home `/<district>/` | 1, between the 2nd and 3rd speciality section |
| Doctor page | desktop (≥992px): 1 in the side column below Share; phones/tablets: 1 after the chambers, before "You may find helpful" (only one of the two is ever requested) |
| Doctors list `/<district>/doctors/…`, speciality pages | 1 in-feed after the first full block of cards (6, or all when 3–5), spanning the grid row |
| About, telemedicine list | 1 above the footer |
| Root picker, emergency, contact, privacy, 404, teledoctor detail | none |

Rules: never above the fold before the main content, never between the doctor
header card and the chambers, never next to Call buttons (min. 32px gap and the
side column on desktop), never in the mobile bottom/sticky area.
