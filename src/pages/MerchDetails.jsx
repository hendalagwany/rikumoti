import { useParams } from "react-router-dom";
import { merchItems } from "../data/merch";

function MerchDetails(){
    const {id}= useParams();
    const selectedMerch =merchItems.find((selectesitem) => selectesitem.id === id);

    if (!selectedMerch)  return <h1>Merch not found</h1>;

    return(
        <div className="merch-details">
            <div className="merch-info">
                <h1>{selectedMerch.name} </h1>
                <br />
                <p><strong>Category:</strong>{selectedMerch.category} </p>
                <br />
                <p><strong>Price:</strong>{selectedMerch.price} </p>
                <br />
                <p><strong>Stock:</strong>{selectedMerch.stock} </p>
                <br />
                <p><strong>Release Date:</strong>{selectedMerch.releaseDate} </p>
                <br />
                <p><strong>Description:</strong>{selectedMerch.description} </p>
                <br />           
            </div>

              <div className="merch-img">
                <img src={selectedMerch.image} alt={selectedMerch.name} />
            </div>
        </div>
    );
}

export default MerchDetails;