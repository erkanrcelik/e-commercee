import NextLink from "next/link";

interface IProductCard {
  title: string;
  price: string;
  image: string;
}

const ProductCard = (props: IProductCard) => {
  const {title, price, image} = props;

  return (
    <div className="p-6 group rounded-lg border border-gray-200 bg-neutral-200">
      <div className="min-h-80 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          width="25"
          height="25"
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="relative mt-2">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{price} TL</p>
      </div>
      <div className="mt-6">
        <NextLink href={`/product/${title}`}>
          <p
            className="relative flex items-center justify-center rounded-md border border-transparent bg-sky-800 py-2 px-8 text-sm font-medium text-white hover:bg-sky-900 hover:cursor-pointer">
            Daha fazla detay
          </p>
        </NextLink>
      </div>
    </div>
  );
};

export default ProductCard;
