import React from "react";
import { merchItems } from "../data/merch";
import MerchCard from "../components/ui/MerchCard";

function Merch() {
    return (
        <section className="page merch-page">
            <div className="container">
                <h1>Merch</h1>

                <div className="merch-grid">
                    {merchItems.map((item) => (
                        <MerchCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Merch;