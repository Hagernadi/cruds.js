
var productNameInput=document.getElementById('productNameInput')
var productPriceInput=document.getElementById('productPriceInput')
var productCategoryInput=document.getElementById('productCategoryInput')
var productDescriptionInput=document.getElementById('productDescriptionInput')
var searchInput=document.getElementById('searchInput')
var nameMessage=document.getElementById('nameMessage')
var priceMessage=document.getElementById('priceMessage')
var categoryMessage=document.getElementById('categoryMessage')
var DescriptionMessage=document.getElementById('DescriptionMessage')
var indexUpdate=0;
var productList=[];

if(localStorage.getItem('products')!=null){
    productList=JSON.parse(localStorage.getItem('products'));
    display()
    
}




function addProduct(){
   
if((validationName()&&validationPrice()&&validationCategory()&&validationDec())==true){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescriptionInput.value
    }

productList.push(product)
localStorage.setItem('products',JSON.stringify(productList))

clearProduct();
display();
}


}
function clearProduct(){
    productNameInput.value='';
    productPriceInput.value='';
    productCategoryInput.value='';
    productDescriptionInput.value='';
        
    
}

function deleteProduct(index){
    productList.splice(index,1)
    localStorage.setItem('products',JSON.stringify(productList))
    display()
}

function display(){
    
    var cartona='';
    for(var i=0; i<productList.length; i++){
        cartona +=`<tr>
        <td>${i+1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td>
        <button onclick="setProduct(${i})" class="btn btn-warning btn-sm">Update</button>
        <button  onclick="deleteProduct(${i})" class="btn btn-danger btn-sm ">Delete</button>
        </td>
        </tr>
        
        `
    }
   
    document.getElementById('tableBody').innerHTML=cartona;
   
}

function search(){
    var term=searchInput.value;
    console.log('hello');
    var cartona='';
    for(var i=0; i<productList.length; i++){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){

            cartona +=`<tr>
            <td>${i+1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].description}</td>
            <td>
            <button onclick="setProduct()" class="btn btn-warning btn-sm">Update</button>
            <button  onclick="deleteProduct(${i})" class="btn btn-danger btn-sm ">Delete</button>
            </td>
            </tr>
            
            `
        }

    }
   
    document.getElementById('tableBody').innerHTML=cartona;

}

function setProduct(i){
    indexUpdate=i;
    var currentProduct=productList[i];
    
    productNameInput.value=currentProduct.name;
    productPriceInput.value=currentProduct.price;
    productCategoryInput.value=currentProduct.category;
    productDescriptionInput.value=currentProduct.description;
    
    document.getElementById('addBtn').classList.add('d-none')
    document.getElementById('updateBtn').classList.remove('d-none')

}

function updateProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescriptionInput.value
    }
    console.log(indexUpdate);
    productList.splice(indexUpdate,1,product)
    localStorage.setItem('products',JSON.stringify(productList))
    display()
    
    document.getElementById('addBtn').classList.remove('d-none')
    document.getElementById('updateBtn').classList.add('d-none')

}


function validationName(){
    var text=productNameInput.value;
    var regexName=/^[A-Z][a-z]{3,8}$/
   if( regexName.test(text)==true){
   productNameInput.classList.add('is-valid')
   productNameInput.classList.remove('is-invalid')
   productNameInput.classList.remove('is-valid')
   nameMessage.classList.add('d-none')
   return true; 
   }
   else {
    productNameInput.classList.add('is-invalid') 
    productNameInput.classList.remove('is-valid') 
    nameMessage.classList.remove('d-none')
    return false;
   }
}

function validationPrice(){
    var text=productPriceInput.value;
    var regexPrice=/^[0-9]{3,5}$/
    if(regexPrice.test(text)==true){
        productPriceInput.classList.add('is-valid')
        productPriceInput.classList.remove('is-invalid') 
        productPriceInput.classList.remove('is-valid')
        priceMessage.classList.add('d-none')
        return true;
    }else{
        productPriceInput.classList.add('is-invalid') 
        productPriceInput.classList.remove('is-valid')
        priceMessage.classList.remove('d-none')
        return false;   
    }

}

function validationCategory(){
    var text=productCategoryInput.value;
    var regexCategory=/^[a-z]{3,8}$/
    if(regexCategory.test(text)==true){
        productCategoryInput.classList.add('is-valid')
        productCategoryInput.classList.remove('is-invalid') 
        productCategoryInput.classList.remove('is-valid')
        categoryMessage.classList.add('d-none')
        return true;
    }else{
        productCategoryInput.classList.add('is-invalid') 
        productCategoryInput.classList.remove('is-valid')
        categoryMessage.classList.remove('d-none')
        return false;   
    }
}

function validationDec(){
    var text=productDescriptionInput.value;
    var regexdesc=/^\w{4,20}$/
    if(regexdesc.test(text)==true){
        productDescriptionInput.classList.add('is-valid')
        productDescriptionInput.classList.remove('is-invalid') 
        productDescriptionInput.classList.remove('is-valid')
        DescriptionMessage.classList.add('d-none')
        return true;  
    }
    else{
        productDescriptionInput.classList.add('is-invalid') 
        productDescriptionInput.classList.remove('is-valid')
        DescriptionMessage.classList.remove('d-none')
        return false;   
    }

}


