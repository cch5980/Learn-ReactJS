import React, { useCallback, useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import Categories from './components/Categories'
import { Route } from 'react-router-dom'
import NewsPage from './pages/NewsPage'

const App = () => {
  const [data, setData] = useState(null)
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), [])

  const handleClick = async () => {
    // axios 데이터 불러오기
    // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    //   setData(response.data)
    // })
    try {
      const response = await axios.get(
        // 'https://jsonplaceholder.typicode.com/todos/1',
        'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=d4b5739cc29c4a03b36dae1e6fb2f7a7'
      )
      setData(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    // <div>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </div>
    <Route path='/:category?' component={NewsPage} />  
  )
}

export default App