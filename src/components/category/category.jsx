import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { categories } from "./index";

import "./category.css";

export default function Category() {
  const pathName = useLocation().pathname;

  return (
    <ul className="category">
      {categories.map((category, index) => {
        return (
          <a
            className={clsx(
              "category__item",
              pathName === category.href && "category__item--activated",
            )}
            href={category.href}
            key={index}
          >
            <FontAwesomeIcon className="category__icon" icon={category.icon} />
            <span className="category__label">{category.label}</span>
          </a>
        );
      })}
    </ul>
  );
}
