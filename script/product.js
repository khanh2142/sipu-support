const productContainer = document.getElementById("productContainer");

const productName = ["NARUTO - TẬP 72", "NARUTO - TẬP 71", "NARUTO - TẬP 67"];

for (let i = 0; i < 16; i++) {
  const productItem = document.createElement("div");

  const index = randomNumber(1, 4);

  const randomSalePrice = randomNumber(10000, 50000);
  const randomRootPrice = randomNumber(60000, 100000);

  let sale = ((randomRootPrice - randomSalePrice) / randomRootPrice) * 100;

  sale = Math.round(sale);

  productItem.className = "product__item";

  productItem.innerHTML = `
    <div
    class="product__item--image"
    style="background-image: url(./image/product-${index}.png)"
    ></div>
    <div class="product__item--content">${productName[index - 1]}</div>
    <div class="product__item--salePrice">${randomSalePrice}</div>
    <div class="product__item--rootPrice">${randomRootPrice}</div>
    <div class="product__item--sale">
    <p>${sale}%</p>
    </div>
    `;

  productContainer.appendChild(productItem);
}

const salePrice = document.querySelectorAll(".product__item--salePrice");

const rootPrice = document.querySelectorAll(".product__item--rootPrice");

// salePrice.forEach((item) => {
//   item.innerHTML = numberWithCommas(item.innerHTML) + "đ";
// });

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const reCommas = (list) => {
  list.forEach((item) => {
    item.innerHTML = numberWithCommas(item.innerHTML) + "đ";
  });
};

reCommas(salePrice);
reCommas(rootPrice);

const productLeftBtn = document.getElementById("product-left");
const productRightBtn = document.getElementById("product-right");

productLeftBtn.addEventListener("click", () => {
  productContainer.scrollBy(-100, 0);
  console.log(productContainer.scrollWidth, productContainer.scroll);
});

productRightBtn.addEventListener("click", () => {
  productContainer.scrollBy(100, 0);
  console.log(productContainer.scrollWidth, productContainer.scrollHeight);
});
