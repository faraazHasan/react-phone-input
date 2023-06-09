export interface NumberFormatterProps {
  value: string | number | undefined
  onchange?: (number: string) => void
  format?: string
  defaultCountry?: string
  onlyCountries?: string[]
  fixLength?: boolean
  disabled?: boolean
  searchOption?: boolean
  fullIsoCode?: boolean
  getCountryCode?: (code: string) => void
  name?: string
  placeholder?: string
  prefix?: boolean
  initialFormat?: boolean
  includeDialingCode?: boolean
  register?: any
  onBlur?: any
  className?: string
}
export interface ICountryList {
  n: string
  c: string
  d: string
  f: string
  p: string
  c_sm: string
}
export interface ICasheKeywords {
  [index: string]: string
}
export interface IFormat {
  format: string
  placeholder: string
}
export interface ISelector {
  disabled: boolean | undefined
  onlyCountries: Array<string> | undefined
  defaultCountry: ICountryList
  searchOption?: boolean
  fullIsoCode?: boolean
  setFormat: (formate: IFormat) => void
  setCountryCode: (code: string) => void
}
export interface ISeperators {
  index: number
  symbol: string
}
