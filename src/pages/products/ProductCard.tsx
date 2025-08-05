import { Autocomplete, Button, Card, CardContent, CardHeader, CardMedia, Pagination, TextField } from "@mui/material";
import Checkout from "../../components/Checkout";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ProductProps } from "../../features/slices/productsSlice";
import { ToastComponent } from "../../components/Toast";

const ProductCard: React.FC<ProductProps> = ({ title, img, description, price, discount, rating, sizes, onAddToCart, href = "#" }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 flex-shrink-0 ${i <= rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-600'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="group relative w-full max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform hover:scale-[1.01]">
      <a href={href} aria-label={`View details for ${title}`} className="block">
        <div className="relative w-full pt-[56.25%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={img}
            width={400}
            height={400}
            alt={title}
            loading="lazy"
          />
        </div>
      </a>
      {/* <LocalOfferIcon /> */}
    {/* <InfoIcon /> */}
    {/* <ShareIcon /> */}
      <div className="px-5 py-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <a href={href} className="flex-1 block">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h3>
          </a>
          <ToastComponent
            title="You added a product to your fav"
            text="Added To Favorite"
            icon={<FavoriteIcon fontSize="small" />}
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center">{renderStars()}</div>
          <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-sm dark:bg-blue-200 dark:text-blue-900">
            {rating.toFixed(1)}
          </span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-3 flex-1">
          {description}
        </p>

        <ul className="flex gap-2 *:rounded-full *:cursor-pointer *:px-2 *:focus:bg-[#e20000]">
          {sizes.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>
        <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-baseline gap-1 flex-wrap">
          {discount ? (
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-sm text-gray-500 line-through"
                aria-label={`Original price $${price.toFixed(2)}`}
              >
                ${price.toFixed(2)}
              </span>
              <span
                className="text-2xl font-bold"
                aria-label={`Discounted price $${(price - price * (discount / 100)).toFixed(2)}`}
              >
                ${ (price - price * (discount / 100)).toFixed(2) }
              </span>
              <span
                className="italic text-red-600 flex items-center gap-1 text-sm text-center"
                aria-label={`${Math.round(discount)}% off`}
              >
                <LocalOfferIcon /> {Math.round(discount)}% OFF
              </span>
            </div>
          ) : (
            <span className="text-2xl font-bold" aria-label={`Price $${price.toFixed(2)}`}>
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={onAddToCart}
            className="flex items-center justify-center w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
          >
            <AddShoppingCartIcon fontSize="small" />
            <span>Add to cart</span>
          </button>
        </div>
</div>

      </div>
    </div>
  );
};

export default ProductCard;
