import { productsArray } from './products/products-array';
import { markupCardProduct } from './products/card-product';

const productsListEl = document.querySelector('.products-list-js');

const markupSetProduct = productsArray
  .map(el => {
    return markupCardProduct(el);
  })
  .join('');

console.log(markupSetProduct);
productsListEl.innerHTML = markupSetProduct;
