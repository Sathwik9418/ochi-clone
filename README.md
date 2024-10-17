

---

# Ochi Clone

This project is a clone of the **Ochi** website, built using modern web technologies like Next.js, React, Tailwind CSS, Locomotive Scroll, and Lenis. The clone captures the interactive design elements such as smooth scrolling, hover animations, and dynamic text effects seen on the original Ochi website.

## Features

### 1. **Landing Page with Animated Text**
   - The landing page includes eye-catching, large, animated text. This is implemented using `Framer Motion` for smooth entrance animations, giving a dynamic look to phrases like _"We Create Eye Opening Presentations"_.
   - Customizable text blocks can be wrapped in animated containers, and subtle green backgrounds can contain images.

### 2. **Featured Projects Section**
   - Two featured project cards are displayed side-by-side.
   - Each card has hover-triggered animations using `Framer Motion`. When hovered over, project names (e.g., "FYDE" and "TRAVA") animate smoothly into view.
   - The background images for the cards are dynamically loaded and provide a visual preview of the project.
   - Animation is applied on individual characters to provide a fluid and engaging effect on hover.

### 3. **Custom Scroll Experience**
   - Smooth scrolling is implemented using `Locomotive Scroll` and `Lenis`, providing a polished user experience with inertia and parallax effects.
   - Scrolling speed and direction of various sections can be customized with attributes like `data-scroll-speed`.

### 4. **Navigation Bar**
   - A responsive navigation bar with links to different sections of the website, designed to maintain consistency with the Ochi website's minimalist approach.

### 5. **About, Cards, and Footer Sections**
   - Additional sections such as About, Cards, and Footer are designed to enhance the site's structure and provide more information.

## Technologies Used

- **Next.js**: For server-side rendering and optimized performance.
- **React.js**: For building UI components.
- **Framer Motion**: To handle complex animations.
- **Tailwind CSS**: For styling and responsive design.
- **Locomotive Scroll & Lenis**: For smooth scroll interactions and inertia-based scrolling animations.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ochi-clone.git
   cd ochi-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the project in your browser at `http://localhost:3000`.

## Future Improvements

- Additional animations for more sections of the site.
- Optimization for performance and smoother scroll effects.
- Enhancement of responsiveness for mobile devices.

---


