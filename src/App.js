// import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from "./ui/MainLayout";
import RecipesPage from "./ui/RecipesPage";
import RecipePage from "./ui/RecipePage";
import {QueryClientProvider, QueryClient} from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" exact element={<RecipesPage/>}/>
              <Route path="/recipe/:recipeId" element={<RecipePage/>}/>
            </Routes>
          </MainLayout>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
