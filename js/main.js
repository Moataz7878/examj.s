
$(document).ready(function (){
    $("#loned").fadeOut(900 ,function (){
    $("#loned").remove();
    $("body").css("overflow" ,"auto")
    })
})


$("#locc").click(function (){
    $("body").css("overflow" ,"hidden")
    $(document).ready(function (){
        $("#lontol").fadeOut(900 ,function (){
        $("#lontol").remove();
        $("body").css("overflow" ,"auto")
        })
    })
    
})


$("#Categoriesr").click(function (){
    $("body").css("overflow" ,"hidden")
    $(document).ready(function (){
        $("#lonfop").fadeOut(900 ,function (){
        $("#lonfop").remove();
        $("body").css("overflow" ,"auto")
        })
    })
    
})



$("#Ingredients").click(function (){
    $("body").css("overflow" ,"hidden")
    $(document).ready(function (){
        $("#lonzls").fadeOut(900 ,function (){
        $("#lonzls").remove();
        $("body").css("overflow" ,"auto")
        })
    })
    
})

















// start nav

$("#lineTow").click(function () {
          $("#lineone").removeClass("d-none");
          $("#lineTow").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
      $(".first").animate({ left: `0px` }, 1000);
  
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  
    }

});
$("#lineone").click(function () {
  $("#lineTow").removeClass("d-none");
  $("#lineone").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});


// end nav
//seach 


$("#xhcc").click(function () {
  $("#secSearch").css('display','block');
  $(".Home").css('display','none')
  $(".Categories").css('display','none')
  // $(".Sear").css('display','block')
  $("#fgh").css("display", 'none')
  $("#mrkfeo").css("display", 'none')
  $("#mcmc").css("display", 'none')
  $("nav").animate({ left: `-250px` }, 1000);
  $(".first").animate({ left: `0px` }, 1000);
  // $("#Home , #Categories , #Area , #Ingredients ,#contact ").addClass("d-none");

  //   // start Searsh words

  let addSearchs = document.getElementById("addSearch");
  async function searchWords(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayArea() {
    let e = ``;
    for (let i = 0; i < Array.length; i++) {
      e = `
    <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
        <div class="movie yArea rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`;
    }
    addSearchs.innerHTML = e;
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }

  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    addSearchs.innerHTML = meals;
  }
  let usersearch = document.getElementById("search");

  usersearch.addEventListener("blur", function () {
    searchWords(usersearch.value);
  });

  //   // end Searsh words

  //   // start Searsh litter

  let useraddSearchs = document.getElementById("addSearch");
  async function searchLitter(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayArea() {
    let e = ``;
    for (let i = 0; i < Array.length; i++) {
      e = `
    <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
        <div class="movie yArea rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`;
    }
    useraddSearchs.innerHTML = e;
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }

  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    useraddSearchs.innerHTML = meals;
  }
  let letter = document.getElementById("letter");

  letter.addEventListener("keyup", function () {
    console.log("fed");
    console.log(letter.value);
    searchLitter(letter.value);
  });

  //   // end Searsh litter

  $("#addSearch").click(function (e) {
    let allImg = $(e.target).text();
    let result = allImg.trim();
    $("#secSearch").addClass("d-none");
    $("#SearchChang").removeClass("d-none");
    console.log("this");

    async function Instruc(meal) {
      let apiIns = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      let final = await apiIns.json();
      let allItem = final.meals;

      let int = ` `;

      for (let i = 0; i < allItem.length; i++) {
        int = `
   <div class="row intro  mt-5 text-white">
            <div class="col-md-4 text-center">

                <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                <h2>${allItem[i].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${allItem[i].strInstructions}</p>
                <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                <h3 class="fw-bolder">Recipes : </h3>
                <ul class="d-flex flex-wrap " id="recipes">
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                </ul>
                <h3 class="fw-bolder">Tags : </h3>
                <ul class="d-flex " id="tags">
                    <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                </ul>
                <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

            </div>
        </div>
      `;
      }

      document.querySelector("#SearchChang").innerHTML = int;
    }
    Instruc(result);
  });
});

//seach
























 //seach
