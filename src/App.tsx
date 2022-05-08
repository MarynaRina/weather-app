
import { Header } from './shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonthStatistic } from './pages/MonthStatistic/MonthStatistic';

function App() {
    return (
        <div className='global-container'>
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/month-statistics'
                        element={<MonthStatistic />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
