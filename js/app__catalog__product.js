
// 按鈕樣式改變

$(".pageBtn").click(function(){
    $(this).addClass("btn--active").siblings().removeClass("btn--active");
})



let all__products =[
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=146",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b186c98d8c.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213211",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213211",
    cost : 3480,
    code : 3480,
    color : "brown"

    },
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=147",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b5130a4569.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213212",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213212",
    cost : 3480,
    code : 3480,
    color: "red"
    },
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=148",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b232011d71.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213213",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213213",
    cost : 3480,
    code : 3480,
    color : "blue"
    },
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=149",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b24c94511a.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213214",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213214",
    cost : 3480,
    code : 3480,
    color: "blue"
    },
    // 第五個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=150",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b4c3398149.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213201",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213201",
    cost : 2480,
    code : 2480,
    color : "blue"
    },
    // 第六個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=151",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b5103ec6c7.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213202",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213202",
    cost : 2480,
    code : 2480,
    color: "red"
    },
    // 第七個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=152",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b2e048ef9d.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213203",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213203",
    cost : 2480,
    code : 2480,
    color : "brown"
    },
    // 第八個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=153",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b2f4d92972.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213204",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213204",
    cost : 2480,
    code : 2480,
    color: "red"
    },
    // 第九個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=154",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b50c764c70.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213205",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213205",
    cost : 2480,
    code : 2480,
    color : "black"
    },
    // 第十個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=155",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b519502746.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213206",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213206",
    cost : 2480,
    code : 2480,
    color : "purple"
    },
    // 第十一個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=156",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b41f7129e2.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213207",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213207",
    cost : 2480,
    code : 2480,
    color: "black"
    },
    // 第十二個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=157",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/611b42bf62609.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "D213208",
    title : "伊藤 ITOH",
    model : "伊藤工匠-D213208",
    cost : 2480,
    code : 2480,
    color: "black"
    },
    // 第十三個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=61",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/5e57374e596e0.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "1014",
    title : "Armani Exchange",
    model : "Armani Exchange-1014",
    cost : 4450,
    code : 4450,
    color: "black"
    },
    // 第十四個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=62",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/5e5737bd8b8b5.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "1019",
    title : "Armani Exchange",
    model : "Armani Exchange-1019",
    cost : 4850,
    code : 4850,
    color: "black"
    },
    // 第十五個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=63",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/5e57389412dca.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "1037",
    title : "Armani Exchange",
    model : "潮流時尚-1037",
    cost : 4450,
    code : 4450,
    color: "black"
    },
    // 紫色第一個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=127",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/5fffe43a19552.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "V211604",
    title : "VENTO",
    model : "輕量塑鋼系列-V211604",
    cost : 888,
    code : 888,
    color: "purple"
    
    },
    // 紫色第二個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=128",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/5fffe4a5b2d44.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "V211605",
    title : "VENTO",
    model : "輕量塑鋼系列-V211605",
    cost : 888,
    code : 888,
    color: "purple"
    },
    // 紫色第三個
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=135",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/5fffeb7c5048c.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "V211612",
    title : "VENTO",
    model : "輕量塑鋼系列-V211612",
    cost : 888,
    code : 888,
    color: "purple"
    },
    // 黃色
    {
    product :"https://www.kobayashi.com.tw/product_view.php?type=1&id=72",
    img :　"https://www.kobayashi.com.tw/upload/frame_product/606fe7bfe912d.jpg",
    plus__img : "https://img.icons8.com/ios/50/000000/plus-math.png",
    more : "更多介紹",
    number : "1046",
    title : "Armani Exchange",
    model : "型格都會-1046",
    cost : 3880,
    code : 3880,
    color: "yellow"
    },

]



let def = document.querySelector(".def")
let low__high = document.querySelector(".low__high");
let high__low = document.querySelector(".high__low");
let az = document.querySelector(".az");
let za = document.querySelector(".za");

// 把全部商品包成一個function，每次篩選時重新print出來
function pros(){
    document.getElementById("productList").innerHTML = `
    <form>
  <ul class="products__box">
  ${all__products
    .map(function (pds) {
      return `
    <li class="product ${pds.color ? pds.color : ""}" data-price="${pds.cost}" data-title="${pds.title}">
    <a href="${pds.product}">

    <div class="square">
      <img class="product__img" src="${pds.img}">
      <div class="bgc">
        <img class="plus" src="${pds.plus__img}">
        <p class="more">${pds.more}</p>
      </div>
    </div>
    <div class="product__introduction">
      <p class="product__number">${pds.number}</p>
      <h3 class="product__title">${pds.title}</h3>
      <p class="product__model">${pds.model}</p>
      <p class="product__cost" >NT$${pds.cost}元<span class="product__code">NT$${pds.code}元</span></p>
    </div>
     </a>
     </li>
    `;})
    .join("") }
    </ul>
    </form>`;

    }


// 載入時先print出所有產品
pros();


/*
 * 改變排序
 *
 */
