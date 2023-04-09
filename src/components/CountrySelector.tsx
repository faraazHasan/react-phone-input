import { useEffect, useRef, useState } from 'react'
import { ICountryList, ISelector } from '../types'
import { c } from '../data/countries'
import React from 'react'

export const CountrySelector: React.FC<ISelector> = (props: ISelector) => {
  const selector = useRef<HTMLDivElement>()
  const [selectedOption, setSelectedOption] = useState<string>(
    props.fullIsoCode ? props.defaultCountry.c : props.defaultCountry.c_sm,
  )
  const activeOption = useRef<number | undefined>()
  const shouldShowDrpDwn = useRef<boolean>(true)
  const drpBtn = useRef<HTMLButtonElement>()
  const selectorInput = useRef<HTMLInputElement>()
  const [search, setSearch] = useState('')
  const noOptions = useRef(false)
  useEffect(() => {
    window.onclick = function (event: MouseEvent | TouchEvent) {
      if (
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-dropbtn' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-dropdown-input' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-option-no-search' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-option' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-input'
      ) {
        selector.current && selector.current.classList.remove('show')
        document
          .getElementsByClassName('react-number-formatter-form')[0]
          .classList.remove('border-onfocus-react-number-formatter')
        document
          .getElementsByClassName('react-number-formatter-dropbtn')[0]
          .classList.remove('onfocus-react-number-formatter-dropbtn')
      }
    }
    window.ontouchstart = function (event: TouchEvent) {
      if (
        event.target &&
        (event.target as HTMLDivElement).className !== 'react-number-formatter-option' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-dropbtn' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-dropdown-input' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-input' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-option-no-search' &&
        event.target &&
        (event.target as HTMLButtonElement).className !== 'react-number-formatter-option' &&
        (event.target as HTMLDivElement).className !== 'react-number-formatter-option-no-search'
      ) {
        selector.current && selector.current.classList.remove('show')
        document
          .getElementsByClassName('react-number-formatter-form')[0]
          .classList.remove('border-onfocus-react-number-formatter')
        document
          .getElementsByClassName('react-number-formatter-dropbtn')[0]
          .classList.remove('onfocus-react-number-formatter-dropbtn')
      }
    }
  }, [])

  const getSelector = () => {
    if (drpBtn.current) {
      const offset = drpBtn.current.getBoundingClientRect()
      if (offset.bottom > 500) {
        selector.current &&
          shouldShowDrpDwn.current &&
          selector.current.classList.add('react-number-formatter-dropdown-content-top')
      } else {
        selector.current &&
          shouldShowDrpDwn.current &&
          selector.current.classList.remove('react-number-formatter-dropdown-content-top')
      }
    }
    selector.current && shouldShowDrpDwn.current && selector.current.classList.toggle('show')
    document
      .getElementsByClassName('react-number-formatter-form')[0]
      .classList.add('border-onfocus-react-number-formatter')
  }
  const menuStyle = props.onlyCountries
    ? props.onlyCountries.length < 5
      ? {
          height: 'auto',
        }
      : {}
    : {}

  const selectOption = (country: ICountryList, index: number) => {
    changeCountry(country['f'], country['d'], country['p'])
    setSelectedOption(props.fullIsoCode ? country['c'] : country['c_sm'])
    activeOption.current = index
    selector.current && shouldShowDrpDwn.current && selector.current.classList.remove('show')
  }

  const countrySelectorStyle = { borderRadius: '4px 0px 0px 4px' }

  const changeCountry = async (format: string, code: string, placeholder: string) => {
    props.setFormat({
      format,
      placeholder,
    })
    document.getElementById('react-number-formatter-by-faraz')?.focus()
    props.setCountryCode(code)
  }

  const countryOptions = (ar: ICountryList[]): ICountryList[] => {
    const options = props.onlyCountries
      ? ar.filter((country: ICountryList) => {
          const name = country['n'].toLocaleLowerCase()
          if (search) {
            return (
              (props.onlyCountries?.includes(country['c']) || props.onlyCountries?.includes(country['c_sm'])) &&
              name.startsWith(search)
            )
          } else {
            return props.onlyCountries?.includes(country['c']) || props.onlyCountries?.includes(country['c_sm'])
          }
        })
      : ar.filter((country: ICountryList) => {
          const name = country['n'].toLocaleLowerCase()
          if (search) {
            return name.startsWith(search)
          } else {
            return country
          }
        })
    shouldShowDrpDwn.current = (options.length && options.length > 1) || search ? true : false
    if (!shouldShowDrpDwn.current || props.disabled) {
      drpBtn.current && drpBtn.current.classList.add('react-number-formatter-dropbtn-false')
    }
    noOptions.current = options.length ? false : true
    return options
  }

  return (
    <div className='react-number-formatter-dropdown-parent'>
      <button
        disabled={props.disabled}
        className={'react-number-formatter-dropbtn'}
        ref={(ref: HTMLButtonElement) => (drpBtn.current = ref)}
        style={countrySelectorStyle}
        onClick={getSelector}
      >
        <div className='react-number-formatter-dropbtn-text'>
          <p>{selectedOption}</p>
          {(props.onlyCountries &&
            props.onlyCountries.length < 2 &&
            (props.onlyCountries[0] === props.defaultCountry.c_sm ||
              props.onlyCountries[0] === props.defaultCountry.c)) ||
          props.disabled ? (
            ''
          ) : (
            <div className='react-number-formatter-arrow-parent'>
              <span className='react-number-formatter-arrow-top'> &#8963;</span>
              <span className='react-number-formatter-arrow-down'>&#8963;</span>
            </div>
          )}
        </div>
      </button>
      <div
        style={menuStyle}
        ref={(ref: HTMLDivElement) => (selector.current = ref)}
        className={'react-number-formatter-dropdown-content'}
      >
        {(props.searchOption === undefined || props.searchOption) && (
          <div className='react-number-formatter-dropdown-input-parent'>
            <input
              type='search'
              placeholder='Search...'
              ref={(ref: HTMLInputElement) => (selectorInput.current = ref)}
              className={'react-number-formatter-dropdown-input'}
              onClick={() => {
                document
                  .getElementsByClassName('react-number-formatter-dropbtn')[0]
                  .classList.add('onfocus-react-number-formatter-dropbtn')
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e.currentTarget.value.toLocaleLowerCase())
              }}
            />
          </div>
        )}
        <div>
          {countryOptions(c).map((country: ICountryList, index: number) => {
            return (
              <button
                key={index}
                onClick={() => {
                  selectOption(country, index)
                }}
                onTouchEnd={() => {
                  document
                    .getElementsByClassName('react-number-formatter-dropbtn')[0]
                    .classList.add('onfocus-react-number-formatter-dropbtn')
                }}
                className={
                  props.searchOption || props.searchOption === undefined
                    ? 'react-number-formatter-option'
                    : 'react-number-formatter-option-no-search'
                }
              >
                {country['n']} {country['d']}
              </button>
            )
          })}
          {noOptions.current && <p className='react-number-formatter-no-option'>No options</p>}
        </div>
      </div>
    </div>
  )
}
