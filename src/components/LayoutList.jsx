import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Maximize2 } from 'lucide-react';

/**
 * Displays unit layout cards for the selected floor
 * @param {Array} units - layout objects
 * @param {Function} onSelect - callback when a layout is clicked
 */
export default function LayoutList({ units = [], onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {units.map((unit) => (
        <motion.div
          key={unit.id}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 250 }}
          onClick={() => onSelect(unit)}
          className="cursor-pointer w-full max-w-xs mx-auto"
        >
          <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src={unit.thumbnail || '/placeholder.svg'}
              alt={`${unit.name} thumbnail`}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 space-y-1 text-center">
              <div className="text-lg font-semibold text-gray-800">{unit.name}</div>
              <div className="text-sm text-gray-600">{unit.area}</div>
              <div className="flex justify-center gap-4 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  {unit.rooms} BR
                </div>
                <div className="flex items-center gap-1">
                  <Maximize2 className="w-4 h-4" />
                  {unit.bathrooms} Bath
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
