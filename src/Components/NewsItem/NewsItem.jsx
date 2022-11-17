import React from 'react';
import styles from './NewsItem.module.css'
import noPhoto from '../../assets/icons/noPhoto.png'
import {Link} from "react-router-dom";

const NewsItem = ({news, idx}) => {
    console.log(news)
    return (
            <Link to={`/news/${idx}`} className={styles.root}>
                <img src={news.urlToImage} alt='Нет фото'/>
                <div className={styles.info}>
                    {news.title}
                </div>
            </Link>
    );
};

export default NewsItem;