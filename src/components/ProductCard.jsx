import { Icon } from "@iconify/react/dist/iconify.js";
import './components.css';

export default function ProductCard({ image, title, rating, price }) {
    return (
        <div className="product-card">
        <div id="product-image">
            <img src={image} alt={title} aria-label={title} aria-labelledby={title} />
        </div>
        <h3>{title}</h3>
        <div className="rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <Icon key={i} icon="openmoji:star" />
            ))}
            {rating}/5
        </div>
        <p>${price}</p>
        </div>
    );
}