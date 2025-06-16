import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import clsx from "clsx";

/**
 * Props:
 * - tower: { id, name, description, floors, totalUnits }
 * - onSelect: function to call with tower object
 * - isSelected: boolean
 */
export default function TowerCard({ tower, onSelect, isSelected }) {
  const { name, description, floors, totalUnits } = tower;

  return (
    <Card
      onClick={() => onSelect(tower)}
      className={clsx(
        "w-full max-w-xs cursor-pointer transition-all duration-200 transform rounded-xl shadow-md",
        isSelected
          ? "bg-blue-50 scale-105 shadow-lg"
          : "bg-white hover:scale-105 hover:bg-gray-50"
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
        {/* Icon */}
        <Building2 className="h-10 w-10 text-blue-600 mb-2" />

        {/* Tower Name */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>

        {/* Divider + Stats */}
        <div className="w-full border-t pt-4 flex justify-center gap-8 text-sm text-gray-800 font-medium">
          <div className="text-center">
            <div className="text-base font-semibold">{floors}</div>
            <div className="text-xs text-gray-500">Floors</div>
          </div>
          <div className="text-center">
            <div className="text-base font-semibold">{totalUnits}</div>
            <div className="text-xs text-gray-500">Units</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
