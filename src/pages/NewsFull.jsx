import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import HomeButton from "../Components/HomeButton/HomeButton";

const NewsFull = () => {
    const news = useSelector((state) => state.newsData.news)
    const { index } = useParams();

    return (
        <div style=
                 {{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    padding:'5vh',
                    cursor:'default',
                 }}>
            <p style={{fontSize:'4vh', fontWeight:'bold'}}>
                {news.articles[index].title}
            </p>
            <div>
                <img
                    style={{borderRadius:'10px'}}
                    src={news.articles[index].urlToImage}
                    alt="нет фото"
                    width={"600vh"}
                    height={"300vh"}
                />
            </div>
            <div style={{fontSize:'3vh'}}>
                {news.articles[index].description}
            </div>
            <a target={"_blank"} href={news.articles[index].url} >
                Читать полностью...
            </a>
            <div style={{display:'flex', justifyContent:'flex-start', width:'100%'}}>
                <HomeButton/>
            </div>
        </div>
    );
};

export default NewsFull;