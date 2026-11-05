import DefaultTheme from 'vitepress/theme'
import ResearchHome from './ResearchHome.vue'
import CompetitorExplorer from './CompetitorExplorer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ResearchHome', ResearchHome)
    app.component('CompetitorExplorer', CompetitorExplorer)
  }
}
