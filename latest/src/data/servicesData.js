import { FiTruck, FiBox, FiLayers, FiSettings, FiDroplet, FiMap, FiActivity, FiZap } from 'react-icons/fi';

export const servicesData = [
  {
    id: 1,
    slug: "road-construction",
    title: "Road & Highway Construction",
    shortDescription: "End-to-end development of national highways, state roads, and urban expressways.",
    fullDescription: "We specialize in the construction of high-quality asphalt and concrete roads. Utilizing our in-house Hotmix and RMC plants, we ensure superior material quality and timely execution for critical connectivity projects.",
    icon: "FiMap",
    image: "/images/services/road-main.jpg",
    specs: [
      { label: "Material Control", value: "In-house Hotmix & RMC" },
      { label: "Pavement Type", value: "Flexible & Rigid" },
      { label: "Compliance", value: "IRC Standards" }
    ]
  },
  {
    id: 2,
    slug: "bridge-construction",
    title: "Bridge & Flyover Construction",
    shortDescription: "Sophisticated engineering for river bridges, flyovers, and ROBs.",
    fullDescription: "Our bridge engineering division focuses on complex structures, including pre-stressed concrete, steel girders, and culverts, ensuring structural longevity and architectural precision.",
    icon: "FiLayers",
    image: "/images/services/bridge-main.jpg",
    specs: [
      { label: "Methodology", value: "Pre-cast & Cast-in-situ" },
      { label: "Load Capacity", value: "IRC Class 70R" },
      { label: "Tech", value: "Modern Formwork" }
    ]
  },
  {
    id: 3,
    slug: "rmc-supply",
    title: "Ready Mix Concrete (RMC)",
    shortDescription: "Premium grade concrete supply for various construction needs.",
    fullDescription: "Equipped with automated batching plants, we supply M10 to M80 grade concrete with precise mix designs, ensuring consistency and high performance for all infrastructural requirements.",
    icon: "FiBox",
    image: "/images/services/rmc-main.jpg",
    specs: [
      { label: "Capacity", value: "60-120 Cu.m/Hr" },
      { label: "Quality Check", value: "NABL Standards" },
      { label: "Delivery", value: "Own Transit Mixers" }
    ]
  },
  {
    id: 4,
    slug: "hotmix-plant",
    title: "Hotmix Plant Operations",
    shortDescription: "High-volume production of bituminous mixes for road surfacing.",
    fullDescription: "Our state-of-the-art drum mix and batch mix plants produce premium bituminous macadam and asphalt concrete, vital for durable road surfaces across varying climates.",
    icon: "FiZap",
    image: "/images/services/hotmix-main.jpg",
    specs: [
      { label: "Plants", value: "3 Batch Mix Units" },
      { label: "Total Capacity", value: "240 TPH" }
    ]
  },
  {
    id: 5,
    slug: "stone-crushed-aggregates",
    title: "Stone Crusher & Aggregates",
    shortDescription: "Production of high-quality crushed aggregates and GSB material.",
    fullDescription: "Our in-house stone crushers provide the foundation for our projects, ensuring a steady supply of various sized aggregates (10mm, 20mm, 40mm) and manufactured sand.",
    icon: "FiSettings",
    image: "/images/services/crusher-main.jpg",
    specs: [
      { label: "Units", value: "4 Static Plants" },
      { label: "Material", value: "VSI Grade Aggregates" }
    ]
  },
  {
    id: 6,
    slug: "earthwork-excavation",
    title: "Earthwork & Excavation",
    shortDescription: "Large-scale land development, canal excavation and levelling.",
    fullDescription: "We manage massive earthmoving operations using our extensive fleet of dumpers, excavators, and graders, servicing both civil and irrigation sectors.",
    icon: "FiTruck",
    image: "/images/services/earthwork-main.jpg"
  }
];
