import PageLayout from './components/page/page-layout';
import { ThemeProvider } from './components/theme/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PageLayout />
    </ThemeProvider>
  );
}

export default App;
