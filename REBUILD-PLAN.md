# Hamkema review and rebuild order

Reviewed 2026-11-02. This is a plan, not authorization to rebuild every part at once.

## Intended result

Students approximately 15–19 discover whether a major interests them by experiencing it: discover a major -> understand the source course -> watch a relevant lecture excerpt -> try a matching challenge -> reflect -> explore a next pathway. Preserve the mission and source constraints in PROJECT.md.

## Evidence from the current implementation

- index.html and catalog.js provide discovery for seven selected sources; all currently concern economics, policy, or related technology. This is a starting collection, not demonstrated coverage of multiple majors.
- courses.js retains source identities. PolicyEd and John Locke Foundation must remain identified as publishers. Advanced material needs student-facing context before being presented as an entry experience.
- watch.js supplies click-to-load media, direct-source fallbacks, and saved notes. Six sources explicitly have guided activities pending.
- app.js supplies five Economics steps and feedback, but the lecture step is explanatory text and a link to a separate course page. The exact video/excerpt remains unaligned. Do not reuse the provisional 04:16–11:31 timing as confirmed evidence.
- The challenge is one multiple-choice question. This is a limited sample of practical exploration; it does not establish that a student has experienced the broader work of the major.
- The next button adds every current step to the completed set regardless of challenge interaction. Challenge selection/feedback is not included in saved progress. Decide deliberately what counts as completion and what may be skipped; do not equate mandatory correctness with student interest.
- The Pathways step supplies another prompt rather than concrete next experiences or routes.
- verify.cjs passes for catalog routes, search, media URL construction, notes, unavailable storage on the watch page, and unknown courses. It uses simulated page elements; it does not establish live playback, visual quality, keyboard behavior, or lesson completion/persistence.
- app.js can clear a storage warning during render, and finishing can report completion even after persistence fails. Reproduce and correct this during implementation; distinguish session progress from saved progress.
- git status reports this folder is not a repository. No recovery history was established by that check.
- No live browser or visual review was performed for this planning pass. Design dissatisfaction is known from user feedback; its exact visual causes remain unverified.

## Where the process needs correction

The current result demonstrates pages and partial mechanics before proving a complete, source-aligned student experience. Treat this as a product sequencing problem. Keep useful code, attribution, and saved data; do not assume a total rewrite is necessary. Saved workflow guidance is useful preparation, not evidence of a better website.

## Work in this order

1. **Preserve and establish the baseline.** Create a scoped recoverable copy or local version history without overwriting user work. Record existing storage keys and passing checks. Capture the running site's main states on desktop and mobile.
   Done when: the current state can be recovered, and existing behavior and visual findings are recorded.
2. **Write the first experience brief.** Define the Economics 001 student outcome, entry point, lecture purpose, practical task, reflection, and next action. Record open content questions separately. Keep the product focused on discovery rather than recommending a major from a quiz score.
   Done when: every step has a purpose and observable acceptance criteria.
3. **Confirm the source-to-activity relationship.** Locate the previously approved lesson draft in accessible project context; if unavailable, identify the missing draft instead of inventing approval. Confirm the actual MIT lecture/video, excerpt, concept, and suitability. Consult original material. Draft a matching activity and label unapproved content honestly.
   Done when: video identity, checked segment, learning objective, and activity agree. Work independent of missing source confirmation may continue.
4. **Make one representative visual direction reviewable.** Show the discover -> lesson entry and the central lesson layout using real content. If references are supplied, use the reference-feature-study skill and distinguish observation from inference. Keep pending visual choices explicit.
   Done when: a coherent first experience is available for meaningful feedback before expanding the design everywhere.
5. **Implement one complete Economics journey.** Connect course, lecture, challenge, feedback, reflection, resume, and useful next pathways. Set deliberate completion/skip behavior, preserve old progress, and report save failures accurately. Keep learner notes and challenge state when needed for coherent resumption.
   Done when: a student can finish the journey and return without misleading completion or losing existing work.
6. **Verify and repair the journey.** Run relevant checks and manually exercise the actual site on desktop and mobile. Check keyboard access, real links, player fallback, challenge behavior, reload, malformed/blocked storage, and notes/progress. Separate a blocked external service from a product failure.
   Done when: affected behavior passes and remaining external or editorial limitations are disclosed. Do not call live media verified from URL checks alone.
7. **Expand from the proven pattern.** Apply it to additional approved material. Explain source difficulty and publisher identity. List unfinished experiences honestly; do not manufacture broader major coverage.
   Done when: each added experience has matched content and relevant verification.
8. **Release when requested.** Choose hosting/accounts based on actual needs, verify deployed behavior and access, and retain a recovery path.
   Done when: the authorized release works at its real destination. Local completion is not publication.

Immediate execution boundary: begin with phase 1 when rebuilding is requested. Do not treat this whole plan as one unreviewed redesign. Advance through confirmed dependencies and surface consequential missing content or visual decisions early.
