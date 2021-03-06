function lowestPricesInCities(input) {
    let products = new Map();

    for (let line of input) {
        let [town, product, price] = line.split(" | ");

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(price));
    }

    for (let [product, value] of products) {
        let [town, price] = [...value].reduce((a, b) => (a[1] > b[1]) ? b : a);
        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);