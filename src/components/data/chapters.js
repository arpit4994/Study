export const getChaptersForSubject = (subjectId) => {
    const chaptersMap = {
      "maths": [
        {
          id: "m1",
          title: "Real Numbers",
          lectureCount: 8,
          videos: [
            { id: "m1v1", title: "Introduction to Real Numbers", embedId: "X1O61MqCLuE" },
            { id: "m1v2", title: "Euclid's Division Lemma", embedId: "oBOZ2WroiDk" },
            { id: "m1v3", title: "HCF and LCM", embedId: "BmhKdCHxcfA" },
            { id: "m1v4", title: "Irrational Numbers", embedId: "C_sshP6_fIw" },
            { id: "m1v5", title: "Rational Numbers and Their Decimal Expansions", embedId: "l8XZgR3DokE" },
            { id: "m1v6", title: "Real Numbers Practice Problems", embedId: "fUxMDil0BrY" }
          ]
        },
        {
          id: "m2",
          title: "Polynomials",
          lectureCount: 7,
          videos: [
            { id: "m2v1", title: "Introduction to Polynomials", embedId: "N8xX8H4MPrQ" },
            { id: "m2v2", title: "Zeroes of a Polynomial", embedId: "QT8g8zRySFo" },
            { id: "m2v3", title: "Factorization of Polynomials", embedId: "k-SKUz1-8pE" },
            { id: "m2v4", title: "Division Algorithm for Polynomials", embedId: "LL_F76mHLi4" },
            { id: "m2v5", title: "Remainder Theorem", embedId: "SDQXGBhjJSI" },
            { id: "m2v6", title: "Factor Theorem", embedId: "FQINh0QtjO8" }
          ]
        },
        {
          id: "m3",
          title: "Coordinate Geometry",
          lectureCount: 6,
          videos: [
            { id: "m3v1", title: "Introduction to Coordinate Geometry", embedId: "C9n8JkhfJTQ" },
            { id: "m3v2", title: "Distance Formula", embedId: "0dqMpX1zKv8" },
            { id: "m3v3", title: "Section Formula", embedId: "a44HwuBnm8I" },
            { id: "m3v4", title: "Area of a Triangle", embedId: "qWI8KLv6M0A" },
            { id: "m3v5", title: "Coordinate Geometry Applications", embedId: "1Z-Rt2NK_Zs" },
            { id: "m3v6", title: "Problem Solving in Coordinate Geometry", embedId: "FU80sHIdirM" }
          ]
        }
      ],
      "physics": [
        {
          id: "p1",
          title: "Light - Reflection and Refraction",
          lectureCount: 6,
          videos: [
            { id: "p1v1", title: "Introduction to Light", embedId: "p3UDSfGyjIg" },
            { id: "p1v2", title: "Reflection of Light", embedId: "vt-SG3DHjYA" },
            { id: "p1v3", title: "Laws of Reflection", embedId: "jsK_kNRMCoE" },
            { id: "p1v4", title: "Refraction of Light", embedId: "UD-BsR2ovpQ" },
            { id: "p1v5", title: "Snell's Law", embedId: "HXmFbeElCkw" },
            { id: "p1v6", title: "Total Internal Reflection", embedId: "kcRUxzr6mWs" }
          ]
        },
        {
          id: "p2", 
          title: "Electricity",
          lectureCount: 8,
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
          lectureCount: 6,
          videos: [
            { id: "c1v1", title: "Introduction to Chemical Reactions", embedId: "sK5nJuDigiY" },
            { id: "c1v2", title: "Writing Chemical Equations", embedId: "U4_1Qb_RiYM" },
            { id: "c1v3", title: "Types of Chemical Reactions", embedId: "FzA-jpBq6ME" },
            { id: "c1v4", title: "Oxidation and Reduction", embedId: "5rtJdjas-mY" },
            { id: "c1v5", title: "Effects of Oxidation in Daily Life", embedId: "QNGp3q5odPs" },
            { id: "c1v6", title: "Balancing Chemical Equations", embedId: "_B735turDoM" }
          ]
        }
      ],
      "biology": [
        {
          id: "b1",
          title: "Life Processes",
          lectureCount: 6,
          videos: [
            { id: "b1v1", title: "Introduction to Life Processes", embedId: "TIV460AQUCk" },
            { id: "b1v2", title: "Nutrition in Plants", embedId: "gLcsnrGHMGw" },
            { id: "b1v3", title: "Nutrition in Animals", embedId: "hYBk-Cnjus0" },
            { id: "b1v4", title: "Respiration", embedId: "LCfJ_2ehECY" },
            { id: "b1v5", title: "Transportation in Plants and Animals", embedId: "9JvP_16wNqA" },
            { id: "b1v6", title: "Excretion", embedId: "GXqBq-3AxYw" }
          ]
        }
      ],
      "history": [
        {
          id: "h1",
          title: "The Rise of Nationalism in Europe",
          lectureCount: 6,
          videos: [
            { id: "h1v1", title: "Introduction to Nationalism", embedId: "EIz7nY3A0lA" },
            { id: "h1v2", title: "The French Revolution", embedId: "KYC2GU3WBNE" },
            { id: "h1v3", title: "The Making of Nationalism in Europe", embedId: "Yk9T47-ESLw" },
            { id: "h1v4", title: "The Age of Revolutions", embedId: "a4voJ4Wdf4Y" },
            { id: "h1v5", title: "The Unification of Italy", embedId: "MkbVK6D029w" },
            { id: "h1v6", title: "The Unification of Germany", embedId: "ME_tV4jZEU0" }
          ]
        }
      ],
      "geography": [
        {
          id: "g1",
          title: "Resources and Development",
          lectureCount: 6,
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
          lectureCount: 6,
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
          lectureCount: 6,
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
          title: "क्षितिज भाग 2",
          lectureCount: 6,
          videos: [
            { id: "hn1v1", title: "सूरदास - पद", embedId: "NpOdYwnRU8E" },
            { id: "hn1v2", title: "तुलसीदास - राम-लक्ष्मण-परशुराम संवाद", embedId: "VsZg9UlNEhw" },
            { id: "hn1v3", title: "देव - भ्रमरगीत", embedId: "mMLUlNnAk_g" },
            { id: "hn1v4", title: "जयशंकर प्रसाद - आत्मकथ्य", embedId: "xr6qlRZdTcs" },
            { id: "hn1v5", title: "सूर्यकांत त्रिपाठी निराला - उत्साह और अट नहीं रही", embedId: "Z5NAx3xb9Os" },
            { id: "hn1v6", title: "नागार्जुन - यह दंतुरित मुसकान", embedId: "8EjJGMK9c7w" }
          ]
        }
      ],
      "english": [
        {
          id: "en1",
          title: "First Flight",
          lectureCount: 6,
          videos: [
            { id: "en1v1", title: "A Letter to God", embedId: "nHEXpNzCdN4" },
            { id: "en1v2", title: "Dust of Snow & Fire and Ice", embedId: "KBk6OMiGV_o" },
            { id: "en1v3", title: "Nelson Mandela: Long Walk to Freedom", embedId: "IX_MZqLcSYg" },
            { id: "en1v4", title: "A Tiger in the Zoo", embedId: "Kz7kHgRx7lw" },
            { id: "en1v5", title: "His First Flight", embedId: "A1gJyqnQHxE" },
            { id: "en1v6", title: "Black Aeroplane", embedId: "xM1bpVaHJu0" }
          ]
        }
      ],
      "hindi-grammar": [
        {
          id: "hg1",
          title: "व्याकरण",
          lectureCount: 6,
          videos: [
            { id: "hg1v1", title: "शब्द और पद", embedId: "4-kf4nGlFpQ" },
            { id: "hg1v2", title: "अनुस्वार और अनुनासिक", embedId: "FyqZR-SJXik" },
            { id: "hg1v3", title: "उपसर्ग और प्रत्यय", embedId: "O1XbpRpGQoY" },
            { id: "hg1v4", title: "समास", embedId: "jH9ZsF8Qf3o" },
            { id: "hg1v5", title: "वाक्य भेद", embedId: "r8ZX5XveFHQ" },
            { id: "hg1v6", title: "अलंकार", embedId: "E8oHpvJA_wA" }
          ]
        }
      ]
    };
  
    return chaptersMap[subjectId] || [];
  };