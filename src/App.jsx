import { BrowserRouter } from 'react-router-dom'
import Layout from "./Layout";
import AppRouter from "src/routes/AppRouter";

import '@fontsource-variable/manrope';
import '@fontsource-variable/playfair-display';
import { RefProvider } from 'src/utils/Context/RefContext';

export default function App() {  
  return (
    <BrowserRouter>
      <RefProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </RefProvider>
    </BrowserRouter>
  )
}
