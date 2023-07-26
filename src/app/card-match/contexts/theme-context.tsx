import { createContext, ReactNode, useContext, useState } from 'react';

const ThemeContext = createContext('light');
const ThemeUpdateContext = createContext(() => {});

interface Props {
  children?: ReactNode
}

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useToggleTheme = () => {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}