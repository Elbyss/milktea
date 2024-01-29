import { format, register } from 'timeago.js'; //임포트하기 register 한국어 선택
import koLocale from 'timeago.js/lib/lang/ko'; //한국어 선택

export default function parseDate(date: string) {
  register('ko', koLocale);
  return format(date, 'ko');
}
