import { ActionIcon, useMantineColorScheme } from "@mantine/core";

import { MdDarkMode, MdWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      size="xl"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      sx={(theme) => ({})}
    >
      {dark ? <MdDarkMode size={32} /> : <MdWbSunny size={32} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
