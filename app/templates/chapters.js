const chaptersData = {
  ICSE: {
    6: {
      English: [
        "Prose – Stories from Treasure Trove",
        "Poetry – Selected Poems",
        "Grammar – Nouns, Pronouns, Verbs, Tenses, Prepositions",
        "Composition – Essay, Letter, Story Writing"
      ],
      Mathematics: [
        "Number System", "Fractions and Decimals", "Ratio and Proportion",
        "Algebra Basics", "Geometry", "Mensuration", "Statistics", "Integers"
      ],
      Science: [
        "Matter and Its States", "Living Organisms", "The Cell", "The Human Body",
        "Light", "Magnetism", "Energy", "Air, Water and Environment"
      ],
      "Social Science": [
        "History – Ancient Civilisations", "The Vedic Period", "Early Kingdoms",
        "Civics – Local Self-Government", "Geography – The Earth, Latitudes and Longitudes",
        "Climate, Soil and Natural Resources"
      ]
    },

    7: {
      English: [
        "Prose – Short Stories", "Poetry – Selected Poems",
        "Grammar – Sentence Structure, Transformation, Synthesis",
        "Composition – Essays, Letters, Story Writing"
      ],
      Mathematics: [
        "Integers", "Fractions and Decimals", "Algebraic Expressions",
        "Simple Equations", "Lines and Angles", "Triangles", "Mensuration", "Data Handling"
      ],
      Science: [
        "Nutrition in Plants and Animals", "Heat and Temperature", "Electricity and Magnetism",
        "Acids, Bases and Salts", "Respiration", "Reproduction in Plants", "Soil and Environment"
      ],
      "Social Science": [
        "History – Delhi Sultanate, Mughal Empire",
        "Civics – Constitution, Democracy",
        "Geography – Earth’s Structure, Rocks, Atmosphere, Water Cycle"
      ]
    },

    8: {
      English: [
        "Prose – Literature Reader", "Poetry – Selected Poems",
        "Grammar – Transformation, Synthesis, Direct/Indirect Speech",
        "Composition – Essay, Letter, Comprehension"
      ],
      Mathematics: [
        "Rational Numbers", "Linear Equations", "Algebraic Identities",
        "Mensuration", "Geometry", "Factorisation", "Statistics", "Graphs"
      ],
      Science: [
        "Crop Production", "Microorganisms", "Force and Pressure", "Friction",
        "Sound", "Cell Structure and Functions", "Reaching the Age of Adolescence", "Pollution of Air and Water"
      ],
      "Social Science": [
        "History – The Modern World, British Expansion in India",
        "Civics – The Constitution, Rights and Duties",
        "Geography – Resources, Industries, Population"
      ]
    },

    9: {
      Mathematics: [
        "Algebra", "Mensuration", "Geometry – Triangles, Circles",
        "Statistics", "Probability", "Coordinate Geometry","Trigonometry"
      ],
      English: [
        "Prose – Short Stories from Treasure Trove",
        "Poetry – Treasure Trove Poems",
        "Drama – Shakespeare (Merchant of Venice – Acts I–III)",
        "Grammar – Transformation, Synthesis, Prepositions, Reported Speech",
        "Composition – Essays, Letters, Story"
      ],
      Physics: [
        "Measurements and Experimentation",
        "Motion in One Dimension",
        "Laws of Motion",
        "Heat and Energy",
        "Light – Reflection, Refraction",
        "Sound"
      ],
      Chemistry: [
        "The Language of Chemistry",
        "Chemical Reactions and Stoichiometry",
        "Atomic Structure",
        "Periodic Table",
        "Study of Hydrogen, Oxygen, Chlorine",
        "Chemical Bonding"
      ],
      Biology: [
        "Cell – Structure and Function",
        "Tissues",
        "Nutrition",
        "Respiration",
        "Excretion",
        "Health and Hygiene",
        "Diseases"
      ],
      "History & Civics": [
        "The Harappan Civilisation",
        "The Vedic Period",
        "Jainism and Buddhism",
        "The Mauryan Empire",
        "The Mughal Empire",
        "Civics – Our Constitution, Fundamental Rights, Elections"
      ],
      Geography: [
        "Earth as a Planet",
        "Rotation and Revolution",
        "Atmosphere",
        "Hydrosphere",
        "Soils in India",
        "Natural Vegetation"
      ],
      Computer: [
        "Introduction to Computers",
        "Operating System Basics",
        "Algorithms and Flowcharts",
        "Programming in Java",
        "Data Handling"
      ],
      "English Grammar": [
        "Transformation of Sentences", "Prepositions",
        "Conjunctions", "Direct and Indirect Speech"
      ]
    },

    10: {
      Mathematics: [
      "Commercial Mathematics – Shares and Dividends",
      "Algebra – Factorisation, Quadratic Equations, Matrices, Arithmetic and Geometric Progressions",
      "Geometry – Similarity, Circles",
      "Mensuration – Areas and Volumes",
      "Trigonometry – Identities, Heights and Distances",
      "Statistics – Mean, Median, Mode",
      "Probability – Basic Theorems",
      "Coordinate Geometry – Distance, Section Formula, Equation of Line"
      ],
      English: [
        "Prose – Short Stories (Treasure Trove)",
        "Poetry – Treasure Trove Poems",
        "Drama – Shakespeare (Merchant of Venice – Acts IV–V)",
        "Grammar – Transformation, Synthesis, Prepositions, Reported Speech",
        "Composition and Precis Writing"
      ],
      Physics: [
        "Force, Work, Energy and Power",
        "Light – Reflection, Refraction, Lenses",
        "Sound",
        "Electricity and Magnetism",
        "Heat",
        "Modern Physics – Radioactivity"
      ],
      Chemistry: [
        "Periodic Table",
        "Chemical Bonding",
        "Mole Concept and Stoichiometry",
        "Metallurgy",
        "Organic Chemistry",
        "Acids, Bases and Salts",
        "Analytical Chemistry",
        "Study of Compounds – HCl, HNO₃, H₂SO₄, Ammonia"
      ],
      Biology: [
        "Cell – Structure and Function",
        "Genetics and Evolution",
        "Plant Physiology",
        "Human Anatomy and Physiology",
        "Pollution and Environment",
        "Biotechnology"
      ],
      "History & Civics": [
        "Union Legislature",
        "Union Executive",
        "Judiciary",
        "National Movement (1915–1947)",
        "Contemporary World History – World Wars, UN, NAM"
      ],
      Geography: [
        "Climate of India",
        "Soils in India",
        "Natural Vegetation",
        "Water Resources",
        "Agriculture in India",
        "Industries in India",
        "Transport in India",
        "Waste Management"
      ],
      Computer: [
        "Java Programming Basics",
        "Class and Objects",
        "Functions and Constructors",
        "Inheritance",
        "Arrays and Strings",
        "File Handling"
      ],
      "English Grammar": [
        "Transformation of Sentences",
        "Synthesis of Sentences",
        "Prepositions",
        "Reported Speech"
      ]
    },

    11: {
      English: ["Prose – Essays", "Poetry – Anthology", "Drama – Shakespeare", "Grammar and Writing Skills"],
      Physics: ["Physical World", "Units and Measurement", "Kinematics", "Laws of Motion", "Work, Energy and Power", "Gravitation", "Oscillations and Waves"],
      Chemistry: ["Some Basic Concepts", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Thermodynamics"],
      Mathematics: ["Sets", "Relations & Functions", "Trigonometric Functions", "Limits and Derivatives", "Statistics", "Probability"],
      Biology: ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Cell Structure and Function", "Human Physiology"],
      Economics: ["Statistics for Economics", "Introductory Microeconomics"],
      Accountancy: ["Introduction to Accounting", "Accounting Equations", "Journal, Ledger and Trial Balance"],
      "Computer Science": ["Python Basics", "Flow of Control", "Functions", "Data Structures – Lists", "File Handling"]
    },

    12: {
      English: ["Prose – Essays", "Poetry – Anthology", "Drama – Shakespeare", "Grammar and Advanced Writing"],
      Physics: ["Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Electromagnetic Induction", "Optics", "Dual Nature of Matter", "Atoms and Nuclei"],
      Chemistry: ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Organic Chemistry – Haloalkanes, Alcohols, Amines"],
      Mathematics: ["Relations & Functions", "Inverse Trigonometry", "Matrices and Determinants", "Continuity and Differentiability", "Application of Derivatives", "Integrals", "Vectors", "3D Geometry"],
      Biology: ["Reproduction in Organisms", "Genetics and Evolution", "Biology and Human Welfare", "Biotechnology", "Ecology"],
      Economics: ["National Income Accounting", "Money and Banking", "Introductory Macroeconomics"],
      Accountancy: ["Partnership Accounts", "Company Accounts", "Cash Flow Statement"],
      "Computer Science": ["Python Advanced", "Data Handling", "SQL and Databases", "Computer Networks", "Boolean Algebra"]
    }
  },

  CBSE: {
    6: {
      English: [
        "Honeysuckle – Who Did Patrick’s Homework?, How the Dog Found Himself a New Master!, Taro’s Reward, An Indian-American Woman in Space, A Different Kind of School, Who I Am, Fair Play, A Game of Chance, Desert Animals, The Banyan Tree",
        "Poetry – A House, A Home, The Kite, The Quarrel, Beauty, Where Do All the Teachers Go?, The Wonderful Words, Vocation",
        "A Pact with the Sun – A Tale of Two Birds, The Friendly Mongoose, The Shepherd’s Treasure, The Old-Clock Shop, Tansen, The Monkey and the Crocodile, The Wonder Called Sleep"
      ],
      Hindi: [
        "वह चिड़िया जो", "ज्योतिर्लिंग", "अनोखा उपहार", "नाना फड़नवीस", "संस्कृति",
        "बाल महाभारत कथा", "पद्म – पद", "लोहे का स्वाद"
      ],
      Mathematics: [
        "Knowing Our Numbers", "Whole Numbers", "Playing with Numbers",
        "Basic Geometrical Ideas", "Understanding Elementary Shapes",
        "Integers", "Fractions", "Decimals", "Data Handling", "Mensuration", "Algebra", "Ratio and Proportion", "Geometry", "Practical Geometry"
      ],
      Science: [
        "Food: Where Does It Come From?", "Components of Food",
        "Fibre to Fabric", "Sorting Materials into Groups",
        "Separation of Substances", "Changes Around Us",
        "Getting to Know Plants", "Body Movements",
        "The Living Organisms and Their Surroundings",
        "Motion and Measurement of Distances",
        "Light, Shadows and Reflections", "Electricity and Circuits",
        "Fun with Magnets", "Water", "Air Around Us", "Garbage In, Garbage Out"
      ],
      "Social Science": [
        "History – What, Where, How and When?, On the Trail of the Earliest People, From Gathering to Growing Food, In the Earliest Cities, What Books and Burials Tell Us, Kingdoms, Kings and an Early Republic",
        "Geography – The Earth in the Solar System, Globe Latitudes and Longitudes, Motions of the Earth, Maps, Major Domains of the Earth",
        "Civics – Understanding Diversity, Diversity and Discrimination, What is Government?, Key Elements of a Democratic Government"
      ]
    },

    7: {
      English: [
        "Honeycomb – Three Questions, A Gift of Chappals, Gopal and the Hilsa Fish, The Ashes That Made Trees Bloom, Quality, Expert Detectives, The Invention of Vita-Wonk, Fire: Friend and Foe, A Bicycle in Good Repair, The Story of Cricket",
        "Poetry – The Squirrel, The Rebel, The Shed, Chivvy, Trees, Mystery of the Talking Fan, Meadow Surprises, Garden Snake",
        "An Alien Hand – The Tiny Teacher, Bringing Up Kari, Golu Grows a Nose, Chandni, The Bear Story"
      ],
      Hindi: [
        "हम पंछी उन्मुक्त गगन के", "दादी माँ", "हमारे आसपास", "नीलकंठ", "भाषा की यात्रा", "चिड़ियाघर", "गृह यात्रा"
      ],
      Mathematics: [
        "Integers", "Fractions and Decimals", "Data Handling",
        "Simple Equations", "Lines and Angles", "The Triangle and its Properties",
        "Congruence of Triangles", "Comparing Quantities", "Rational Numbers",
        "Perimeter and Area", "Algebra", "Exponents and Powers", "Symmetry", "Visualising Solid Shapes"
      ],
      Science: [
        "Nutrition in Plants", "Nutrition in Animals", "Heat",
        "Acids, Bases and Salts", "Physical and Chemical Changes",
        "Respiration in Organisms", "Transportation in Animals and Plants",
        "Reproduction in Plants", "Motion and Time", "Electric Current and its Effects",
        "Light", "Forests – Our Lifeline", "Wastewater Story"
      ],
      "Social Science": [
        "History – Tracing Changes through a Thousand Years, New Kings and Kingdoms, The Delhi Sultans, The Mughal Empire, Rulers and Buildings",
        "Geography – Environment, Inside Our Earth, Our Changing Earth, Air, Water, Natural Vegetation and Wildlife",
        "Civics – On Equality, Role of Government in Health, How the State Government Works, Growing up as Boys and Girls"
      ]
    },

    8: {
      English: [
        "Honeydew – The Best Christmas Present, The Tsunami, Glimpses of the Past, Bepin Choudhury’s Lapse of Memory, The Summit Within, This is Jody’s Fawn, A Visit to Cambridge, A Short Monsoon Diary, The Great Stone Face",
        "Poetry – The Ant and the Cricket, Geography Lesson, Macavity: The Mystery Cat, The Last Bargain, The School Boy, When I set out for Lyonnesse",
        "It So Happened – How the Camel Got His Hump, Children at Work, The Selfish Giant, The Treasure Within, Princess September, The Fight"
      ],
      Hindi: [
        "साँवले सपनों की याद", "कदम", "यह सबसे कठिन समय नहीं", "दीपदान", "मेघ आए", "बस की यात्रा", "फूल"
      ],
      Mathematics: [
        "Rational Numbers", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Practical Geometry",
        "Data Handling", "Squares and Square Roots", "Cubes and Cube Roots", "Comparing Quantities",
        "Algebraic Expressions and Identities", "Mensuration", "Exponents and Powers", "Direct and Inverse Proportions",
        "Factorisation", "Introduction to Graphs"
      ],
      Science: [
        "Crop Production and Management", "Microorganisms: Friend and Foe",
        "Synthetic Fibres and Plastics", "Materials: Metals and Non-Metals",
        "Coal and Petroleum", "Combustion and Flame", "Conservation of Plants and Animals",
        "Reproduction in Animals", "Reaching the Age of Adolescence", "Force and Pressure",
        "Friction", "Sound", "Chemical Effects of Electric Current", "Some Natural Phenomena", "Light", "Stars and the Solar System", "Pollution of Air and Water"
      ],
      "Social Science": [
        "History – How, When and Where, From Trade to Territory, Ruling the Countryside, Tribals, Dikus and the Vision of a Golden Age, When People Rebel, The Making of the National Movement",
        "Geography – Resources, Land Soil Water Natural Vegetation and Wildlife, Agriculture, Industries, Human Resources",
        "Civics – The Indian Constitution, Understanding Secularism, Why Do We Need a Parliament?, Judiciary, Understanding Marginalisation"
      ]
    },

    9: {
      English: [
        "Beehive – The Fun They Had, The Sound of Music, The Little Girl, A Truly Beautiful Mind, My Childhood, Packing, Reach for the Top, The Bond of Love, If I Were You",
        "Poetry – The Road Not Taken, Wind, Rain on the Roof, The Lake Isle of Innisfree, A Legend of the Northland, No Men Are Foreign, The Snake Trying",
        "Moments – The Lost Child, In the Kingdom of Fools, The Happy Prince, Weathering the Storm in Ersama, The Last Leaf, A House is Not a Home, The Beggar"
      ],
      Hindi: [
        "कबीर – दोहे", "मीरा – पद", "निराला – गीत", "पद्यांश", "गद्यांश", "साखी"
      ],
      Mathematics: [
        "Number Systems", "Polynomials", "Coordinate Geometry",
        "Linear Equations in Two Variables", "Introduction to Euclid’s Geometry",
        "Lines and Angles", "Triangles", "Quadrilaterals", "Circles",
        "Heron’s Formula", "Surface Areas and Volumes", "Statistics", "Probability"
      ],
      Science: [
        "Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules",
        "Structure of the Atom", "The Fundamental Unit of Life", "Tissues",
        "Diversity in the Living Organisms", "Motion", "Force and Laws of Motion",
        "Gravitation", "Work and Energy", "Sound", "Natural Resources"
      ],
      "Social Science": [
        "History – The French Revolution, Socialism in Europe and the Russian Revolution, Nazism and the Rise of Hitler, Forest Society and Colonialism, Pastoralists in the Modern World",
        "Geography – India Size and Location, Physical Features of India, Drainage, Climate, Natural Vegetation and Wildlife, Population",
        "Political Science – Democracy in the Contemporary World, Constitutional Design, Electoral Politics, Working of Institutions, Democratic Rights",
        "Economics – The Story of Village Palampur, People as Resource, Poverty as a Challenge, Food Security in India"
      ],
      "Computer Science": [
        "Basics of Information Technology", "Office Tools", "HTML Basics", "Introduction to Python Programming"
      ]
    },

    10: {
      Mathematics: [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations in Two Variables",
      "Quadratic Equations",
      "Arithmetic Progressions",
      "Triangles",
      "Coordinate Geometry",
      "Introduction to Trigonometry",
      "Applications of Trigonometry",
      "Circles",
      "Constructions",
      "Areas Related to Circles",
      "Surface Areas and Volumes",
      "Statistics",
      "Probability"
    ],
    Science: [
      "Chemical Reactions and Equations",
      "Acids, Bases and Salts",
      "Metals and Non-metals",
      "Carbon and its Compounds",
      "Periodic Classification of Elements",
      "Life Processes",
      "Control and Coordination",
      "How do Organisms Reproduce?",
      "Heredity and Evolution",
      "Light – Reflection and Refraction",
      "The Human Eye and the Colourful World",
      "Electricity",
      "Magnetic Effects of Electric Current",
      "Sources of Energy",
      "Our Environment",
      "Sustainable Management of Natural Resources"
    ],
    English: [
      "First Flight (Prose) – A Letter to God, Nelson Mandela, Two Stories About Flying, From the Diary of Anne Frank, Glimpses of India, Mijbil the Otter, Madam Rides the Bus, The Sermon at Benares, The Proposal",
      "First Flight (Poetry) – Dust of Snow, Fire and Ice, A Tiger in the Zoo, How to Tell Wild Animals, The Ball Poem, Amanda!, Animals, The Trees, Fog, The Tale of Custard the Dragon, For Anne Gregory",
      "Footprints Without Feet – A Triumph of Surgery, The Thief’s Story, The Midnight Visitor, A Question of Trust, Footprints Without Feet, The Making of a Scientist, The Necklace, The Hack Driver, Bholi, The Book That Saved the Earth",
      "Grammar – Tenses, Modals, Subject-Verb Agreement, Reported Speech, Clauses",
      "Writing – Letter Writing, Article, Report, Analytical Paragraph"
    ],
    Hindi: [
      "क्षितिज भाग 2 – पद्य खंड (चयनित कविताएँ), गद्य खंड (कहानियाँ और निबंध)",
      "कृतिका भाग 2 – (चयनित अध्याय)",
      "व्याकरण – संधि, समास, अलंकार, वाक्य परिवर्तन",
      "लेखन कौशल – पत्र, निबंध, संवाद लेखन"
    ],
    "Social Science": [
      "History – The Rise of Nationalism in Europe, Nationalism in India, The Making of a Global World, The Age of Industrialisation, Print Culture and the Modern World",
      "Geography – Resources and Development, Forest and Wildlife Resources, Water Resources, Agriculture, Minerals and Energy Resources, Manufacturing Industries, Lifelines of National Economy",
      "Political Science – Power Sharing, Federalism, Democracy and Diversity, Gender, Religion and Caste, Popular Struggles and Movements, Political Parties, Outcomes of Democracy, Challenges to Democracy",
      "Economics – Development, Sectors of the Indian Economy, Money and Credit, Globalisation and the Indian Economy, Consumer Rights"
    ],
    "Computer Science": [
      "Basics of Python Programming",
      "Control Structures (Loops, Conditionals)",
      "Functions and Modules",
      "File Handling",
      "Database Management (Introduction to SQL)",
      "Internet and Networking Basics",
      "Project Work"
    ]
    },

    11: {
      English: [
        "Hornbill – The Portrait of a Lady, We’re Not Afraid to Die, Discovering Tut, Landscape of the Soul, The Ailing Planet, The Browning Version",
        "Poetry – A Photograph, The Laburnum Top, The Voice of the Rain",
        "Snapshots – The Summer of the Beautiful White Horse, The Address, Mother’s Day"
      ],
      Physics: [
        "Physical World", "Units and Measurements", "Motion in a Straight Line",
        "Motion in a Plane", "Laws of Motion", "Work, Energy and Power",
        "System of Particles and Rotational Motion", "Gravitation",
        "Oscillations", "Waves"
      ],
      Chemistry: [
        "Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements",
        "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium",
        "Redox Reactions", "Hydrogen", "s-Block, p-Block Elements"
      ],
      Mathematics: [
        "Sets", "Relations and Functions", "Trigonometric Functions",
        "Principle of Mathematical Induction", "Complex Numbers", "Linear Inequalities",
        "Permutations and Combinations", "Binomial Theorem", "Sequences and Series",
        "Straight Lines", "Conic Sections", "Introduction to Three-dimensional Geometry",
        "Limits and Derivatives", "Statistics", "Probability"
      ],
      Biology: [
        "The Living World", "Biological Classification", "Plant Kingdom",
        "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants",
        "Cell Structure and Function", "Biomolecules", "Human Physiology"
      ],
      Economics: [
        "Statistics for Economics – Collection, Organisation, Presentation of Data",
        "Introductory Microeconomics – Central Problems, Consumer Behaviour, Producer Behaviour"
      ],
      Accountancy: [
        "Introduction to Accounting", "Theory Base of Accounting",
        "Recording of Transactions – I & II", "Bank Reconciliation Statement",
        "Trial Balance and Rectification", "Depreciation", "Financial Statements"
      ],
      "Computer Science": [
        "Python Basics", "Flow of Control", "Functions", "Strings and Lists", "File Handling", "Societal Impacts"
      ]
    },

    12: {
      English: [
        "Flamingo – The Last Lesson, Lost Spring, Deep Water, Indigo, Poets and Pancakes, The Interview, Going Places",
        "Poetry – My Mother at Sixty-six, An Elementary School Classroom, Keeping Quiet, A Thing of Beauty, A Roadside Stand, Aunt Jennifer’s Tigers",
        "Vistas – The Third Level, The Tiger King, Journey to the End of the Earth, The Enemy, On the Face of It, Memories of Childhood"
      ],
      Physics: [
        "Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Electromagnetic Induction",
        "Alternating Current", "Optics", "Dual Nature of Radiation and Matter",
        "Atoms", "Nuclei", "Semiconductor Electronics", "Communication Systems"
      ],
      Chemistry: [
        "Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics",
        "Surface Chemistry", "p-Block Elements", "d-Block Elements", "f-Block Elements",
        "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers",
        "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life"
      ],
      Mathematics: [
        "Relations and Functions", "Inverse Trigonometric Functions",
        "Matrices", "Determinants", "Continuity and Differentiability",
        "Applications of Derivatives", "Integrals", "Applications of Integrals",
        "Differential Equations", "Vector Algebra", "Three Dimensional Geometry",
        "Linear Programming", "Probability"
      ],
      Biology: [
        "Reproduction in Organisms", "Sexual Reproduction in Flowering Plants",
        "Human Reproduction", "Reproductive Health",
        "Principles of Inheritance and Variation", "Molecular Basis of Inheritance",
        "Evolution", "Human Health and Disease", "Strategies for Enhancement in Food Production",
        "Microbes in Human Welfare", "Biotechnology Principles and Processes",
        "Biotechnology and Its Applications", "Organisms and Populations",
        "Ecosystem", "Biodiversity and Conservation", "Environmental Issues"
      ],
      Economics: [
        "Introductory Macroeconomics – National Income, Money and Banking, Government Budget, Balance of Payments",
        "Indian Economic Development – Development Experience, Current Challenges, Human Capital Formation"
      ],
      Accountancy: [
        "Accounting for Not-for-Profit Organisations", "Partnership Firms", "Company Accounts", "Cash Flow Statement", "Financial Statement Analysis"
      ],
      "Computer Science": [
        "Python Revision", "Data Structures – Stacks, Queues", "File Handling", "Database Queries using SQL", "Computer Networks", "Boolean Algebra", "Societal Impacts"
      ]
    }
  },
    "State Board": {}
};
chaptersData["State Board"] = JSON.parse(JSON.stringify(chaptersData["CBSE"]));

