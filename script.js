// Les noms associés aux première et dernière lettres pour chaque race
const nainsNames = {
  a: ["Bal", "Gimli"],
  b: ["Bombur"],
  c: ["Bifur"],
  d: ["Dwalin"],
  e: ["Eitri"],
  f: ["Fili"],
  g: ["Glóin"],
  h: ["Hári"],
  i: ["Iori"],
  j: ["Járdek"],
  k: ["Kíli"],
  l: ["Lofur"],
  m: ["Mágli"],
  n: ["Náli"],
  o: ["Oin"],
  p: ["Póki"],
  q: ["Quert"],
  r: ["Rádagast"],
  s: ["Sauron"],
  t: ["Thrain"],
  u: ["Úlfur"],
  v: ["Völund"],
  w: ["Wurin"],
  x: ["Xenon"],
  y: ["Ymir"],
  z: ["Zigur"],
};

const humainsNames = {
  a: ["Adam", "Amanda"],
  b: ["Benjamin", "Beth"],
  c: ["Christopher", "Cathy"],
  d: ["David", "Diana"],
  e: ["Edward", "Emily"],
  f: ["Frank", "Fiona"],
  g: ["George", "Grace"],
  h: ["Henry", "Hannah"],
  i: ["Isaac", "Ivy"],
  j: ["James", "Jenny"],
  k: ["Kevin", "Katie"],
  l: ["Luke", "Laura"],
  m: ["Michael", "Mary"],
  n: ["Nathan", "Nancy"],
  o: ["Oliver", "Olivia"],
  p: ["Paul", "Penelope"],
  q: ["Quincy", "Quinn"],
  r: ["Robert", "Rachel"],
  s: ["Samuel", "Sophie"],
  t: ["Thomas", "Tiffany"],
  u: ["Uriel", "Ursula"],
  v: ["Vincent", "Victoria"],
  w: ["William", "Wendy"],
  x: ["Xander", "Xandra"],
  y: ["Yvonne", "Yvette"],
  z: ["Zachary", "Zoe"],
  };
  
  const elfesNames = {
  a: ["Aldalótë", "Aelos", "Aelindë", "Aeliel", "Aelimiel", "Arweniel", "Arwenielle", "Aeleniel", "Althinë", "Althiniel"],
b: ["Baldoriel", "Belegiel", "Beleniel", "Belweniel", "Berethiel", "Boriel", "Bórondor", "Bryndiel", "Bryndoriel", "Bryndorielle"],
c: ["Caladriel", "Celadriel", "Celeniel", "Celweniel", "Cerethiel", "Coriel", "Córondor", "Cyndiel", "Cyndoriel", "Cyndorielle"],
d: ["Daladriel", "Delos", "Delindë", "Deliel", "Delimiel", "Doriel", "Dórondor", "Dyndiel", "Dyndoriel", "Dyndorielle"],
e: ["Eldalótë", "Elos", "Elindë", "Eliel", "Elimiel", "Erweniel", "Erwenielle", "Eleniel", "Elthinë", "Elthiniel"],
f: ["Faldoriel", "Feladriel", "Feleniel", "Felweniel", "Ferethiel", "Foriel", "Fórondor", "Fyndiel", "Fyndoriel", "Fyndorielle"],
g: ["Galadriel", "Gelos", "Gelindë", "Geliel", "Gelimiel", "Goriel", "Górondor", "Gyndiel", "Gyndoriel", "Gyndorielle"],
h: ["Haladriel", "Heladriel", "Heleniel", "Helweniel", "Herethiel", "Horiel", "Hórondor", "Hyndiel", "Hyndoriel", "Hyndorielle"],
i: ["Ildalótë", "Ilos", "Iindë", "Iiel", "Iimiel", "Irweniel", "Irwenielle", "Ileniel", "Ithinë", "Ithiniel"],
j: ["Jaldoriel", "Jeladriel", "Jeleniel", "Jelweniel", "Jerethiel", "Joriel", "Jórondor", "Jyndiel", "Jyndoriel", "Jyndorielle"],
k: ["Kaladriel", "Kelos", "Kelindë", "Keliel", "Kelimiel", "Koriel", "Kórondor", "Kyndiel", "Kyndoriel", "Kyndorielle"],
l: ["Laldoriel", "Leladriel", "Leleniel", "Lelweniel", "Lerethiel", "Loriel", "Lórondor", "Lyndiel", "Lyndoriel", "Lyndorielle"],
m: ["Maladriel", "Melos", "Melindë", "Meliel", "Melimiel", "Moriel", "Mórondor", "Myndiel", "Myndoriel", "Myndorielle"],
  n: ["Naladriel", "Neladriel", "Neleniel", "Nelweniel", "Nerethiel", "Noriel", "Nórondor", "Nyndiel", "Nyndoriel", "Nyndorielle"],
  o: ["Oldalótë", "Olos", "Oindë", "Oiel", "Oimiel", "Orweniel", "Orwenielle", "Oleniel", "Othinë", "Othiniel"],
  p: ["Paladriel", "Peladriel", "Peleniel", "Pelweniel", "Perethiel", "Poriel", "Pórondor", "Pyndiel", "Pyndoriel", "Pyndorielle"],
q: ["Qaladriel", "Qelos", "Qelindë", "Qeliel", "Qelimiel", "Qoriel", "Qórondor", "Qyndiel", "Qyndoriel", "Qyndorielle"],
r: ["Raladriel", "Reladriel", "Releniel", "Relweniel", "Rerethiel", "Roriel", "Rórondor", "Ryndiel", "Ryndoriel", "Ryndorielle"],
s: ["Saladriel", "Seladriel", "Seleniel", "Selweniel", "Serethiel", "Soriel", "Sórondor", "Syndiel", "Syndoriel", "Syndorielle"],
t: ["Taladriel", "Teladriel", "Teleniel", "Telweniel", "Terethiel", "Toriel", "Tórondor", "Tyndiel", "Tyndoriel", "Tyndorielle"],
u: ["Uldalótë", "Ulos", "Uindë", "Uiel", "Uimiel", "Urweniel", "Urwenielle", "Uleniel", "Uthinë", "Uthiniel"],
v: ["Valadriel", "Veladriel", "Veleniel", "Velweniel", "Verethiel", "Voriel", "Vórondor", "Vyndiel", "Vyndoriel", "Vyndorielle"],
w: ["Waladriel", "Weladriel", "Weleniel", "Welweniel", "Werethiel", "Woriel", "Wórondor", "Wyndiel", "Wyndoriel", "Wyndorielle"],
x: ["Xaladriel", "Xeladriel", "Xeleniel", "Xelweniel", "Xerethiel", "Xoriel", "Xórondor", "Xyndiel", "Xyndoriel", "Xyndorielle"],
  y: ["Yaladriel", "Yeladriel", "Yeleniel", "Yelweniel", "Yerethiel", "Yoriel", "Yórondor", "Yyndiel", "Yyndoriel", "Yyndorielle"],
z: ["Zaladriel", "Zeladriel", "Zeleniel", "Zelweniel", "Zerethiel", "Zoriel", "Zórondor", "Zyndiel", "Zyndoriel", "Zyndorielle"],
};

  const orcsNames = {
    a: ["Arcalg", "Arhag", "Arakul", "Arzak", "Azgar"],
    b: ["Baulg", "Bharg", "Bokul", "Bzak", "Bgar"],
    c: ["Carlg", "Charg", "Cokul", "Czak", "Cgar"],
    d: ["Darc", "Dh'ar", "Dulg", "Dzak", "Dgar"],
    e: ["Ercalg", "Epharg", "Eokul", "Ezak", "Egar"],
    f: ["Farc", "Farhag", "Fokul", "Fzak", "Fgar"],
    g: ["Garc", "Gharg", "Gokul", "Gzak", "Ggar"],
    h: ["Harc", "Harg", "Hulg", "Hzak", "Hgar"],
    i: ["Ircalg", "Ipharg", "Iokul", "Izak", "Igar"],
    j: ["Jarc", "Jharg", "Jokul", "Jzak", "Jgar"],
    k: ["Karc", "Kharg", "Kokul", "Kzak", "Kgar"],
    l: ["Larc", "Lharg", "Lulg", "Lzak", "Lgar"],
    m: ["Marc", "Mharg", "Mokul", "Mzak", "Mgar"],
    n: ["Narc", "Nharg", "Nokul", "Nzak", "Ngar"],
    o: ["Oarc", "Oharg", "Ookul", "Ozak", "Ogar"],
    p: ["Parc", "Pharg", "Pokul", "Pzak", "Pgar"],
    q: ["Qarc", "Qharg", "Qokul", "Qzak", "Qgar"],
    r: ["Rarc", "Rharg", "Rokul", "Rzak", "Rgar"],
    s: ["Sarc", "Sharg", "Sokul", "Szak", "Sgar"],
    t: ["Tarc", "Tharg", "Tokul", "Tzak", "Tgar"],
    u: ["Uarc", "Uharg", "Uokul", "Uzak", "Ugar"],
    v: ["Varc", "Vharg", "Vokul", "Vzak", "Vgar"],
    w: ["Warp", "Wharg", "Wokul", "Wzak", "Wgar"],
    x: ["Xarc", "Xharg", "Xokul", "Xzak", "Xgar"],
    y: ["Yarc", "Yharg", "Yokul", "Yzak", "Ygar"],
    z: ["Zarc", "Zharg", "Zokul", "Zzak", "Zgar"]
    };
  
  // Récupérer les éléments du formulaire
  const form = document.getElementById("generatorForm");
  const userNameInput = document.getElementById("userName");
  const raceSelect = document.getElementById("raceSelect");
  const generateNameButton = document.getElementById("generateNameButton");
  const generatedName = document.getElementById("generatedName");
  
  // Ajouter un écouteur d'événement au bouton de génération de nom
generateNameButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // Récupérer le nom de l'utilisateur et les première et dernière lettres
  let userName = userNameInput.value;
  let firstLetter = userName[0].toLowerCase();
  let lastLetter = userName[userName.length - 1].toLowerCase();
  
  // Récupérer la race choisie par l'utilisateur
  let chosenRace = raceSelect.value;
  let chosenNames;
  
  // Sélectionner la liste de noms correspondant à la race choisie
  switch (chosenRace) {
  case "nains":
  chosenNames = nainsNames;
  break;
  case "humains":
  chosenNames = humainsNames;
  break;
  case "elfes":
  chosenNames = elfesNames;
  break;
  case "orcs":
  chosenNames = orcsNames;
  break;
  default:
  chosenNames = {};
  }
  
  // Générer le nom en combinant les syllabes associées aux première et dernière lettres
  let firstName = chosenNames[firstLetter][Math.floor(Math.random() * chosenNames[firstLetter].length)];
  let lastName = chosenNames[lastLetter][Math.floor(Math.random() * chosenNames[lastLetter].length)];
  let generatedFullName = firstName + " " + lastName;
  
  // Afficher le nom généré
  generatedName.innerHTML = generatedFullName;
  });
  
  // Optional: Ajouter une fonction pour réinitialiser le formulaire
  const resetForm = () => {
  form.reset();
  generatedName.innerHTML = "";
  };
