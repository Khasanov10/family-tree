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
    title: "Abduvosiqov Xasan",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "jamila",
    title: "Abduvosiqova Jamila",
    label: "",
    description: "1941-yil 14-yanvar",
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
    id: "shohista",
    title: "Shohista",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "laziza",
    parents: ["qahramon", "shohista"],
    title: "Laziza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "iroda",
    parents: ["qahramon", "shohista"],
    title: "Iroda",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "ezoza",
    parents: ["qahramon", "shohista"],
    title: "E'zoza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "abdumalik",
    parents: ["qahramon", "shohista"],
    title: "Abdumalik",
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
    id: "shahnoza2",
    title: "Shahnoza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "jamila2",
    parents: ["dilmurod", "shahnoza2"],
    title: "Jamila",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "muhammadrizo",
    parents: ["dilmurod", "shahnoza2"],
    title: "Muhammadrizo",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "mushtariy",
    parents: ["dilmurod", "shahnoza2"],
    title: "Mushtariy",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
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
    title: "Erkin",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "jamol",
    parents: ["erkin", "nargiza"],
    title: "Qodirov Jamol",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "komola",
    title: "Komola",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "sirojiddin",
    parents: ["jamol", "komola"],
    title: "Sirojiddin",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "husniddin",
    parents: ["jamol", "komola"],
    title: "Husniddin",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "muhammadali",
    parents: ["jamol", "komola"],
    title: "Muhammadali",
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
    title: "Samatov Jahongir",
    label: "",
    description: "1993-yil 26-mart",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "nafisa",
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
    description: "1969-yil 19-sentabr",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "surayyo",
    title: "Surayyo",
    label: "",
    description: "1974-yil 3-fevral",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "iroda2",
    title: "Iroda",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },

  {
    id: "avzal",
    parents: ["abdumomin", "surayyo"],
    title: "Xasanov Avzal",
    label: "",
    description: "1991-yil 29-avgust",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "muharram",
    title: "Xasanova Muharram",
    label: "",
    description: "1993-yil 6-iyul",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "madina-2",
    parents: ["avzal", "muharram"],
    title: "Abdumo'minova Madina",
    label: "",
    description: "2013-yil 5-yanvar",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "akmal",
    parents: ["abdumomin", "surayyo"],
    title: "Xasanov Akmal",
    label: "",
    description: "1993-yil 4-sentabr",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
{
    id: "sayyora",
    title: "Xasanova Sayyora",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
{
    id: "yasmina",
    parents: ["akmal", "sayyora"],
    title: "Yasmina",
    label: "",
    description: "2020-yil 9-mart",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },

  {
    id: "rasul",
    parents: ["abdumomin", "surayyo"],
    title: "Xasanov Rasulbek",
    label: "",
    description: "1997-yil 8-oktabr",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "abubakr",
    parents: ["iroda2"],
    title: "Abubakr",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "abdurahim",
    parents: ["abdumomin", "iroda2"],
    title: "Abdurahim",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
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
    id: "abduvosit",
    parents: ["maruf", "dilfuza"],
    title: "Abduvosiqov Abduvosit",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#c8e4fb"
  },
  {
    id: "aziza",
    title: "Aziza",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "madina",
    parents: ["abduvosit", "aziza"],
    title: "Madina",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
  {
    id: "nasiba",
    parents: ["abduvosit", "aziza"],
    title: "Nasiba",
    label: "",
    description: "",
    image: "photos/e.png",
    itemTitleColor: "#ffc0cb"
  },
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
