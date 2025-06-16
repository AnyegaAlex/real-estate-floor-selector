import { Building2 } from "lucide-react";
import TowerCard from '@/components/TowerCard';
import { towers } from '@/data/mockData';

/**
 * Renders a centered grid of TowerCards with selection highlighting.
 * Props:
 * - selected: currently selected tower object (or null)
 * - onSelect: function to call when a tower is selected
 */
export default function TowerList({ selected, onSelect }) {
  if (!Array.isArray(towers) || towers.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No towers available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Building2 className="mx-auto h-8 w-8 text-blue-600 mb-2" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Tower</h2>
        <p className="text-gray-600">Explore tower options to view available floors and units</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4">
        {towers.map((tower) => (
          <TowerCard
            key={tower.id}
            tower={tower}
            onSelect={onSelect}
            isSelected={selected?.id === tower.id}
          />
        ))}
      </div>
    </div>
  );
}
