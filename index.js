import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;




const recipeJSON =
  '[{"id": "0001","type": "Sandwich","name": "Chicken Sandwich","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "Sandwich","name": "Beef Sandwich","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "Sandwich","name": "Fish Sandwich","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';
let data = JSON.parse(recipeJSON);
let sandwichType="";
let sandwichRecipe;


//middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



//routes
app.get("/", (req, res) => {
  res.render("index.ejs", {sandwichRecipe: sandwichRecipe});
});



app.post("/recipe", (req, res) => {
  sandwichType = req.body.choice;


  if(sandwichType == "chicken") sandwichRecipe = data[0];
  if(sandwichType == "beef") sandwichRecipe = data[1];
  else sandwichRecipe = data[2];

  res.redirect("/");
});





app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
