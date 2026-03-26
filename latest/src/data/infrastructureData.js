export const infrastructureData = {
  rmcPlants: [
    { id: 1, name: "Baner Batching Plant", location: "Pune West", capacity: "60 Cu.m/hr", status: "Active" },
    { id: 2, name: "Chakan Industrial Plant", location: "Pune North", capacity: "120 Cu.m/hr", status: "Active" }
  ],
  hotmixPlants: [
    { id: 1, name: "Batch Mix Plant Unit 1", location: "Wagholi", capacity: "80 TPH", status: "Active" }
  ],
  stoneCrushers: [
    { id: 1, name: "VSI Crusher Unit", location: "Mulshi", capacity: "200 TPH", status: "Active" }
  ],
  fleet: [
    { type: "Excavators", count: 12, models: "Tata Hitachi, JCB" },
    { type: "Transit Mixers", count: 25, models: "Schwing Stetter" },
    { type: "Pavers", count: 5, models: "Vogele" },
    { type: "Dumpers & Tippers", count: 40, models: "Ashok Leyland, BharatBenz" }
  ]
};
