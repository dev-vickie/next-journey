import { notFound } from "next/navigation";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  // if (parseInt(params.productId) > 1000) {
  //   notFound();
  // }
  return <h1>Product Details for {params.productId} </h1>;
}