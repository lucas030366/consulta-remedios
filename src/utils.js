const currencyFormater = ({locale, currency} = {locale: "pt-BR", currency: "BRL"}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  })
}


export {
  currencyFormater
}