import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Welcome/Welcome';
import { Navbar } from './components/Navbar/Navbar';
import { Starship } from './components/DetailsStarship/DetailsStarship';
import { StarshipsList } from './components/ListStarships/ListStarships';
import { SignUp } from './components/SignUp/SignUp';
import { LogIn } from './components/LogIn/LogIn';
import { ProtectedRoute } from './components/Router/Router';
import './App.css';

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('Logged')) || null);
    const [userList, setUserList] = useState(JSON.parse(localStorage.getItem('Users')) || []);
    const [validate, setValidate] = useState(false);

    return (
        <>
            <Navbar validate={validate} setValidate={setValidate} />
            <Routes>
                <Route
                    path="/starships"
                    element={
                        <ProtectedRoute validate={validate}>
                            <StarshipsList />
                        </ProtectedRoute>
                    }
                />
                <Route path="/starships/:id" element={<Starship />} />
                <Route
                    path="/signup"
                    element={<SignUp userList={userList} setUserList={setUserList} />}
                />
                <Route
                    path="/login"
                    element={
                        <LogIn
                            user={user}
                            setUser={setUser}
                            userList={userList}
                            validate={validate}
                            setValidate={setValidate}
                        />
                    }
                />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;