let productBox = document.querySelector(".products__box");
console.log(productBox)
const originLists = Array.from(productBox.children); /* 原商品陣列(未排序) */ 
// Array.from() 方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。
console.log(...originLists)
// console.log(originLists)

let lists = Array.from(productBox.children); /* 用來排序的陣列 */ 
let select = document.getElementById("select"); /* 下拉選單 */

select.onchange = sortingValue;

function sortingValue(){
    if(this.value === "default"){
        while(productBox.firstChild){
            productBox.removeChild(productBox.firstChild);
        }
        // print出原商品陣列
        productBox.append(...originLists);
        console.log(productBox);
    }

    if(this.value === "az"){
        sortCaps(productBox , lists, true)
    }
    if (this.value === "za") {    
        sortCaps(productBox, lists, false);
      }
      
    if (this.value === "lowToHigh") {
        sortCost(productBox, lists, true);
    }

    if (this.value === "highToLow") {    
        sortCost(productBox, lists, false);
    }
}
//  按照價格排序
function sortCost(productBox, lists, asc){
    let sortli = lists.sort((a,b)=>{
        let aPrice = a.getAttribute("data-price");
        let bPrice = b.getAttribute("data-price");
        
        /* asc判斷升降冪 */
        if(asc){
            return aPrice - bPrice
        }else{
            return bPrice - aPrice
        }

    });

    // 刪掉全部
    while(productBox.firstChild){
        productBox.removeChild(productBox.firstChild);
    }
    productBox.append(...sortli)

}

/* 按照字母排序*/
function sortCaps(productBox, lists, asc){


    let sortli = lists.sort((a,b)=>{
        let aTitle = a.getAttribute("data-title").toUpperCase();
        let bTitle = b.getAttribute("data-title").toUpperCase();

        let type;
        type = asc ? 1 : -1
        console.log(type)
        return aTitle > bTitle ? (1*type) : (-1*type);
    });

    while(productBox.firstChild){
        productBox.removeChild(productBox.firstChild);
    }

    productBox.append(...sortli);
    console.log(...sortli)

}


/*
* 勾選顯示類別
*
*/
let allProducts = document.querySelectorAll(".product"); /* 所有商品 */
let checkbox = document.querySelectorAll("input[type=checkbox]"); /* 所有選項標籤 */
let listNum = document.getElementById("listNum"); /* 總共顯示商品數量 */
let colors = []; /* 勾選的顏色 */

// filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
// push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
// forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
// jQuery :contains() 選擇器可用來選取子元素內包含特定文字的元素




for (i = 0; i < checkbox.length; i++) {
    /* 點擊任意選項標籤時觸發 */
    checkbox[i].addEventListener("click", (e) => {
        // 勾選項目轉為陣列
        
        if (e.currentTarget.checked) {
            /* 若點擊項目為「勾選」狀態，在colors陣列塞入該選項id */
            colors.push(e.currentTarget.id);
            
            // console.log(colors)
        } else {
            /* 若點擊項目為「取消勾選」狀態，在colors陣列移出該選項id，利用filter()回傳新陣列*/
            colors = colors.filter(function (value) {
                /* 只回傳不等於該選項id的值 */
                return value != e.currentTarget.id;
            });
            // console.log(colors)
        }
        
        // 判斷顯示的商品
        
        item = 0; /* 顯示數量 */
        
        allProducts.forEach((product) => {
            /* 先將所有商品隱藏 */
            product.style.display = "none";
            /* 用forEach()跑一次colors陣列，與個別product的class比對，*/
            colors.forEach((color) => {
                if (product.classList.contains(color)) {
                    product.style.display = "block";
                    item++;
                    // console.log(item)
                }
            });

        listNum.innerHTML = item; /* 顯示數量 */

        /* 判斷colors陣列是否為空，是則全部商品顯示 */
        if (colors.length <= 0) {
            product.style.display = "block";
            listNum.innerHTML = allProducts.length; /* 顯示數量為總數 */
        }
        });
    });
}





// 小賴新增



// 電腦版 =====================
// 清除篩選條件icon旋轉 & 清除按鈕總數變為
$(".searchSet__icon").on('click', function () {
    $(".searchSet__icon").addClass("searchSet__icon--rotate");
    setTimeout(function () {
    $(".searchSet__icon").removeClass("searchSet__icon--rotate");
    }, 1100)
    $(".catalog__checkbox").prop("checked", false)

    $(".product").css("display","block");
    $("#listNum")[0].innerHTML = allProducts.length; /* 顯示數量為總數 */
})

// 手機版 =====================
// 按所有商品彈出checkbox們的動畫
    $(".mobile_showBtn").on('click', function () {
        $(".catalogBox").addClass("catalogBoxShow");
    })

    $(".mobile_closeBtn").on('click', function () {
        $(".catalogBox").removeClass("catalogBoxShow");
    })
// 清除按鈕
    $(".mobile_cleanBtn").on('click', function () {
        $(".catalog__checkbox").prop("checked", false)
    })
//確定按鈕
    $(".mobile_checkBtn").on('click', function () {
        $(".catalogBox").removeClass("catalogBoxShow");
    })
    
    




