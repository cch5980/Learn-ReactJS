import React from 'react';
import {Route, Link} from 'react-router-dom'
import NewsList from './NewsList'
import'./NewsStyle.scss'

const Category = ({match, children}) => {

    return (
        <div>
            {/* {console.log(match)} */}
            <ul className="Category">
                <li>
                    <Link to="/category/all">전체보기</Link> 
                </li>
                <li>
                    <Link to="/category/business">비즈니스</Link> 
                </li>
                <li>
                    <Link to="/category/entertainment">엔터테인먼트</Link> 
                </li>
                <li>
                    <Link to="/category/health">건강</Link> 
                </li>
                <li>
                    <Link to="/category/science">과학</Link> 
                </li>
                <li>
                    <Link to="/category/sports">스포츠</Link> 
                </li>
                <li>
                    <Link to="/category/technology">기술</Link> 
                </li>
            </ul>
            
            <Route path={['', `/category/:category`]} component={NewsList} exact={true}>
                <NewsList />
            </Route>
        </div>
    )
}

export default Category