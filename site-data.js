// Editorial metadata derived from the researcher's supplied Google Scholar record.
// Keep Google Scholar as the complete public record and curate only the work visitors
// should encounter first.
export const site = {
  name: "João Paulo Zomer Machado",
  role: "Researcher, engineer & builder",
  location: "Research, engineering & software",
  bio: "I work across research, engineering, and software where difficult real-world problems need to be measured, understood, automated, or turned into working systems.",
  researchStatement: "My work moves between scientific research, instrumentation, and software: understanding how a system behaves, making uncertainty visible, and building tools that are useful beyond the experiment. I am drawn to problems that become clearer only after you try to make something work.",
  cvUrl: "",
  profiles: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=iRRAzJ8AAAAJ&hl=pt-PT&oi=ao",
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0000-0002-9053-7463",
    },
    {
      label: "GitHub",
      url: "https://github.com/jpzomer",
    },
  ],
};

export const publications = [
  {
    title: "Impact of angular speed calculation methods from encoder measurements on the test uncertainty of electric motor efficiency",
    authors: "João P. Z. Machado, Gabriel Thaler, Antonio L. S. Pacheco, Rodolfo C. C. Flesch",
    venue: "Metrology 4 (2), 164–180",
    year: 2024,
    tags: ["Measurement uncertainty", "Electric machines"],
    summary: "Compares encoder-based angular-speed calculation methods and their effect on electric-motor efficiency-test uncertainty.",
    featured: true,
    links: {
      paper: "https://www.mdpi.com/2673-8244/4/2/11",
      doi: "https://doi.org/10.3390/metrology4020011",
    },
  },
  {
    title: "Evaporating temperature estimation of refrigeration systems based on vibration data-driven soft sensors",
    authors: "Ahryman Seixas Busse de Siqueira Nascimento, João Paulo Zomer Machado, Leandro dos Santos Coelho, Rodolfo César Costa Flesch",
    venue: "International Journal of Refrigeration 168, 288–296",
    year: 2024,
    tags: ["Soft sensing", "Refrigeration"],
    summary: "Uses compressor-shell vibration and data-driven soft sensors to estimate evaporating temperature without a pressure transducer.",
    featured: true,
    links: {
      paper: "https://www.sciencedirect.com/science/article/pii/S0140700724002950",
      doi: "https://doi.org/10.1016/j.ijrefrig.2024.08.020",
    },
  },
  {
    title: "Automation of temperature measurement in induction motors of hermetic compressors based on the method of temperature rise by resistance",
    authors: "Murilo Ferreira Vitor, João Paulo Zomer Machado, Antonio Luiz Schalata Pacheco, Rodolfo Cesar Costa Flesch",
    venue: "IEEE Latin America Transactions 21 (1), 117–123",
    year: 2023,
    tags: ["Automation", "Electric machines", "Refrigeration"],
    summary: "Automates resistance-rise winding-temperature estimation for single-phase hermetic-compressor motors.",
    featured: true,
    links: {
      paper: "https://latamt.ieeer9.org/index.php/transactions/article/view/6949",
      doi: "https://doi.org/10.1109/TLA.2023.10015133",
      code: "https://github.com/jpzomer/automation-TRR",
    },
  },
  {
    title: "Differential efficiency testing method for power drive systems with measurement uncertainty analysis",
    authors: "João Paulo Zomer Machado, Rodolfo César Costa Flesch",
    venue: "IEEE Transactions on Instrumentation and Measurement 74, article 1015609, 1–9",
    year: 2025,
    tags: ["Measurement uncertainty", "Power drives"],
    summary: "Introduces differential efficiency measurements for power-drive systems with an uncertainty analysis focused on operating-point changes.",
    featured: true,
    links: {
      doi: "https://doi.org/10.1109/TIM.2025.3606023",
    },
  },
  {
    title: "Uncertainty Evaluation in Induction Motor Winding Temperature Estimates Based on Resistance Values",
    authors: "RCC Flesch, G Thaler, JPZ Machado, ALS Pacheco",
    venue: "IEEE Transactions on Instrumentation and Measurement 74, 1–8",
    year: 2025,
    tags: ["Measurement uncertainty", "Electric machines"],
  },
  {
    title: "Bearing heating open-loop control system to reduce variability in BLDC motor tests",
    authors: "JPZ Machado, RCC Flesch, MM Schaefer, RH de Santana",
    venue: "2023 7th International Symposium on Instrumentation Systems, Circuits and …",
    year: 2023,
    tags: ["Test systems", "Electric machines"],
  },
  {
    title: "Soft-sensing for compressor test time reduction with time-delay neural networks",
    authors: "BB Schwedersky, RCC Flesch, JPZ Machado, ASB Nascimento, …",
    venue: "ISA Transactions",
    year: 2026,
    tags: ["Soft sensing", "Machine learning", "Refrigeration"],
  },
  {
    title: "Intelligent air gap segmentation in electric motor color images using a self-organizing map",
    authors: "Bernardo Barancelli Schwedersky, João Paulo Zomer Machado, Rodolfo César Costa Flesch, Cassiano Montibeller",
    venue: "IEEE Access 13, 77879–77892",
    year: 2025,
    tags: ["Computer vision", "Electric machines"],
    summary: "Uses an image-specific self-organizing map to segment air gaps in color images of electric motors.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3564562",
    },
  },
  {
    title: "Metrologically Interpretable Soft-Sensing Technique for Non-Invasive Liquid Flow Estimation from Vibration Data",
    authors: "G Thaler, JPZ Machado, RCC Flesch, ALS Pacheco",
    venue: "Metrology 5 (1), 6",
    year: 2025,
    tags: ["Soft sensing", "Measurement uncertainty"],
  },
  {
    title: "Semi-supervised learning algorithm for running-in analysis on compressors",
    authors: "JL Machado, G Thaler, RCC Flesch, JPZ Machado",
    venue: "",
    year: 2024,
    tags: ["Machine learning", "Refrigeration"],
  },
  {
    title: "Improvement of a pressure rise test rig for cooling capacity inference of hermetic compressors based on ANNs",
    authors: "VT Barros, JPZ Machado, ALS Pacheco, RCC Flesch",
    venue: "Neural Computing and Applications 35 (34), 24357–24367",
    year: 2023,
    tags: ["Machine learning", "Test systems", "Refrigeration"],
  },
  {
    title: "Efeito da seleção de métricas de desempenho em modelos de aprendizado supervisionado para detecção de amaciamento em compressores",
    authors: "G Thaler, JVB Menegali, ASBS Nascimento, ALS Pacheco, RCC Flesch, …",
    venue: "Congresso Brasileiro de Automática — CBA 3 (1)",
    year: 2022,
    tags: ["Machine learning", "Refrigeration"],
  },
  {
    title: "Noninvasive Compressor Speed Estimation From Vibration Measurements Using ApFFT",
    authors: "G Thaler, JPZ Machado, RCC Flesch, V de C. Taveira",
    venue: "Journal of Control, Automation and Electrical Systems, 1–12",
    year: 2026,
    tags: ["Soft sensing", "Refrigeration"],
  },
  {
    title: "Non-Contact Vibration Measurement Method Using High-Speed Imaging Applied to Pipelines",
    authors: "C Montibeller, RCC Flesch, JPZ Machado, LR da Silva, A Lenzi, …",
    venue: "2025 IEEE 30th International Conference on Emerging Technologies and Factory …",
    year: 2025,
    tags: ["Computer vision", "Measurement"],
  },
  {
    title: "Thermal Evaluation of Variable Frequency Drives: Design and Metrological Validation of an Automated Test Rig for Industrial Applications",
    authors: "JR Silva, RCC Flesch, JPZ Machado",
    venue: "2025 IEEE 30th International Conference on Emerging Technologies and Factory …",
    year: 2025,
    tags: ["Test systems", "Measurement uncertainty", "Power drives"],
  },
  {
    title: "Non-Invasive Method for Estimating Oil Volume in Hermetic Systems",
    authors: "GH Ludwig, RCC Flesch, JPZ Machado",
    venue: "2025 IEEE 30th International Conference on Emerging Technologies and Factory …",
    year: 2025,
    tags: ["Soft sensing", "Refrigeration"],
  },
  {
    title: "Estimativa não invasiva de velocidade durante a partida de compressores a partir de medições de vibração",
    authors: "G Thaler, JPZ Machado, RCC Flesch, VC Taveira",
    venue: "Simpósio Brasileiro de Automação Inteligente — SBAI",
    year: 2025,
    tags: ["Soft sensing", "Refrigeration"],
  },
  {
    title: "Detecção de defeitos relacionados com fio de cobre na fabricação de motores elétricos utilizando visão computacional",
    authors: "JPZ Machado, BB Schwedersky, RCC Flesch, G Thaler",
    venue: "Simpósio Brasileiro de Automação Inteligente — SBAI",
    year: 2025,
    tags: ["Computer vision", "Electric machines"],
  },
  {
    title: "Prediction of Evaporating Temperature Based on Compressor Vibration Data Using CNNs and Autoencoders",
    authors: "VS Claudino, JPZ Machado, RCC Flesch, JP Brunoni",
    venue: "World Conference on Information Systems and Technologies, 443–454",
    year: 2025,
    tags: ["Machine learning", "Soft sensing", "Refrigeration"],
  },
  {
    title: "Automatic Test Stand to Impose Operating Suction and Discharge Conditions on Compressors",
    authors: "C Montibeller, G Thaler, RCC Flesch, JPZ Machado, GH Ludwig",
    venue: "",
    year: 2024,
    tags: ["Test systems", "Refrigeration"],
  },
  {
    title: "Desenvolvimento de um método não invasivo baseado em capacitância para estimação do volume de óleo em sistemas herméticos",
    authors: "GH Ludwig, C Montibeller, JPZ Machado, MF Vitor, ALS Pacheco, …",
    venue: "Simpósio Brasileiro de Automação Inteligente — SBAI 1 (2)",
    year: 2023,
    tags: ["Soft sensing", "Refrigeration"],
  },
  {
    title: "Análise experimental do efeito de estratégias de controle em características de resposta de motores de corrente contínua sem escovas",
    authors: "JPZ Machado",
    venue: "",
    year: 2023,
    tags: ["Control", "Electric machines"],
  },
  {
    title: "Aplicação de sistema de aquecimento de rolamentos para redução de variabilidade de ensaios em motores de corrente contínua sem escovas",
    authors: "JPZ Machado, RCC Flesch, MM Schaefer, G Thaler",
    venue: "Congresso Brasileiro de Automática — CBA 3 (1)",
    year: 2022,
    tags: ["Test systems", "Electric machines"],
  },
  {
    title: "Técnicas de sensoriamento virtual para estimação não invasiva de vazão de líquidos",
    authors: "RH de Santana, JL Machado, JPZ Machado, G Thaler, RCC Flesch",
    venue: "",
    year: null,
    tags: ["Soft sensing", "Measurement"],
  },
];


// Reserved for occasional technical notes, research thoughts, and engineering
// rabbit holes. Empty by design until there is real writing to publish.
export const notes = [];
