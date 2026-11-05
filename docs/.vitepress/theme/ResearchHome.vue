<script setup>
import { withBase } from 'vitepress'

const path = (page) => withBase(page)
const territories = [
  { n: '01', title: 'An easier everyday decision', audience: 'The everyday outfit chooser', text: 'Help someone decide how a white tee fits into a real day. Clear fit guidance before a grand brand story.', tag: 'Recommended to explore', accent: true },
  { n: '02', title: 'A blank canvas for personal style', audience: 'The self-expression seeker', text: 'Let the same unprinted shirt carry different meanings through styling, context, and the wearer.', tag: 'Alternative hypothesis' },
  { n: '03', title: 'A considered, repeatable wardrobe', audience: 'The wardrobe simplifier', text: 'Make one familiar item feel intentional. Explore a dependable routine and a quieter visual identity.', tag: 'Alternative hypothesis' }
]
</script>

<template>
  <main class="research-home">
    <section class="home-hero" aria-labelledby="main-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> IS117007 / RESEARCH IN PROGRESS</p>
        <h1 id="main-title">A blank tee.<br>A sharper<br><em>point of view.</em></h1>
        <p class="hero-intro">One familiar product. Many possible meanings. A field guide to the competition, the opportunities, and the brand we could build next.</p>
        <div class="hero-actions">
          <a class="action-primary" :href="path('/competitive-landscape.html')">Explore the landscape <span aria-hidden="true">↗</span></a>
          <a class="action-text" :href="path('/ideas.html')">Review the ideas <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <figure class="shirt-figure">
        <div class="specimen-top"><span>OBJECT STUDY — 001</span><span>THE WHITE T-SHIRT</span></div>
        <svg class="shirt-drawing" viewBox="0 0 500 470" role="img" aria-label="Illustration of an unbranded white T-shirt with construction guide lines">
          <defs>
            <pattern id="paper-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M 25 0 L 0 0 0 25" fill="none" stroke="#d8d9cf" stroke-width=".65"/></pattern>
            <filter id="tee-shadow" x="-30%" y="-20%" width="160%" height="160%"><feDropShadow dx="0" dy="13" stdDeviation="11" flood-color="#142b32" flood-opacity=".10"/></filter>
          </defs>
          <rect x="20" y="25" width="460" height="420" fill="url(#paper-grid)"/>
          <path d="M250 38V435M35 243H465" stroke="#a3b0a7" stroke-width="1" stroke-dasharray="4 7"/>
          <g filter="url(#tee-shadow)">
            <path d="M196 86 150 97 67 158 109 226 151 203 144 388Q250 405 356 388L349 203 391 226 433 158 350 97 304 86Q250 113 196 86Z" fill="#fffefa" stroke="#a3a9a2" stroke-width="1.4"/>
            <path d="M196 86Q203 140 250 143Q297 140 304 86M201 90Q210 129 250 132Q290 129 299 90" fill="none" stroke="#bec2b8" stroke-width="1.2"/>
            <path d="M150 97 151 203M350 97 349 203M73 166 113 219M427 166 387 219M145 378Q250 395 355 378" fill="none" stroke="#d9dbd3" stroke-width="1.2"/>
            <path d="m163 211 7 91m166-91-7 91" stroke="#f0f0e9" stroke-width="3"/>
          </g>
          <path d="M158 421H342M158 414V428M342 414V428" stroke="#83988c"/>
          <text x="250" y="445" text-anchor="middle" font-size="10" letter-spacing="2" fill="#526a61" font-family="monospace">SAME PRODUCT. DIFFERENT MEANING.</text>
          <circle cx="407" cy="78" r="29" fill="#bf4b29"/><text x="407" y="83" text-anchor="middle" fill="#fff" font-family="monospace" font-size="15">01</text>
        </svg>
        <figcaption><span>Unbranded by design.</span><span>Illustration / no material or fit claims</span></figcaption>
      </figure>
    </section>

    <div class="research-ribbon" aria-label="Research scope">
      <span><b>01</b> Fixed product</span><span><b>08</b> Competitor lenses</span><span><b>03</b> Positioning hypotheses</span><span class="ribbon-date">DESK RESEARCH / NOV 05, 2026</span>
    </div>

    <section class="editorial-section opening-note" aria-labelledby="working-title">
      <div class="section-index"><span>THE WORKING THESIS</span><span>01 / UNDER REVIEW</span></div>
      <div class="thesis-grid">
        <h2 id="working-title">Make the choice<br>feel <em>less uncertain.</em></h2>
        <div class="thesis-body">
          <p>Price, fabric, fit, and provenance already give established brands plenty to talk about. Our most useful starting point is a specific wearing situation and the question a buyer needs answered.</p>
          <p><strong>Explore everyday certainty:</strong> show how the tee could fit a real wardrobe, make comparison easy, and be precise about what we know. This is a recommendation to test, not a chosen brand or a proven market gap.</p>
          <a class="inline-arrow" :href="path('/competitive-landscape.html#what-the-landscape-suggests')">Read the reasoning <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="territories-title">
      <div class="section-index"><span>THREE WAYS INTO THE SAME SHIRT</span><a :href="path('/ideas.html')">Compare the full ideas ↗</a></div>
      <h2 id="territories-title" class="section-title">A direction is a hypothesis.<br><em>Give it something to prove.</em></h2>
      <div class="territory-grid">
        <article v-for="item in territories" :key="item.n" class="territory" :class="{ 'territory-lead': item.accent }">
          <div class="territory-number">{{ item.n }} <span aria-hidden="true">↗</span></div>
          <p class="mini-label">{{ item.audience }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <span class="territory-tag">{{ item.tag }}</span>
        </article>
      </div>
    </section>

    <section class="next-section" aria-labelledby="next-title">
      <div><p class="eyebrow">FROM RESEARCH TO A DECISION</p><h2 id="next-title">Choose a situation.<br>Then earn the promise.</h2><p>Talk to prospective wearers, compare controlled concepts, and test any product claim before using it.</p><a class="action-primary" :href="path('/research-plan.html')">Open the research plan <span aria-hidden="true">↗</span></a></div>
      <ol class="next-list"><li><span>01</span><div><strong>Review the evidence</strong><p>Separate brand claims from independent proof.</p></div></li><li><span>02</span><div><strong>Pick a first audience</strong><p>One situation and one meaningful concern.</p></div></li><li><span>03</span><div><strong>Compare two expressions</strong><p>Same shirt, same message, different design.</p></div></li></ol>
    </section>

    <div class="home-colophon"><p>Based on the <a href="https://github.com/kaw393939/is117-brand-studio">IS117 Brand Studio</a> brief. This hub supports exploration; the final storefront and identity remain open.</p><a :href="path('/sources.html')">Sources & research limits ↗</a></div>
  </main>
</template>
