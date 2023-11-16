import { Page1 } from '@/Pages/Page1';
import { Page2 } from '@/Pages/Page2';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../Navbar/Nav';
import cl from './app.module.scss';

const App = () => {

    return (
        <div className={cl.container}>
            <Nav />
            <div className={cl.page}>
                <Routes>
                    <Route path='/page1' element={
                        <Suspense fallback={'...loading'}>
                            <Page1 />
                        </Suspense>
                    } />
                    <Route path='/page2' element={
                        <Suspense fallback={'...loading'}>
                            <Page2 />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </div>
    )
}

export default App;