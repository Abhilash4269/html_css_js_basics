
document.body.innerHTML=`
<div id="pgNos"></div>
<div id="listingTable"></div>`



async function mainCall(){
        
        const Promisedata =  await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
        console.log(Promisedata)
        const data = await Promisedata.json();
        console.log(data)
        function numPages() {
                return Math.ceil(data.length / 50);
       }
       

        (function(){  // creates buttons automatically as self invoking function , 
                
                const pgNos =  document.getElementById("pgNos")
                const onStart = data.slice(0,50)
                onStart.forEach((data)=>{
                        if(data.price==0.0 || 0){data.price = 'Check website for price';
                                        data.price_sign=''}
                        const nuData = {
                                img : data.image_link,
                                brand : data.brand.toUpperCase(),
                                name : data.name,
                                price : data.price + data.price_sign,
                                desc : data.description,
                                link : data.product_link,
                        }
                        createAd(nuData);
                });
                for (let i =1;i<=numPages();i++){
                        const pages = document.createElement("button")
                        pages.innerHTML=i
                        pgNos.append(pages)
                        pages.onclick =()=>{
                              
                                console.log(i)
                                document.querySelector("#listingTable").innerHTML=''
                                var loot = data.slice((i-1)*50,i*50)
                                console.log(loot)
                                loot.forEach((data)=>{
                                        const newData = {
                                                img : data.image_link,
                                                brand : data.brand.toUpperCase(),
                                                name : data.name,
                                                price : data.price + data.price_sign,
                                                desc : data.description,
                                                link : data.product_link,
                                        }
                                        createAd(newData);
                                });
                        }
                }   
            })();   
}
mainCall()


 function createAd({img,brand,name,price,desc,link}){
        
        const container = document.createElement("div");
        container.setAttribute("class","container");

        container.innerHTML=`

        <div><img class="pic" src="${img}" alt="${name} Image"> </div>
        <div class="con">
                <h3><b>${brand }- </b>${name}</h3>
                <label><mark><b>Price: ${price }</b></mark></label>
                <div><b>Product link:- </b><a href="${link}">${link}</a> </div>
                <p><b>Description:- </b>${desc}</p>   
        </div>

`       
        const lt = document.querySelector("#listingTable")
        lt.append(container);

}


    
    