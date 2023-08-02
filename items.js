// Fetch the CSV file from the server
fetch('../Csv/items.csv')
  .then((response) => response.text())
  .then((data) => {
    // Parse the CSV data
    const rows = data.split('\n');
    const products = rows.slice(1).map((row) => {
      const [name, price, imageSrc] = row.split(',');
      return { name, price, imageSrc };
    });

    // Insert the products into the HTML
    const productGrid = document.querySelector('.product-grid');
    products.forEach((product) => {
      const productArticle = document.createElement('article');
      productArticle.className = "product";
      productArticle.innerHTML = `
        <img src="${product.imageSrc}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <a href="product1.html">More Details</a>
      `;
      productGrid.appendChild(productArticle);
    });
  })
  .catch((error) => {
    console.error('An error occurred while fetching the products:', error);
  });
