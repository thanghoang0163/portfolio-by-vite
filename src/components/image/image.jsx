"use client";

import { useState } from "react";
import clsx from "clsx";
import NoImage from "~/assets/images/no-image.png";

import "./image.css";

export default function ImageComponent({
  src,
  alt = "",
  fallback: customFallback = NoImage,
  className,
  ...props
}) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={clsx("image", className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}
