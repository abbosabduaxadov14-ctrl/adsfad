# Hamkema build plan

18 November 2026 — Cleanup increment: the active frontend is one inline `index.html`; old backup/research/duplicate folders were removed and only the test tooling/fixtures needed by the suites were kept. Historic entries below remain dated context, not live folder instructions.

14 November 2026 — Added Electrical Engineering: The Engineering Mindset’s independent Electrical Engineering Basics collection (43 videos) and MIT 6.622 Power Electronics, Spring 2023, David Perreault (38 videos; graduate-level). Catalog now 29 collections across four subjects. All 81 selections, desktop/mobile layouts, navigation, keyboard activation and notes persistence checked; both first videos played in Chrome. Prior 27 records/guides preserved. Chapter metadata retrieval failed, so no fabricated timestamps were added. Evidence: research/EE-2026-11-14.md. Local only.

14 November 2026 — six additional user-selected CS playlists added using the existing watch-first pattern. All 291 source entries verified in original order; source-backed topic navigation, notes, responsive controls and prior data preserved. See research/CS-EXTRA-2026-11-14.md for acceptance evidence and source/playback limits. CS expansion is now sufficient per user; do not add further CS courses without a new request.

12 November 2026 — user-requested CS50 expansion completed locally using the watch-first guide pattern: ten selected playlists, 98 videos, Computer Science filtering, preserved editions/credits and topic provenance. Retained existing data and storage; real Chrome selection, responsive layouts, persistence and opening playback checked. Detailed criteria/evidence: research/CS50-2026-11-12.md. Future transcript review remains separate from playlist intake; no generic minute markers in the new subject.

10 November 2026 — user approved source chapters, explicitly labeled as potentially automatic, when transcripts are inaccessible. Psychology now uses transcript/uploader evidence first, then exact-video YouTube topics, then an honest unavailable state. No generic minute markers appear in Psychology; old timestamp URLs still work. 92/100 have topics; eight source gaps remain individually recorded. Implementation and checks: research/PSYCHOLOGY-COMPLETION-2026-11-10.md.

9 November 2026 — timeline refinement: prioritize exact-recording transcript access, chapter boundary reading and source/video matching. MIT/Yale Psychology now have 252 transcript-backed topic starts; remaining Stanford/Pinker transcript work is access-limited. Keep uploader-provided chapters and elapsed markers distinguishable. Focused navigation checks are recorded in research/PSYCHOLOGY-TIMELINES-2026-11-09.md; full audiovisual review remains pending.

9 November 2026 — Psychology increment: user explicitly requests implementation from four selected playlists using the Economics pattern, skipping testing for this task. Scope implemented locally: four collections, 100 videos, homepage subject navigation and reused player/notes. Full summaries, topic chapters and playback validation remain pending. See research/PSYCHOLOGY-2026-11-09.md. This does not waive checks for future tasks or authorize publication.

## User-requested guide expansion — 8 November 2026

Extend the successful Gruber guide to the other six saved entries while preserving choose → Play → watch. Scope: original playlist order, all available videos, short course/video summaries, duration and timeline navigation, correct source attribution and saved notes. Reuse existing page and brand; do not require exercises or add push notifications. Distinguish source topic chapters from neutral elapsed-time markers. Known publisher embed restrictions require a visible original-video link, not a claimed integration or a replacement source. Evidence and current checks: research/COURSE-GUIDES-2026-11-08.md. Editorial and student review remain separate from navigation/playback tests.

## Latest user override — 4 November 2026

The primary product journey is now **choose a course → press Play → watch in Hamkema**. User explicitly rejects the added exercise/intro/reflection steps and source-link detours as the default experience. Embed the original selected YouTube video or playlist directly on the course page with native Play controls; do not autoplay. Retain short accurate attribution and a secondary fallback for restricted playback. Preserve the approved colorful direction, existing seven records, browser notes and earlier lesson work. Lessons and quizzes may remain recoverable at their old URLs but are not prerequisites or primary calls to action. Historical activity-first milestones and acceptance checks below do not block this new journey. Validate the actual Play action, course selection, phone layout, keyboard access, fallback and data preservation. New sources should be found through the user's Study SET reference and checked at original publishers before addition. No publication, new accounts or paid services are part of this correction.

Prepared: 2 November 2026.

Status: proposed implementation plan. This document does not report a completed rebuild or authorize publication.

PROJECT.md remains the authority for product direction. This plan expands REBUILD-PLAN.md into tasks, dependencies, acceptance criteria, and responses to problems.

## 1. What we are building

Hamkema helps students approximately 15–19 explore majors through practical experiences around selected college courses.

