// 翻译 router.meta.title, 用在 breadcrumb sidebar tagsview
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  const translatedTitle = this.$t('route.' + title) //  $t 是 vue-i18n 提供的全局方法, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle
  }
  return title
}
