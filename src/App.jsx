import { useState } from 'react';
// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Icons
import {
  ArrowLeft,
  Building2,
  HomeIcon,
  ImageIcon,
  Currency,
} from 'lucide-react';

// Subcomponents
import TowerCard from "@/components/TowerCard";
import FloorList from "@/components/FloorList";
import LayoutList from "@/components/LayoutList";
import LayoutDetail from "@/components/LayoutDetail";
import Breadcrumbs from "@/components/Breadcrumbs";

// Mock tower data
import { towers } from './data/mockData';

export default function App() {
  // State to manage selected tower, floor, unit
  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [floors, setFloors] = useState([]);
  
  // Generate floor data dynamically for the selected tower
  const generateFloors = (towerFloors) =>
    Array.from({ length: towerFloors }, (_, i) => ({
      id: `floor-${i + 1}`,
      number: i + 1,
      units: generateUnits(i + 1),
    }));

  // Generate 4 mock unit types for each floor
  const generateUnits = (floorNumber) => {
    const types = ["Studio", "1BR", "2BR", "3BR"];
    return types.map((type, i) => {
      const rooms = type === "Studio" ? 0 : parseInt(type[0]) || 1;
      return {
        id: `unit-${floorNumber}-${i + 1}`,
        name: `Unit ${floorNumber}${String.fromCharCode(65 + i)}`,
        type,
        area: 450 + Math.floor(Math.random() * 800),
        rooms,
        bathrooms: Math.max(1, Math.floor(rooms / 2) + 1),
        price: 250000 + Math.floor(Math.random() * 500000),
        thumbnail: `/placeholder.svg?height=200&width=300&text=${type}+Layout`,
        layoutImage: `/placeholder.svg?height=600&width=800&text=${type}+Floor+Plan`,
      };
    });
  };

  // Format price with commas and currency
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  // Event: Tower selected → generate floors
  const handleTowerSelect = (tower) => {
    setSelectedTower(tower);
    setFloors(generateFloors(tower.floors || 10));
    setSelectedFloor(null);
    setSelectedUnit(null);
  };

  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
    setSelectedUnit(null);
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
  };

  const handleBack = () => {
    if (selectedUnit) return setSelectedUnit(null);
    if (selectedFloor) return setSelectedFloor(null);
    if (selectedTower) return setSelectedTower(null);
  };

  const handleBreadcrumbNav = {
    onHome: () => {
      setSelectedTower(null);
      setSelectedFloor(null);
      setSelectedUnit(null);
    },
    onTower: () => {
      setSelectedFloor(null);
      setSelectedUnit(null);
    },
    onFloor: () => {
      setSelectedUnit(null);
    },
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          selectedTower={selectedTower}
          selectedFloor={selectedFloor}
          selectedUnit={selectedUnit}
          {...handleBreadcrumbNav}
        />

        {/* Tower Selection */}
        {!selectedTower && (
          <section className="text-center">
            <div className="mx-auto max-w-4xl px-4">
              <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Towers</h1>
              <p className="text-lg text-gray-600 mb-8">
                Select a tower to explore available floors and units
              </p>

              {/* Grid container with responsive layout */}
              <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch space-y-4">
                {towers.map((tower) => (
                  <div key={tower.id} className="w-full max-w-md text-center bg-white p-4 rounded shadow">
                    <div className="flex justify-center mb-4">
                      <Building2 className="h-12 w-12 text-blue-600" /> {/* Icon */}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{tower.name}</h2>
                    <p className="text-gray-600 mb-4">{tower.description}</p>
                    <div className="flex justify-center gap-4 mb-4">
                      <div>
                        <p className="text-2xl font-bold">{tower.floors}</p>
                        <p className="text-sm text-gray-500">Floors</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{tower.floors * 4}</p>
                        <p className="text-sm text-gray-500">Units</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleTowerSelect(tower)}
                      className="w-full max-w-xs mx-auto"
                    >
                      View Floors
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Floor Selection */}
        {selectedTower && !selectedFloor && (
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="flex items-center gap-2 px-0 hover:bg-transparent text-gray-600"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-base">Back to Towers</span>
              </Button>
              <h2 className="text-2xl font-bold text-gray-900">{selectedTower.name}</h2>
            </div>
            
            <p className="text-gray-600 mb-8">Select a floor to view available units</p>
            
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {floors.map((floor) => (
                  <button
                    key={floor.id}
                    onClick={() => handleFloorSelect(floor)}
                    className="bg-white py-6 text-center hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    <div className="text-3xl font-semibold text-gray-900">{floor.number}</div>
                    <div className="text-base text-gray-600">Floor {floor.number}</div>
                    <div className="text-sm text-gray-500 mt-1">4 units</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Unit Selection */}
      {selectedFloor && !selectedUnit && (
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="flex items-center gap-2 px-0 hover:bg-transparent text-gray-600"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-base">Back to Floors</span>
            </Button>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedTower.name} - Floor {selectedFloor.number}
            </h2>
          </div>
          
          <p className="text-gray-600 mb-8">Select a unit to view detailed layout</p>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedFloor.units.map((unit) => (
                <Card 
                  key={unit.id} 
                  className="text-center p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleUnitSelect(unit)}
                >
                  <CardHeader className="text-xl font-bold">{unit.name}</CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p className="text-gray-600 text-right">Area:</p>
                      <p className="text-left">{unit.area} sq ft</p>
                      <p className="text-gray-600 text-right">Rooms:</p>
                      <p className="text-left">{unit.type}</p>
                      <p className="text-gray-600 text-right">Bathrooms:</p>
                      <p className="text-left">{unit.bathrooms}</p>
                    </div>
                    <p className="font-bold mt-4">{formatPrice(unit.price)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

    {/* Unit Detail */}
            {selectedUnit && (
              <div className="mx-auto max-w-2xl">
                <div className="flex justify-center items-center gap-4 mb-8">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-0 hover:bg-transparent text-gray-600"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="text-base">Back to Units</span>
                  </Button>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedUnit.name}</h2>
                    <p className="text-gray-600">
                      {selectedTower.name} - Floor {selectedFloor?.number}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-gray-500" />
                    </div>
                  </div>

                  <div>
                    <Card className="p-6 mb-4">
                      <div className="flex items-center mb-4">
                        <HomeIcon className="h-5 w-5 mr-2 text-blue-500" />
                        <h3 className="text-xl font-bold">Unit Details</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-600">Unit Type:</p>
                          <p className="font-semibold">{selectedUnit.type}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Area:</p>
                          <p className="font-semibold">{selectedUnit.area} sq ft</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Bedrooms:</p>
                          <p className="font-semibold">
                            {selectedUnit.type === 'Studio' ? 'Studio' : selectedUnit.rooms}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Bathrooms:</p>
                          <p className="font-semibold">{selectedUnit.bathrooms}</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 mb-4">
                      <div className="flex items-center mb-4">
                        <Currency className="h-5 w-5 mr-2 text-blue-500" />
                        <h3 className="text-xl font-bold">Pricing</h3>
                      </div>
                      <p className="text-2xl font-bold text-blue-500">{formatPrice(selectedUnit.price)}</p>
                      <p className="text-gray-600">
                        ${Math.round(selectedUnit.price / selectedUnit.area)} per sq ft
                      </p>
                    </Card>

                    <div className="bg-white p-6 rounded shadow">
                      <h3 className="text-xl font-bold mb-4">Features & Amenities</h3>
                      <ul className="space-y-2 text-gray-600 list-disc pl-5">
                        <li>Premium hardwood flooring</li>
                        <li>Modern kitchen with stainless steel appliances</li>
                        <li>Floor-to-ceiling windows</li>
                        <li>In-unit washer and dryer</li>
                        <li>Central air conditioning</li>
                        <li>Private balcony with city views</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }