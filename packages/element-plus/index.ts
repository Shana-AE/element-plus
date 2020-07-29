import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElCard from '@element-plus/card'
import ElTag from '@element-plus/tag'
import ElDivider from '@element-plus/divider'
import ElTimeLine from '@element-plus/time-line'

export {
  ElButton, ElBadge, ElCard, ElDivider, ElTag, ElTimeLine,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElCard(app)
  ElTag(app)
  ElDivider(app)
  ElTimeLine(app)
}
