var foods=[
    {
        name:"Margherita Pizza",
        description:"Classic Italian pizza with fresh mozzarella and basil",
        preparationTime:true,
        difficulty:"Intermediate",
        type:"Italian",
        rate:"4.9",
        reviews:"512",
        prepTime:"90 min",
        cookTime:"12 min",
        services:"2 people",
        image:"./images/photo-1574071318508-1cdbab80d002.jpeg",
        ingredients:["300g pizza dough","200g crushed tomatoes","250g fresh mozzarella","Fresh basil leaves","2 tablespoons olive oil","2 cloves garlic, minced","Salt and pepper to taste","Parmesan cheese for topping"],
        instructions:["Let pizza dough come to room temperature and rest for 1 hour.","Preheat oven to maximum temperature (usually 250°C/480°F).","Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.","Roll out dough on a floured surface to desired thickness.","Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.","Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."],
        nutrition:{
            Calories:"580 kcal",
            Protein:"24g",
            Carbohydrates:"68g",
            Fat:"22g",
            Fiber:"4g",
            Sodium:"920mg"
        },
        chefTips: ["Use a pizza stone for crispier crust","Don't overload with toppings - less is more","Add basil after baking to keep it fresh","Let dough rest properly for best texture"],
    },
    {
        name:"Lasagna Bolognese",
        description:"Layered Italian pasta with rich meat sauce and béchame",
        preparationTime:true,
        difficulty:"Intermediate",
        type:"Italian",
        rate:"4.9",
        reviews:"478",
        prepTime:"30 min",
        cookTime:"90 min",
        services:"4 people",
        image:"./images/photo-1574894709920-11b28e7367e3.jpeg",
        ingredients:["12 lasagna sheets","500g ground beef","400g canned tomatoes","1 onion, diced","2 carrots, diced","500ml béchamel sauce","200g mozzarella, grated","100g parmesan cheese","Fresh basil"],
        instructions:["Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.","Cook lasagna sheets according to package directions. Drain and set aside.","Preheat oven to 180°C (350°F).","In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.","Top final layer with béchamel, mozzarella, and parmesan cheese.","Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."],
        nutrition:{ 
            Calories:"680 kcal",
            Protein:"42g",
            Carbohydrates:"58g",
            Fat:"28g",
            Fiber:"6g",
            Sodium:"920mg"
        },
        chefTips: ["Make bolognese sauce a day ahead for better flavor","Don't skip the resting time after baking","Use fresh pasta sheets for best texture","Freeze leftovers in individual portions"],
    },
    {
        name:"BBQ Pulled Pork",
        description:"Slow-cooked tender pork in smoky barbecue sauce",
        preparationTime:true,
        difficulty:"Easy",
        type:"American",
        rate:"4.7",
        reviews:"412",
        prepTime:"15 min",
        cookTime:"240 min",
        services:"4 people",
        image:"./images/photo-1529692236671-f1f6cf9683ba.jpeg",
        ingredients:["1kg pork shoulder","1 cup BBQ sauce","1/2 cup apple cider vinegar","2 tablespoons brown sugar","1 tablespoon paprika","1 tablespoon garlic powder","Burger buns","Coleslaw for serving"],
        instructions:["Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.","Place pork in slow cooker with apple cider vinegar and 1/2 cup water.","Cook on low for 8 hours or high for 4 hours until meat is very tender.","Remove pork and shred with two forks. Discard excess fat.","Return shredded pork to slow cooker, mix with BBQ sauce.","Serve on toasted buns with coleslaw on top."],
        nutrition:{ 
            Calories:"620 kcal",
            Protein:"48g",
            Carbohydrates:"52g",
            Fat:"22g",
            Fiber:"3g",
            Sodium:"1180mg"
        },
        chefTips: ["Use pork shoulder for best results - it stays moist","Let pork rest before shredding for juicier meat","Make your own BBQ sauce for better flavor","Leftovers freeze well for up to 3 months"],
    },
    {
        name:"Beef Tacos",
        description:"Flavorful Mexican tacos with seasoned ground beef",
        preparationTime:false,
        difficulty:"Easy",
        type:"American",
        rate:"4.6",
        reviews:"278",
        prepTime:"15 min",
        cookTime:"20 min",
        services:"4 people",
        image:"./images/photo-1565299585323-38d6b0865b47.jpeg",
        ingredients:["500g ground beef","8 taco shells","1 onion, diced","2 tablespoons taco seasoning","Shredded lettuce","Diced tomatoes","Shredded cheddar cheese","Sour cream","Salsa"],
        instructions:["Heat a large skillet over medium-high heat. Cook ground beef until browned.","Add diced onion and cook until softened, about 5 minutes.","Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.","Warm taco shells according to package directions.","Fill each shell with seasoned beef."],
        nutrition:{
            Calories:"620 kcal",
            Protein:"26g",
            Carbohydrates:"32g",
            Fat:"20g",
            Fiber:"4g",
            Sodium:"780mg"
        },
        chefTips: ["Drain excess fat from beef for healthier tacos","Warm shells in oven for better texture","Prepare all toppings before cooking beef","Use ground turkey for a lighter option"],
    },
    {
        name:"Greek Moussaka",
        description:"Traditional layered eggplant casserole with lamb",
        preparationTime:true,
        difficulty:"Intermediate",
        type:"Mediterranean",
        rate:"4.8",
        reviews:"234",
        prepTime:"30 min",
        cookTime:"60 min",
        services:"4 people",
        image:"./images/photo-1601050690597-df0568f70950.jpeg",
        ingredients:["3 large eggplants, sliced","500g ground lamb","400g canned tomatoes","1 onion, diced","3 cloves garlic, minced","500ml béchamel sauce","100g parmesan cheese","Cinnamon and oregano","Olive oil"],
        instructions:["Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.","Brush eggplant slices with olive oil, grill or bake until softened.","Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.","Preheat oven to 180°C (350°F).","Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.","Bake for 45 minutes until golden. Let rest 15 minutes before serving."],
        nutrition:{
            Calories:"580 kcal",
            Protein:"36g",
            Carbohydrates:"32g",
            Fat:"32g",
            Fiber:"8g",
            Sodium:"820mg"
        },
        chefTips: ["Salt eggplant to remove bitterness","Don't skip the resting time - it helps set the layers","Use ground beef if lamb is unavailable","Make ahead and reheat for easier serving"],
    },
    {
        name:"Shrimp Scampi",
        description:"Garlicky shrimp in white wine butter sauce",
        preparationTime:false,
        difficulty:"Easy",
        type:"Seafood",
        rate:"4.8",
        reviews:"356",
        prepTime:"10 min",
        cookTime:"15 min",
        services:"2 people",
        image:"./images/photo-1633504581786-316c8002b1b9.jpeg",
        ingredients:["400g large shrimp, peeled","300g linguine pasta","6 cloves garlic, minced","1/2 cup white wine","4 tablespoons butter","2 tablespoons olive oil","Fresh parsley, chopped","Lemon juice and zest","Red pepper flakes"],
        instructions:["Cook linguine according to package directions. Reserve 1 cup pasta water.","Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.","Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.","Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.","Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.","Garnish with parsley, lemon zest, and serve immediately."],
        nutrition:{
            Calories:"520 kcal",
            Protein:"36g",
            Carbohydrates:"54g",
            Fat:"18g",
            Fiber:"3g",
            Sodium:"620mg"
        },
        chefTips: ["Don't overcook shrimp - they cook very quickly","Use good quality white wine for best flavor","Toss pasta in sauce for maximum flavor absorption","Add extra lemon for bright, fresh taste"],
    },
    {
        name:"Creamy Spaghetti Carbonara",
        description:"A classic Italian pasta dish with eggs, cheese, and pancetta",
        preparationTime:false,
        difficulty:"Easy",
        type:"Italian",
        rate:"4.8",
        reviews:"234",
        prepTime:"15 min",
        cookTime:"20 min",
        services:"4 people",
        image:"./images/photo-1612874742237-6526221588e3.jpeg",
        ingredients:["400g spaghetti pasta","200g pancetta or guanciale, diced","4 large eggs","100g Pecorino Romano cheese, grated","50g Parmesan cheese, grated","Freshly ground black pepper","Salt for pasta water"],
        instructions:["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.","While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.","In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.","Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.","Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.","Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"],
        nutrition:{
            Calories:"520 kcal",
            Protein:"28g",
            Carbohydrates:"62g",
            Fat:"18g",
            Fiber:"3g",
            Sodium:"680mg"
        },
        chefTips: ["Use room temperature eggs for a smoother sauce consistency","Work quickly when mixing eggs with hot pasta to avoid scrambling","Reserve extra pasta water - it's the secret to perfect creaminess","Freshly grated cheese makes all the difference in flavor","Never add cream - authentic carbonara is made with eggs only"],
    },
    {
        name:"Classic Beef Burger",
        description:"Juicy homemade burger with all the fixings",
        preparationTime:false,
        difficulty:"Easy",
        type:"American",
        rate:"4.6",
        reviews:"412",
        prepTime:"15 min",
        cookTime:"20 min",
        services:"4 people",
        image:"./images/photo-1568901346375-23c9450c58cd.jpeg",
        ingredients:["500g ground beef (80/20)","4 burger buns","4 slices cheddar cheese","Lettuce leaves","Tomato slices","Red onion, sliced","Pickles","Burger sauce or condiments"],
        instructions:["Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.","Season patties generously with salt and pepper on both sides.","Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.","Add cheese slices in the last minute of cooking and cover to melt.","Toast burger buns lightly on the grill or in a pan.","Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."],
        nutrition:{
            Calories:"650 kcal",
            Protein:"36g",
            Carbohydrates:"42g",
            Fat:"35g",
            Fiber:"2g",
            Sodium:"920mg"
        },
        chefTips: ["Don't press down on burgers while cooking - keeps them juicy","Make indent in center to prevent burger from puffing up","Let patties rest for 2-3 minutes before serving","Toast buns for better texture and flavor"],
    },
    {
        name:"Vegetable Curry",
        description:"Hearty vegetarian curry with coconut milk",
        preparationTime:true,
        difficulty:"Easy",
        type:"Asian",
        rate:"4.6",
        reviews:"289",
        prepTime:"20 min",
        cookTime:"30 min",
        services:"4 people",
        image:"./images/photo-1585032226651-759b368d7246.jpeg",
        ingredients:["2 potatoes, cubed","1 cauliflower, florets","2 carrots, sliced","1 can chickpeas","400ml coconut milk","3 tablespoons curry powder","1 onion, diced","3 cloves garlic, minced","Fresh spinach"],
        instructions:["Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.","Add potatoes and carrots, cook for 5 minutes.","Pour in coconut milk and 1 cup water. Bring to simmer.","Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.","Stir in fresh spinach and cook until wilted.","Serve hot over basmati rice or with naan bread."],
        nutrition:{
            Calories:"380 kcal",
            Protein:"14g",
            Carbohydrates:"48g",
            Fat:"16g",
            Fiber:"12g",
            Sodium:"480mg"
        },
        chefTips: ["Add vegetables in order of cooking time needed","Adjust curry powder amount to taste","Use full-fat coconut milk for creamier curry","Add protein like tofu or paneer if desired"],
    },
    {
        name:"Caesar Salad",
        description:"Classic salad with crispy romaine and creamy dressing",
        preparationTime:false,
        difficulty:"Easy",
        type:"Mediterranean",
        rate:"4.4",
        reviews:"198",
        prepTime:"10 min",
        cookTime:"0 min",
        services:"2 people",
        image:"./images/photo-1546793665-c74683f339c1.jpeg",
        ingredients:["1 large romaine lettuce","1/2 cup Caesar dressing","1/2 cup parmesan cheese, shaved","1 cup croutons","2 anchovy fillets (optional)","Lemon wedges","Black pepper"],
        instructions:["Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.","Place lettuce in a large salad bowl.","Add Caesar dressing and toss until evenly coated.","Add croutons and half the parmesan cheese. Toss gently.","Top with remaining parmesan shavings and anchovies if using.","Serve immediately with lemon wedges and fresh black pepper."],
        nutrition:{
            Calories:"320 kcal",
            Protein:"12g",
            Carbohydrates:"18g",
            Fat:"22g",
            Fiber:"3g",
            Sodium:"680mg"
        },
        chefTips: ["Use cold, crisp lettuce for best texture","Make homemade croutons for better flavor","Add grilled chicken for a complete meal","Don't dress salad until ready to serve"],
    },
    {
        name:"Thai Green Curry",
        description:"Vibrant and aromatic curry with vegetables and coconut milk",
        preparationTime:false,
        difficulty:"Intermediate",
        type:"Asian",
        rate:"4.7",
        reviews:"312",
        prepTime:"15 min",
        cookTime:"25 min",
        services:"4 people",
        image:"./images/photo-1455619452474-d2be8b1e70cd.jpeg",
        ingredients:["2 tablespoons green curry paste","400ml coconut milk","300g chicken breast, sliced","1 red bell pepper, sliced","100g green beans","1 eggplant, cubed","2 tablespoons fish sauce","1 tablespoon palm sugar","Fresh Thai basil leaves"],
        instructions:["Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.","Add half the coconut milk and stir to combine with the curry paste.","Add sliced chicken and cook until no longer pink, about 5 minutes.","Add remaining coconut milk, vegetables, fish sauce, and palm sugar.","Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.","Stir in fresh Thai basil leaves. Serve hot with jasmine rice."],
        nutrition:{
            Calories:"420 kcal",
            Protein:"26g",
            Carbohydrates:"22g",
            Fat:"26g",
            Fiber:"5g",
            Sodium:"890mg"
        },
        chefTips: ["Adjust spice level by using more or less curry paste","Add vegetables in stages based on cooking time needed","Fresh Thai basil is essential for authentic flavor","Use full-fat coconut milk for richest, creamiest sauce"],
    },
    {
        name:"Chicken Tikka Masala",
        description:"Rich and creamy Indian curry with tender chicken pieces",
        preparationTime:true,
        difficulty:"Intermediate",
        type:"Asian",
        rate:"4.7",
        reviews:"389",
        prepTime:"20 min",
        cookTime:"30 min",
        services:"4 people",
        image:"./images/photo-1565557623262-b51c2513a641 (1).jpeg",
        ingredients:["600g chicken breast, cubed","1 cup plain yogurt","2 tablespoons tikka masala paste","400ml coconut cream","1 onion, diced","4 cloves garlic, minced","2 tablespoons ginger, grated","400g canned tomatoes","Fresh cilantro for garnish"],
        instructions:["Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.","Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.","In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.","Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.","Stir in coconut cream and remaining yogurt. Add chicken back to the pan.","Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."],
        nutrition:{
            Calories:"450 kcal",
            Protein:"38g",
            Carbohydrates:"24g",
            Fat:"22g",
            Fiber:"4g",
            Sodium:"760mg"
        },
        chefTips: ["Marinate chicken overnight for deeper flavor","Use full-fat coconut cream for richest sauce","Adjust spice level by varying the tikka paste amount","Serve with naan bread and basmati rice"],
    },
    {
        name:"Teriyaki Chicken Bowl",
        description:"Sweet and savory chicken over rice with vegetables",
        preparationTime:false,
        difficulty:"Easy",
        type:"Asian",
        rate:"4.7",
        reviews:"367",
        prepTime:"15 min",
        cookTime:"20 min",
        services:"2 people",
        image:"./images/photo-1546069901-eacef0df6022.jpeg",
        ingredients:["400g chicken thighs, sliced","1/2 cup teriyaki sauce","2 cups cooked rice","1 broccoli head, florets","1 carrot, julienned","Sesame seeds","Green onions, sliced","1 tablespoon sesame oil"],
        instructions:["Heat sesame oil in a pan. Cook chicken until browned on all sides.","Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.","Meanwhile, steam broccoli and carrots until tender-crisp.","Divide rice between bowls.","Top with teriyaki chicken and steamed vegetables.","Garnish with sesame seeds and green onions. Serve hot."],
        nutrition:{
            Calories:"540 kcal",
            Protein:"42g",
            Carbohydrates:"58g",
            Fat:"14g",
            Fiber:"4g",
            Sodium:"1240mg"
        },
        chefTips: ["Use chicken thighs for juicier meat","Make homemade teriyaki sauce for better flavor control","Add edamame for extra protein","Meal prep by cooking rice and chicken ahead"],
    },
    {
        name:"Pad Thai",
        description:"Popular Thai stir-fried noodles with shrimp and peanuts",
        preparationTime:false,
        difficulty:"Intermediate",
        type:"Asian",
        rate:"4.8",
        reviews:"445",
        prepTime:"20 min",
        cookTime:"15 min",
        services:"2 people",
        image:"./images/photo-1559314809-0d155014e29e.jpeg",
        ingredients:["200g rice noodles","200g shrimp, peeled","2 eggs","3 tablespoons tamarind paste","2 tablespoons fish sauce","1 tablespoon palm sugar","Bean sprouts","Crushed peanuts","Lime wedges and cilantro"],
        instructions:["Soak rice noodles in warm water for 30 minutes. Drain and set aside.","Mix tamarind paste, fish sauce, and palm sugar to make the sauce.","Heat wok over high heat. Scramble eggs and set aside.","Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.","Add scrambled eggs and bean sprouts. Toss everything together.","Serve topped with crushed peanuts, lime wedges, and cilantro."],
        nutrition:{
            Calories:"540 kcal",
            Protein:"32g",
            Carbohydrates:"62g",
            Fat:"16g",
            Fiber:"4g",
            Sodium:"1120mg"
        },
        chefTips: ["Don't oversoak noodles or they'll be mushy","Cook on high heat for authentic wok flavor","Balance sweet, sour, and salty flavors","Prepare all ingredients before starting to cook"],
    },
    {
        name:"Mediterranean Quinoa Bowl",
        description:"Healthy bowl with quinoa, vegetables, and tahini dressing",
        preparationTime:true,
        difficulty:"Easy",
        type:"Mediterranean",
        rate:"4.5",
        reviews:"156",
        prepTime:"20 min",
        cookTime:"35 min",
        services:"2 people",
        image:"./images/photo-1546069901-ba9599a7e63c.jpeg",
        ingredients:["1 cup quinoa","Cherry tomatoes, halved","Cucumber, diced","Red onion, sliced","Kalamata olives","Feta cheese, crumbled","Fresh parsley","Tahini dressing"],
        instructions:["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.","While quinoa cooks, prepare all vegetables and set aside.","For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.","Fluff cooked quinoa with a fork and let cool slightly.","Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.","Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."],
        nutrition:{
            Calories:"480 kcal",
            Protein:"15g",
            Carbohydrates:"58g",
            Fat:"20g",
            Fiber:"10g",
            Sodium:"540mg"
        },
        chefTips: ["Rinse quinoa well to remove bitter coating","Let quinoa cool before adding fresh ingredients","Make extra tahini dressing - it keeps well in the fridge","Add grilled chicken or chickpeas for extra protein"],
    },
]
function receive(){
    var index=Math.floor(Math.random()*foods.length)
    var meal=foods[index]
    display(meal)
}
receive()
function display(meal){
var scroll=""
var ingredientsList=""
for(var i=0;i<meal.ingredients.length;i++){
    ingredientsList+=`      <div class="list">
        <span class="num rounded-circle text-white d-inline-flex justify-content-center align-items-center">${i+1}</span>
        <span class="text">${meal.ingredients[i]}</span>
      </div>`
      if(meal.ingredients.length>=8){
        scroll="scrollable"
      }
}
var instructionsList=""
for(var i=0;i<meal.instructions.length;i++){
    instructionsList+=`<div class="mb-4">
        <span class="badge rounded-4 me-3 text-white d-inline-flex justify-content-center align-items-center">${i+1}</span>
        <span class="text">${meal.instructions[i]}</span>
      </div>`
}
var chefTipsList=""
for(var i=0;i<meal.chefTips.length;i++){
    chefTipsList+=`        <div class="d-flex tip rounded-3 p-3 mb-3">
            <i class="fa-solid fa-check rounded-circle text-white d-inline-flex justify-content-center align-items-center"></i>
          <div>
            <p class="mb-0 text">${meal.chefTips[i]}</p>
          </div>
        </div>`
}
var box=""
if(meal.preparationTime){
box+=`<div class="col-12 col-lg-4 p-0">
        <div class="position-relative">
          <img src="${meal.image}" alt="${meal.name}">
          <div class="position-absolute z-0 rounded-pill rate py-2 px-3 bg-white">
            <i class="fa-solid fa-star me-1"></i>
            <span class="number me-1">${meal.rate}</span></span>
            <span class="review">(${meal.reviews} reviews)</span>
          </div>
          <div class="position-absolute time d-flex rounded-4 p-4 text-center bg-white gap-4">
            <div class="item">
<i class="fa-solid fa-clock icon-prep"></i>
              <p class="m-0 head">Prep Time</p>
              <p class="m-0 count">${meal.prepTime}</p>
            </div>
            <div class="item"> 
<i class="fa-solid fa-fire-burner icon-cook"></i>
              <p class="m-0 head">Cook Time</p>
              <p class="m-0 count">${meal.cookTime}</p>
            </div>
            <div class="item">
<i class="fa-solid fa-users icon-serving"></i>
              <p class="m-0 head">Servings</p>
              <p class="m-0 count">${meal.services}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8 px-0 ">
        <div class="desc">
          <div class="label">
          <span class="difficulty rounded-pill">${meal.difficulty}</span>
          <span class="type rounded-pill">${meal.type}</span>
          </div>
          <div class="d-flex">
            <div>
              <h2>${meal.name}</h2>
            </div>
            <div class="d-flex ms-auto icons">
              <div class="me-2 d-flex justify-content-center align-items-center"><i class="fa-solid fa-bookmark"></i></div>
              <div class="d-flex justify-content-center align-items-center"><i class="fa-solid fa-share-nodes"></i></div>
            </div>
          </div>
          <p class="info mb-4">${meal.description}</p>
          <div class="alert d-flex p-3 mb-4 rounded-3">
            <div>
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
              <p class="m-0 title">Extended Preparation Time</p>
              <p class="m-0 info">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
            </div>
          </div>
          <ul class=" nav nav-pills mb-4 p-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-0 ingredients" id="pills-Ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-Ingredients" type="button" role="tab" aria-controls="pills-Ingredients" aria-selected="true"><i class="fa-solid fa-list-check me-2"></i>Ingredients</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-0" id="pills-Instructions-tab" data-bs-toggle="pill" data-bs-target="#pills-Instructions" type="button" role="tab" aria-controls="pills-Instructions" aria-selected="false"><i class="fa-solid fa-book-open me-2"></i>Instructions</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-0" id="pills-Nutrition-tab" data-bs-toggle="pill" data-bs-target="#pills-Nutrition" type="button" role="tab" aria-controls="pills-Nutrition" aria-selected="false"><i class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-0" id="pills-Tips-tab" data-bs-toggle="pill" data-bs-target="#pills-Tips" type="button" role="tab" aria-controls="pills-Tips" aria-selected="false"><i class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-Ingredients" role="tabpanel" aria-labelledby="pills-Ingredients-tab" tabindex="0">

    <div class="Ingredients p-4 rounded-4 mb-4 ${scroll}">
${ingredientsList}
    </div>
    
  </div>
  <div class="tab-pane fade" id="pills-Instructions" role="tabpanel" aria-labelledby="pills-Instructions-tab" tabindex="0">

    <div class="Instructions">
      ${instructionsList}
    </div>
  </div>
  <div class="tab-pane fade Nutrition" id="pills-Nutrition" role="tabpanel" aria-labelledby="pills-Nutrition-tab" tabindex="0">
<div class="row g-3 ">
  <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
      <div class="d-flex align-items-center">
          <i class="fa-solid fa-fire icon-fire rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Calories</span>
      </div>
      <div><span class="value">320 kcal</span></div>
    </div>
  </div>
  <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-dumbbell icon-dumbbell rounded-3 d-inline-flex justify-content-center align-items-center "></i>
        <span class="nutrition-label">Protein</span>
      </div>
      <div><span class="value">12g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center" >
        <i class="fa-solid fa-wheat-awn icon-wheat rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Carbohydrates</span>
      </div>
      <div><span class="value">18g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-droplet icon-droplet rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Fat</span>
      </div>
      <div><span class="value">22g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-seedling icon-seedling rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Fiber</span>
      </div>
      <div><span class="value">3g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-cube icon-cube rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Sodium</span>
      </div>
      <div><span class="value">680mg</span></div>
    </div>
  </div>
</div>
  </div>
    <div class="tab-pane fade" id="pills-Tips" role="tabpanel" aria-labelledby="pills-Tips-tab" tabindex="0">

      <div>
${chefTipsList}
        
      </div>
  </div>
</div>
          <button class="btn btn-try text-white mt-4" onclick="receive()"><i class="fa-solid fa-rotate me-1"></i> Try Another Recipe</button>
        </div>
      </div>`}else{
        box+=`<div class="col-12 col-lg-4 p-0 ">
        <div class="position-relative">
          <img src="${meal.image}" alt="${meal.name}">
          <div class="position-absolute rounded-pill rate py-2 px-3 bg-white">
            <i class="fa-solid fa-star me-1"></i>
            <span class="number me-1">${meal.rate}</span></span>
            <span class="review">(${meal.reviews} reviews)</span>
          </div>
          <div class="position-absolute time d-flex rounded-4 p-4 text-center bg-white gap-4">
            <div class="item">
<i class="fa-solid fa-clock icon-prep"></i>
              <p class="m-0 head">Prep Time</p>
              <p class="m-0 count">${meal.prepTime}</p>
            </div>
            <div class="item"> 
<i class="fa-solid fa-fire-burner icon-cook"></i>
              <p class="m-0 head">Cook Time</p>
              <p class="m-0 count">${meal.cookTime}</p>
            </div>
            <div class="item">
<i class="fa-solid fa-users icon-serving"></i>
              <p class="m-0 head">Servings</p>
              <p class="m-0 count">${meal.services}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8 px-0">
        <div class="desc">
          <div class="label">
          <span class="difficulty rounded-pill">${meal.difficulty}</span>
          <span class="type rounded-pill">${meal.type}</span>
          </div>
          <div class="d-flex">
            <div>
              <h2>${meal.name}</h2>
            </div>
            <div class="d-flex ms-auto icons">
              <div class="me-2 d-flex justify-content-center align-items-center"><i class="fa-solid fa-bookmark"></i></div>
              <div class="d-flex justify-content-center align-items-center"><i class="fa-solid fa-share-nodes"></i></div>
            </div>
          </div>
          <p class="info mb-4">${meal.description}</p>
          <ul class=" nav nav-pills mb-4 p-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-0 ingredients " id="pills-Ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-Ingredients" type="button" role="tab" aria-controls="pills-Ingredients" aria-selected="true"><i class="fa-solid fa-list-check me-2"></i>Ingredients</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-0" id="pills-Instructions-tab" data-bs-toggle="pill" data-bs-target="#pills-Instructions" type="button" role="tab" aria-controls="pills-Instructions" aria-selected="false"><i class="fa-solid fa-book-open me-2"></i>Instructions</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-0" id="pills-Nutrition-tab" data-bs-toggle="pill" data-bs-target="#pills-Nutrition" type="button" role="tab" aria-controls="pills-Nutrition" aria-selected="false"><i class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-0" id="pills-Tips-tab" data-bs-toggle="pill" data-bs-target="#pills-Tips" type="button" role="tab" aria-controls="pills-Tips" aria-selected="false"><i class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-Ingredients" role="tabpanel" aria-labelledby="pills-Ingredients-tab" tabindex="0">

    <div class="Ingredients p-4 rounded-4 mb-4 ${scroll}">
${ingredientsList}
    </div>
    
  </div>
  <div class="tab-pane fade" id="pills-Instructions" role="tabpanel" aria-labelledby="pills-Instructions-tab" tabindex="0">

    <div class="Instructions">
${instructionsList}
    </div>
  </div>
  <div class="tab-pane fade Nutrition" id="pills-Nutrition" role="tabpanel" aria-labelledby="pills-Nutrition-tab" tabindex="0">
<div class="row g-3 ">
  <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
      <div class="d-flex align-items-center">
          <i class="fa-solid fa-fire icon-fire rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Calories</span>
      </div>
      <div><span class="value">320 kcal</span></div>
    </div>
  </div>
  <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-dumbbell icon-dumbbell rounded-3 d-inline-flex justify-content-center align-items-center "></i>
        <span class="nutrition-label">Protein</span>
      </div>
      <div><span class="value">12g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center" >
        <i class="fa-solid fa-wheat-awn icon-wheat rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Carbohydrates</span>
      </div>
      <div><span class="value">18g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-droplet icon-droplet rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Fat</span>
      </div>
      <div><span class="value">22g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-seedling icon-seedling rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Fiber</span>
      </div>
      <div><span class="value">3g</span></div>
    </div>
  </div>
    <div class="col-md-6 col-12">
    <div class="p-3 nutrition-item d-flex justify-content-between align-items-center rounded-4">
        <div class="d-flex align-items-center">
          <i class="fa-solid fa-cube icon-cube rounded-3 d-inline-flex justify-content-center align-items-center"></i>
        <span class="nutrition-label">Sodium</span>
      </div>
      <div><span class="value">680mg</span></div>
    </div>
  </div>
</div>
  </div>
    <div class="tab-pane fade" id="pills-Tips" role="tabpanel" aria-labelledby="pills-Tips-tab" tabindex="0">

      <div>
      ${chefTipsList}
      </div>
  </div>
</div>
          <button class="btn btn-try text-white mt-4" onclick="receive()"><i class="fa-solid fa-rotate me-1"></i> Try Another Recipe</button>
        </div>
      </div>`
      }
document.getElementById("data").innerHTML=box
    }