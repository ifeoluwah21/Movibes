import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import AuthPage from './pages/AuthPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route
				path="/home"
				element={<Home />}
			/>
			<Route
				path="/movies"
				element={<Movies />}
			/>
			<Route
				path="/movies/:movieId"
				element={<MovieDetail />}
			/>
			<Route
				path="/login"
				element={<AuthPage />}
			/>
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
