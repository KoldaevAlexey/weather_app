import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router";

const NewsFull = () => {
    const news = useSelector((state) => state.newsData.news)
    const { index } = useParams();

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', padding: 20, cursor:'default'}}>
            <h2>
                {news.articles[index].title}
            </h2>
            <div>
                <img src={news.articles[index].urlToImage} alt="нет фото" width={400}/>
            </div>
            <div>
                {news.articles[index].description}
            </div>
            <a target={"_blank"} href={news.articles[index].url} >
                Читать полностью...
            </a>
        </div>
    );
};

export default NewsFull;