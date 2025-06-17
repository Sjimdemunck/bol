import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageLayout from './components/page/page-layout';
import { ThemeProvider } from './components/theme/theme-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <PageLayout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
