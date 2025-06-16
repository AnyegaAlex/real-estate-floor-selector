# 🏢 Real Estate Floor Selector

An interactive frontend prototype that lets users explore towers, choose floors, and view apartment layouts with modern animations, responsive design, and clean architecture.

---

## 🔗 Live Demo

🌐 [Live Demo](https://your-vercel-link.vercel.app)  
🎥 [Walkthrough Video (Loom)](https://loom.com/share/your-video-link)

---

## 📦 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons)
- **Components**: [Radix UI Primitives](https://www.radix-ui.com/)
- **Linting**: ESLint + Prettier

---

## ✨ Features

- 🏙️ **Tower Overview** – Choose from 3 towers (A, B, C)
- 🏢 **Floor Selector** – Select from 10–15 floors dynamically
- 🏘️ **Apartment Gallery** – 3–4 layout thumbnails with metadata
- 🏠 **Unit Detail View** – Full layout + unit info
- 💫 **UX Animation** – Thumbnails scale on hover with subtle background dimming
- 📱 **Responsive** – Works smoothly on mobile and desktop

---

## 📁 Folder Structure

```bash
src/
├── assets/                  # Placeholder assets/images
├── components/
│   ├── ui/                  # Reusable shadcn/ui-style components
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   └── list.jsx
│   ├── Breadcrumbs.jsx      # Breadcrumb nav component
│   ├── FloorList.jsx        # Grid of floor buttons
│   ├── LayoutDetail.jsx     # Full layout display
│   ├── LayoutList.jsx       # Gallery of layouts
│   ├── TowerCard.jsx        # Card for each tower
│   └── TowerList.jsx        # Tower selection view
├── data/
│   └── mockData.js          # Towers, floors, and units dummy data
├── lib/                     # (Optional) Shared utilities
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```
🛠️ Getting Started
bash
# 1. Clone the repo
```
git clone https://github.com/yourusername/real-estate-floor-selector.git
cd real-estate-floor-selector
```

# 2. Install dependencies
```
npm install
```
# 3. Start development server
```
npm run dev
```
# 4. Open in browser
http://localhost:5173

🧪 Known Limitations

- Data is mocked (no backend/API)
- No login or session state
- Placeholder images only

📸 Preview Screenshots
Towers View	Floor Selector	Layout Gallery	Layout Detail