The mission remains: “We don't tell students what they should study. We give them the opportunity to discover it themselves.”

The first release must prove one complete Economics experience. Later releases can support comparison across majors after suitable material exists.

The student journey is:

Discover a subject → understand its course source → watch a relevant excerpt → attempt an activity → reflect → choose another experience.

The main hypothesis is that this journey helps students describe their interests more clearly. We must test this hypothesis with students.

No plan covers every future situation. This plan defines common cases, recovery actions, and a process for unexpected cases.

## 2. Completion checklist for this planning task

- Record the current implementation and its limits.
- Define the smallest complete student journey.
- Specify content, interface, data, testing, and release work.
- Give each phase a dependency, deliverable, and completion criterion.
- Separate facts, proposals, and missing inputs.
- Include common failures and recovery actions.
- State the people, information, access, and budget decisions required.
- Preserve the current product and saved student work.

This task creates planning documents. Product implementation and live browser testing remain separate tasks.

## 3. Current baseline

| Area | Existing work | Limit or next action |
| --- | --- | --- |
| Discovery | Seven selected sources and text search | Collection mainly covers Economics and related subjects |
| Course data | courses.js holds course identities and links | Some entries identify playlists rather than specific lectures |
| Source pages | watch.html and watch.js provide media and notes | Most guided activities remain pending |
| Economics lesson | Five steps in lesson.html and app.js | Exact source excerpt remains unaligned |
| Activity | One opportunity-cost question with feedback | Needs a more substantial practical task |
| Reflection | Optional text with local persistence | Does not yet capture interest in the work explicitly |
| Pathways | A further question | Needs concrete next experiences and source links |
| Storage | Browser-local lesson progress and course notes | No cross-device recovery or accounts |
| Appearance | Shared style.css and responsive rules | No live visual review in this planning task |
| Verification | verify.cjs checks selected catalog and source behavior | Simulated page elements do not prove live browser behavior |
| Local server | serve.cjs listens on the local machine | This server is not a public hosting plan |

Retain the seven selected sources. Identify PolicyEd and John Locke Foundation as publishers.

The reviewed project files do not contain the previously approved lesson draft. Recover that draft before claiming alignment with it.

The provisional interval 04:16–11:31 is not a verified excerpt. Never transfer that interval to another video.

Known progress behavior needs attention. The current next button marks steps complete without an activity attempt.

The activity answer is not saved. A storage warning can disappear during the next render.

These are implementation findings from code review. Reproduce each behavior in a browser before recording a verified fix.

## 4. Product scope and priorities

| Priority | Work | Reason |
| --- | --- | --- |
| First | One complete Economics experience | Proves the core value and content workflow |
| First | Accurate sources and activity alignment | Students need a coherent and trustworthy experience |
| First | Phone layout, keyboard use, media fallback | Core journey must remain usable under common constraints |
| First | Honest progress and safe resumption | Students must understand what is saved |
| Next | Small student pilot and repairs | Reveals problems that internal reviews miss |
| Next | A second contrasting experience | Tests whether students can compare kinds of work |
| Later | More majors and course filters | Useful after several verified experiences exist |
| Conditional | Accounts and cross-device progress | Add after students demonstrate that need |
| Conditional | Payments, school tools, advanced analytics | Require a clear audience, purpose, and operating model |

AI recommendations, chat, certificates, rankings, social feeds, and notifications are outside the first release.

No college partnership, curriculum approval, or completed integration can appear without evidence.

## 5. Inputs and decisions

The current notes already establish the mission, age range, seven sources, and priority for Economics 001. Do not ask for those again.

| Input | When needed | Why it matters | Default or response |
| --- | --- | --- | --- |
| Approved Economics draft | Before final editorial alignment | Preserves earlier content decisions | Prepare a clearly labeled new draft if unavailable |
| Exact lecture and excerpt | Before a source-aligned lesson is complete | Connects the activity to actual material | Inspect the original source and record evidence |
| First student group and country | Before research and release planning | Affects recruitment, language, and privacy review | Continue local work without inventing a market |
| Main launch language | Before final copy and localization | Affects reading level and layout | Retain current English for the local prototype |
| Visual examples or feedback | At representative page review | Resolves consequential design choices | Reuse current identity and show a working proposal |
| Access to pilot students | Before pilot | Enables direct observation | Use internal rehearsal without claiming student validation |
| Content reviewer | Before verified content status | Provides subject review | Keep content labeled draft until review occurs |
| Budget ceiling | Before paid tools or hosting | Prevents unapproved spending | Use current local tools |
| Hosting visibility and domain | Before publication | Determines access and release setup | Keep the site local |
| Maintenance owner | Before public release | Gives failures a responsible person | Do not claim an operating service without an owner |

