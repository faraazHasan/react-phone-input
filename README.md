# @faraz.khan/react-phone-input
Phone number input component for react to formats phone numbers in real time.

## Features

* Easy to use - just import and use.
* Lightweight - No third-party dependencies.
* Search bar - You can anable or disable search bar from countries options list.
* You have option to include or exclude dial code from number.

## Installation

Run this command in your terminal

```bash
npm add @faraz.khan/react-phone-input
```


| Props | Description |
| --- | --- |
| initialFormat: Boolean | When using this component in editable forms. this function automatically guess the the dial code and formats the number|
| prefix: Boolean| user will get dial code pre defined When this is true or undefined |
| className: String | To add a css class in this component |
| includeDialingCode: Boolean | If you don't want to include dial code in number then make this false |
| placeholder: String | To change placeholder |
| onchange: Function() | This function returns current unformatted value. Which you can use to setState of value. |
| onlyCountries: Array | To filter country options. e.g.: ["USA", "IND"] |
| fixLength: Boolean | To limit input length |
| disabled: Boolean | To make input and selector disable|
| fullIsoCode: Boolean | Sets 3 letter ISO Code e.g. "IND", "USA"|
| searchOption: Boolean | To add or remove search bar|
| getCountryCode: Function() | To get selected country code |


## Usage

```typescript
import { NumberFormatter } from 'react-number-formatter';
```

```javascript
const [number, setNumber] = useState();
```
```typescript
//for typescript
const [number, setNumber] = useState<string | number>();
```

## Example: Inside React-hook-form

### register method

#
```typescript
<NumberFormatter 
  value={phone}
  fullIsoCode={true} 
  {...register('number', { required: true }) }
/>
```
### controller method

#
```typescript
<Controller
control={control}
name="PhoneInput"
render={({ field: { onChange, value} }) => (
    <PhoneInput 
    value={value}
    initialFormat={true} 
    prefix={true} 
    fixLength={true}
    fullIsoCode={true} 
    searchOption={true} 
    getCountryCode={(number)=> {setCode(number)}}
    onchange={onChange}
/>
```

## Normal use

#
```typescript
<NumberFormatter
  initialFormat={true} 
  value={number}
  prefix={true}
  onchange={(n) => setNumber(n)}
  fullIsoCode={true}
/> 
```
![Screen_Recording_2023-04-09_at_6_23_44_PM_AdobeExpress](https://user-images.githubusercontent.com/83122437/230777475-493cc099-e0e8-4547-b3cb-29c463e4b265.gif)


https://user-images.githubusercontent.com/83122437/230779334-7ea45334-c408-4e54-9a2d-bdb77fe1e820.mov


