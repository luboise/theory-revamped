import './App.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { Navbar, ChartNavigator } from "./global-components";
import { Songpage, Home } from "./pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="songpage" element={<Songpage />} />
            <Route path="song/:song_id/:diff" element={<Songpage />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <Navbar />
            <div className="page-main-body">
                <ChartNavigator />
                <div className="page-contents">
                    <RouterProvider router={router} />
                </div>
            </div>
        </>
    );
}

export default App;