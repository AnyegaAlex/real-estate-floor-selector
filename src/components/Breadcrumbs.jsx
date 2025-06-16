// Import icons from Lucide React for visual breadcrumb indicators
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs Component
 * 
 * Dynamically displays the user's navigation path through the tower > floor > unit hierarchy.
 * 
 * Props:
 * - selectedTower: object | null – the currently selected tower
 * - selectedFloor: object | null – the currently selected floor
 * - selectedUnit: object | null – the currently selected unit
 * - onHome: function – callback to reset to the home state
 * - onTower: function – callback to go back to the tower view
 * - onFloor: function – callback to go back to the floor view
 */

export default function Breadcrumbs({ selectedTower, selectedFloor, selectedUnit, onHome, onTower, onFloor }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-600 mb-4">
      <button onClick={onHome} className="flex items-center hover:text-gray-900">
        <Home className="w-4 h-4 mr-1" /> Home
      </button>
      {selectedTower && (
        <>
          <ChevronRight className="mx-2" />
          {/* Tower button (clickable) */}
          <button onClick={onTower} className="hover:text-gray-900">
            {selectedTower.name}
          </button>
        </>
      )}

      {/* If a floor is selected, show its label with a chevron */}
      {selectedFloor && (
        <>
          <ChevronRight className="mx-2" />
          <button onClick={onFloor} className="hover:text-gray-900">
            Floor {selectedFloor.number}
          </button>
        </>
      )}

      {/* If a unit is selected, show its name with a chevron (non-clickable text) */}
      {selectedUnit && (
        <>
          <ChevronRight className="mx-2" />
          {/* Unit name (not a button, since this is the last item in the breadcrumb trail) */}
          <span className="font-medium">{selectedUnit.name}</span>
        </>
      )}
    </nav>
  );
}
