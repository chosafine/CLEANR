"use_strict";

export const homeCleaning = [
  {
    questions: [
      {
        type: "radiogroup",
        name: "bedroom",
        title: "How many bedrooms are in your home?",
        choices: ["1", "2", "3", "4+"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "bathroom",
        title: "How many bathrooms are in your home?",
        choices: ["1", "2", "3", "4+"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "squareft",
        title: "In square feet, what is the area of your home?",
        choices: [
          "<1000 sqft",
          "1100-1500 sqft",
          "1600-2000 sqft",
          "2000+ sqft"
        ]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "floor",
        title: "What flooring does your home have?",
        choices: ["Carpets", "Tile", "Hardwood", "Laminate", "Other"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "frequency",
        title: "How often do you clean your home?",
        choices: ["Never", "Only when guests come", "Often"]
      }
    ]
  }
];

export const officeCleaning = [
  {
    questions: [
      {
        type: "radiogroup",
        name: "offices",
        title: "How many individual cubicles/rooms are there?",
        choices: ["1", "2", "3", "4+"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "bathroom",
        title: "How many bathrooms does your office have?",
        choices: ["1", "2", "3", "4+"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "squareft",
        title: "In square feet, what is the area of your office?",
        choices: [
          "<1000 sqft",
          "1100-1500 sqft",
          "1600-2000 sqft",
          "2000+ sqft"
        ]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "frequency",
        title: "How often would you need cleaning services?",
        choices: ["Weekly", "Bi-weekly", "Monthly"]
      }
    ]
  }
];

export const venueCleaning = [
  {
    questions: [
      {
        type: "radiogroup",
        name: "guest-count",
        title: "How many guests are you expecting?",
        choices: ["0-25", "26-50", "51-75", "76-100", "101+"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "bathroom",
        title: "How many bathrooms are there in the venue?",
        choices: ["1", "2", "3", "4+"]
      }
    ],

    questions: [
      {
        type: "radiogroup",
        name: "squareft",
        title: "In square feet, what is the area of the venue?",
        choices: [
          "<1000 sqft",
          "1100-1500 sqft",
          "1600-2000 sqft",
          "2000+ sqft"
        ]
      }
    ]
  }
];
