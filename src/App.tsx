import style from './App.module.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import FriendName from './Components/FriendName/friendName';
import Home from './Components/Home/home';
import FavoriteColor from './Components/FavoriteColor/favoriteColor';
import Food from './Components/Food/food';
import City from './Components/City/city';
import Animal from './Components/Animal/animal';
import Finish from './Components/Finish/finish';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearStorage } from './Components/Utilities/clearStorage';
import SavedStories from './Components/Saved/savedStories';
import About from './Components/About/about';

function App(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();

    // State to keep story
    const [storyState, setStoryState] = useState<string>('');
    const [editedStory, setEditedStory] = useState<string>('');

    // remove values from localStorage if there are any

    function StoryRoutes(): JSX.Element {
        return (
            <Routes>
                <Route
                    path="/"
                    element={<Home onClick={handleGoClick} />}
                ></Route>
                <Route path="/start" element={<FriendName />}></Route>
                <Route path="/color" element={<FavoriteColor />}></Route>
                <Route path="/food" element={<Food />}></Route>
                <Route path="/city" element={<City />}></Route>
                <Route
                    path="/animal"
                    element={<Animal setStoryState={setStoryState} />}
                ></Route>
                <Route
                    path="/finish"
                    element={
                        <Finish
                            storyState={storyState}
                            editedStory={editedStory}
                            setEditedStory={setEditedStory}
                        />
                    }
                ></Route>
                <Route path="/saved" element={<SavedStories />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        );
    }

    useEffect(() => {
        if (location.pathname === '/') {
            clearStorage();
        }
    }, [location.pathname]);

    useEffect(() => {
        console.log(storyState, 'story state');
    }, [storyState]);

    const handleGoClick = (): void => {
        console.log('handleGoClick fired');
        navigate('/start');
    };

    return (
        <div className={style.mainContainer}>
            <Header />
            <StoryRoutes />
            <ToastContainer />
        </div>
    );
}

export default App;
