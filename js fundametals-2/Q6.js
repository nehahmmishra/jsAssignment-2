const productDetails = {
    name: 'Apple 202 Mackbook Air Laptop',
    price: 82000,
    color: 'Grey',
    hardDisk: '256 GB',
  };
  
  function printDetails() {
    console.log(
      'Below are the product details.\nname : "' +
        productDetails.name +
        '",\nprice : ' +
        productDetails.price +
        ',\ncolor : "' +
        productDetails.color +
        '",\nhardDisk: "' +
        productDetails.hardDisk +
        '",'
    );
  }
  
  printDetails();
  