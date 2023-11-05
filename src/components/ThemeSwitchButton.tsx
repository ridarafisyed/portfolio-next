// ThemeSwitchButton.tsx
import { Button } from '@chakra-ui/react';
import useThemeSwitch from '@/hooks/theme-toggle';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSwitchButton = () => {
  const { isDarkMode, toggleTheme } = useThemeSwitch();

  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? <MoonIcon color={"yellow.400"}/> : <SunIcon />}
    </Button>
  );
};

export default ThemeSwitchButton;