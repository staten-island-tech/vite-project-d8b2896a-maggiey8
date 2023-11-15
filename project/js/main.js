import '../css/style.css';
import {menu, name} from "./menu.js"

console.log(menu, name);

const char = [
  {
    charName: "Mika Kagehira",
    cardName: "[In the Shadow] Mika Kagehira",
    dateAvailable: "6/18/22 - 7/2/22",
    agency: "COSMIC PRODUCTION",
    units: "Valkyrie",
    img: "./public/mika.jpg"
  },
  {
    charName: "Tatsumi Kazehaya",
    cardName: "[Silent Prayer] Tatsumi Kazehaya",
    dateAvailable: "7/2/22 - 7/17/22",
    agency: "STARMAKER PRODUCTION",
    units: "ALKALOID",
    img: "./public/tatsumi.jpg"
  },
  {
    charName: "Ibara Saegusa",
    cardName: "[Disguised Commander] Ibara Saegusa",
    dateAvailable: "7/17/22 - 8/1/22",
    agency: "COSMIC PRODUCTION",
    units: "Eden, Adam",
    img: "./public/ibara.jpg"
  },
  {
    charName: "Koga Ogami",
    cardName: "[Glittering Rock Wolf] Koga Ogami",
    dateAvailable: "8/1/22 - 8/15/22",
    agency: "Rhythm Link",
    units: "UNDEAD",
    img: "./public/koga.jpg"
  },
  {
    charName: "Izumi Sena",
    cardName: "[Fairy of Morning Mist] Izumi Sena",
    dateAvailable: "8/15/22 - 8/29/22",
    agency: "Rhythm Link",
    units: "Knights",
    img: "./public/izumi.jpg"
  },
  {
    charName: "Tori Himemiya",
    cardName: "[Aspiring Sweet Prince] Tori Himemiya",
    dateAvailable: "8/29/22 - 9/12/22",
    agency: "STARMAKER PRODUCTION",
    units: "fine",
    img: "./public/tori.jpg"
  },
  {
    charName: "Mao Isara",
    cardName: "[Everyday but Special] Mao Isara",
    dateAvailable: "9/12/22 - 9/26/22",
    agency: "STARMAKER PRODUCTION",
    units: "Trickstar",
    img: "./public/mao.jpg"
  },
  {
    charName: "Hokuto Hidaka",
    cardName: "[The Only Goal] Hokuto Hidaka",
    dateAvailable: "9/26/22 - 10/10/22",
    agency: "STARMAKER PRODUCTION",
    units: "Trickstar",
    img: "./public/hokuto.jpg"
  },
  {
    charName: "Mitsuru Tenma",
    cardName: "[The Fastest Light] Mitsuru Tenma",
    dateAvailable: "10/10/22 - 10/24/22",
    agency: "Rhythm Link",
    units: "Ra*bits",
    img: "./public/mitsuru.jpg"
  },
  {
    charName: "HiMERU",
    cardName: "[Hidden in the Heart] HiMERU",
    dateAvailable: "10/24/22 - 11/6/22",
    agency: "COSMIC PRODUCTION",
    units: "Crazy:B",
    img: "./public/himeru.jpg"
  },
  {
    charName: "Souma Kanzaki",
    cardName: "[The Oath of Gods] Souma Kanzaki",
    dateAvailable: "11/6/22 - 11/21/22",
    agency: "Rhythm Link",
    units: "AKATSUKI",
    img: "./public/souma.jpg"
  },
  {
    charName: "Shinobu Sengoku",
    cardName: "[Light Born in Darkness] Shinobu Sengoku",
    dateAvailable: "11/21/22 - 12/5/22",
    agency: "STARMAKER PRODUCTION",
    units: "RYUSEITAI",
    img: "./public/shinobu.jpg"
  },
  {
    charName: "Arashi Narukami",
    cardName: "[My Best Self] Arashi Narukami",
    dateAvailable: "12/5/22 - 12/19/22",
    agency: "NEW DIMENSION",
    units: "Knights",
    img: "./public/arashi.jpg"
  },
  {
    charName: "Tomoya Mashiro",
    cardName: "[Epitome of Paradigm] Tomoya Mashiro",
    dateAvailable: "12/19/22 - 1/2/23",
    agency: "Rhythm Link",
    units: "Ra*bits",
    img: "./public/tomoya.jpg"
  },
  {
    charName: "Tsukasa Suou",
    cardName: "[The Road to King] Tsukasa Suou",
    dateAvailable: "1/2/23 - 1/16/23",
    agency: "NEW DIMENSION",
    units: "Knights",
    img: "./public/tsukasa.jpg"
  },
  {
    charName: "Wataru Hibiki",
    cardName: "[Reflection in Your Eyes] Wataru Hibiki",
    dateAvailable: "1/16/23 - 1/30/23",
    agency: "STARMAKER PRODUCTION",
    units: "fine",
    img: "./public/wataru.jpg"
  },
  {
    charName: "Shu Itsuki",
    cardName: "[Unyielding Perfection] Shu Itsuki",
    dateAvailable: "1/30/23 - 2/13/23",
    agency: "COSMIC PRODUCTION",
    units: "Valkyrie",
    img: "./public/shu.jpg"
  },
  {
    charName: "Rinne Amagi",
    cardName: "[The Value of Outsiders] Rinne Amagi",
    dateAvailable: "2/13/23 - 2/27/23",
    agency: "COSMIC PRODUCTION",
    units: "Crazy:B",
    img: "./public/rinne.jpg"
  },
  {
    charName: "Tsumugi Aoba",
    cardName: "[Wings of Magic] Tsumugi Aoba",
    dateAvailable: "2/27/23 - 3/13/23",
    agency: "NEW DIMENSION",
    units: "Switch",
    img: "./public/tsumugi.jpg"
  },
  {
    charName: "Leo Tsukinaga",
    cardName: "[Vibrant Colors] Leo Tsukinaga",
    dateAvailable: "3/13/23 - 3/27/23",
    agency: "NEW DIMENSION",
    units: "Knights",
    img: "./public/leo.jpg"
  },
  {
    charName: "Nazuna Nito",
    cardName: "[Guide to the Future] Nazuna Nito",
    dateAvailable: "3/37/23 - 4/10/23",
    agency: "Rhythm Link",
    units: "Ra*bits",
    img: "./public/nazuna.jpg"
  },
  {
    charName: "Hiyori Tomoe",
    cardName: "[Shine Everyday] Hiyori Tomoe",
    dateAvailable: "4/10/23 - 4/24/23",
    agency: "COSMIC PRODUCTION",
    units: "Eden, Eve",
    img: "./public/hiyori.jpg"
  },
  {
    charName: "Yuta Aoi",
    cardName: "[Individuality & Possibility] Yuta Aoi",
    dateAvailable: "4/24/23 - 5/8/23",
    agency: "COSMIC PRODUCTION",
    units: "2wink",
    img: "./public/yuta.jpg"
  },
  {
    charName: "Madara Mikejima",
    cardName: "[Rapturous Festival] Madara Mikejima",
    dateAvailable: "5/8/23 - 5/22/23",
    agency: "NEW DIMENSION",
    units: "MaM, Double Face",
    img: "./public/madara.jpg"
  },
  {
    charName: "Rei Sakuma",
    cardName: "[Guide of Chaos & Love] Rei Sakuma",
    dateAvailable: "5/22/23 - 6/5/23",
    agency: "Rhythm Link",
    units: "UNDEAD",
    img: "./public/rei.jpg"
  },
  {
    charName: "Jun Sazanami",
    cardName: "[The Rebel Path] Jun Sazanami",
    dateAvailable: "6/5/23 - 6/19/23",
    agency: "COSMIC PRODUCTION",
    units: "Eden, Eve",
    img: "./public/jun.jpg"
  },
  {
    charName: "Adonis Otogari",
    cardName: "[Clad in Homeland Wind] Adonis Otogari",
    dateAvailable: "6/19/23 - 7/3/23",
    agency: "Rhythm Link",
    units: "UNDEAD",
    img: "./public/adonis.jpg"
  },
  {
    charName: "Natsume Sakasaki",
    cardName: "[Wish-Granting Guide] Natsume Sakasaki",
    dateAvailable: "7/3/23 - 7/17/23",
    agency: "NEW DIMENSION",
    units: "Switch",
    img: "./public/natsume.jpg"
  },
  {
    charName: "Mayoi Ayase",
    cardName: "[Timid Heart in the Dark] Mayoi Ayase",
    dateAvailable: "7/19/23 - 7/31/23",
    agency: "STARMAKER PRODUCTION",
    units: "ALKALOID",
    img: "./public/mayoi.jpg"
  },
  {
    charName: "Aira Shiratori",
    cardName: "[Budding Loveliness] Aira Shiratori",
    dateAvailable: "7/31/23 - 8/14/23",
    agency: "STARMAKER PRODUCTION",
    units: "ALKALOID",
    img: "./public/aira.jpg"
  },
  {
    charName: "Makoto Yuuki",
    cardName: "[Boundless Versatility] Makoto Yuuki",
    dateAvailable: "8/14/23 - 8/28/23",
    agency: "STARMAKER PRODUCTION",
    units: "Trickstar",
    img: "./public/makoto.jpg"
  },
  {
    charName: "Sora Harukawa",
    cardName: "[Radiant Hues of Me] Sora Harukawa",
    dateAvailable: "8/28/23 - 9/11/23",
    agency: "NEW DIMENSION",
    units: "Switch",
    img: "./public/sora.jpg"
  },
  {
    charName: "Chiaki Morisawa",
    cardName: "[The Beam of Hope] Chiaki Morisawa",
    dateAvailable: "9/11/23 - 9/25/23",
    agency: "STARMAKER PRODUCTION",
    units: "RYUSEITAI",
    img: "./public/chiaki.jpg"
  },
  {
    charName: "Hiiro Amagi",
    cardName: "[Intersecting Paths] Hiiro Amagi",
    dateAvailable: "9/25/23 - 10/9/23",
    agency: "STARMAKER PRODUCTION",
    units: "ALKALOID",
    img: "./public/hiiro.jpg"
  },
  {
    charName: "Kohaku Oukawa",
    cardName: "[Budding Amber Blossoms] Kohaku Oukawa",
    dateAvailable: "10/9/23 - 10/23/23",
    agency: "COSMIC PRODUCTION, NEW DIMENSION",
    units: "Crazy:B, Double Face",
    img: "./public/kohaku.jpg"
  },
  {
    charName: "Subaru Akehoshi",
    cardName: "[Shining For You] Subaru Akehoshi",
    dateAvailable: "10/23/23 - 11/6/23",
    agency: "STARMAKER PRODUCTION",
    units: "Trickstar",
    img: "./public/subaru.jpg"
  },
  {
    charName: "Tetora Nagumo",
    cardName: "[Growing Young Tiger] Tetora Nagumo",
    dateAvailable: "11/6/23 - 11/20/23",
    agency: "STARMAKER PRODUCTION",
    units: "RYUSEITAI",
    img: "./public/tetora.jpg"
  },
  {
    charName: "Midori Takamine",
    cardName: "[Comfortable Staying Just As I Am] Midori Takamine",
    dateAvailable: "11/20/23 - 12/4/23",
    agency: "STARMAKER PRODUCTION",
    units: "RYUSEITAI",
    img: "./public/midori.jpg"
  },
  {
    charName: "Kanata Shinkai",
    cardName: "[Intertwined Sea] Kanata Shinkai",
    dateAvailable: "12/18/23 - 1/1/24",
    agency: "STARMAKER PRODUCTION",
    units: "RYUSEITAI",
    img: "./public/kanata.jpg"
  },
  {
    charName: "Yuzuru Fushimi",
    cardName: "[Devoted Valet] Yuzuru Fushimi",
    dateAvailable: "1/1/24 - 1/15/24",
    agency: "STARMAKER PRODUCTION",
    units: "fine",
    img: "./public/yuzuru.jpg"
  },
  {
    charName: "Niki Shiina",
    cardName: "[Melody Delivered To Your Heart] Niki Shiina",
    dateAvailable: "1/29/24 - 2/12/24",
    agency: "COSMIC PRODUCTION",
    units: "Crazy:B",
    img: "./public/niki.jpg"
  },
  {
    charName: "Hinata Aoi",
    cardName: "[Colors Mixed Together] Hinata Aoi",
    dateAvailable: "2/12/24 - 2/26/24",
    agency: "COSMIC PRODUCTION",
    units: "2wink",
    img: "./public/hinata.jpg"
  },
  {
    charName: "Hajime Shino",
    cardName: "[The Best Hospitality] Hajime Shino",
    dateAvailable: "2/26/24 - 3/11/24",
    agency: "Rhythm Link",
    units: "Ra*bits",
    img: "./public/hajime.jpg"
  },
  {
    charName: "Kuro Kiryu",
    cardName: "[Tougly Woven Threads of Youth] Kuro Kiryu",
    dateAvailable: "3/11/24 - 3/25/24",
    agency: "Rhythm Link",
    units: "AKATSUKI",
    img: "./public/kuro.jpg"
  },
  {
    charName: "Kaoru Hakaze",
    cardName: "[Summer Breeze that Affirms Expectations] Kaoru Hakaze",
    dateAvailable: "3/25/24 - 4/8/24",
    agency: "Rhythm Link",
    units: "UNDEAD",
    img: "./public/kaoru.jpg"
  },
  {
    charName: "Keito Hasumi",
    cardName: "[Untainted Flower of the Heart] Keito Hasumi",
    dateAvailable: "4/8/24 - 4/22/24",
    agency: "Rhythm Link",
    units: "AKATSUKI",
    img: "./public/keito.jpg"
  },
  {
    charName: "Ritsu Sakuma<",
    cardName: "[He Who Awakens From His Slumber] Ritsu Sakuma<",
    dateAvailable: "4/22/24 - 5/6/24",
    agency: "Rhythm Link",
    units: "UNDEAD",
    img: "./public/ritsu.jpg"
  },
  {
    charName: "Eichi Tenshouin",
    cardName: "[The Burning Star of Hope] Eichi Tenshouin",
    dateAvailable: "5/6/24 - 5/20/24",
    agency: "STARMAKER PRODUCTION",
    units: "fine",
    img: "./public/eichi.jpg"
  },
  {
    charName: "Nagisa Ran",
    cardName: "[The One Who Transends Time] Nagisa Ran",
    dateAvailable: "5/20/24 - 6/3/24",
    agency: "COSMIC PRODUCTION",
    units: "Eden, Adam",
    img: "./public/nagisa.jpg"
  }
];

char.forEach(el => {});