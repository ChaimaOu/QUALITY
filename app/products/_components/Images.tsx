
"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export function Images() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "/images/products/tomate.webp",
  "/images/products/tomate2.webp",
  "/images/products/tomate1.webp",
  "/images/products/poivron.webp",
  "/images/products/poivronJaune.webp",
  "/images/products/poivron1.webp",
  "/images/products/courgette.webp",
  "/images/products/pasteque.webp",
  "/images/products/chilli.webp",

];