//  $("#xhccmmmmm").click(function(){
//   $(".Home").css('display','none')
//   $(".Categories").css('display','none')
//   $(".Sear").css('display','block')
//   $("#fgh").css("display", 'none')
//   $("#mrkfeo").css("display", 'none')
//   $("#mcmc").css("display", 'none')


//   $("nav").animate({ left: `-250px` }, 1000);
//   $(".first").animate({ left: `0px` }, 1000);



//   let addSearchs = document.getElementById("addSearch");
// async function searchWords(M) {
//   let meals = await fetch(
//     `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
//   );
//   meals = await meals.json();
//   displayMeals(meals.meals);
//   return meals;
// }
// function displayArea() {
//   let e = ``;
//   for (let i = 0; i < Array.length; i++) {
//     e = `
//     <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
//         <div class="movie yArea rounded position-relative">
//             <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
//                 <i class="fa-solid fa-city fa-3x"></i>
//                 <h2 class="text-white">${array[i].strArea}</h2>
//             </div>
//         </div>
//     </div>`;
//   }
//   addSearchs.innerHTML = e;
//   $("html, body").animate(
//     {
//       scrollTop: 0,
//     },
//     200
//   );
// }

// function displayMeals(array) {
//   let meals = "";
//   for (let i = 0; i < array.length; i++) {
//     meals += `
//         <div class="col-md-6 col-lg-3 my-3 myM  shadow">
//                 <div class="post item">
//                     <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
//                     <div class="layer d-flex align-items-center ">
//                         <div class="caotion rounded-2">
//                             <h2 class="ms-2">${array[i].strMeal}</h2>
//                         </div>
//                     </div>
//                 </div>
//         </div>`;
//   }
//   addSearchs.innerHTML = meals;
// }
// let usersearch = document.getElementById("search");


// usersearch.addEventListener('blur' , function () {
//   console.log('fed');
//   console.log(usersearch.value);
//   searchWords(usersearch.value);




// })






// let addSearchsws = document.getElementById("addSearch");
// async function searchLitter(M) {
//   let meals = await fetch(
//     `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
//   );
//   meals = await meals.json();
//   displayMeals(meals.meals);
//   return meals;
// }
// function displayArea() {
//   let e = ``;
//   for (let i = 0; i < Array.length; i++) {
//     e = `
//     <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
//         <div class="movie yArea rounded position-relative">
//             <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
//                 <i class="fa-solid fa-city fa-3x"></i>
//                 <h2 class="text-white">${array[i].strArea}</h2>
//             </div>
//         </div>
//     </div>`;
//   }
//   addSearchsws.innerHTML = e;
//   $("html, body").animate(
//     {
//       scrollTop: 0,
//     },
//     200
//   );
// }

// function displayMeals(array) {
//   let meals = "";
//   for (let i = 0; i < array.length; i++) {
//     meals += `
//         <div class="col-md-6 col-lg-3 my-3 myM  shadow">
//                 <div class="post item">
//                     <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
//                     <div class="layer d-flex align-items-center ">
//                         <div class="caotion rounded-2">
//                             <h2 class="ms-2">${array[i].strMeal}</h2>
//                         </div>
//                     </div>
//                 </div>
//         </div>`;
//   }
//   addSearchsws.innerHTML = meals;
// }
// let usersearchs = document.getElementById("port");


// usersearchs.addEventListener('input' , function () {
//   console.log('fed');
//   console.log(usersearchs.value);
//   searchLitter(usersearchs.value);

// })


// $("#addSearch").click(function (e) {
//   let allImg = $(e.target).text();
//   let result = allImg.trim();
//   $("#secSearch").addClass("d-none");
//   $("#SearchChang").removeClass("d-none");
//   console.log("this");

//   async function Instruc(meal) {
//     let apiIns = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
//     );
//     let final = await apiIns.json();
//     let allItem = final.meals;

//     let int = ` `;

//     for (let i = 0; i < allItem.length; i++) {
//       int = `
//  <div class="row intro  mt-5 text-white">
//           <div class="col-md-4 text-center">

