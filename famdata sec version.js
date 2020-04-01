var famdata = [
  {
    id: 1,
    title: "Hasan dodam adalari",
    label: "",
    description: "1890-1950",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: 2,
    title: "Hasan dodam oyilari",
    label: "",
    description: "1890-1950",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "hasan",
    parents: [1, 2],
    title: "Hasan doda",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "jamila",
    parents: [1, 2],
    title: "Jamila buvi",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "dilbar",
    parents: ["hasan", "jamila"],
    title: "Dilbar",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "turgun",
    parents: ["hasan", "jamila"],
    title: "Turg'un",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "qahramon",
    parents: ["turgun", "dilbar"],
    title: "Qahramon",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "dilmurod",
    parents: ["turgun", "dilbar"],
    title: "Dilmurod",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "maruf",
    parents: ["hasan", "jamila"],
    title: "Maruf",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "dilfuza",
    parents: ["hasan", "jamila"],
    title: "Dilfuza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "nargiza",
    parents: ["hasan", "jamila"],
    title: "Nargiza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "erkin",
    parents: ["hasan", "jamila"],
    title: "Erkin",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "jamol",
    parents: ["erkin", "nargiza"],
    title: "Jamol",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "shahnoza",
    parents: ["erkin", "nargiza"],
    title: "Shahnoza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "jahongir",
    parents: ["erkin", "nargiza"],
    title: "Jahongir",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "nafisa",
    parents: ["erkin", "nargiza"],
    title: "Nafisa",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "muhammadaziz",
    parents: ["jahongir", "nafisa"],
    title: "Muhammadaziz",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "zilola",
    parents: ["jahongir", "nafisa"],
    title: "Zilola",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "muhammadsolih",
    parents: ["jahongir", "nafisa"],
    title: "Muhammadsolih",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "abdumomin",
    parents: ["hasan", "jamila"],
    title: "Abduvosiqov Abdumo'min",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "surayyo",
    parents: ["hasan", "jamila"],
    title: "Surayyo",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "tohir",
    parents: ["hasan", "jamila"],
    title: "Tohir",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "avzal",
    parents: ["abdumomin", "surayyo"],
    title: "Avzal",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "muharram",
    parents: ["abdumomin", "surayyo"],
    title: "Muharram",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "madina-2",
    parents: ["avzal", "muharram"],
    title: "Madina",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "akmal",
    parents: ["abdumomin", "surayyo"],
    title: "Akmal",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "rasul",
    parents: ["abdumomin", "surayyo"],
    title: "Rasulbek",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "abduvosit",
    parents: ["maruf", "dilfuza"],
    title: "Abduvosit",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  ,
  {
    id: "nozima",
    parents: ["maruf", "dilfuza"],
    title: "Nozima",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  }
];
