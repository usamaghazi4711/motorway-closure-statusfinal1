export const motorways = {
  'M-2': {
    name: 'M-2 (Islamabad - Lahore Motorway) 349 Km',
    northDir: 'towards Islamabad / Peshawar',
    southDir: 'towards Lahore',
    gradient: 'from-blue-500 to-blue-700',
    sections: [
      { name: 'Sec-III', start: 0, end: 6 },
      { name: 'Sec-II', start: 7, end: 13 },
      { name: 'Sec-I', start: 14, end: 22 }
    ],
    plazas: [
      'Islamabad Main Toll Plaza MTP (349 Km)', 'Thallian TP (343 Km)', 'Capital Smart City TP (332 Km)', 'Chakri TP (315 Km)', 
      'Neela Dhula TP (293 Km)', 'Balkasar TP (265 Km)', 'Kallar Kahar TP (242 Km)', 'Lillah TP (213 Km)', 'Bhera TP (198 Km)', 'Salam TP (176 Km)', 
      'Kot Momin TP (162 Km)', 'Sialmore TP (136 Km)', 'Pindi Bhattian TP (116 Km)', 'Kot Sarwar TP (98 Km)', 'Khanqah Dogran TP (82 Km)', 
      'Hiran Minar TP (52 Km)', 'Sheikhupura TP (46 Km)', 'Kot Pindi Das TP (30 Km)', 'Kala Shah Kaku TP (26 Km)', 
      'Kot Abdul Malik TP (22 Km)', 'Faizpur TP (16 Km)', 'Ravi MTP (12 Km)', 'Babu Sabu TP (09 Km)'
    ]
  },
  'M-1': {
    name: 'M-1 (Islamabad - Peshawar Motorway) 147 Km',
    northDir: 'towards Peshawar',
    southDir: 'towards Islamabad / Lahore',
    gradient: 'from-green-500 to-green-700',
    sections: [
      { name: 'Sec-I', start: 0, end: 6 },
      { name: 'Sec-II', start: 7, end: 12 }
    ],
    plazas: [
      'STP Islamabad (351 Km)', 'Fateh Jhang TP (353 Km)', 'AWT / Sangjani TP (359 Km)', 'Brahma Bahtar TP (376 Km)', 'Burhan TP (387 Km)',
      'Ghazi TP (398 Km)', 'Chach TP (405 Km)', 'Swabi TP (420 Km)', 'Kernal Sher Khan TP (439 Km)', 'Wali TP (450 Km)',
      'Rashakai TP (458 Km)', 'Charsadda TP (480 Km)', 'Peshawar MTP (498 Km)'
    ]
  },
  'M-14': {
    name: 'M-14 (Hakla - D.I. Khan) 293 Km',
    northDir: 'towards Islamabad / Peshawar',
    southDir: 'towards D.I. Khan',
    gradient: 'from-orange-500 to-orange-700',
    sections: [
      { name: 'Sec-I', start: 0, end: 4 },
      { name: 'Sec-II', start: 5, end: 9 }
    ],
    plazas: [
      'Fateh Jang TP (25 Km)', 'Pindi Gheb TP (64 Km)', 'Kharapa TP (76 Km)', 'Tarap TP (114 Km)', 'Daud Khel MTP (156 Km)',
      'Kot Bellian TP (167 Km)', 'Essa Khel TP (210 Km)', 'Kundal TP (220 Km)', 'Abdul Khel TP (266 Km)', 'Yarik MTP (293 Km)'
    ]
  },
  'E-35 / M-15': {
    name: 'E-35 / M-15 (Hazara Motorway) 96 Km',
    northDir: 'towards Gilgit / Mansehra',
    southDir: 'towards Islamabad / Peshawar',
    gradient: 'from-purple-500 to-purple-700',
    sections: [],
    plazas: [
      'Jarikas TP (18 Km)', 'Hattar TP (24 Km)', 'Haripur TP (29 Km)', 'Shah Maqsood TP (45 Km)', 'Havelian MTP (61 Km)',
      'Qalandarabad TP (84 Km)', 'Mansehra-1 TP (95 Km)', 'Mansehra-2 MTP (96 Km)'
    ]
  },
  'N-75 / IMDC': {
    name: 'N-75 / IMDC (Murree Expressway)',
    northDir: 'towards Murree',
    southDir: 'towards Islamabad',
    gradient: 'from-teal-500 to-teal-700',
    sections: [],
    plazas: ['Phulgran (17 Mile Toll Plaza)']
  }
};

export const reasons = [
  { id: 'fog', label: 'Due to Fog', shortLabel: 'Fog' },
  { id: 'accident', label: 'Due to Accident', shortLabel: 'Accident' },
  { id: 'law_order', label: 'Due to Law & Order', shortLabel: 'Law & Order' }
];
