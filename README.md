# @faraz.khan/react-phone-input
This is the phone number input component for react. which automatically formats phone numbers in real time.

## Installation

Run this command in your terminal

```bash
npm add @faraz.khan/react-phone-input
```


| Props | Description |
| --- | --- |
| initialFormat | When using this component in editable forms. this function automatically guess the the dial code and formats the number|
| prefix | user will get dial code pre defined When this is true or undefined |
| className | To add a css class in this component |
| includeDialingCode | If you don't want to include dial code in number then make this false |
| placeholder | To change placeholder |
| onchange | This function returns current unformatted value. Which you can use to setState of value. |
| onlyCountries | To filter country options |
| fixLength | To limit input length |
| disabled | To make input and selector disable|
| fullIsoCode | Sets 3 letter ISO Code e.g. "IND", "USA"|
| searchOption | To add or remove search bar|
| format | To create your own format |
| getCountryCode | To get selected country code |


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
  value={number}
  onchange={(n) => setNumber(n)}
  prefix={true}
  fullIsoCode={true}
/> 
```

#
```typescript
<NumberFormatter
  value={number}
  prefix={true}
  onchange={(n) => setNumber(n)}
  fullIsoCode={true}
/> 
```
https://user-images.githubusercontent.com/83122437/221404227-d350f2db-3ff5-4f67-945c-f3c694c4e587.mov

![Screen_Recording_2023-02-26_at_3_15_51_PM_AdobeExpress](https://user-images.githubusercontent.com/83122437/221404674-44f3d567-8b28-4850-8276-d62aa97af423.gif)



#
```typescript
<NumberFormatter
  defaultCountry="USA" 
  onlyCountries={["USA", "IND"]}
  value={number}
  fullIsoCode={true}
  searchOption={false}
  onchange={(n) => setNumber(n)}
/> 
```
![Screen_Recording_2023-02-19_at_8_16_35_PM_AdobeExpress](https://user-images.githubusercontent.com/83122437/219955707-a44a2a5e-d4c1-443c-a80f-72655455404c.gif)




#### make fixLength "false" to add number bigger than fotmat.length
```typescript
<NumberFormatter
  defaultCountry="USA"
  fixLength={false}
  value={number}
  fullIsoCode={true}
  searchOption={false}
  onchange={(n) => setNumber(n)}
/> 
```
![Screen_Recording_2023-02-19_at_8_01_58_PM_AdobeExpress](https://user-images.githubusercontent.com/83122437/219955783-8f668d77-e99e-4564-bc03-d106b937b6d6.gif)





## You can create your own format too. 
```typescript
<NumberFormatter
  format={"+1 (###)-(###)-####"}
  value={number}
  onchange={(n) => setNumber(n)}
/> 
```
![Screen_Recording_2023-02-19_at_8_03_19_PM_AdobeExpress](https://user-images.githubusercontent.com/83122437/219955776-cb8be17d-df94-40b5-b872-9382c24a9187.gif)

