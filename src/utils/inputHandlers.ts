export const limitedTextHandler = (
  setValue: (value: string) => void,
  maxLength: number,
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value // Limit to the required number of characters
    if (value.length <= maxLength) {
      setValue(value)
    }
  }
}

export const decimalInputHandler = (
  setValue: (value: string) => void,
  removeLeadingZeros: boolean = true,
  maxDecimals: number = 2,
  replaceComma: boolean = true,
  autoPrefixZero: boolean = true,
  limitLength: number = 12,
) => {
  const decimalRegex = new RegExp(`^\\d*(\\.\\d{0,${maxDecimals}})?$`)

  return (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // 1. Replace the comma with a period
    if (replaceComma) {
      value = value.replace(',', '.')
    }

    // 2. If there is only a period, add "0."
    if (autoPrefixZero && value === '.') {
      value = '0.'
    }

    // 3. Check that this is a correct number.
    if (decimalRegex.test(value)) {
      // 4. Length limit
      if (limitLength && value.length > limitLength) {
        return
      }

      // 5. Remove leading zeros
      if (removeLeadingZeros) {
        if (
          value.startsWith('0') &&
          value.length > 1 &&
          !value.startsWith('0.')
        ) {
          value = value.replace(/^0+/, '')
          if (value === '' || value.startsWith('.')) {
            value = '0' + value
          }
        }
      }

      setValue(value)
    }
  }
}
