import React, {useEffect, useState} from 'react';
import styles from './SideBar.module.css'
import NewsItem from "../NewsItem/NewsItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsData} from "../../redux/slices/newsDataSlice";

const SideBar = () => {
    const dispatch = useDispatch()
    const news = useSelector((state) => state.newsData.news)

    useEffect( () => {
        dispatch(fetchNewsData())
    }, [])

    return (
        <div className={styles.root}>
            {news && news.articles.map((item, idx) => (
                <NewsItem key={item.title} idx={idx} news={item}/>
            ))}
        </div>
    );
};

export default SideBar;