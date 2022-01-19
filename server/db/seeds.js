use wonders_db;
db.dropDatabase();

db.users.insertMany([
    {
        name: "Kirsten"
    },
    {
        name: "Ross"
    },
    {
        name: "Guilherme"
    }
])

db.wonders.insertMany([
    {
        name: "Petra",
        location: "Jordan",
        facts: ["It was discovered by Swiss explorer Johann Ludwig Burckhardt in 1812.",
                "Some archaeologists believed it to be a temple, while others thought it was a place to store documents.", 
                "The city is nicknamed Rose city because it is carved from pink coloured rock."],
        funFact: "Inside, the high rock walls reach 262 feet into the air, which is the equivalent to 14 giraffe standing on top of each other).",
        collection: "/new",
        image: "Petra.jpeg",
        coords: {lat: 30.323337, lng: 35.451666},
        icon: "icon_new"
    },
    {
        name: "Great Wall",
        location: "China",
        facts: ["The wall was built in the 7th century, putting the wall at almost 3,000 years old.",
                "It took almost 2000 years to build and maintain the wall.", "It was built for kingdom defenses, to defend China's northern border, and also for tourism."],
        funFact: "The total length of all sections of the Great Wall of China adds up to about 13,171 miles, which is the equivalent to 439 elephants from tail to trunk.",
        collection: "/new",
        image: "GreatWall.jpeg",
        coords: {lat: 40.4319077, lng: 116.5681862},
        icon: "icon_new"
    },
    {
        name: "Christ the Redeemer",
        location: "Brazil",
        facts: ["It began construction in 1926 and was completed in 1931.", "It was made with 6 million soapstone tiles.", "It was requested that the statue be built so it would be visible from anywhere and everywhere in Rio de Janeiro."],
        funFact: "It stands at 98 feet tall, which is the same length as a Boeing 737 Aeroplane!",
        collection: "/new",
        image: "ChristtheRedeemer.jpeg",
        coords: {lat: -22.951916, lng: -43.2126759},
        icon: "icon_new"
    },
    {
        name: "Colosseum",
        location: "Italy",
        facts: ["It was built in the 1st century.", "6 million people visit it each year.", "It only took nine years to build!"],
        funFact: "It was originally used for gladiators to see who was the strongest fighter!",
        collection: "/new",
        image: "Colosseum.jpeg",
        coords: {lat: 41.8902821, lng: 12.4878589},
        icon: "icon_new"
    },
    {
        name: "Machu Pichu",
        location: "Peru",
        facts: ["It was discovered by the western world in 1911.", "The Incan City is believed to have been inhabited in the 1600s.", "It was built to serve as a royal retreat, although its purpose is ultimately unknown."],
        funFact: "It is located at an altitude of 2400 meters, which is the equivalent to 524 double decker buses!",
        collection: "/new",
        image: "MachuPicchu.jpeg",
        coords: {lat: -13.1631412, lng: -72.5471516},
        icon: "icon_new"
    },
    {
        name: "Chichen Itza",
        location: "Mexico",
        facts: ["It dates back to the 9th century.", "The main pyramid nests multiple smaller pyramids inside it.", "Originally it became an important commercial centre, trading in goods - including gold and other treasures."],
        funFact: "The Great Pyramid also has 365 steps, which is 24 times the amount of an average house!",
        collection: "/new",
        image: "ChichenItza.jpeg",
        coords: {lat: 20.6787816, lng: -88.5706656},
        icon: "icon_new"
    },
    {
        name: "Taj Mahal",
        location: "India",
        facts: ["It was completed in 1658 by Emperor Shah Jahn who built it for his wife.", "Became one of the 7 wonders in 2007, (after being voted by the public).", "In order to protect the Taj Mahal from the harmful effects of pollution, all motor vehicles MUST stay 500 meters away."],
        funFact: "In 1600 it cost 314 million pounds to build - which in 2022 is the equivalent to 3 billion, 579 million pounds!",
        collection: "/new",
        image: "TajMahal.jpeg",
        coords: {lat: 27.1751448, lng: 78.0399535},
        icon: "icon_new"
    },
    {
        name: "Great Pyramid of Giza",
        location: "Egypt",
        facts: ["It is more than five thousand years old.", "It's estimated that it took well more than two million stone blocks to make.", "It was built for a pharaoh (King) named Khufu."],
        funFact: "When it was built it was 481 feet tall, however because of erosion, it is now 455 feet tall!",
        collection: "/ancient",
        image: "Pyramid.jpeg",
        coords: {lat: 29.9792345, lng: 31.1320132},
        icon: "icon_ancient"
    },
    {
        name: "Hanging Gardens of Babylon",
        location: "Iraq",
        facts: ["The gardens were thought to be about 75 feet high.", "They were built when King Nebuchadnezzar The Second was in power in Babylon.", "The plants did not actually hang. They grew from many different levels of terraces (similar to balconies)."],
        funFact: "It would have taken 8,200 gallons of water each day to keep the plants watered. Which is roughly the same as 18,500, 2 litres bottles!",
        collection: "/ancient",
        image: "Gardens.jpeg",
        coords: {lat: 32.4912413, lng: 44.435228},
        icon: "icon_ancient"
    },
    {
        name: "Temple of Artemis",
        location: "Turkey",
        facts: ["The temple was burnt down by Herostratus, as he believed it would 'make him famous'.", "It was used as a house of worship to Artemis and as well as a marketplace.", "The remains of the structure were first discovered in 1869 by John Turtle Wood."],
        funFact: "It may have been the first ever building which was constructed of Marble!",
        collection: "/ancient",
        image: "Artemis.jpeg",
        coords: {lat: 37.9493601, lng: 27.3627619},
        icon: "icon_ancient"
    },
    {
        name: "Statue of Zeus",
        location: "Greece",
        facts: ["It was made by the Greek sculptor Phidias around 435 BC.", "The statue was built with ivory plates and gold panels on a wooden framework.", "Zeus was the sky and thunder god in ancient Greek religion."],
        funFact: "The statue was so tall, that if Zeus was to 'stand up', the roof would fall off the temple!",
        collection: "/ancient",
        image: "Zeus.jpeg",
        coords: {lat: 37.8022947, lng: 22.1210547},
        icon: "icon_ancient"
    },
    {
        name: "Mausoleum At Halicarnassus",
        location: "Turkey",
        facts: ["Construction was finished around 350 BC.", "At the very top, there was a large statue of Mausolus and Artemisia in a chariot pulled by four horses.", "It was mainly built using white marble."],
        funFact: "Almost 19 centuries after it was completed, the Mausoleum was destroyed by earthquakes in the 1300s!",
        collection: "/ancient",
        image: "Mausoleum.jpeg",
        coords: {lat: 37.0378874, lng: 27.4219277},
        icon: "icon_ancient"
    },
    {
        name: "Colossus of Rhodes",
        location: "Island of Rhodes",
        facts: ["It was a symbol of strength and freedom for the people of Rhodes.", "There are rumours that a new Colossus may be built at Rhodes Harbour at some point in the future.", "Historians believe that 900 camels were used to carry away all the scrap metal."],
        funFact: "It was 108 feet tall, which is nearly the same height as the Statue of Liberty!",
        collection: "/ancient",
        image: "Colossus.jpeg",
        coords: {lat: 36.4509959, lng: 28.2236147},
        icon: "icon_ancient"
    },
    {
        name: "Lighthouse of Alexandria",
        location: "Egypt",
        facts: ["The top of the tower had a mirror that reflected sunlight during the day.", "It was among the tallest man-made structures on Earth for many centuries.", "It was sadly destroyed by earthquakes."],
        funFact: "It has also been known to be called Pharos, meaning 'lighthouse' in some languages!",
        collection: "/ancient",
        image: "Lighthouse.jpeg",
        coords: {lat: 31.2124397, lng: 29.887799},
        icon: "icon_ancient"
    },
    {
        name: "Aurora Borealis",
        location: "Arctic Circle",
        facts: ["Also known as the Northern Lights.", "Aurora is the Roman god of the dawn; Boreas is the Greek name for the north wind.", "The Menominee Indians thought the lights were the torches of giants living in the North."],
        funFact: "The Vikings thought the Northern Lights were caused by the shining weaponry of immortal warriors!",
        collection: "/natural",
        image: "Aurora.jpeg",
        coords: {lat: 63.8793171, lng: -22.4517288},
        icon: "icon_natural"
    },
    {
        name: "Grand Canyon",
        location: "United States of America",
        facts: ["It is estimated that it began to form more than 17 million years ago.", "In some areas, the canyon is more than 1 mile deep.", "It developed when the Colorado River naturally formed its pathway through the landscape of Arizona."],
        funFact: "At the widest point, the Canyon measures up to 18 miles, which would take about 6 hours to walk across!",
        collection: "/natural",
        image: "Canyon.jpeg",
        coords: {lat: 36.0997623, lng: -112.1212394},
        icon: "icon_natural"
    },
    {
        name: "Great Barrier Reef",
        location: "Australia ",
        facts: ["It is the largest coral reef system in the world.", "It is made up of around 2900 individual reefs and 900 islands.", "Climate change is perhaps the biggest threat to the Great Barrier Reef."],
        funFact: "Over 1500 different species of fish live in the Great Barrier Reef, including clownfish, star of the animated film Finding Nemo!",
        collection: "/natural",
        image: "Reef.jpeg",
        coords: {lat: -19.3401041, lng: 145.40679},
        icon: "icon_natural"
    },
    {
        name: "Harbor of Rio de Janeiro",
        location: "Brazil",
        facts: ["It was discovered by the Portuguese seafarer, Concalo Coelho on January 1st, 1502.", "Rio de Janeiro is Portuguese for River of January.", "The Bay spans 88 miles in length and has 50 miles of beaches."],
        funFact: "The water covers a surface area of 238 square miles, which is almost enough to cover Central Park in New York 80 times over!",
        collection: "/natural",
        image: "RioHarbor.jpeg",
        coords: {lat: -22.8197641, lng: -43.2922626},
        icon: "icon_natural"
    },
    {
        name: "Mount Everest",
        location: "Asia",
        facts: ["It is over 60 million years old.", "Everest was named 'Sagarmatha' by the Nepal Government. It means goddess of the sky.", "The summit was measured in 2020 at 29,031.69 feet."],
        funFact: "It was first named Peak 15 in 1856, but later changed to 'Mount Everest' in 1865 after Sir George Everest!",
        collection: "/natural",
        image: "Everest.jpeg",
        coords: {lat: 27.9881199, lng: 86.9162203},
        icon: "icon_natural"
    },
    {
        name: "Paricutin Volcano",
        location: "Mexico",
        facts: ["It first erupted in 1943.", "The volcano was named after the village where it is located.", "The flowing lava was fast flowing and could move at a speed of 60 meters per minute."],
        funFact: "The exploding gases from the volcano reached 1060 degree celsius!",
        collection: "/natural",
        image: "Paricutin.jpeg",
        coords: {lat: 19.4933462, lng: -102.2601524},
        icon: "icon_natural"
    },
    {
        name: "Victoria Falls",
        location: "Africa",
        facts: ["It is most well-known for being one of the widest waterfalls in the world.", "It is estimated that it started to form around 20,000 years ago.", "The widest point of the waterfall is 5,604 feet and 355 feet high."],
        funFact: "It is estimated humans first started to settle near Victoria Falls during the Early Stone Age!",
        collection: "/natural",
        image: "VictoriaFalls.jpeg",
        coords: {lat: -17.9270587, lng: 25.8437687},
        icon: "icon_natural"
    }
])