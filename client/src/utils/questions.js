"use_strict";

export const homeCleaning = {
  questions: [
    {
      type: "radiogroup",
      name: "bedroom",
      title: "How many bedrooms are in your home?",
      choices: [
        { value: 1, price: 15 },
        { value: 2, price: 20 },
        { value: 3, price: 35 },
        { value: 4, price: 40 }
      ]
    },
    {
      type: "radiogroup",
      name: "bathroom",
      title: "How many bathrooms are in your home?",
      choices: [
        { value: 1, price: 10 },
        { value: 2, price: 20 },
        { value: 3, price: 30 },
        { value: 4, price: 40 }
      ]
    },
    {
      type: "----",
      name: "squareft",
      title: "In square feet, what is the area of your home?",
      choices: [
        { value: 1000, price: 40 },
        { value: 1500, price: 60 },
        { value: 2000, price: 80 },
        { value: 2500, price: 100 }
      ]
    },
    {
      type: "radiogroup",
      name: "floor",
      title: "What flooring does your home have?",
      choices: [
        { value: "carpet", price: 0 },
        { value: "tile", price: 5 },
        { value: "hardwood", price: 10 },
        { value: "laminate", price: 10 },
        { value: "other", price: 15 }
      ]
    },
    {
      type: "radiogroup",
      name: "frequency",
      title: "How often do you clean your home?",
      choices: [
        { value: "never", price: 15 },
        { value: "sometimes", price: 10 },
        { value: "often", price: 5 }
      ]
    }
  ]
};

export const officeCleaning = {
  questions: [
    {
      type: "radiogroup",
      name: "offices",
      title: "How many individual cubicles/tables are there?",
      choices: {
        1: { value: 1, price: 15 },
        2: { value: 2, price: 20 },
        3: { value: 3, price: 35 },
        4: { value: 4, price: 40 }
      }
    },
    {
      type: "radiogroup",
      name: "bathroom",
      title: "How many bathrooms does your office have?",
      choices: {
        1: { value: 1, price: 10 },
        2: { value: 2, price: 20 },
        3: { value: 3, price: 30 },
        4: { value: 4, price: 40 }
      }
    },
    {
      type: "radiogroup",
      name: "squareft",
      title: "In square feet, what is the area of your office?",
      choices: {
        1000: { value: 1000, price: 40 },
        1500: { value: 1500, price: 60 },
        2000: { value: 2000, price: 80 },
        2500: { value: 2500, price: 100 }
      }
    },
    {
      type: "radiogroup",
      name: "frequency",
      title: "How often would you need cleaning services?",
      choices: {
        weekly: { value: "weekly", price: 5 },
        biweekly: { value: "biweekly", price: 10 },
        monthly: { value: "monthly", price: 15 }
      }
    }
  ]
};

export const venueCleaning = {
  questions: [
    {
      type: "radiogroup",
      name: "guest-count",
      title: "How many guests are you expecting?",
      choices: {
        "0-25": { value: "0-25", price: 20 },
        "26-50": { value: "26-50", price: 30 },
        "51-75": { value: "51-75", price: 40 },
        "76-100": { value: "76-10", price: 50 }
      }
    },
    {
      type: "radiogroup",
      name: "bathroom",
      title: "How many bathrooms are there in the venue?",
      choices: {
        1: { value: 1, price: 10 },
        2: { value: 2, price: 20 },
        3: { value: 3, price: 30 },
        4: { value: 4, price: 40 }
      }
    },
    {
      type: "radiogroup",
      name: "squareft",
      title: "In square feet, what is the area of the venue?",
      choices: {
        1000: { value: 1000, price: 40 },
        1500: { value: 1500, price: 60 },
        2000: { value: 2000, price: 80 },
        2500: { value: 2500, price: 100 }
      }
    }
  ]
};
