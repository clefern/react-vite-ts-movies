import { Category } from "../../types/Category.type";
import { Censure } from "../../types/Censure.type";
import styles from "./Tag.module.css";
import classNames from "classnames";


interface TagProps {
  value: Category | Censure;
}

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag = ({ value }: TagProps) => {
  const classes = classNames(styles.tag, tagClasses[value]);
  return <span className={classes}>{value}</span>;
};

export default Tag;