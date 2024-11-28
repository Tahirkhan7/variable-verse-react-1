import React from "react";
import ProductFeatures from "./ProductFeatures";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onToggleFavorite, onToggleExpand }) => {
  return (
    <div
      className={`${styles.card} ${
        product.isFavorited ? styles.favorited : ""
      }`}
    >
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>{product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.actions}>
        <button onClick={onToggleFavorite} className={styles.favoriteButton}>
          {product.isFavorited ? "❤️" : "♡"}
        </button>
        <button onClick={onToggleExpand} className={styles.expandButton}>
          {product.isExpanded ? "Hide Features" : "Show Features"}
        </button>
      </div>
      {product.isExpanded && <ProductFeatures features={product.features} />}
    </div>
  );
};

export default ProductCard;
