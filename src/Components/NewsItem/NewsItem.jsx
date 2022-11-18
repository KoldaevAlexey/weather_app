import React from 'react';
import styles from './NewsItem.module.css'
import {Link} from "react-router-dom";

const NewsItem = ({news, idx}) => {
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