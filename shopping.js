let products=[
    {
        name:"One peice",
        size:"L",
        color:"pink",
        price:"1800",
        image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10761002/2019/10/16/8a6956e7-1207-4829-a0d2-b251d616217a1571220345873-SASSAFRAS-Women-Dresses-6331571220342997-1.jpg",
        description:"100% cotton , beutiful color , for evryone"
    },

    {
        name:"Casual tops",
        size:"M",
        color:"Black",
        price:"2000",
        image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/5803872/2018/5/10/e36d964f-da74-4c07-acd4-b5cb81d6ee021525933565797-na-9581525933565562-1.jpg",
        description:"Fresh material"
    },

    {
        name:"Crop top",
        size:"XL",
        color:"Maroon",
        price:"1800",
        image:"https://i.pinimg.com/736x/0d/0f/e5/0d0fe56eb4fdcb88f681ad503fcda9cd.jpg",
        description:"Party Wear top"
    },

    {
        name:"top",
        size:"L",
        color:"Red",
        price:"2200",
        image:"https://i.pinimg.com/736x/cf/a5/78/cfa57824f53fcdfe22dd359da32b4fd3.jpg",
        description:"Net work all over the top"
    },

    {
        name:"Frock",
        size:"S",
        color:"black and white",
        price:"1700",
        image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7146642/2018/8/14/a335d3a1-babd-41ac-a95b-ede2a550e0561534244230743-StyleStone-Womens-Black-and-White-Check-Shirt-Dress-with-Belt-6671534244230459-1.jpg",
        description:"In trend"
    },

    {
        name:" One piece",
        size:"L",
        color:"Blue",
        price:"1700",
        image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/8427205/2019/1/8/19bb88fe-2740-4ddd-b6c2-974c536013871546927983368-plusS-Blue-9461546927982127-1.jpg",
        description:"Denim cloth"
    },

    {
        name:" Formal",
        size:"L",
        color:"Dark Blue",
        price:"1800",
        image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/cache/image/1000x1500/bcf7ce64d63d93f1f374273bba74938d/s/s/ss18ab063drpc_ink-blue_1-_1_.jpg",
        description:"Formal Dress for part or meeting both"
    },

    {
        name:"Fancy",
        size:"M",
        color:"leopard skin color",
        price:"1500",
        image:"https://images.bubbleroom.eu/data/product/240x348/make-way-linsley-dress-leopard_4.jpg",
        description:"Leopard Print"
    },

    {
        name:"polka dress",
        size:"XL",
        color:"Dark Blue",
        price:"2700",
        image:"https://img3.junaroad.com/uiproducts/16908230/pri_175_p-1580728762.jpg",
        description:"Polka Dots"
    },

    {
        name:"Traditional",
        size:"L",
        color:"Dark Blue",
        price:"3800",
        image:"https://images-na.ssl-images-amazon.com/images/I/610K-HZ2IlL._UL1500_.jpg",
        description:"Traditional party wear"
    },

    {
        name:"Kurti",
        size:"L",
        color:"Dark Blue",
        price:"2700",
        image:"https://images-na.ssl-images-amazon.com/images/I/61hZqj0tZVL._UX569_.jpg",
        description:"College or daily use kurti for girls"
    },


    {
        name:"Cut Kurti",
        size:"M",
        color:"Brown",
        price:"5700",
        image:"https://aariyafashions.com/siteuploads/products/products1/242/front/1751557441-min.jpg",
        description:"Fancy Cut Kurti"
    },
];

let cart =[];

function displayProducts(data,who="productwrapper")
{
     let productsString = "";
     data.forEach(function(product,index)
     {
         let {name,image,color,description,price,size}=product;
        //  let productString =JSON.stringify(product);
        if(who=="productwrapper")
        {
            productsString +=`<div class="product">
            <div class="prodimg"> 
                <img src="${image}" width="100%"/>
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p>
            <button onclick="addToCart(${index})">Add To Cart </button></p>
     </div>`;
        }

        else if(who=="cart")
        {
            productsString +=`<div class="product">
            <div class="prodimg"> 
                <img src="${image}" width="100%"/>
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p>
            <button onclick="removeFromCart(${index})">Remove from Cart </button>
            </p>
     </div>`;
            
        }
      
     });
   
     document.getElementById(who).innerHTML= productsString;


}

displayProducts(products);


function SearchFunction(searchvalue)
{
    let searchedProducts = products.filter(function(product,index)
    {
        let searchString = product.name+" "+product.color+" "+product.description;
       return searchString.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1;
    });
    displayProducts(searchedProducts);
}

function addToCart(index)
{
 
     cart.push(products[index]);
     displayProducts(cart,"cart");
}

function removeFromCart(index)
{
 
     cart.splice(index,1);
     displayProducts(cart,"cart");
}