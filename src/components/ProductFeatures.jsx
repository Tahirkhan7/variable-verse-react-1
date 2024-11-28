import React from "react";
import styles from "./ProductFeatures.module.css";

const ProductFeatures = ({ features }) => {
  return (
    <ul className={styles.features}>
      {features.map((feature, index) => (
        <li key={index} className={styles.feature}>
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default ProductFeatures;