//               <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
//               <h2>${allItem[i].strMeal}</h2>
//           </div>
//           <div class="col-md-8">
//               <h2>Instructions</h2>
//               <p>${allItem[i].strInstructions}</p>
//               <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
//               <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
//               <h3 class="fw-bolder">Recipes : </h3>
//               <ul class="d-flex flex-wrap " id="recipes">
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
//                   <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
//               </ul>
//               <h3 class="fw-bolder">Tags : </h3>
//               <ul class="d-flex " id="tags">
//                   <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
//               </ul>
//               <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
//               <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

//           </div>
//       </div>
//     `;
//     }

//     document.querySelector("#SearchChang").innerHTML = int;
//   }
//   Instruc(result);
// });

//  })
//end seach
  //home
let row = document.getElementById("rowData")
search("")
async function search (M) {
    let meals=await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`)
meals=await meals.json()
displayMeals(meals.meals)
return meals
}
function displayArea() {
    let e = ""
    for (let i = 0; i < Array.length; i++) e += `
    <div class="col-md-6 col-lg-3 my-3 myM  shadow">
        <div class="movie shadow rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`
    row.innerHTML = e
    $("html, body").animate({
        scrollTop: 0
    }, 200)

    

   
}
function displayMeals(array) {
    let meals = ""
    for (let i = 0; i < array.length; i++) {
        meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
            
<div onclick="getMeal('${array[i].idMeal}')" class="movie shadow rounded position-relative"></div>
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded" />
                    <div class="layer d-flex align-items-center ">
                        <div class="caotion p-2">
                            <h2>${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    row.innerHTML = meals
   
}
$("#rowData").click(function (e) {
    let allImg = $(e.target).text();
    let result = allImg.trim();
    $("#rowData").addClass("d-none");
    $("#Instructions").removeClass("d-none");
    console.log(this);
  
    async function Instruc(meal) {
      let apiIns = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      let final = await apiIns.json();
      let allItem = final.meals;
  
      let int = ``;
  
      for (let i = 0; i < allItem.length; i++) {
        int = `
     <div class="row intro  mt-5 text-white">
              <div class="col-md-4 text-center">
  
                  <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                  <h2>${allItem[i].strMeal}</h2>
              </div>
              <div class="col-md-8">
                  <h2>Instructions</h2>
                  <p>${allItem[i].strInstructions}</p>
                  <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                  <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                  <h3 class="fw-bolder">Recipes : </h3>
                  <ul class="d-flex flex-wrap " id="recipes">
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                      <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                  </ul>
                  <h3 class="fw-bolder">Tags : </h3>
                  <ul class="d-flex " id="tags">
                      <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                  </ul>
                  <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                  <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>
  
              </div>
          </div>
  
    `;
      }
  
      Instructions.innerHTML = int;
    }
    Instruc(result);
  });

  
//end home
 //Categoriesr
 let contaCategry = [];
$("#Categoriesr").click(function(){
    $(".Home").css('display','none')
    $(".Categories").css('display','block')
    $("#tol").css('display','none')
    $("#fgh").css("display", 'none')
    $("#mrkfeo").css("display", 'none')
    $("#mcmc").css("display", 'none')
    $("#secSearch").css("display", 'none')

    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);

    // let row = document.getElementById("dere")
    // search("")
    // async function search (M) {
    //     let meals=await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`)
    // meals=await meals.json()
    // displayMeals(meals.meals)
    // return meals
    // }
    // function displayArea() {
    //     let e = ""
    //     for (let i = 0; i < Array.length; i++) e += `
    //     <div class="col-md-6 col-lg-3 my-3 myM  shadow">
    //         <div class="movie shadow rounded position-relative">
    //             <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
    //                 <i class="fa-solid fa-city fa-3x"></i>
    //                 <h2 class="text-white">${array[i].strArea}</h2>
    //             </div>
    //         </div>
    //     </div>`
    //     row.innerHTML = e
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 200)
    
        
    
       
    // }
    // function displayMeals(array) {
    //     let meals = ""
    //     for (let i = 0; i < array.length; i++) {
    //         meals +=
    //         `  <div class="col-lg-3">
    //         <div onclick="getMeal('${array[i].idMeal}')" class="movie shadow rounded position-relative"></div>
    //         <div class="text mt-5 w-100 m-auto text-center ">
    //             <div class="w-100  ">
    //                 <img class="w-50  mt-2 mb-2  rounded-2" src="${array[i].strMealThumb}" alt="">
    //             </div>
                
    //             <div class="caotion rounded-2 ">
    //                 <h1 class="ms-2">${array[i].strMeal}</h1>
    //             </div>
    //         </div> 
    //     </div>`
    //     }
    //     row.innerHTML = meals
       
    // }



    async function searchCategories() {
        let apiRsopns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/categories.php?fbclid`
        );
        let result = await apiRsopns.json();
        let allMeals = result.categories;
        console.log(allMeals[0]);
        let cartoona = ``;
        for (let i = 0; i < 14; i++) {
          cartoona += `<div class="col-lg-3  col-md-6 ">
                     <div class="item text-center   rounded-2 Catshado   mt-5">
                         <img class="w-75 py-3  rounded-2" src="${
                           allMeals[i].strCategoryThumb
                         }" alt="">
                         <div class="caotion rounded-2 ">
                             <h1 class=" m-0 mt-4 text-black">${
                               allMeals[i].strCategory
                             } </h1>
                             <p class="text-black m-0 fa-1x ">${allMeals[
                               i
                             ].strCategoryDescription
                               .split(" ")
                               .splice(0, 9)
                               .join(" ")}</p>
                             </div>
                     </div>
                
                    </div> `;
        }
        dere.innerHTML = cartoona;
      }
      searchCategories();
    
    $("#dere").click(function (e) {
      let allImg = $(e.target).text();
      let results = allImg.trim();
      $("#dere").addClass("d-none");
      $("#powqen").removeClass("d-none");
    console.log(results);
    let allItem;
      async function Instruc(meal) {
        let apiIns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
        );
        let final = await apiIns.json();
        let allItem = final.meals;
        console.log(allItem);
        let int = ` `;
        for (let i = 0; i < allItem.length; i++) {
          int += `
            <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                    <div class="post item">
                        <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                        <div class="layer d-flex align-items-center ">
                            <div class="caotion rounded-2">
                                <h2 class="ms-2">${allItem[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>
            </div>`;
        }
        document.querySelector("#powqen").innerHTML = int;
      }
      if (allItem != null) {
        Instruc(results);
      } else {
            Instruc('Beef');
    
      }
      
    });
    
    $("#powqen").click(function (e) {
      let allImg = $(e.target).text();
      let result = allImg.trim();
      $("#powqen").addClass("d-none");
      $("#wueujuxaa").removeClass("d-none");
      console.log("this");
    
      async function Instruc(meal) {
        let apiIns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        );
        let final = await apiIns.json();
        let allItem = final.meals;
    
        let tyo = ` `;
    
        for (let i = 0; i < allItem.length; i++) {
            tyo = `
        <div class="row intro  mt-5 text-white">
                 <div class="col-md-4 text-center">
    
                     <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                     <h2>${allItem[i].strMeal}</h2>
                 </div>
                 <div class="col-md-8">
                     <h2>Instructions</h2>
                     <p>${allItem[i].strInstructions}</p>
                     <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                     <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                     <h3 class="fw-bolder">Recipes : </h3>
                     <ul class="d-flex flex-wrap " id="recipes">
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                     </ul>
                     <h3 class="fw-bolder">Tags : </h3>
                     <ul class="d-flex " id="tags">
                         <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                     </ul>
                     <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                     <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>
    
                 </div>
             </div>
           `;
        }
    
        document.querySelector("#wueujuxaa").innerHTML = tyo;
      }
      Instruc(result);
    });
})
//end Categoriesr


//Area
$("#locc").click(function(){
    $(".Home").css('display','none')
    $(".Categories").css('display','none')
    $("#tol").css('display','none')
    $("#mcmc").css('display','none')
    $("#mrkfeo").css('display','none')
    $("#fgh").css('display', 'block')
    $("#secSearch").css("display", 'none')

    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
    


    async function Area() {
        let apiRsopns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
        );
        let result = await apiRsopns.json();
        let maopa = result.meals;
        console.log(maopa);
        let cart = ``;
        for (let i = 0; i < maopa.length; i++) {
          cart += `
    
     <div class="col-lg-3 col-md-6">
                 <div class="item text-center rounded-2 bg-o  mt-5">
                     <i class="fa-solid text-danger fa-city fa-3x mt-3"></i>
                     <h2 class="text-white">${maopa[i].strArea}</h2>
                 </div>
            
                 </div>
    
    
        `;
        }
        document.getElementById("swxw").innerHTML = cart;
      }
    
      Area();

let allItem;  
    $("#swxw").click(function (e) {
      let allImg = $(e.target).text();
      let results = allImg.trim();
      $("#swxw").addClass("d-none");
      $("#qwerrtuo").removeClass("d-none");
    
    
      async function Instruc(meal) {
        let apiIns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`
        );
        let final = await apiIns.json();
        let allItem = final.meals;
      
        let oppo = ` `;
        for (let i = 0; i < allItem.length; i++) {
            oppo += `
            <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                    <div class="post item">
                        <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                        <div class="layer d-flex align-items-center ">
                            <div class="caotion rounded-2">
                                <h2 class="ms-2">${allItem[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>
            </div>`;
        }
        document.querySelector("#qwerrtuo").innerHTML = oppo;
      }
    
    
      if (allItem != null) {
        Instruc(results);
      } else {
        Instruc("American");
      }
    
     
    });
    
    $("#qwerrtuo").click(function (e) {
      let allImg = $(this).text();
      let result = allImg.trim();
      $("#qwerrtuo").addClass("d-none");
      $("#yreaxdtwo").removeClass("d-none");
      console.log("this");
    
      async function Instruc(meal) {
        let apiIns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        );
        let final = await apiIns.json();
        let allItem = final.meals;
    
        let setr = ` `;
    
        for (let i = 0; i < allItem.length; i++) {
            setr = `
        <div class="row intro  mt-5 text-white">
                 <div class="col-md-4 text-center">
    
                     <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                     <h2>${allItem[i].strMeal}</h2>
                 </div>
                 <div class="col-md-8">
                     <h2>Instructions</h2>
                     <p>${allItem[i].strInstructions}</p>
                     <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                     <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                     <h3 class="fw-bolder">Recipes : </h3>
                     <ul class="d-flex flex-wrap " id="recipes">
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                     </ul>
                     <h3 class="fw-bolder">Tags : </h3>
                     <ul class="d-flex " id="tags">
                         <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                     </ul>
                     <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                     <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>
    
                 </div>
             </div>
           `;
        }
    
        document.querySelector("#yreaxdtwo").innerHTML = setr;
      }
      Instruc(result);
    });
})

