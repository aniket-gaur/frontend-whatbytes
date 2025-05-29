import ProductDetail from "./pagedetails";
import { getProductById } from "../../../lib/product";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
