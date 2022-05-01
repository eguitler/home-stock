
// import {
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { Layout } from './components';
// import {
//   Home,
//   Movie,
//   NotFound,
// } from './pages';
// import {
//   GlobalStyle,
//   theme,
// } from './styles';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 30000,
//       refetchOnWindowFocus: false,
//     },
//   },
// });


const App = () => (
  <div>
    <h1>HELLOs</h1>
    {/* <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Movie />} path='/movie/:id' />
              <Route element={<NotFound />} path='*' />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider> */}
  </div>
);

export default App;
