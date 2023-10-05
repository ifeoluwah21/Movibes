import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import AuthPage from './pages/AuthPage';
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route
				path="/"
				element={<HomeLayout />}>
				<Route
					path="movies"
					element={<Movies />}
				/>
				<Route
					path="home"
					element={<MovieDetail />}
				/>
			</Route>
			<Route
				path="login"
				element={<AuthPage />}
			/>
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
