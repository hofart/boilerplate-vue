describe('should test Span', () => {
  expect(
    getByTestId(document.documentElement, 'html-element'),
  ).toBeInTheDocument()
  expect(getByTestId(document.documentElement, 'svg-element')).toBeInTheDocument()
  expect(
    queryByTestId(document.documentElement, 'does-not-exist'),
  ).not.toBeInTheDocument()
});
