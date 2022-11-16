import React from 'react';
import styles from './NewsItem.module.css'
import noPhoto from '../../assets/icons/noPhoto.png'

const NewsItem = ({news}) => {
    console.log(news)
    return (
        <div className={styles.root}>
                <img src={news.urlToImage} alt='Нет фото'/>
                <div className={styles.info}>
                    {news.title}
                </div>
        </div>
    );
};

export default NewsItem;