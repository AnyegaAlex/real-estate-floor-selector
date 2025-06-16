export const towers = [
  {
    id: 'A',
    name: 'Tower A',
    description: 'Premium residential tower with panoramic city views',
    floors: 15,
    totalUnits: 60,
  },
  {
    id: 'B',
    name: 'Tower B',
    description: 'Modern living spaces with garden views',
    floors: 12,
    totalUnits: 48,
  },
  {
    id: 'C',
    name: 'Tower C',
    description: 'Luxury penthouses and executive suites',
    floors: 10,
    totalUnits: 40,
  },
];

// Generate units (layouts) for each floor
export const getLayoutsForFloor = (towerId, floorId) => {
  const layoutTypes = ['Studio', '1BR', '2BR', '3BR'];

  return layoutTypes.map((type, index) => {
    const rooms = type === 'Studio' ? 0 : parseInt(type[0], 10) || 1;
    const areaSqFt = 600 + Math.floor(Math.random() * 500);
    const price = 200000 + Math.floor(Math.random() * 400000);

    return {
      id: `unit-${towerId}-${floorId}-${index + 1}`,
      name: type,
      area: `${areaSqFt} sq ft`,
      rooms,
      bathrooms: Math.max(1, Math.floor(rooms / 2) + 1),
      price,
      thumbnail: `/placeholder.svg?text=${encodeURIComponent(type)}+Thumbnail&width=300&height=200`,
      layoutImage: `/placeholder.svg?text=${encodeURIComponent(type)}+Layout+Floor+Plan&width=800&height=500`,
    };
  });
};

// Generate full list of floors with layouts
export const getFloors = (towerId, towerFloors = 15) => {
  return Array.from({ length: towerFloors }, (_, i) => {
    const floorNumber = i + 1;
    return {
      id: `floor-${towerId}-${floorNumber}`,
      number: floorNumber,
      label: `Floor ${floorNumber}`,
      units: getLayoutsForFloor(towerId, floorNumber),
    };
  });
};