//end Area

// start Ingredients

let cotact = [];
$("#Ingredients").click(function(){
    $(".Home").css('display','none')
    $(".Categories").css('display','none')
    $("#tol").css('display','none')
    $("#mcmc").css('display','none')
    $("#mrkfeo").css('display','block')
    $("#fgh").css('display', 'none')
    $("#secSearch").css("display", 'none')
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);

    async function Ingredients() {
        let apiRsopns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        );
        let result = await apiRsopns.json();
        let allMeals = result.meals;
        console.log(allMeals);
        let cartoona = ``;
        for (let i = 0; i < 20; i++) {
          cartoona += `
    
    <div class="col-lg-3 col-md-6">
                <div class="item text-center rounded-2 bg-o  mt-5">
                    <i class="fa-solid icons fa-bowl-food fa-3x"></i>
                    <h2 class="text-white">${allMeals[i].strIngredient}</h2>
                    <p class="text-white"> ${allMeals[i].strDescription
                      .split(" ")
                      .splice(0, 20)
                      .join(" ")}</p>
                </div>
            
            </div>
    
    
        `;
        }
        document.getElementById("asdfgvhn").innerHTML = cartoona;
      }
    
      Ingredients();
    
    $("#asdfgvhn").click(function (e) {
      let allImg = $(e.target).text();
      let results = allImg.trim();
      $("#asdfgvhn").addClass("d-none");
      $("#Ingreoneq").removeClass("d-none");
      async function Instruc(meal) {
        let apiIns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
        );
        let final = await apiIns.json();
        let allItem = final.meals;
        console.log(allItem);
    
        let yop = ` `;
        for (let i = 0; i < allItem.length; i++) {
            yop += `
            <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                    <div class="post item">
                        <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                        <div class="layer d-flex align-items-center ">
                            <div class="caotion rounded-2">
                                <h2 class="ms-2">${allItem[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>
            </div>`;
        }
        document.querySelector("#Ingreoneq").innerHTML = yop;
      }
        Instruc('Beef');
    
     
    });
    
    $("#Ingreoneq").click(function (e) {
      let allImg = $(e.target).text();
      let result = allImg.trim();
      $("#Ingreoneq").addClass("d-none");
      $("#IngredIngredIngred").removeClass("d-none");
      console.log("this");
    
      async function Instruc(meal) {
        let apiIns = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        );
        let final = await apiIns.json();
        let allItem = final.meals;
    
        let intuo = ` `;
    
        for (let i = 0; i < allItem.length; i++) {
            intuo = `
        <div class="row intro  mt-5 text-white">
                 <div class="col-md-4 text-center">
    
                     <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                     <h2>${allItem[i].strMeal}</h2>
                 </div>
                 <div class="col-md-8">
                     <h2>Instructions</h2>
                     <p>${allItem[i].strInstructions}</p>
                     <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                     <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                     <h3 class="fw-bolder">Recipes : </h3>
                     <ul class="d-flex flex-wrap " id="recipes">
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                         <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                     </ul>
                     <h3 class="fw-bolder">Tags : </h3>
                     <ul class="d-flex " id="tags">
                         <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                     </ul>
                     <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                     <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>
    
                 </div>
             </div>
           `;
        }
    
        document.querySelector("#IngredIngredIngred").innerHTML = intuo;
      }
      Instruc(result);
    });
    
})


