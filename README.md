## Rolex Watch Shop App

This is a frontend application for a Rolex watch e-commerce store built using React.

### Features

- Displays a list of Rolex watches with details such as title, description, price and image.
- Toggle between light and dark modes.
- Build the UI for users to add watches to their cart with options to select quantity and color.
- View cart items with the ability to remove items.
- Responsive design that adapts to different screen sizes.

### Technologies Used

- React
- Tailwind CSS
- React Icons
- Vite

### Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nkav2447/Rolex_Shop.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rolex-watch-shop
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build using vite:
   ```bash
   npm run build
   ```
   This will generate optimized code in the `dist` directory.
5. Running the app
   ```bash
   npm run dev
   ```
   This will open the app in your default browser at `http://localhost:3000`.

### Components

- **Card.jsx:** Displays a single Rolex watch item with an image, title and "Shop Now" button.
- **Cart.jsx:** Renders the shopping cart with a list of `CartItem` components.
- **CartItem.jsx:** Displays details of a single cart item including product information, quantity, color, and a remove button.
- **Nav.jsx:** Navigation bar with links to different sections of the site and a shopping cart icon that opens the sidebar.
- **NewArrivalsSection.jsx:** Displays a section for new arrivals, showcasing a grid of `Card` components.
- **RolexDetail.jsx:** Shows detailed information about a selected Rolex watch, including larger image, description, price, quantity and color selection, and "Add to Bag" button.
- **Select.jsx:** A custom select dropdown component used for selecting quantity and color.
- **Sidebar.jsx:** A sidebar component that slides in from the right side of the screen to display the shopping cart.

### Data

- **constant.js:** Contains constant data used throughout the application such as available colors, quantities and the list of Rolex watches. Each watch object includes an id, image source, background color class, title, description and price.

### Styling

- **index.css:** The main CSS file that imports Tailwind CSS and defines custom styles.
- **tailwind.config.js:** Configuration file for Tailwind CSS, includes custom colors, keyframes and animations.

### Linting and Formatting

- **.eslintrc.cjs:** Configuration file for ESLint, a JavaScript linter that helps maintain code quality.
- **.prettierrc:** Configuration file for Prettier, a code formatter that ensures consistent code style.
