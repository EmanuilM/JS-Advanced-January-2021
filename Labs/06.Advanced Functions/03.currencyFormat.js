function createFormatter(a, b ,c, currencyFormatter) {
    return currencyFormatter.bind(null, a, b, c)
}
