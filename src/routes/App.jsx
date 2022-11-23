import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from '../context/ThemeContext'
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'


const App = () => {

    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <DarkModeProvider>
                <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/checkout' element={<Checkout />} />
                        <Route exact path='checkout/information' element={<Information />} />
                        <Route exact path='checkout/payment' element={<Payment />} />
                        <Route exact path='checkout/success' element={<Success />} />
                        <Route exact path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
                </BrowserRouter>
            </DarkModeProvider>
        </AppContext.Provider>
    )
}

export default App