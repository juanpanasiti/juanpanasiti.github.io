import { ThemeProvider } from "@material-ui/core"
import theme from "../src/theme/theme"
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
addDecorator((story) => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))