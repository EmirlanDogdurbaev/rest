import { useParams } from "react-router-dom";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";
import ProductList from "../components/ProductList/ProductList";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      {/* <Header
      title={category.title} 
      image={category.image}>
      {category.description}
      </Header> */}
      <CategoryDisplay />

      <ProductList products={getProducts(category.categoryId)} />
    </>
  );
}

export default Category;