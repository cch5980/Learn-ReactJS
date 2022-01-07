import React, { useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'

const App = () => {
  const [data, setData] = useState(null)
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
    <div>
      {/* <div>
        <button onClick={handleClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> } */}
      <NewsList />
    </div>
  )
}

export default App