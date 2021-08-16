import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import NewsListItem from './NewsListItem';
import './NewsStyle.scss'

const news = []

const NewsList = ({match}) => {


const [data, setData] = useState(news);
const [url, setUrl] = useState(match.params.category);

useEffect(() => {
    const newsData = async () => {
        try {
          const query = url === 'all' ? '' : `&category=${url}`
          console.log('test')
          console.log(url)
      
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d4b5739cc29c4a03b36dae1e6fb2f7a7`,
          );
          // console.log(response.data && response.data.articles);
          console.log(response.config.url)
          // const query = qs.parse(response.config.url)
          // console.log(query.category) //category: "business"
          // setUrl(query.category)
      
          setData(response.data.articles);
          setUrl(match.params.category)
      
      } catch(e){
        console.log(e);
      }
    }
    newsData()
},[match])


    // useEffect(() => {
    //     const query = match
    //     setUrl(query)
    //     console.log(query)
        
    //     // console.log(match)
    // },[])

    return(
        <div className="NewsList">
        {
        //  console.log(match)   
            data.map((datas, index) => {
                return <NewsListItem datas={datas} key={index} />
            })
        }
            
        </div>
    )
}

export default withRouter(NewsList);