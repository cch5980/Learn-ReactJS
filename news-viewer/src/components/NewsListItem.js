import React from 'react';
import './NewsStyle.scss';

const NewsListItem = (datas) => {
    return (
        <div className="NewsListItem">
            <ul>
                <li className="NewsImg">
                    <img src={datas.datas.urlToImage} />
                </li>
                <li className="NewsText">
                    <h3>{datas.datas.title}</h3>
                    <p>{datas.datas.description}</p>
                </li>
            </ul>
            {/* {console.log(datas.datas.urlToImage)} */}
        </div>
    )
}

export default NewsListItem;