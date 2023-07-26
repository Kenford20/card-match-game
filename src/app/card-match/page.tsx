'use client'

import CardMatchPage from "./app";
import { ModalProvider } from "./contexts/modal-context";
import { ThemeProvider } from "./contexts/theme-context";

interface CardMatchProps {

}

const App: React.FC<CardMatchProps> = (props:CardMatchProps) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <CardMatchPage />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App;