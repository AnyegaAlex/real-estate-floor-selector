import { cn } from '@/lib/utils';

/**
 * Responsive grid wrapper for lists
 * Adapts from 1 to 4+ columns and centers cards horizontally
 */
export function List({ className, children, ...props }) {
  return (
    <div
      role="list"
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * List item styled as a Shadcn-style card
 * Keeps consistent padding, rounded corners, and hover/focus effects
 */
export function ListItem({ className, children, ...props }) {
  return (
    <div
      role="listitem"
      className={cn(
        'w-full max-w-xs rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
