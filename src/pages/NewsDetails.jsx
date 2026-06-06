import { useParams } from "react-router-dom";
import { news } from "../data/news";


function NewsDetails(){
    const {id}= useParams();
    const selectedNews =news.find((selectesNew) => selectesNew.id === id);

    if (!selectedNews)  return <h1>News not found</h1>;

    return(
        <div className="news-details">
            <div className="news-info">
                <h1>{selectedNews.title} </h1>
                <br />
                <p><strong>Date:</strong>{selectedNews.date} </p>
                <br />
                <p><strong>Description:</strong>{selectedNews.description} </p>
                <br />
                <p><strong>Category:</strong>{selectedNews.category} </p>
                <br />
                <p><strong>Member:</strong>{selectedNews.member} </p>
                <br />
                <p><strong>author:</strong>{selectedNews.author} </p>
                <br />
                <p><strong>Tags:</strong>{selectedNews.tags} </p>
                <br />           
            </div>

              <div className="news-img">
                <img src={selectedNews.image} alt={selectedNews.name} />
            </div>
        </div>
    );
}

export default NewsDetails;