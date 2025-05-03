export const getChaptersForSubject = (subjectId) => {
  const chaptersMap = {
    "maths": [
      {
        id: "m1",
        title: "Real Numbers",
        lectureCount: 6,
        notes: "Real numbers include all rational and irrational numbers. This chapter covers properties of real numbers, operations, and their applications in various mathematical contexts.",
        videos: [
          { id: "m1v1", title: "Lecture 1", embedId: "C-9jpswxDfE?si=tYpUm1b3Mk-IvWX0", notes: 'as soon as possible i will do that'},
          { id: "m1v2", title: "Lecture 2", embedId: "aXDABF1urLc?si=Bc-pnczhorTi2hOH", notes: "Rational numbers and their representations as terminating or repeating decimals." },
          { id: "m1v3", title: "Lecture 3", embedId: "P7j4OqTOfl8", notes: "Irrational numbers and their decimal expansions. Properties of irrational numbers." },
          { id: "m1v4", title: "Lecture 4", embedId: "G-a7PIdgTlY", notes: "Euclid's division lemma and algorithm. Step-by-step application of the division algorithm." },
          { id: "m1v5", title: "Lecture 5", embedId: "xWwStBoQSmE", notes: "Fundamental theorem of arithmetic. Prime factorization and its uniqueness." },
          { id: "m1v6", title: "Lecture 6", embedId: "tow75H2bzQQ", notes: "Applications of HCF and LCM. Solving problems using the concepts of real numbers." }
        ]
      },
      {
        id: "m2",
        title: "Polynomials",
        lectureCount: 3,
        notes: "Polynomials are expressions with variables and coefficients. This chapter covers operations on polynomials, finding zeros, and understanding fundamental theorems related to polynomials.",
        videos: [
          { id: "m2v1", title: "Lecture 1", embedId: "DkucQB5q9fA", notes: "Introduction to polynomials, their types and basic operations. Understanding degree of polynomials." },
          { id: "m2v2", title: "Lecture 2", embedId: "dUdDOBbBUwM?si=GYDeaKzDWvsyDoh5", notes: "Understanding zeroes/roots of polynomials. Relationship between zeroes and coefficients." },
          { id: "m2v3", title: "Lecture 3", embedId: "xbZzPWJFL88", notes: "Methods for factoring polynomials. Using factorization to find solutions." },
        ]
      },
      // {
      //   id: "m3",
      //   title: "Coordinate Geometry",
      //   lectureCount: 0,
      //   notes: "Coordinate geometry combines algebra and geometry using the coordinate system. This chapter explores distance formula, section formula, and area calculations in the coordinate plane.",
      //   videos: [
      //     { id: "m3v1", title: "Introduction to Coordinate Geometry", embedId: "C9n8JkhfJTQ" },
      //     { id: "m3v2", title: "Distance Formula", embedId: "0dqMpX1zKv8" },
      //     { id: "m3v3", title: "Section Formula", embedId: "a44HwuBnm8I" },
      //     { id: "m3v4", title: "Area of a Triangle", embedId: "qWI8KLv6M0A" },
      //     { id: "m3v5", title: "Coordinate Geometry Applications", embedId: "1Z-Rt2NK_Zs" },
      //     { id: "m3v6", title: "Problem Solving in Coordinate Geometry", embedId: "FU80sHIdirM" }
      //   ]
      // }
    ],
    "physics": [
      {
        id: "p1",
        title: "Light - Reflection and Refraction",
        lectureCount: 4,
        notes: "This chapter covers the behavior of light, including reflection and refraction phenomena. Learn about laws of reflection, refraction, and their applications in optical instruments.",
        videos: [
          { id: "p1v1", title: "Lecture 1", embedId: "ClVnZqf08CE?si=s0Jgle5DcdFXoetL", notes: "Introduction to light and its properties. Understanding reflection and its laws." },
          { id: "p1v2", title: "Lecture 2", embedId: "1jdtphKCN4k", notes: "Plane mirrors and image formation. Characteristics of images formed by plane mirrors." },
          { id: "p1v3", title: "Lecture 3", embedId: "jsK_kNRMCoE", notes: "Spherical mirrors - concave and convex mirrors. Ray diagrams for image formation." },
          { id: "p1v4", title: "Lecture 4", embedId: "QJ6ofa7xEGM?si=PC6rmIB28s6yumUU", notes: "The mirror formula and magnification. Solving numerical problems related to spherical mirrors." },
          { id: "p1v5", title: "Lecture 5", embedId: "HXmFbeElCkw", notes: "Refraction of light. Snell's law and refractive index. Understanding optical density." },
          { id: "p1v6", title: "Lecture 6", embedId: "kcRUxzr6mWs", notes: "Lenses - convex and concave. Ray diagrams and image formation by lenses. The lens formula." }
        ]
      },
      {
        id: "p2", 
        title: "Electricity",
        lectureCount: 0,
        notes: "The electricity chapter covers electric current, potential difference, resistance, and circuits. Learn about Ohm's law, series and parallel connections, and the heating effect of current.",
        videos: [
          { id: "p2v1", title: "Electric Current and Circuit", embedId: "9PuQlJjA2r4" },
          { id: "p2v2", title: "Ohm's Law", embedId: "Fc-X_ced_X4" },
          { id: "p2v3", title: "Resistance in Series", embedId: "0Mv962HT2-Y" },
          { id: "p2v4", title: "Resistance in Parallel", embedId: "3GY4fHfF7C4" },
          { id: "p2v5", title: "Heating Effect of Current", embedId: "WbNCYsXwHac" },
          { id: "p2v6", title: "Electric Power and Energy", embedId: "VJQ8nKkxbP8" }
        ]
      }
    ],

    // Similar structures for other subjects...
    "chemistry": [
      {
        id: "c1",
        title: "Chemical Reactions and Equations",
        lectureCount: 2,
        notes: "This chapter explores the fundamentals of chemical reactions, how to write and balance chemical equations, and understand different types of chemical reactions.",
        videos: [
          { id: "c1v1", title: "Lecture 1", embedId: "beShhD5mvPw" },
          { id: "c1v2", title: "Lecture 2", embedId: "0iMyw26ySMM" },
          // { id: "c1v3", title: "Types of Chemical Reactions", embedId: "FzA-jpBq6ME" },
          // { id: "c1v4", title: "Oxidation and Reduction", embedId: "5rtJdjas-mY" },
          // { id: "c1v5", title: "Effects of Oxidation in Daily Life", embedId: "QNGp3q5odPs" },
          // { id: "c1v6", title: "Balancing Chemical Equations", embedId: "_B735turDoM" }
        ]
      }
    ],
    "biology": [
      {
        id: "b1",
        title: "Life Processes",
        lectureCount: 7,
        notes: "Life processes are the vital functions that maintain living organisms. This chapter covers nutrition, respiration, transportation, and excretion in various organisms.",
        videos: [
          { id: "b1v1", title: "Lecture 1", embedId: "Hf5m7jSZtLY?si=BZT6WHra3H3eRz0K" },
          { id: "b1v2", title: "Lecture 2", embedId: "qBIxDAbI#xjpjYsxJczNymZuHNoz-3JbupmEuKnw5ZWLJBTuOdVU" },
          { id: "b1v3", title: "Lecture 3", embedId: "XsAsdfKZRdI" },
          { id: "b1v4", title: "Lecture 4", embedId: "rfFWi6c78z8?si=z36l9vjVpQcBAOrZ" },
          { id: "b1v5", title: "Lecture 5", embedId: "tMzg6Uz7Zv0" },
          { id: "b1v6", title: "Lecture 6", embedId: "oZHojqUyg84" },
          { id: "b1v7", title: "Lecture 7", embedId: "pZ7OMFEsdjw" },
        ]
      }
    ],
    "history": [
      {
        id: "h1",
        title: "The Rise of Nationalism in Europe",
        lectureCount: 6,
        notes: "This chapter explores how nationalism emerged in Europe during the 19th century, influencing the formation of nation-states and reshaping political boundaries.",
        videos: [
          { id: "h1v1", title: "Lecture 1", embedId: "anjfbI_bZco?si=tNTI80l0iX0xjXMY" },
          { id: "h1v2", title: "Lecture 2", embedId: "CBGy6vIHrqM" },
          { id: "h1v3", title: "Lecture 3", embedId: "D6jrrF7HcUQ" },
          { id: "h1v4", title: "Lecture 4", embedId: "-JDf-pmqE1I" },
          { id: "h1v5", title: "Lecture 5", embedId: "2FPWXRGSi4o" },
          { id: "h1v6", title: "Lecture 6", embedId: "cOcRTNozPKI" }
        ]
      }
    ],
    "geography": [
      {
        id: "g1",
        title: "Resources and Development",
        lectureCount: 0,
        notes: "This chapter examines various resources, their classification, development, and conservation. It covers land resources, soil resources, and sustainable resource management.",
        videos: [
          { id: "g1v1", title: "Types of Resources", embedId: "E-M5cN288Gc" },
          { id: "g1v2", title: "Development of Resources", embedId: "jW36Ft8rsPQ" },
          { id: "g1v3", title: "Resource Planning", embedId: "CuhC-w8ZvAM" },
          { id: "g1v4", title: "Land Resources", embedId: "o9ox9EWiBsQ" },
          { id: "g1v5", title: "Soil Resources", embedId: "uLORNbsY_NU" },
          { id: "g1v6", title: "Land Degradation and Conservation", embedId: "8nDdQJQf5XE" }
        ]
      }
    ],
    "civics": [
      {
        id: "cv1",
        title: "Power Sharing",
        lectureCount: 0,
        notes: "Power sharing is the distribution of power among different organs of government. This chapter examines various forms of power sharing with case studies of Belgium and Sri Lanka.",
        videos: [
          { id: "cv1v1", title: "Introduction to Power Sharing", embedId: "YwXJxGlb4Y0" },
          { id: "cv1v2", title: "Forms of Power Sharing", embedId: "vRbZ2QEgUmE" },
          { id: "cv1v3", title: "Case Study: Belgium", embedId: "HQoYPfElYcI" },
          { id: "cv1v4", title: "Case Study: Sri Lanka", embedId: "EW-oe5pvIQo" },
          { id: "cv1v5", title: "Majoritarianism vs Power Sharing", embedId: "NEMRsvIOjds" },
          { id: "cv1v6", title: "Importance of Power Sharing", embedId: "uPqJPshkZeg" }
        ]
      }
    ],
    "economics": [
      {
        id: "e1",
        title: "Development",
        lectureCount: 0,
        notes: "Development refers to the progress of a country in terms of economic growth, quality of life, and sustainability. This chapter covers various aspects and indicators of development.",
        videos: [
          { id: "e1v1", title: "Introduction to Development", embedId: "7DbfMNdBIOk" },
          { id: "e1v2", title: "Different People, Different Goals", embedId: "gQqUPiYTTAc" },
          { id: "e1v3", title: "National Development", embedId: "XxLrQR8sZxw" },
          { id: "e1v4", title: "Comparison of Countries", embedId: "y4FGJt9pOCo" },
          { id: "e1v5", title: "Income and Other Development Indicators", embedId: "yAtLd8TywfE" },
          { id: "e1v6", title: "Sustainable Development", embedId: "1_gG40c4oGo" }
        ]
      }
    ],
    "hindi": [
      {
        id: "hn1",
        title: "Kritika",
        lectureCount: 1,
        notes: "क्षितिज भाग 2 हिंदी साहित्य का एक महत्वपूर्ण संग्रह है। इसमें सूरदास, तुलसीदास, जयशंकर प्रसाद जैसे प्रसिद्ध कवियों की रचनाएँ शामिल हैं।",
        videos: [
          { id: "hn1v1", title: "Mata Ka Anchal", embedId: "Ankz-CJDdNA?si=kdULQutYByfeSOI2" },
          // { id: "hn1v2", title: "तुलसीदास - राम-लक्ष्मण-परशुराम संवाद", embedId: "VsZg9UlNEhw" },
          // { id: "hn1v3", title: "देव - भ्रमरगीत", embedId: "mMLUlNnAk_g" },
          // { id: "hn1v4", title: "जयशंकर प्रसाद - आत्मकथ्य", embedId: "xr6qlRZdTcs" },
          // { id: "hn1v5", title: "सूर्यकांत त्रिपाठी निराला - उत्साह और अट नहीं रही", embedId: "Z5NAx3xb9Os" },
          // { id: "hn1v6", title: "नागार्जुन - यह दंतुरित मुसकान", embedId: "8EjJGMK9c7w" }
        ]
      }
    ],
    "english": [
      {
        id: "en1",
        title: "First Flight",
        lectureCount: 1,
        notes: "First Flight is a collection of prose and poetry. This chapter includes stories and poems that explore various themes like freedom, nature, adventure, and personal growth.",
        videos: [
          { id: "en1v1", title: "A Letter to God", embedId: "LiN8gE1Ded4?si=ryqXsGJj5DnAo_Gd" },
          { id: "en1v2", title: "The Triump Of Surgery", embedId: "_aDKfbf9MR0" },
        ]
      }
    ],
    "hindi-grammar": [
      {
        id: "hg1",
        title: "व्याकरण",
        lectureCount: 1,
        notes: "हिंदी व्याकरण भाषा की आधारशिला है। इस अध्याय में शब्द, पद, उपसर्ग, प्रत्यय, समास, वाक्य भेद और अलंकार जैसे महत्वपूर्ण विषयों का अध्ययन किया जाएगा।",
        videos: [
          { id: "hg1v1", title: "Alankar", embedId: "QM-yuJ-IJco?si=RG9aMYJWi8gvEJzY" },
        ]
      }
    ]
  };

  return chaptersMap[subjectId] || [];
};