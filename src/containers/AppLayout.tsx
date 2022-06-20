import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";
import { ReactNode } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { MantineThemeOverride } from "@mantine/core";

const customTheme: MantineThemeOverride = {
  // Override any other properties from default theme
  fontFamily: "Open Sans, sans serif",
  spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
  colors: {
    // override dark colors to change them for all components
    dark: [
      "#d5d7e0",
      "#acaebf",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#1d1e30",
      "#0c0d21",
      "#01010a",
    ],
  },
};

interface ThemeProps {
  children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["ctrl+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, ...customTheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Container
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor:
              theme.colorScheme === "light"
                ? theme.colors.blue[3]
                : theme.colors.dark[6],
          })}
          size="xs"
        >
          {children}
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Theme;
