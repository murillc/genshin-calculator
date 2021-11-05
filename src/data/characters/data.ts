
export const characters: {[key: string]: any} = {
  "Keqing": {
    baseHP: [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103],
    baseATK: [25, 65, 87, 130, 145, 167, 187, 209, 225, 247, 262, 285, 300, 323],
    normal_attack: {
      charged: [76.8, 83.05, 89.3, 98.23, 104.48, 111.63, 121.45, 131.27, 141.09, 151.81, 162.53, 173.24, 183.96, 194.67, 205.39],
    },
    skill: {
      lightning_stiletto: [50.4, 54.18, 57.96, 63, 66.78, 70.56, 75.6, 80.64, 85.68, 90.72, 95.76, 100.8, 107.1, 113.4, 119.7]
    },
    burst: {
      skill: [88, 94.6, 101.2, 110, 116.6, 123.2, 132, 140.8, 149.6, 158.4, 167.2, 176, 187, 198, 209],
      consecutive_slash: [24, 25.8, 27.6, 30, 31.8, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 51, 54, 57],
      last_attack: [188.8, 202.96, 217.12, 236, 250.16, 264.32, 283.2, 302.08, 320.96, 339.84, 358.72, 377.6, 401.2, 424.8, 448.4],
    },
    talents: {
      normal_attack: {
        title: "Yunlai Swordsmanship",
        description: ""
      },
      skill: {
        title: "Stellar Restoration",
        description: "Hurls a Lightning Stiletto that annihilates her opponents like the swift thunder. When the Stiletto hits its target, it deals Electro DMG to opponents in a small AoE, and places a Stiletto Mark on the spot hit."
      },
      burst: {
        title: "Starward Sword",
        description: "Keqing unleashes the power of lightning, dealing Electro DMG in an AoE. She then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents simultaneously that deal multiple instances of Electro DMG. The final attack deals massive AoE Electro DMG. "
      }
    }
  },
  "Kayaka": {
    baseHP: [1001, 2597, 3455, 5170, 5779, 6649, 7462, 8341, 8951, 9838, 10448, 11345, 11964, 12858],
    baseATK: [27, 69, 92, 138, 154, 177, 198, 222, 238, 262, 278, 302, 318, 342],
    normal_attack: {
      charged: [55.13, 59.61, 64.1, 70.51, 75, 80.13, 87.18, 94.23, 101.28, 108.97, 116.66, 124.35, 132.05, 139.74, 147.43],
    },
    skill: {
      skill: [239.2, 257.14, 275.08, 299, 316.94, 334.88, 358.8, 382.72, 406.64, 430.56, 454.48, 478.4, 508.3, 538.2, 568.1]
    },
    burst: {
      cutting: [112.3, 120.72, 129.15, 140.38, 148.8, 157.22, 168.45, 179.68, 190.91, 202.14, 213.37, 224.6, 238.64, 252.68, 266.71],
      bloom: [168.45, 181.08, 193.72, 210.56, 223.2, 235.83, 252.68, 269.52, 286.36, 303.21, 320.05, 336.9, 357.96, 379.01, 400.07],
    },
    talents: {
      normal_attack: {
        title: "Kayaka Attack",
        description: "Row row row your boat"
      },
      skill: {
        title: "Kayaka Skill",
        description: "gently down the stream"
      },
      burst: {
        title: "Kayaka Burst",
        description: "Merrily merrily merrily merrily life is but a dream"
      }
    }
  },
    // {
    //   hit1: ,
    //   hit2: [86, 93, 100, 110, 117, 125, 136, 147, 158, 170, 182, 194, 206, 218, 230],
    // },
};

export const weapons = {
  "Favonious Sword": [41, 99, 125, 184, 210, 238, 264, 293, 319, 347, 373, 401, 427, 454],
  "Lion's Roar": [42, 109, 135, 205, 231, 266, 292, 327, 353, 388, 414, 449, 475, 510],
  "Mistsplitter": [48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674],
}

export const levels = [
  "1", // 0
  "20", // 1
  "20A", // 2
  "40", // 3
  "40A", // 4
  "50", // 5
  "50A", // 6
  "60", // 7
  "60A", // 8
  "70", // 9
  "70A", // 10
  "80", // 11
  "80A", // 12
  "90", // 13
];