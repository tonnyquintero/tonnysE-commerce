import React, {useContext} from 'react';
import { Helmet } from 'react-helmet'
import {ThemeContext} from '../context/ThemeContext'
import Products from '../components/Products';
import initialState from '../initialState';
import '../styles/components/Home.css'

const Home = () => {

  const {darkMode} = useContext(ThemeContext)

  return (

    <div className={darkMode ? 'dark' : 'ligth'}>
    <Helmet>
      <title>Tonnys Conf Merge - Productos</title>
    </Helmet>
      <Products products={initialState.products} />
    </div>

  );
}

export default Home;