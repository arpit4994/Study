export const getChaptersForSubject = (subjectId) => {
  const chaptersMap = {
    "maths": [
      {
        id: "m1",
        title: "Real Numbers",
        lectureCount: 6,
        notes: "Trying to provide",
        videos: [
          { id: "m1v1", title: "Lecture 1", embedId: "C-9jpswxDfE?si=tYpUm1b3Mk-IvWX0", notes: "Trying to provide" },
          { id: "m1v2", title: "Lecture 2", embedId: "aXDABF1urLc?si=Bc-pnczhorTi2hOH", notes: "Trying to provide" },
          { id: "m1v3", title: "Lecture 3", embedId: "P7j4OqTOfl8", notes: "Trying to provide" },
          { id: "m1v4", title: "Lecture 4", embedId: "G-a7PIdgTlY", notes: "Trying to provide" },
          { id: "m1v5", title: "Lecture 5", embedId: "xWwStBoQSmE", notes: "Trying to provide" },
          { id: "m1v6", title: "Lecture 6", embedId: "tow75H2bzQQ", notes: "Trying to provide" }
        ]
      },
      {
        id: "m2",
        title: "Polynomials",
        lectureCount: 6,
        notes: "Trying to provide",
        videos: [
          { id: "m2v1", title: "Lecture 1", embedId: "DkucQB5q9fA", notes: "Trying to provide" },
          { id: "m2v2", title: "Lecture 2", embedId: "dUdDOBbBUwM?si=GYDeaKzDWvsyDoh5", notes: "Trying to provide" },
          { id: "m2v3", title: "Lecture 3", embedId: "xbZzPWJFL88", notes: "Trying to provide" },
          { id: "m2v4", title: "Lecture 4", embedId: "xOdg4RipkO0?si=RW0reoRaoTVI8uqg", notes: "Trying to provide" },
          { id: "m2v5", title: "Lecture 5", embedId: "yHnshAM9qAU", notes: "Trying to provide" },
          { id: "m2v6", title: "Lecture 6", embedId: "IztF5bGHfC8", notes: "Trying to provide" },
        ]
      },
      {
        id: "m3",
        title: "Linear Equation In Two Variable",
        lectureCount: 2,
        notes: "Trying to provide",
        videos: [
          { id: "m3v1", title: "Lecture 1", embedId: "rwdGOUq-fyA", notes: "Trying to provide" },
          { id: "m3v2", title: "Lecture 2", embedId: "wuaJGiT2rBM", notes: "Trying to provide" },
        ]
      }
    ],
    "physics": [
      {
        id: "p1",
        title: "Light - Reflection and Refraction",
        lectureCount: 4,
        notes: "Trying to provide",
        videos: [
          { id: "p1v1", title: "Lecture 1", embedId: "ClVnZqf08CE?si=s0Jgle5DcdFXoetL", notes: "Trying to provide" },
          { id: "p1v2", title: "Lecture 2", embedId: "1jdtphKCN4k", notes: "Trying to provide" },
          { id: "p1v3", title: "Lecture 3", embedId: "jsK_kNRMCoE", notes: "Trying to provide" },
          { id: "p1v4", title: "Lecture 4", embedId: "QJ6ofa7xEGM?si=PC6rmIB28s6yumUU", notes: "Trying to provide" },
          { id: "p1v5", title: "Lecture 5", embedId: "HXmFbeElCkw", notes: "Trying to provide" },
          { id: "p1v6", title: "Lecture 6", embedId: "x5aMhHrqmfU", notes: "Trying to provide" }
        ]
      },
      {
        id: "p2", 
        title: "Electricity",
        lectureCount: 0,
        notes: "Trying to provide",
        videos: [
          // { id: "p2v1", title: "Electric Current and Circuit", embedId: "9PuQlJjA2r4", notes: "Trying to provide" },
          // { id: "p2v2", title: "Ohm's Law", embedId: "Fc-X_ced_X4", notes: "Trying to provide" },
          // { id: "p2v3", title: "Resistance in Series", embedId: "0Mv962HT2-Y", notes: "Trying to provide" },
          // { id: "p2v4", title: "Resistance in Parallel", embedId: "3GY4fHfF7C4", notes: "Trying to provide" },
          // { id: "p2v5", title: "Heating Effect of Current", embedId: "WbNCYsXwHac", notes: "Trying to provide" },
          // { id: "p2v6", title: "Electric Power and Energy", embedId: "VJQ8nKkxbP8", notes: "Trying to provide" }
        ]
      }
    ],
    "chemistry": [
      {
        id: "c1",
        title: "Chemical Reactions and Equations",
        lectureCount: 4,
        notes: "Trying to provide",
        videos: [
          { id: "c1v1", title: "Lecture 1", embedId: "beShhD5mvPw", notes: "Trying to provide" },
          { id: "c1v2", title: "Lecture 2", embedId: "0iMyw26ySMM", notes: "Trying to provide" },
          { id: "c1v3", title: "Lecture 3", embedId: "S4liNALA6Xg", notes: "Trying to provide" },
          { id: "c1v4", title: "Lecture 4", embedId: "y2JDeZlW3FM", notes: "Trying to provide" },
        ]
      }
    ],
    "biology": [
      {
        id: "b1",
        title: "Life Processes",
        lectureCount: 10,
        notes: "Trying to provide",
        videos: [
          { id: "b1v1", title: "Lecture 1", embedId: "Hf5m7jSZtLY?si=BZT6WHra3H3eRz0K", notes: "Trying to provide" },
          { id: "b1v2", title: "Lecture 2", embedId: "qBIxDAbI#xjpjYsxJczNymZuHNoz-3JbupmEuKnw5ZWLJBTuOdVU", notes: "Trying to provide" },
          { id: "b1v3", title: "Lecture 3", embedId: "XsAsdfKZRdI", notes: "Trying to provide" },
          { id: "b1v4", title: "Lecture 4", embedId: "rfFWi6c78z8?si=z36l9vjVpQcBAOrZ", notes: "Trying to provide" },
          { id: "b1v5", title: "Lecture 5", embedId: "tMzg6Uz7Zv0", notes: "Trying to provide" },
          { id: "b1v6", title: "Lecture 6", embedId: "oZHojqUyg84", notes: "Trying to provide" },
          { id: "b1v7", title: "Lecture 7", embedId: "pZ7OMFEsdjw", notes: "Trying to provide" },
          { id: "b1v8", title: "Lecture 8", embedId: "F5KALzlAnqc?si=o1CRRgpVEYzNqyZH", notes: "Trying to provide" },
          { id: "b1v9", title: "Lecture 9", embedId: "", notes: "Trying to provide" },
          { id: "b1v10", title: "Lecture 10", embedId: "v81qHdqEwDg", notes: "Trying to provide" },
        ]
      }
    ],
    "history": [
      {
        id: "h1",
        title: "The Rise of Nationalism in Europe",
        lectureCount: 6,
        notes: "Trying to provide",
        videos: [
          { id: "h1v1", title: "Lecture 1", embedId: "anjfbI_bZco?si=tNTI80l0iX0xjXMY", notes: "Trying to provide" },
          { id: "h1v2", title: "Lecture 2", embedId: "CBGy6vIHrqM", notes: "Trying to provide" },
          { id: "h1v3", title: "Lecture 3", embedId: "D6jrrF7HcUQ", notes: "Trying to provide" },
          { id: "h1v4", title: "Lecture 4", embedId: "-JDf-pmqE1I", notes: "Trying to provide" },
          { id: "h1v5", title: "Lecture 5", embedId: "2FPWXRGSi4o", notes: "Trying to provide" },
          { id: "h1v6", title: "Lecture 6", embedId: "cOcRTNozPKI", notes: "Trying to provide" }
        ]
      }
    ],
    "geography": [
      {
        id: "g1",
        title: "Resources and Development",
        lectureCount: 0,
        notes: "Trying to provide",
        videos: [
          { id: "g1v1", title: "Types of Resources", embedId: "E-M5cN288Gc", notes: "Trying to provide" },
          { id: "g1v2", title: "Development of Resources", embedId: "jW36Ft8rsPQ", notes: "Trying to provide" },
          { id: "g1v3", title: "Resource Planning", embedId: "CuhC-w8ZvAM", notes: "Trying to provide" },
          { id: "g1v4", title: "Land Resources", embedId: "o9ox9EWiBsQ", notes: "Trying to provide" },
          { id: "g1v5", title: "Soil Resources", embedId: "uLORNbsY_NU", notes: "Trying to provide" },
          { id: "g1v6", title: "Land Degradation and Conservation", embedId: "8nDdQJQf5XE", notes: "Trying to provide" }
        ]
      }
    ],
    "civics": [
      {
        id: "cv1",
        title: "Power Sharing",
        lectureCount: 2,
        notes: "Trying to provide",
        videos: [
          { id: "cv1v1", title: "Lecture 1", embedId: "", notes: "Trying to provide" },
          { id: "cv1v2", title: "Lecture 2", embedId: "FDCHornHvKc", notes: "Trying to provide" },
        ]
      }
    ],
    "economics": [
      {
        id: "e1",
        title: "Development",
        lectureCount: 0,
        notes: "Trying to provide",
        videos: [
          { id: "e1v1", title: "Introduction to Development", embedId: "7DbfMNdBIOk", notes: "Trying to provide" },
          { id: "e1v2", title: "Different People, Different Goals", embedId: "gQqUPiYTTAc", notes: "Trying to provide" },
          { id: "e1v3", title: "National Development", embedId: "XxLrQR8sZxw", notes: "Trying to provide" },
          { id: "e1v4", title: "Comparison of Countries", embedId: "y4FGJt9pOCo", notes: "Trying to provide" },
          { id: "e1v5", title: "Income and Other Development Indicators", embedId: "yAtLd8TywfE", notes: "Trying to provide" },
          { id: "e1v6", title: "Sustainable Development", embedId: "1_gG40c4oGo", notes: "Trying to provide" }
        ]
      }
    ],
    "hindi": [
      {
        id: "hn1",
        title: "Kritika",
        lectureCount: 2,
        notes: "Trying to provide",
        videos: [
          { id: "hn1v1", title: "Mata Ka Anchal", embedId: "Ankz-CJDdNA?si=kdULQutYByfeSOI2", notes: "Trying to provide" },
          { id: "hn1v2", title: "saana saana hath jodi", embedId: "qOtSsAIXaSY?si=c3JYkHWZtEL7vTuv", notes: "Trying to provide" }
        ]
      }
    ],
    "english": [
      {
        id: "en1",
        title: "First Flight",
        lectureCount: 2,
        notes: "Trying to provide",
        videos: [
          { id: "en1v1", title: "A Letter to God", embedId: "LiN8gE1Ded4?si=ryqXsGJj5DnAo_Gd", notes: "Trying to provide" },
          { id: "en1v2", title: "Dust Of Snow & Fire and Ice", embedId: "5iUi7qxbbjw?si=fFdslBU9ilR02v_Y", notes: "Trying to provide" }
        ]
      },
      {
        id: "en2",
        title: "Footprint",
        lectureCount: 1,
        notes: "Trying to provide",
        videos: [
          { id: "en2v1", title: "The Triump Of Surgery", embedId: "_aDKfbf9MR0", notes: "Trying to provide" }
        ]
      }
    ],
    "hindi-grammar": [
      {
        id: "hg1",
        title: "व्याकरण",
        lectureCount: 1,
        notes: "Trying to provide",
        videos: [
          { id: "hg1v1", title: "Alankar", embedId: "QM-yuJ-IJco?si=RG9aMYJWi8gvEJzY", notes: "Trying to provide" }
        ]
      }
    ]
  };

  return chaptersMap[subjectId] || [];
};