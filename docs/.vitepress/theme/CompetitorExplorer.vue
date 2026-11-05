<script setup>
import { computed, ref } from 'vue'
import { competitors } from '../data/competitors'

const query = ref('')
const tier = ref('All segments')
const tiers = ['All segments', ...new Set(competitors.map(item => item.tier))]
const filtered = computed(() => competitors.filter(item => {
  const matchesTier = tier.value === 'All segments' || tier.value === item.tier
  const haystack = `${item.brand} ${item.product} ${item.angle} ${item.fabric} ${item.fit}`.toLowerCase()
  return matchesTier && haystack.includes(query.value.trim().toLowerCase())
}))
function reset() { query.value = ''; tier.value = 'All segments' }
</script>

<template>
  <section class="explorer" aria-label="Explore competitor evidence">
    <div class="explorer-controls">
      <label for="competitor-search">Find a brand or detail<input id="competitor-search" v-model="query" type="search" placeholder="Try ASKET, cotton, or fit" /></label>
      <label for="competitor-segment">Compare a segment<select id="competitor-segment" v-model="tier"><option v-for="option in tiers" :key="option">{{ option }}</option></select></label>
      <button type="button" @click="reset">Reset filters</button>
    </div>
    <p class="explorer-count" role="status" aria-live="polite">Showing {{ filtered.length }} of {{ competitors.length }} benchmarks · observed November 5, 2026</p>
    <p v-if="filtered.length === 0">No matching benchmarks. Try a different term or reset the filters.</p>
    <article v-for="item in filtered" :key="item.brand" class="competitor-card">
      <div class="competitor-heading"><div><span class="competitor-tier">{{ item.tier }}</span><h3>{{ item.brand }}</h3></div><div class="competitor-price">{{ item.price }}</div></div>
      <p class="competitor-product">{{ item.product }}<br>{{ item.priceNote }}</p>
      <dl class="competitor-grid"><div><dt>Brand-stated fabric</dt><dd>{{ item.fabric }}</dd></div><div><dt>Brand-stated fit / construction</dt><dd>{{ item.fit }}</dd></div><div><dt>Our positioning interpretation</dt><dd>{{ item.angle }}</dd></div><div><dt>Question for this project</dt><dd>{{ item.lesson }}</dd></div></dl>
      <p class="competitor-caveat"><strong>Evidence limit:</strong> {{ item.caveat }}</p>
      <a class="competitor-source" :href="item.url" target="_blank" rel="noopener noreferrer">View product source ↗<span class="sr-only"> (opens in a new tab)</span></a>
      <template v-if="item.extraUrl"> · <a class="competitor-source" :href="item.extraUrl" target="_blank" rel="noopener noreferrer">{{ item.extraLabel }} ↗<span class="sr-only"> (opens in a new tab)</span></a></template>
    </article>
  </section>
</template>