// end Ingredients
$("#Contact").click(function(){
    $(".Home").css('display','none')
    $(".Categories").css('display','none')
    $("#tol").css('display','none')
    $("#fgh").css("display", 'none')
    $("#mrkfeo").css("display", 'none')
    $("#mcmc").css("display", 'block')
    $("#secSearch").css("display", 'none')
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
})


function validataName(){
    let regex=/^[A-Z][a-z]*/
    if (regex.test(username.value) == true){
        return true;
    }
    else{
        return false;
    }
}
username.addEventListener('input',function (){
    
    if (validataName() === true){
        console.log("true")
        $(".container .icon .ssgag").css("display", 'block')
        $(".container .iconTwo .adasf").css("display", 'none')
        // $("#namealert").addClass("display", 'd-none')
        $("#username").css("border-bottom" , "1px solid #28a745")
    }
    else if (validataName() === false   ){
            console.log("false")
            $(".container .icon .ssgag").css("display", 'none')
            $(".container .iconTwo .adasf").css("display", 'block')
            // $("#namealert").removeClass("display", 'd-none')
            $("#username").css("border-bottom" , "1px solid #dc3545")

    }
    else{
        console.log("llsef")
        $(".container .icon .ssgag").css("display", 'none')
        $(".container .iconTwo .adasf").css("display", 'none')
        $("#namealert").css("display", 'none')
    }
})


