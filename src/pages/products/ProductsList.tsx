import ProductCard from './ProductCard';
import { initialProducts } from '../../features/slices/productsSlice';
import ScrollReveal from '../../components/ScrollReveal';

export default function ProductsList() {
  return <>
        {initialProducts.map((product, index) => {
            return <ScrollReveal key={index}>
              <ProductCard
                key={product.id}
                title={product.title}
                img={product.img}
                description={product.description}
                price={product.price}
                discount={product.discount}
                rating={product.rating}
                sizes={product.sizes}
                // onAddToCart={() => alert('Added to cart')}
              />
        </ScrollReveal>
        })}
  </>
};
