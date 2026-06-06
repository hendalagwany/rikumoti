import React from "react";
import { news } from "../data/news";
import NewsCard from "../components/ui/NewsCard";

function News(){
    return (
    <section className="page news-page">
         <div className="container">
               <h1 className="section-title">News</h1>

            <div className="news-grid">
                {news.map((news) => (
                    <NewsCard 
                    key={news.id}
                    news={news}
                    />
                ))}
            </div>
         </div>
        </section>
    );
}

export default News; 