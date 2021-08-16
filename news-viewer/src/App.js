import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import NewsList from './components/NewsList'
import Category from './components/Category'


const App = () => {

  // useEffect(() => {
  //   console.log(url)
  //   // newsData()
  //   newsData()
  // },[url])


  // const category = (match) => {
  //   // console.log(typeof match.params.category)
  //   console.log('category')
  //   const pathName = match.params.category
  //   // setUrl(() => pathName.substr(1))
  // }

  return (
    <div>
      <Category>
        {/* <NewsList /> */}
      </Category>
      {/* <NewsList data={data} /> */}
      
      {/* {console.log(data)} */}

    </div>
  );
};

export default App;