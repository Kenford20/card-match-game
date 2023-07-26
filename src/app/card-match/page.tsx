'use client'

import CardMatchPage from "./app";
import { ThemeProvider } from "./contexts/theme-context";

interface CardMatchProps {

}

const App: React.FC<CardMatchProps> = (props:CardMatchProps) => {
  return (
    <ThemeProvider>
      <CardMatchPage />
    </ThemeProvider>
  )
}

export default App;