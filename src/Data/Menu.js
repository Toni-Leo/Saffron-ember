// Change the symbol here to switch currency across the whole menu.
export const CURRENCY = "$";

export const categories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        name: "Charred flatbread",
        description: "Smoked butter, flaky salt, grilled lemon.",
        price: 7,
        vegetarian: true,
      },
      {
        name: "Burnt leek",
        description: "Hazelnuts, whipped feta, sherry vinegar.",
        price: 11,
        vegetarian: true,
      },
      {
        name: "Oak-smoked mussels",
        description: "White wine and garlic broth, grilled bread.",
        price: 14,
        vegetarian: false,
      },
      {
        name: "Beef tartare",
        description: "Pickled shallot, egg yolk, rye crisps.",
        price: 15,
        vegetarian: false,
      },
    ],
  },
  {
    id: "grate",
    name: "From the grate",
    items: [
      {
        name: "Dry-aged ribeye, 400g",
        description: "Bone marrow butter, watercress. Cooked medium rare unless you say otherwise.",
        price: 46,
        vegetarian: false,
      },
      {
        name: "Half chicken",
        description: "Brined overnight, salted lemon, chili oil.",
        price: 26,
        vegetarian: false,
      },
      {
        name: "Whole sea bream",
        description: "Fennel, herb oil, charred lemon. Serves one hungry person.",
        price: 34,
        vegetarian: false,
      },
      {
        name: "Lamb shoulder",
        description: "Twelve hours low, finished over high heat. Mint salsa verde.",
        price: 32,
        vegetarian: false,
      },
      {
        name: "Cauliflower steak",
        description: "Tahini, pomegranate, toasted seeds.",
        price: 22,
        vegetarian: true,
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      {
        name: "Fire-roasted potatoes",
        description: "Rosemary salt, garlic confit.",
        price: 8,
        vegetarian: true,
      },
      {
        name: "Charred greens",
        description: "Garlic, chili, lemon.",
        price: 8,
        vegetarian: true,
      },
      {
        name: "Tomato and onion salad",
        description: "Grilled onion, oregano, good olive oil.",
        price: 7,
        vegetarian: true,
      },
      {
        name: "Ember beans",
        description: "Slow-cooked in the coals with smoked paprika.",
        price: 7,
        vegetarian: true,
      },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    items: [
      {
        name: "Burnt honey custard",
        description: "Baked in the embers, served warm.",
        price: 9,
        vegetarian: true,
      },
      {
        name: "Grilled pineapple",
        description: "Rum caramel, toasted coconut.",
        price: 9,
        vegetarian: true,
      },
      {
        name: "Dark chocolate",
        description: "Olive oil, sea salt, grilled bread.",
        price: 10,
        vegetarian: true,
      },
    ],
  },
];

export const hours = [
  { days: "Tuesday to Thursday", time: "5:30 pm to 10:00 pm" },
  { days: "Friday and Saturday", time: "5:30 pm to 11:00 pm" },
  { days: "Sunday", time: "1:00 pm to 9:00 pm" },
  { days: "Monday", time: "Closed" },
];