function validataEmail(){
    let regex=/^[a-z,0-9]{1,9}(@yahoo|@gmail)\.com$/
               
    if (regex.test(useremail.value) == true){
        return true;
    }
    else{
        return false;
    }
}
useremail.addEventListener('input',function (){
    
    if (validataEmail() === true){
        console.log("true")
        $(".container .icon .lopd").css("display", 'block')
        $(".container .iconTwo .waw").css("display", 'none')
        // $("#emailalert").css("display", 'd-none')
        $("#useremail").css("border-bottom" , "1px solid #28a745")
       
    }
    else if (validataEmail() === false   ){
            console.log("false")
            $(".container .icon .lopd").css("display", 'none')
            $(".container .iconTwo .waw").css("display", 'block')
            // $("#emailalert").css("display", 'block')
            $("#useremail").css("border-bottom" , "1px solid #dc3545")
    }
    else{
        console.log("llsef")
        $(".container .iconTwo .waw").css("display", 'none')
        $(".container .icon .lopd").css("display", 'none')
    }
})



function validataphone(){
    let regex=/^01[0-2,5][0-9]{8}$/
               
    if (regex.test(userphone.value) == true){
        return true;
    }
    else{
        return false;
    }
}
userphone.addEventListener('input',function (){
    
    if (validataphone() === true){
        console.log("true")
        $(".container .icon .awf").css("display", 'block')
        $(".container .iconTwo .sva").css("display", 'none')
        // $("#emailalert").css("display", 'd-none')
        $("#userphone").css("border-bottom" , "1px solid #28a745")
       
    }
    else if (validataphone() === false   ){
            console.log("false")
            $(".container .icon .awf").css("display", 'none')
            $(".container .iconTwo .sva").css("display", 'block')
            // $("#emailalert").css("display", 'block')
            $("#userphone").css("border-bottom" , "1px solid #dc3545")
    }
    else{
        console.log("llsef")
        $(".container .icon .awf").css("display", 'none')
        $(".container .iconTwo .sva").css("display", 'none')
    }
})


