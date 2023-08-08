const product=[
    { name: "Laptop", price: 120000},
    { name: "Mobile", price: 70000},
    { name: "Laptop Bag", price: 20000},
    { name: "Watch", price: 20000},
    { name: "Mobile Charger", price: 1500},
];

function mmx()
{
    let max=-1, min=100000000, maxp,minp
    for(let i=0;i<product.length;i++)
    {
       if(product[i].price<min)
       {
        min=product[i].price
        minp=product[i].name
       }

       if(product[i].price>max)
       {
        max=product[i].price
        maxp=product[i].name
       }
    }
    console.log("The product with maximum amount is "+maxp+" which is priced at Rs. "+max);
    console.log("The product with minimum amount is "+minp+" which is priced at Rs. "+min);
}

mmx();