The project owner supplies product decisions and access. The builder prepares reviewable work and resolves routine implementation details.

One person can hold several roles. Record the person responsible for each role before its phase starts.

## 6. Student research and evidence

Start with these research questions:

- What makes choosing a major difficult for the intended students?
- Do students understand the difference between a course and a Hamkema experience?
- Can they explain the activity without help?
- Which step makes them leave or request help?
- Can they describe what they enjoyed or disliked afterward?
- Do they want another experience, and why?

Proposed first round: five students from the intended age group. This is a small qualitative pilot, not statistical validation.

Use the same core task for each session. Ask the student to explore Economics and finish the experience without coaching.

Record observed actions separately from opinions. Record interruptions, confusion, assistance, device, and technical failures.

Do not record names, reflections, or sessions by default. Establish appropriate participation arrangements before research with minors.

Review the findings after each round. Correct severe problems before another round.

Suggested pilot gate: at least four of five students finish without intervention after repairs.

Also ask each student for a concrete example of something they learned about the work or their interests.

These thresholds are proposed decisions. A passing completion count alone does not prove product value.

This approach follows guidance to test assumptions and prototypes with likely users. [GOV.UK research in alpha](https://www.gov.uk/service-manual/user-research/user-research-in-alpha)

## 7. Content production process

### Required record for each experience

| Field | Purpose |
| --- | --- |
| Stable experience ID | Keeps progress attached to the correct experience |
| Major and topic | Explains the subject and supports discovery |
| Intended student outcome | States what students will try or understand |
| Original course ID | Connects the experience to authoritative course data |
| Publisher, instructor, edition | Preserves attribution and context |
| Specific video URL and ID | Prevents accidental playlist substitution |
| Excerpt start and end | Defines a reviewed segment, after verification |
| Review evidence and date | Records what was inspected and by whom |
| Prerequisites and difficulty | Prevents advanced material from appearing beginner friendly |
| Preparation notes | Explains terms students need before the excerpt |
| Activity and feedback version | Keeps the task and explanations consistent |
| Reflection prompts | Helps students notice interest and uncertainty |
| Next experiences | Provides concrete onward routes |
| Captions and alternative material | Records actual accessibility options |
| Rights and attribution notes | Preserves the user-confirmed permission context and source conditions |
| Editorial status | Distinguishes a draft from reviewed material |

Use these editorial states: draft, source checked, subject reviewed, student tested, ready, and paused.

No status advances automatically because a page exists. Store the evidence that supports each transition.

### Economics 001 production steps

1. Recover the approved draft or record its absence.
2. Inspect the selected MIT course and locate the relevant lecture.
3. Watch the proposed excerpt and examine available supporting material.
4. Record the actual video identity, excerpt boundaries, and concept.
5. Write a short explanation of necessary terms.
6. Create a task that uses the concept from that excerpt.
7. Review each answer and feedback path for conceptual accuracy.
8. Ask students to reflect on the task and their interest.
9. Add concrete next routes with difficulty context.
10. Obtain content review and run the student journey.

If the approved draft and source do not agree, document the mismatch. Prepare a corrected draft instead of claiming approval.

If the excerpt is too advanced, choose another segment from approved material. Keep advanced sources available with honest difficulty labels.

### Proposed practical task

This example is a Hamkema draft, not an approved college assignment.

A student has a limited school-event budget. They choose between options with stated costs and benefits.

The student identifies the next-best feasible alternative. They explain the opportunity cost of their choice.

Then one constraint changes. The student revises the decision and explains the effect.

The activity must distinguish the next-best alternative from all rejected alternatives. The feedback must explain the reasoning.

A choice can differ without being wrong. Score conceptual reasoning only where an objective answer exists.

Use a fictional context that does not require personal financial disclosures. Supply all information needed to attempt the task.

## 8. Pages and interface details

| Page or area | Student needs | Required details |
| --- | --- | --- |
| Home | Understand Hamkema and begin | Clear promise, current coverage, one primary starting action |
| Discovery | Find suitable material | Search, meaningful results, difficulty, readiness label, reset action |
| Course entry | Understand the source | Publisher, instructor, edition, original links, preparation, activity status |
| Lesson introduction | Understand the task | Outcome, prerequisites, steps, save behavior, draft status |
| Lecture | Watch the relevant material | Specific video, reviewed excerpt, viewing prompt, captions information, direct link |
| Activity | Try the work | Clear instructions, editable choices, feedback, retry, explicit skip option |
| Reflection | Notice personal interest | Optional text, interest prompts, local save status |
| Pathways | Decide what to do next | Concrete source or experience links, difficulty and preparation |
| Resume | Continue prior work | Actual saved step, completed and skipped states, recovery message |
| Help and errors | Recover without losing work | Explanation, next action, safe navigation, copy option where useful |

Do not show “Continue” without saved work. Use a starting label for new students.

Keep original course notes distinct from activity answers and reflections. Explain where each text belongs.

Use one primary action per step. Keep Previous and navigation visible without competing with the main action.

On phones, stack the content in reading order. Keep the player, task controls, and feedback within the screen width.

Do not let fixed controls cover feedback or keyboard focus. Test the interface with the on-screen keyboard open.

Use real content in design reviews. Long course titles and unavailable media must fit the layout.

Proposed visual direction: calm typography, strong contrast, clear spacing, and restrained color. Treat this as a proposal until review.

Build one representative entry and lesson page first. Show desktop and phone states before expanding the design.

While feedback is pending, continue content records, storage repairs, and verification preparation.

## 9. Progress and completion rules

Proposed step states: not started, in progress, completed, and skipped.

“Viewed” does not mean “understood.” A video load does not prove that a student watched it.

- Introduction: complete after the student chooses to continue.
- Lecture: let the student mark the step complete or skip it explicitly.
- Activity: complete after an attempt and feedback, regardless of first-answer correctness.
- Reflection: allow completion with text or an explicit skip.
- Pathways: complete after the student reviews the next options and finishes.

Show skipped steps separately. Avoid a full-completion claim when required steps remain skipped.

Let students revisit, revise, retry, and resume. Do not remove their earlier work during navigation.

Preserve these current storage keys:

- `hamkema-econ001`: current step, completed steps, reflection.
- `hamkema-note-<course.id>`: course-specific notes.

Before a storage change, create fixtures that represent old saved data. Test the migration with those fixtures.

Use a versioned progress record for new fields. Keep the original record recoverable until migration succeeds.

If saved data is malformed, show a recovery notice. Do not silently overwrite recoverable text.

If storage is blocked or full, retain the session state. Show a persistent warning and offer a way to copy written work.

If a save fails, never show “saved.” Keep completion state distinct from storage success.

If two tabs edit the same record, detect the change. Ask the student to choose a version before replacing conflicting text.

Explain that browser-local progress does not travel across devices. Browser data removal can erase it.

## 10. Technical structure

Keep the present HTML, CSS, and JavaScript for the first complete experience. A framework change requires a demonstrated maintenance or product need.

Recommended boundaries:

- Course records own source identities and original URLs.
- Experience records own excerpts, activities, reflection prompts, and editorial status.
- Progress records own student work and step state.
- View code reads those records and handles interface actions.
- Storage code reads, validates, migrates, and saves progress.

Keep one authoritative record for each fact. An experience references its course ID instead of copying source metadata into several files.

Render student text as text. Do not insert student notes into HTML strings.

Validate external URLs and identifiers before rendering imported content. Keep credentials out of files delivered to browsers.

Do not add a database for static course data. Consider a content editor only after file-based updates cause observed problems.

If imports become necessary, use stable IDs and a preview of changes. Test repeated imports for duplication and lost notes.

If accounts become necessary, plan authentication, recovery, deletion, authorization, backups, and local-progress transfer together.

Prove that one student cannot read another student's work. A successful sign-in alone does not prove access controls.

If an external service is selected, review its current official documentation. Then test the actual connection with minimal data.

## 11. Accessibility, language, and performance

Use WCAG 2.2 Level AA as the proposed accessibility target. This is a target, not a current compliance claim.

The W3C standard provides the acceptance reference. [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Verify these details:

- Every action works with a keyboard.
- Focus remains visible and follows the reading order.
- Step changes announce the relevant heading or status.
- Inputs have visible labels and useful error text.
- Feedback does not depend on color alone.
- Text remains readable at increased zoom.
- Phone layouts avoid horizontal scrolling for ordinary text.
- Controls have sufficient size and spacing.
- Motion respects reduced-motion preferences.
- Media has accurate information about available captions or alternatives.

Do not claim captions exist until they are inspected. If no suitable accessible alternative exists, record the limitation before pilot selection.

Use clear language and explain subject terms before the activity. Avoid language that judges student intelligence or career suitability.

For another language, translate content and feedback together. Review meaning, text expansion, and reading direction with a fluent reviewer.

Load third-party media only after student action. Keep the first page useful without loading a video player.

Measure performance on a phone and a slower connection. Record results before setting optimization priorities.

Keep assets small and avoid decorative video. Recheck performance after each major external dependency.

## 12. Privacy, trust, and security

The initial local prototype needs no account. Keep reflection text local by default.

Explain third-party media before loading it. A local note does not mean that every network interaction stays local.

Before public release, map the intended countries, ages, data flows, service providers, and retention needs.

Obtain qualified privacy review for the actual launch scope. This document does not determine which laws apply.

The FTC provides US children's privacy guidance. Its existence does not establish the rules for Hamkema's eventual market.

[FTC children's privacy guidance](https://www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-six-step-compliance-plan-your-business)

Proposed safeguards:

- Collect only information needed for a defined student benefit.
- Do not send reflection text to analytics.
- Do not make notes public by default.
- Define who can access collected research data and when it is deleted.
- Review hosting logs and external media requests as part of the data map.
- Provide a support route and a deletion process for any server-held personal data.
- Keep secrets outside browser code and version history.
- Verify HTTPS and suitable security headers on the selected host.

If public input or community features are proposed, define moderation and reporting before implementation. Those features remain outside the first release.

## 13. Build phases and completion gates

Effort ranges below are planning estimates for focused work. They exclude waiting for source review, student access, design feedback, and service approvals.

Do not promise a calendar launch date until those dependencies have owners and dates.

| Phase | Dependency | Deliverable and work | Done when | Initial effort range |
| --- | --- | --- | --- | --- |
| 0. Preserve baseline | Current folder | Scoped backup or local history, file inventory, storage fixtures, baseline checks | Recovery works and existing behavior is recorded | 0.5–1 day |
| 1. Experience brief | Product notes | Economics outcome, entry, activity outline, reflection, next routes | Every step has a purpose and acceptance criterion | 0.5–1 day |
| 2. Source alignment | Lecture access and draft | Verified video, excerpt record, matched activity, review notes | Source and task agree, or the exact editorial blocker is recorded | 1–3 days plus review |
| 3. Representative design | Real lesson content | Working entry and lesson views on phone and desktop | Owner feedback and consequential design decisions are recorded | 1–2 days plus feedback |
| 4. Complete implementation | Content and design direction | Connected journey, feedback, skip states, resume, migration, fallbacks | Student can finish and return without loss or false save messages | 2–4 days |
| 5. Verification and repair | Working journey | Browser evidence, focused automated checks, repaired defects | All critical acceptance cases pass | 1–3 days |
| 6. Student pilot | Participants and research arrangements | Observed sessions, findings, repairs, second round if needed | Main usability problems are resolved and value evidence is recorded | 2–4 workdays plus recruitment |
| 7. Controlled release | Release request and operational decisions | Hosting setup, privacy review, deployment, real-site checks | Authorized destination works and recovery is available | Estimate after host selection |
| 8. Expansion | Proven first pattern | Additional reviewed experiences and comparison | Every new experience meets the same content and behavior gates | Estimate per source |

Source alignment comes before a claim of lesson completion. Broad visual expansion comes after representative-page feedback.

Content review and technical work can overlap where they are independent. Do not invent missing content to keep the schedule moving.

## 14. Detailed verification matrix

| Area | Cases to exercise | Required result |
| --- | --- | --- |
| Discovery | All seven entries, different search terms, no results, reset | Accurate counts, useful empty state, working destination |
| Source identity | Publisher, instructor, edition, original links | Matches the authoritative record |
| Routing | Direct lesson URL, refresh, back navigation, unknown course | Valid content or a useful recovery page |
| Media | Load, restricted embed, direct link, unavailable video, playlist | No false playback claim and a clear fallback |
| Excerpt | Start and end against the actual video | Matches the reviewed concept |
| Activity | No answer, wrong answer, correct answer, retry, revised choices | Clear feedback and preserved work |
| Reflection | Empty text, long text, special characters, revision | Optional input remains intact and displays safely |
| Progress | First visit, resume, skip, finish, revisit, reload | Accurate states and no lost existing data |
| Storage | Old data, malformed data, blocked storage, full storage, two tabs | Recovery, visible warning, no silent overwrite |
| Accessibility | Keyboard, focus, screen reader sample, zoom, contrast | Main journey remains operable and understandable |
| Phones | Narrow screen, landscape, touch, open keyboard | Controls and text remain visible and usable |
| External links | Actual clicks and destinations | Correct original source and safe return path |
| Network | Slow response, offline navigation, interrupted media | Accurate messages and preserved current work where possible |
| Hosted release | Actual domain, HTTPS, fresh visit, stored progress, media | Same verified journey at the authorized destination |

Use current Chrome or Edge and at least one additional available browser. Record the actual browser and device coverage.

Device emulation is useful, but it does not establish physical-phone testing. State which kind occurred.

Run verify.cjs for existing checks. Add focused checks for progress migration, completion, and storage failures during implementation.

Use browser tests for navigation, keyboard interactions, and reload. Inspect appearance manually on desktop and phone layouts.

Do not call real video playback verified from an embed URL test.

## 15. Responses to common problems

| Situation | Immediate response | Work that can continue | Evidence before resolution |
| --- | --- | --- | --- |
| Approved draft is missing | Record the gap and request that specific draft | Baseline, data model, labeled draft activity | Retrieved draft or explicit replacement decision |
| Video or transcript is unavailable | Try original official resources and direct playback | Other content and interface work | Viewed source or documented unverified status |
| Excerpt does not support activity | Revise excerpt or task | Unrelated storage and layout work | Reviewer verifies the relationship |
| Embed is blocked | Offer direct original link | Activity and reflection | Actual fallback click succeeds |
| Source disappears | Pause its ready status and explain the problem | Other experiences | Reviewed replacement with stable identity handling |
| Content is too difficult | Add preparation or choose suitable approved material | Source browsing with difficulty label | Student and subject review |
| Student answers incorrectly | Explain and allow retry | Reflection and exploration | Feedback teaches the relevant reasoning |
| Student skips | Record skip explicitly | Rest of the journey | Progress does not imply the step was completed |
| Student reports little interest | Offer another kind of experience | Optional reflection | No negative judgment or forced recommendation |
| Notes fail to save | Retain session text and show copy guidance | Current session | Save succeeds or limitation remains visible |
| Update breaks old progress | Stop migration and preserve original data | Repair on fixtures | Old and new records survive repeated migration |
| Design feedback is delayed | Keep visual decisions pending | Content, storage, and test preparation | Feedback is recorded before broad redesign |
| Pilot recruitment is delayed | Rehearse internally | Technical verification | Student validation remains explicitly pending |
| Repeated tool failure | Inspect error evidence and change approach | Independent tasks | Successful check or exact blocker report |
| Budget is limited | Reduce number of experiences and paid dependencies | One complete journey | Core acceptance criteria still pass |
| Hosted release fails | Restore the last known working version | Local diagnosis | Real destination passes affected checks |
| New request expands scope | Record benefit, cost, and displaced work | Current agreed milestone | Owner resolves consequential priority changes |

For an unexpected problem, record the symptom, affected student action, evidence, suspected cause, and safe next step.

After diagnosis, record the actual cause, fix, and verification. Keep environment-specific workarounds distinct from product rules.

## 16. Release and operation

Before release, identify the audience, visibility, owner, host, domain, and support contact.

Choose private pilot access or public access deliberately. An obscure address is not access control.

Prepare a release record with the content version, code version, test evidence, limitations, and recovery procedure.

Verify the hosted site after deployment. Local success does not prove deployment success.

If a defect loses student work or exposes private data, stop the affected feature. Preserve evidence without copying unnecessary personal data.

Restore the last working version where appropriate. Explain the effect through the agreed support process.

Proposed maintenance cadence:

| Trigger | Action | Responsible role |
| --- | --- | --- |
| Before each release | Run affected checks and inspect the real destination | Builder |
| Before adding an experience | Review sources, task, accessibility options, and attribution | Content reviewer |
| After a student reports a blocker | Reproduce, prioritize, repair, and recheck | Builder and owner |
| Monthly during a pilot | Inspect source links and unresolved feedback | Content owner |
| Before adding a service | Review purpose, data, price, access, and recovery | Owner and builder |
| After a major content change | Review progress compatibility and run the experience | Builder and reviewer |

This cadence is a proposed manual workflow. It does not create reminders or automation.

## 17. Measurement and business decisions

The first question is whether students gain useful insight into a subject and their interests.

Measure this with observed sessions and specific student explanations. Completion rate is a supporting measure.

Suggested measures:

- Students who start, attempt the activity, reflect, and finish.
- Steps where students need help or leave.
- Students who can explain the central concept with an example.
- Students who describe a specific interest or dislike after the task.
- Students who choose another experience and explain why.
- Save failures and media failures observed during sessions.

Do not optimize for watch time alone. A student who discovers a subject is unsuitable can still gain value.

If analytics becomes necessary, collect only defined events. Keep reflections and activity text out of event payloads.

Define event denominators and distinguish skips from completion. Avoid counting reloads as new student starts.

Before selecting a business model, identify the user, purchaser, benefit, and operating cost.

Possible future purchasers include families or schools. Neither is a confirmed market decision.

Interview the intended purchaser before building subscriptions or school administration. Avoid payment development before evidence of demand.

Maintain a budget sheet for content review, design, development, research, hosting, domain, support, and legal review.

Obtain current quotes after requirements are clear. No paid service, recurring expense, or commercial release is approved by this plan.

## 18. Working documents and change control

Keep PROJECT.md concise. Link detailed evidence instead of copying this plan into onboarding files.

Create these records during their relevant phases:

- Baseline and recovery record.
- Economics 001 experience brief.
- Source review record and editorial decision log.
- Representative-page review notes.
- Browser verification report.
- Pilot script, anonymized findings, and repair list.
- Release record and operating contacts.

Each decision record needs a date, decision, reason, owner, and affected work.

Each task needs an outcome, dependency, acceptance criteria, status, and evidence link.

Use statuses: ready, in progress, waiting for input, needs repair, and complete.

When a request changes the plan, identify the affected phase. Update that phase and the project next steps.

## 19. Immediate implementation package

Start with this bounded package when implementation begins:

1. Preserve the current files and existing progress format.
2. Run baseline checks and inspect the running site.
3. Record Economics 001 acceptance criteria.
4. Recover the approved draft and inspect the actual lecture.
5. Prepare the matched activity with editorial status.
6. Build the representative entry and lesson page.
7. Request concrete feedback on the working page.
8. Continue independent storage and verification work.
9. Complete the journey and repair discovered problems.
10. Compare the result with the original acceptance criteria.

The first product milestone is complete when a student can attempt Economics 001, reflect on the work, and return without lost progress.

Content alignment, phone behavior, keyboard use, and media fallback must have evidence. Missing review or inaccessible checks remain named limitations.

This plan does not change the live product. It prepares the next build as a sequence of reviewable, testable increments.

15 November 2026 - Added eight user-selected Engineering collections (148 available video entries), bringing the catalog to 40 collections across six subjects. Audited all 841 video entries: 650 embed metadata OK, 187 owner-disabled embeds (including all nine AI Supercycle videos and eleven Stanford Engineering Hero talks), four other availability issues. Added accurate messages and selected/timestamp YouTube links, preserving all earlier course/editorial data and storage keys. Seven unrestricted new collection openers played in Chrome; all 148 selections and desktop/mobile checks passed. Topic chapters for these additions remain pending. Evidence: research/engineering-2026-11-15/RESULTS.md (workspace root). Local only.


15 November 2026 - Completed the user's Energy/Cybersecurity playlists: MIT Urban Energy (15 videos), Martina Gerken Renewable Energy (37), curated Cybersecurity (14), Google Cybersecurity (38 public entries; YouTube lists 39), plus the existing CS50 Cybersecurity (6) cross-listed under both subjects with all 75 chapters and note keys preserved. Four new records/104 video entries/879 YouTube topic starts; catalog now 44 collections across eight subjects. All 110 selected entries, timestamp actions, persistence and 1280/390/320 layouts checked; first video played in all five collections. Two publisher restrictions in the curated collection have direct fallbacks. Source chapters may be automatic; full transcript/content review pending. User handles Stanford separately; no Stanford changes. Evidence in workspace root: research/energy-cyber-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Added Duke University's Fundamental Concepts: Engineering, the user's selected eight-video short series, with 38 source topic starts across six videos. Catalog now 45 collections across eight subjects (953 video entries); Engineering has nine collections. All eight selections/embed metadata, timestamp links, note reload and 1280/390/320 layouts checked; first video played in Chrome. Prior 44 course records and guides preserved. YouTube topic metadata may be automatic; full content review pending. Evidence in workspace root: research/engineering-extra-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Completed the user's seven Psychology/Human-Political/Internet/Electrical playlists: five new collections (103 video entries), reusing two existing Electrical Engineering collections (81 entries). Catalog now 50 collections across ten subjects, 1,056 video entries. Added 942 YouTube topic starts, including 714 for the existing EE guides. All 184 selected entries passed embed metadata checks; opening video played in all seven collections. All selections, five keyboard timestamp actions, filters, old/new notes and 1280/390/320 layouts checked. Princeton source is University Press publisher content; Diplomaly units are IB Business Management, accurately labeled under the requested grouping. Source chapters may be automatic; full content review pending. Evidence in workspace root: research/subjects-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Added the user's corrected ten government/history playlists: three Human/Political Science collections and seven under Internet History, as explicitly confirmed by the user. Added 261 playlist entries (258 distinct videos) and 1,517 source topic starts. Catalog now 60 collections across ten subjects, 1,317 video entries. All 261 selections/embed responses, ten keyboard timestamp actions, notes and 1280/390/320 layouts checked; first selected video played in all ten collections. Prior 50 records/guides preserved; earlier removed playlist excluded. Source chapters may be automatic; full content review pending. Evidence in workspace root: research/human-internet-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Added the user's Air/Astronomy, Marketing, Music, Art and Journalism/Media selections: 11 new records/159 video entries, with existing Film History cross-listed and its 17 videos/guide/notes preserved. Catalog now 71 collections across 15 subjects, 1,476 video entries. All 176 selected entries checked; 175 embed metadata OK, one At The Movies video unavailable with visible fallback. First selected video played in all 12 records, including three standalone Music tutorials. Watch-page chapter retrieval was verification-blocked; reused 57 exact-video topic starts and preserved Film History's 107, with honest unavailable states elsewhere. All selections, category filters, old/new notes and 1280/390/320 layouts passed. Accurate original titles and MIT/independent attribution retained. Evidence in workspace root: research/creative-space-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Completed Business Administration/AI selections: 22 new records / 329 video entries; existing Human Resource Management cross-listed and AI@GSB shared between both groups. Catalog now 93 records across 17 subjects, 1,805 video entries. All 337 selected entries checked: 319 embed metadata OK, 16 owner restrictions, two unavailable entries; first selected video played in 20 of 23 unique records and three Stanford collections show expected YouTube-only opening links. Added 48 exact-video YouTube topic starts before watch retrieval became verification-blocked; other new chapter gaps labeled honestly. Public/listed count gaps recorded after continuation checks. All 337 selections, shared/old notes, filters and 1280/390/320 layouts passed. Prior 71 records/guides preserved except HR subject membership. Evidence in workspace root: research/business-ai-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Completed six user-selected Finance playlists: five new records / 112 video entries, reusing existing Finance & Accounts and preserving its guide, earlier memberships and notes. Catalog now 98 records across 18 subjects, 1,917 video entries. All 121 selected entries passed embed checks; first entry played in all six collections. Added 39 YouTube topic starts and preserved 51 existing starts; other gaps labeled honestly after verification-blocked retrieval. Finance Theory lists 40 videos but returned 21 public entries after continuation check. All selections, filters, two keyboard timestamp actions, old/new notes and 1280/390/320 layouts passed. Evidence in workspace root: research/finance-2026-11-15/RESULTS.md. Local only.


15 November 2026 - Implemented the user's multi-channel Personal Statement as one 15-lesson course (all 12 supplied direct videos plus three relevant College Essay Guy channel selections), with per-video publisher/context credits and one notes key. No Personal Statement subject option. Added Prep College/Uni subject with 12 selections, including the reused MIT Technical Communication course. Eleven new records / 159 entries; catalog now 109 records across 19 subjects, 2,076 video entries. All 171 selections checked: 170 embed metadata OK, one unavailable engVid reference moved to the curated course end. Fourteen of 15 Personal Statement videos and all three standalone talks played; first video played in all eight selected playlists. Added 37 source topic starts; later blocked metadata gaps labeled honestly. All controls, note persistence and 1280/390/320 layouts passed. Evidence in workspace root: research/college-prep-2026-11-15/RESULTS.md. Local only.



15 November 2026 ? Founder requests removal of the public Team Room, homepage About Us, and signup/signin before watching. This supersedes the earlier watch-first/no-accounts constraint. Account pages and Supabase email-code adapter are implemented; service settings are empty, forms disabled, so no real accounts or email delivery are claimed. Course destinations survive signup; watch rendering waits for session validation. Founder name pending. Team names Hiro (ChatGPT), Alisa, Tony, Jonathan; transparently credited AI roles. Founder recalls beginning October 27 and plans November 17 publication. Local only. Setup/evidence: research/SIGNUP-SETUP-2026-11-15.md.

15 November 2026 - User requests a full security/reliability review before public release, then explicitly defers Supabase/account setup until tomorrow due to fatigue. Continue independent review; do not push account setup or publish. Code hardening and verification evidence: research/security-review-2026-11-15/REVIEW.md. Accounts remain unconfigured; no live account/email or hosted launch claimed.

2026-11-18 - User requests all frontend CSS/JS in one index.html. Completed root standalone bundle: 8 pages, all 17 frontend scripts, all 10 stylesheets (including archived font CSS), 18 embedded images/fonts. Preserved source files. Server routes legacy HTML URLs to the single entry; release builder emits one frontend file plus hosting headers. Browser tests passed from an isolated directory and HTTP at 1280/390, with search, signin routes, lecture switching, note persistence, no external local assets, and hashed CSP. Nine existing regression/notes tests also pass. Live accounts/playback/publication unchanged. Evidence: research/single-file-2026-11-18/results.json; docs/SINGLE-FILE-FRONTEND.md. Superseded by the 18 November inline-structure cleanup entry above.
