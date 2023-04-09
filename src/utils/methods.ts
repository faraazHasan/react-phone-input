import { c } from '../data/countries'
import { ISeperators } from '../types'

export const getSeperatorsPositions = (format: string) => {
  const seperators: ISeperators[] = []
  let prefixIndexes: any = []
  let prefix = ''
  let justSymbols = ''
  for (let i = 0; i < format.length; i++) {
    if (format[i] !== '#') {
      seperators.push({
        index: i,
        symbol: format[i],
      })
      if (!Number(format[i])) {
        justSymbols += format[i]
      }
      if (prefixIndexes.length) {
        if (i - prefixIndexes[prefixIndexes.length - 1] === 1) {
          prefixIndexes.push(i)
        }
      } else {
        prefixIndexes.push(i)
      }
    }
  }
  if (!prefixIndexes.includes(0)) {
    prefixIndexes = []
  }
  if (prefixIndexes.length) {
    for (let i = 0; i < prefixIndexes.length; i++) {
      prefix += format[i]
    }
  }
  return { seperators, prefixIndexes, prefix, justSymbols }
}

export const getDefaultCountry = (
  ar: any,
  defaultCountry?: string,
  onlyCountries?: string[],
  value?: string,
  autoFormat?: boolean,
  includeDialingCode?: boolean,
): any => {
  const text = String(value)
  if (autoFormat && (includeDialingCode || includeDialingCode === undefined)) {
    for (let i = 0; i < c.length; i++) {
      const pre = c[i].d.slice(1, c[i].d.length)
      if (text.startsWith(pre)) {
        return {
          c: pre === '1' ? 'USA' : c[i].c,
          f: c[i].f,
          n: c[i].n,
          d: c[i].d,
          p: c[i].p,
          c_sm: pre === '1' ? 'US' : c[i].c_sm,
        }
      }
    }
  }
  let format = {
    c: '',
    f: '',
    n: '',
    d: '',
    p: '',
    c_sm: '',
  }
  if (defaultCountry) {
    ar.forEach((c: any) => {
      if (
        c['c'] === defaultCountry?.toUpperCase() ||
        c['n'] === defaultCountry?.toLowerCase() ||
        c['c_sm'] === defaultCountry?.toUpperCase()
      ) {
        format = {
          c: c['c'],
          f: c['f'],
          n: c['n'],
          d: c['d'],
          p: c['p'],
          c_sm: c['c_sm'],
        }
      }
    })
  } else if (onlyCountries) {
    ar.forEach((c: any) => {
      if (
        c['c'] === (onlyCountries as string[])[0].toUpperCase() ||
        c['c_sm'] === (onlyCountries as string[])[0].toUpperCase()
      ) {
        format = {
          c: c['c'],
          f: c['f'],
          n: c['n'],
          d: c['d'],
          p: c['p'],
          c_sm: c['c_sm'],
        }
      }
    })
  }
  if (!format.c) {
    format = {
      c: 'IND',
      f: '+91 ####-######',
      n: 'India',
      d: '+91',
      p: '+91 7014-547733',
      c_sm: 'IN',
    }
  }
  return format
}
