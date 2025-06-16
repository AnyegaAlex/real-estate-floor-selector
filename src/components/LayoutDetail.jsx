// src/components/LayoutDetail.jsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Home, Maximize2 } from 'lucide-react';

/**
 * Displays detailed view of a selected unit layout.
 * Props:
 * - unit: object containing layout details
 * - towerName: string (name of selected tower)
 * - floorNumber: number (selected floor)
 * - price: formatted string (e.g., "$350,000")
 */
export default function LayoutDetail({ unit, towerName, floorNumber, price }) {
  const parsedArea = parseInt(unit.area); // Convert '840 sq ft' to 840
  const pricePerSqFt = parsedArea ? Math.round(unit.price / parsedArea) : '-';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Large Layout Image */}
      <Card className="shadow-lg overflow-hidden">
        <img
          src={unit.layoutImage || "/placeholder.svg"}
          alt={`${unit.name} floor plan`}
          className="w-full h-80 sm:h-96 lg:h-full object-cover"
        />
      </Card>

      {/* Right: Detail Panels */}
      <div className="flex flex-col gap-6">
        {/* Unit Overview */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="text-blue-600" />
              Unit Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-sm">
            <Detail label="Tower" value={towerName} />
            <Detail label="Floor" value={floorNumber} />
            <Detail label="Unit Type" value={unit.name} />
            <Detail label="Area" value={unit.area} />
            <Detail label="Bedrooms" value={unit.rooms || 'Studio'} />
            <Detail label="Bathrooms" value={unit.bathrooms} />
          </CardContent>
        </Card>

        {/* Price Card */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Maximize2 className="text-blue-600" />
              Pricing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
            <p className="text-gray-600 text-sm">${pricePerSqFt} per sq ft</p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="shadow-md">
          <CardContent className="space-y-2 p-6">
            <h3 className="font-semibold text-lg mb-2">Features & Amenities</h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Premium hardwood flooring</li>
              <li>Modern kitchen with stainless steel appliances</li>
              <li>Floor-to-ceiling windows</li>
              <li>In-unit washer and dryer</li>
              <li>Central air conditioning</li>
              <li>Private balcony with city views</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * Reusable mini component for each detail item
 */
function Detail({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 font-medium">{label}</p>
      <p className="text-gray-800 font-semibold text-base">{value}</p>
    </div>
  );
}
