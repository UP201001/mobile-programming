import { NativeRouter, Routes, Route } from 'react-router-native';

import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Navbar from './src/components/Navbar';

export default function App() {
    return (
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information/:pokemonid' element={<Information />} />
            </Routes>
        </NativeRouter>

    );
}
