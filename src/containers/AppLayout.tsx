import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";
import { ReactNode } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

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
        theme={{ colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Box
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Container
            sx={(theme) => ({
              backgroundColor:
                colorScheme === "dark"
                  ? theme.colors.gray[6]
                  : theme.colors.blue[4],
              height: "100%",
              width: "500px",
            })}
          >
            {children}
          </Container>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Theme;
