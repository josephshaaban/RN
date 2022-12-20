export const CATEGORY_LIST_DATA = [
  {
    title: "Dessert",
    imageSource: require("../assets/desert-category-temp.png"),
  },
  {
    title: "Cold meat",
    imageSource: require("../assets/cold-meat-category-temp.png"),
  },
  { title: "Salad", imageSource: require("../assets/salad-category-temp.png") },
  {
    title: "Dessert 2",
    imageSource: require("../assets/desert-category-temp.png"),
  },
  {
    title: "Cold meat 2",
    imageSource: require("../assets/cold-meat-category-temp.png"),
  },
  {
    title: "Salad 2",
    imageSource: require("../assets/salad-category-temp.png"),
  },
];

export const MEAL_LIST_DATA = [
  {
    id: "1",
    name: "Meat Pizza",
    ingredients: "Mixed Pizza",
    price: "8.30",
    image: require("../assets/meat-pizza.png"),
  },
  {
    id: "2",
    name: "Cheese Pizza",
    ingredients: "Cheese Pizza",
    price: "7.10",
    image: require("../assets/Cheese-pizza.png"),
  },
  {
    id: "3",
    name: "Chicken Burger",
    ingredients: "Fried Chicken",
    price: "5.10",
    image: require("../assets/Chicken-Burgers.png"),
  },
  {
    id: "4",
    name: "Meat Pizza",
    ingredients: "Mixed Pizza",
    price: "8.30",
    image: require("../assets/meat-pizza.png"),
  },
  {
    id: "5",
    name: "Cheese Pizza",
    ingredients: "Cheese Pizza",
    price: "7.10",
    image: require("../assets/Cheese-pizza.png"),
  },
  {
    id: "6",
    name: "Chicken Burger",
    ingredients: "Fried Chicken",
    price: "5.10",
    image: require("../assets/Chicken-Burgers.png"),
  },
];

export const CHEF_CATEGORY_LIST_DATA = [
  {
    id: "1",
    name: "pizza",
    image: require("../assets/pizza-category-temp.png"),
  },
  {
    id: "2",
    name: "Chinese food",
    image: require("../assets/chinese-food-category-temp.png"),
  },
  {
    id: "3",
    name: "Dessert",
    image: require("../assets/desert-category-temp.png"),
  },
  {
    id: "4",
    name: "Spicy",
    image: require("../assets/spicy-category-temp.png"),
  },
];

export const BEST_CHEF_LIST_DATA = [
  {
    id: "1",
    name: "Jack",
    image: require("../assets/default-profile-pic.png"),
    state: "Active",
  },
  {
    id: "2",
    name: "Markus",
    image: require("../assets/default-profile-pic.png"),
    state: "Away",
  },
  {
    id: "3",
    name: "Lida",
    image: require("../assets/default-profile-pic.png"),
    state: "Active",
  },
  {
    id: "4",
    name: "Sarah",
    image: require("../assets/default-profile-pic.png"),
    state: "Offline",
  },
  {
    id: "5",
    name: "Markus",
    image: require("../assets/default-profile-pic.png"),
    state: "Away",
  },
  {
    id: "6",
    name: "Lida",
    image: require("../assets/default-profile-pic.png"),
    state: "Active",
  },
  {
    id: "7",
    name: "Sarah",
    image: require("../assets/default-profile-pic.png"),
    state: "Offline",
  },
];

export const CHEF_USER_DATA = {
  name: "John Samuel",
  email: "john.samuel@example.com",
  active: true,
  image: require("../assets/default-profile-pic.png"),
  chefInfo: {
    followers: 500,
    rate: 3.6,
    bio: "Your healthy and delicious meal",
    discryption:
      "A highly moivated and capableprofessional cook with a real passion for preparing popular",
  },
};

