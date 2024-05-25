export const medicalStaff: Specialty[] = [
  {
    specialty: "Ortopedie și Traumatologie",
    doctors: [
      {
        name: "Dr. Victoria Alexandru",
        title: "Medic specialist ortopedie și traumatologie",
        competencies: ["chirurgie artroscopică"],
      },
      {
        name: "Dr. Vîlcu Iza Maria",
        title: "Medic specialist ortopedie",
        competencies: ["chirurgie sportivă"],
      },
    ],
  },
  {
    specialty: "Traumatologie Sportivă",
    doctors: [
      {
        name: "Dr. Sami",
        title: "Medic Rezident în Traumatologie",
        competencies: ["terapii cu concentrație plasmatică Matrix"],
      },
    ],
  },
  {
    specialty: "Ortopedie Pediatrică",
    doctors: [
      {
        name: "Dr. Velicea Alyssa Laura",
        title: "Medic primar ortopedie pediatrică",
        competencies: [
          "tratament deformări de ax al genunchilor 'Guided-growth'",
          "chirurgie pediatrică laparoscopică",
        ],
      },
    ],
  },
  {
    specialty: "Radiologie",
    doctors: [
      {
        name: "Dr. Vișan Ioana",
        title: "Medic Primar radiologie",
        competencies: [
          "radiologie intervențională",
          "tomografie computerizată",
        ],
      },
      {
        name: "Dr. Velea Darius",
        title: "Medic rezident în Radiologie",
        competencies: ["senologie imagistică", "termografie"],
      },
    ],
  },
  {
    specialty: "Fizioterapie",
    doctors: [
      {
        name: "Dr. Vîrlan Daria",
        title: "Medic Primar în fizioterapie",
        competencies: ["mecanoterapie", "termoterapie"],
      },
    ],
  },
  {
    specialty: "Cardiologie",
    doctors: [
      {
        name: "Dr. Vizireanu Șerban",
        title: "Medic specialist în cardiologie",
        competencies: [
          "ecocardiografie",
          "EKG traseu",
          "ecografie Doppler carotidă",
        ],
        additionalRoles: ["Șef lucrări UMF 'Carol Davila' București"],
      },
    ],
  },
  {
    specialty: "Medicina Internă",
    doctors: [
      {
        name: "Dr. Vătafu Marius",
        title: "Medic Rezident în Medicina Internă",
        competencies: [
          "tratament poliartroze",
          "tratament discopatii ale coloanei vertebrale",
        ],
        additionalRoles: ["Șef Lucrări UMF 'Carol Davila' București"],
      },
    ],
  },
  {
    specialty: "Reumatologie",
    doctors: [
      {
        name: "Dr. Viezure Iulia",
        title: "Medic generalist în reumatologie",
        competencies: ["patologie osoasă hormonometabolică", "EMG"],
        additionalRoles: ["Manager clinică"],
      },
    ],
  },
  {
    specialty: "Medicina de Laborator",
    doctors: [
      {
        name: "Dr. Rose",
        title: "Medic rezident în Medicina de Laborator",
        competencies: ["prelevare", "procesare", "analiza probelor biologice"],
        additionalRoles: ["Asistent Universitar"],
      },
    ],
  },
  {
    specialty: "Imagistică",
    doctors: [
      {
        name: "Dr. Vizireanu Iarina",
        title: "Medic specialist în imagistică",
        competencies: ["RMN", "CT"],
      },
      {
        name: "Dr. Vică Cristina",
        title: "Medic specialist în imagistică",
        competencies: ["RMN"],
      },
    ],
  },
  {
    specialty: "Anestezie și Terapie Intensivă",
    doctors: [
      {
        name: "Dr. Velicu Elisa Octavia",
        title: "Medic specialist anestezie și terapie intensivă",
        competencies: [
          "toracocenteză",
          "cateterizare vene centrale",
          "administrare anestezie generală, regională și locală",
        ],
      },
      {
        name: "Dr. Vizitiu Paula Alexandra",
        title: "Medic rezident în anestezie și terapie intensivă",
        competencies: [
          "plasare de drene toracice",
          "tratament pacient critic cu diverse afecțiuni",
        ],
      },
    ],
  },
  {
    specialty: "Asistență Medicală",
    doctors: [
      {
        name: "Vitalia Andreea Beatrice",
        title: "Asistent general",
        competencies: [
          "evaluări comprehensive și sistemice",
          "evaluare, interpretare ale informațiilor și datelor obținute de la pacient",
        ],
      },
    ],
  },
];

export const commercialDirector: Director = {
  name: "Dr. Velicea Alyssa Laura",
  title: "Director Comercial",
};

export const financialDirector: Director = {
  name: "Velescu Alexandru",
  title: "Director Financiar",
  responsibilities: [
    "bugetare alocarea bugetelor pe departamente",
    "analiza financiară-analiza riscului, investiții, planificări financiare",
    "raportare financiară",
  ],
};

export interface Doctor {
  name: string;
  title: string;
  competencies: string[];
  additionalRoles?: string[];
}

export interface Specialty {
  specialty: string;
  doctors: Doctor[];
}

export interface Director {
  name: string;
  title: string;
  responsibilities?: string[];
}