function validataage(){
    let regex=/^[1-9][0-9]{0,1}[0]{0,1}$/
               
    if (regex.test(userage.value) == true){
        return true;
    }
    else{
        return false;
    }
}
userage.addEventListener('input',function (){
    
    if (validataage() === true){
        console.log("true")
        $(".container .icon .poiq").css("display", 'block')
        $(".container .iconTwo .zcx").css("display", 'none')
        // $("#emailalert").css("display", 'd-none')
        $("#userage").css("border-bottom" , "1px solid #28a745")
       
    }
    else if (validataage() === false   ){
            console.log("false")
            $(".container .icon .poiq").css("display", 'none')
            $(".container .iconTwo .zcx").css("display", 'block')
            // $("#emailalert").css("display", 'block')
            $("#userage").css("border-bottom" , "1px solid #dc3545")
    }
    else{
        console.log("llsef")
        $(".container .icon .poiq").css("display", 'none')
        $(".container .iconTwo .zcx").css("display", 'none')
    }
})


function validatapassword(){
    let regex=/^[0-9,a-z]{8,40}$/
               
    if (regex.test(userpassword.value) == true){
        return true;
    }
    else{
        return false;
    }
}
userpassword.addEventListener('input',function (){
    
    if (validatapassword() === true){
        console.log("true")
        $(".container .icon .sgsg ").css("display", 'block')
        $(".container .iconTwo .zzzz").css("display", 'none')
        // $("#emailalert").css("display", 'd-none')
        $("#userpassword").css("border-bottom" , "1px solid #28a745")
       
    }
    else if (validatapassword() === false   ){
            console.log("false")
            $(".container .icon .sgsg ").css("display", 'none')
            $(".container .iconTwo .zzzz").css("display", 'block')
            // $("#emailalert").css("display", 'block')
            $("#userpassword").css("border-bottom" , "1px solid #dc3545")
    }
    else{
        console.log("llsef")
        $(".container .icon .sgsg ").css("display", 'none')
        $(".container .iconTwo .zzzz").css("display", 'none')
    }
})


function validatarepassword(){
  
               
    if (rePassword.value == userpassword.value ){
        return true;
    }
    else{
        return false;
    }
}
rePassword.addEventListener('input',function (){
    
    if (validatarepassword() === true){
        console.log("true")
        $(".container .icon .qqqq ").css("display", 'block')
        $(".container .iconTwo .aaaa").css("display", 'none')
        // $("#emailalert").css("display", 'd-none')
        $("#rePassword").css("border-bottom" , "1px solid #28a745")
       
    }
    else if (validatarepassword() === false   ){
            console.log("false")
            $(".container .icon .qqqq ").css("display", 'none')
            $(".container .iconTwo .aaaa").css("display", 'block')
            // $("#emailalert").css("display", 'block')
            $("#rePassword").css("border-bottom" , "1px solid #dc3545")
    }
    else{
        console.log("llsef")
        $(".container .icon .qqqq ").css("display", 'none')
        $(".container .iconTwo .aaaa").css("display", 'none')
    }
})