import React from 'react';
import { GlobalStyles } from '../src/styles/GlobalStyles'
import { CustomThemeProvider } from '../src/context/Theme'


export const decorators = [
  Story => (
    <CustomThemeProvider>
      <GlobalStyles/>
      {Story()} 
    </CustomThemeProvider>
  )
]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}