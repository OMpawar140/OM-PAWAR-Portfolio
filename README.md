# 🚀 Personal Portfolio

A modern, interactive portfolio website built with React, TypeScript, and featuring a unique 3D cube navigation system powered by Swiper.js.

## ✨ Features

- **3D Cube Navigation**: Smooth cube transition effects between different sections
- **Responsive Design**: Optimized for various screen sizes and devices
- **Modern UI**: Clean, dark-themed interface with rounded corners and shadows
- **Interactive Elements**: Grab cursor and smooth animations
- **Modular Architecture**: Well-organized component structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Navigation**: Swiper.js with Cube Effect
- **Build Tool**: Vite (assumed from modern React setup)
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── MainLayout.tsx      # Main layout component with 3D navigation
│   │   └── RightMenu.tsx       # Vertical navigation menu
│   ├── Pages/
│   │   ├── AboutMe.tsx         # About section
│   │   ├── Projects.tsx        # Projects showcase
│   │   └── CodingProfiles.tsx  # Coding profiles/links
│   └── Profile/
│       └── ProfileCard.tsx     # Left sidebar profile card
```

## 🎯 Sections

1. **About Me** - Personal introduction and background
2. **Projects** - Showcase of development projects
3. **Coding Profiles** - Links to GitHub, LeetCode, and other platforms

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [your-portfolio-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `typescript` - Type safety
- `swiper` - 3D carousel/slider functionality

### Dev Dependencies
- `@types/react` - React type definitions
- `@typescript-eslint/no-explicit-any` - TypeScript ESLint rules
- `tailwindcss` - Utility-first CSS framework
- `vite` - Build tool and dev server

## 🎨 Design Features

- **Dark Theme**: Stone-900 background with contrasting elements
- **Card-Based Layout**: Rounded corners (30px) with subtle shadows
- **3D Cube Effect**: Smooth transitions between portfolio sections
- **Responsive Spacing**: Proper padding and margins for visual hierarchy

## 🔧 Customization

### Updating Content
- Modify `ProfileCard.tsx` to update personal information
- Edit page components in `src/components/Pages/` to update section content
- Customize the navigation in `RightMenu.tsx`

### Styling
- Colors and spacing can be adjusted in Tailwind classes
- Cube effect settings are configurable in the Swiper options
- Shadow and border radius can be modified in the main layout

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚧 Development Notes

- Uses modern React hooks (useRef) for Swiper control
- TypeScript strict mode enabled
- ESLint configured for code quality
- Modular component architecture for maintainability

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Om Pawar - [ompawar2324@gmail.com](mailto:ompawar2324@gmail.com)

Project Link: [https://github.com/ompawar/portfolio](https://github.com/ompawar/portfolio)

---

⭐ If you like this project, please give it a star on GitHub!
