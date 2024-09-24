# VND Suggesstion

Suggest possible payment values based on the input amount

## Features

- Suggested money according to Vietnamese currency denomination
- Suggestions based on input values increase in multiples of 10

## Installation

1. Install the package via npm:

   ```sh
      npm install vnd-suggestion
   ```

2. Install the package via yarn:

   ```sh
      yarn add vnd-suggestion
   ```

## Example

```text
   import {suggestionByAmount, suggestionByInput} from 'vnd-suggestion'

   const valueByAmount= suggestionByAmount(1030000) // unknown number of values
   const valueByInput= suggestionByInput(12) // The number of values is 5

   console.log(valueByAmount) // result: [ 1030000, 1050000, 1100000, 1200000, 1500000 ]
   console.log(valueByInput) // result: [ 1200, 12000, 120000, 1200000, 12000000 ]
```

## License

MIT
