/* eslint-disable @typescript-eslint/naming-convention */

/** There is no need to add english translations, unless key-value are not the same */
import EnUs from './en'

// eslint-disable-next-line camelcase
const FaIR: { [key: string]: string } = require('./fa.json')

const regex = /^\/fa/i
const lang = regex.test(window.location.pathname) ? 'fa' : 'en'
export { lang }
const directions = {
  fa: 'rtl',
  en: 'ltr',
}
function getDirection() {
  return directions[lang]
}
export { getDirection }

const translate = {
  fa: FaIR,
  en: EnUs,
}
function getTranslate(text: string) {
  return translate[lang][text] || text
}
export { getTranslate }
