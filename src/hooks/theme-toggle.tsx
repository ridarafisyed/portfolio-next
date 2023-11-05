import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const useToggleSwitch = () => {
    const { toggleColorMode } = useColorMode()
    const isDarkMode = useColorModeValue(false, true);

    const toggleTheme = () => {
        toggleColorMode()
    }
    return {isDarkMode, toggleTheme};

}

export default useToggleSwitch