# DigiMart – React E-Commerce Application

DigiMart is my first React-based e-commerce application, built to understand and implement core frontend concepts such as component-based architecture, state management, filtering logic, and user interaction handling.

This project focuses on creating a smooth shopping experience with essential e-commerce features like product filtering, cart management, and dynamic UI updates.

---

## Features

### Product Filtering

- Filter products by Category
- Filter products by Rating (and above)
- Filter products by Price Range
- Multiple filters can be applied at the same time

### Cart Functionality

- Add products to cart
- Increase or decrease product quantity
- Remove products from cart
- Dynamic cart count displayed above the cart button
- Cart updates instantly without page reload

### Ratings Display

- Star-based rating UI
- Partial star fill based on product rating value

### UI and UX

- Responsive layout using Tailwind CSS
- Smooth hover and click animations
- Clean and user-friendly interface
- Dropdown navigation for categories

---

## Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Font Awesome (for basic UI icons)
- Fake Store API (for product data)

---

## Project Structure

```bash
src/
│── components/
│   ├── Head.jsx
│   ├── Banner.jsx
│   ├── DigiCartModel.jsx
│   ├── FilterCategory.jsx
│   ├── FilterPrice.jsx
│   ├── FilterRatings.jsx
│   ├── Products.jsx

│
│── assets/
│── App.jsx
│── index.js
│── index.css
```