export const CHEF_CATEGORY_MEAL_LIST_DATA = [
  {
    id: 1,
    title: "Pizza",
    meal_set: [
      {
        id: 1,
        chef: "Yo Sh",
        title: "Cheese pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 1500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Cheese-pizza.webp",
        dishes_count: 5,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: true,
      },
      {
        id: 2,
        chef: "Yo Sh",
        title: "Meat pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 2500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/meat-pizza.jpg",
        dishes_count: 7,
        is_deleted: false,
        category: "Pizza",
        rate: 4.5,
        preOrder: false,
        pickup: false,
        delivery: true,
      },
      {
        id: 3,
        chef: "Yo Sh",
        title: "Chicken Pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
      {
        id: 4,
        chef: "Yo Sh",
        title: "Cheese Pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },

      {
        id: 5,
        chef: "Yo Sh",
        title: "Cheese pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 1500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Cheese-pizza.webp",
        dishes_count: 5,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: true,
      },
      {
        id: 6,
        chef: "Yo Sh",
        title: "Meat pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 2500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/meat-pizza.jpg",
        dishes_count: 7,
        is_deleted: false,
        category: "Pizza",
        rate: 4.5,
        preOrder: false,
        pickup: false,
        delivery: true,
      },
      {
        id: 7,
        chef: "Yo Sh",
        title: "Chicken Pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
      {
        id: 8,
        chef: "Yo Sh",
        title: "Cheese Pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
    ],
  },
  {
    id: 2,
    title: "Burger",
    meal_set: [
      {
        id: 3,
        chef: "Yo Sh",
        title: "Chicken burger",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Burger",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
      {
        id: 4,
        chef: "Yo Sh",
        title: "Cheese burger",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Burger",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
    ],
  },

  {
    id: 3,
    title: "Pizza 2",
    meal_set: [
      {
        id: 1,
        chef: "Yo Sh",
        title: "Cheese pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 1500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Cheese-pizza.webp",
        dishes_count: 5,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: true,
      },
      {
        id: 2,
        chef: "Yo Sh",
        title: "Meat pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 2500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/meat-pizza.jpg",
        dishes_count: 7,
        is_deleted: false,
        category: "Pizza",
        rate: 4.5,
        preOrder: false,
        pickup: false,
        delivery: true,
      },
    ],
  },
  {
    id: 4,
    title: "Burger 2",
    meal_set: [
      {
        id: 3,
        chef: "Yo Sh",
        title: "Chicken burger",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Burger",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
      {
        id: 4,
        chef: "Yo Sh",
        title: "Cheese burger",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Burger",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
    ],
  },

  {
    id: 5,
    title: "Pizza 3",
    meal_set: [
      {
        id: 1,
        chef: "Yo Sh",
        title: "Cheese pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 1500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Cheese-pizza.webp",
        dishes_count: 5,
        is_deleted: false,
        category: "Pizza",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: true,
      },
      {
        id: 2,
        chef: "Yo Sh",
        title: "Meat pizza",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 2500,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/meat-pizza.jpg",
        dishes_count: 7,
        is_deleted: false,
        category: "Pizza",
        rate: 4.5,
        preOrder: false,
        pickup: false,
        delivery: true,
      },
    ],
  },
  {
    id: 6,
    title: "Burger 3",
    meal_set: [
      {
        id: 3,
        chef: "Yo Sh",
        title: "Chicken burger",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Burger",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
      {
        id: 4,
        chef: "Yo Sh",
        title: "Cheese burger",
        description:
          "fdsaterwt jtktr terwtgloremlorem lorem loremlorem loremlorem loremlorem loremlorem lorem",
        price: 9000,
        image:
          "https://aliaji72.pythonanywhere.com/media/images/Chicken-Burgers.jpg",
        dishes_count: 10,
        is_deleted: false,
        category: "Burger",
        rate: 3.6,
        preOrder: true,
        pickup: true,
        delivery: false,
      },
    ],
  },
];

export const orders = [
  {
    id: "1",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 1,
  },
  {
    id: "2",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 3,
  },
  {
    id: "3",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 2,
  },
  {
    id: "4",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 2,
  },
];

export const previousOrders = [
  {
    id: "1",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 4,
  },
  {
    id: "2",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 4,
  },
  {
    id: "3",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 4,
  },
  {
    id: "4",
    name: "order #23455",
    imagesNum: 20,
    orderImage: require("../assets/favicon.png"),
    price: "505.00",
    created_at: "10",
    orderStatus: 4,
  },
];
