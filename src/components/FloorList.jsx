import { motion } from 'framer-motion';


/**
 * FloorList Component
 *
 * Displays a responsive grid of available floors as selectable tiles.
 * Supports mouse and keyboard interactions, and uses Framer Motion for hover animation.
 *
 * Props:
 * - floors: array of floor objects to display
 * - onSelect: function to handle floor selection
*/


export default function FloorList({ floors, onSelect }) {
  // Handle keyboard interaction for accessibility
  const handleKeyDown = (e, floor) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(floor);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center min-w-max px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {floors.map((floor) => (
            <motion.div
              key={floor.id}
              whileHover={{ backgroundColor: '#f9fafb' }}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(floor)}
              onKeyDown={(e) => handleKeyDown(e, floor)}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ minWidth: '120px' }} // Ensures consistent width
            >
              <div className="w-full text-center p-4 border border-gray-100">
                <div className="text-2xl font-semibold text-gray-900">{floor.number}</div>
                <div className="text-sm text-gray-600">Floor {floor.number}</div>
                <div className="text-xs text-gray-500 mt-1">{floor.units.length} units</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}