# Shopping App

This project is an e-commerce web application built with Next.js. It features a responsive UI, dynamic routing, state management with Redux Toolkit, and integration with the Fake Store API for fetching product data. The application allows users to browse products, view detailed information, and manage a shopping cart.


## Features

Dynamic Product Pages: Fetch product data dynamically based on the product ID.
Shopping Cart: Add, update, and remove products from the cart.
State Management: Uses Redux Toolkit for managing global state.
Responsive Design: Built with Tailwind CSS for a seamless experience across devices.
Optimized Images: Next.js next/image is used for automatic image optimization.
Reusable Components: Modular and reusable UI components for scalability.

## Installation and Setup

Clone the repository:

            git clone <repository_url>
            cd shopping

Install dependencies:

            npm install

Run the development server:

            npm run dev

Open your browser and navigate to:

            http://localhost:3000

## Dependencies and Their Usage

### Main Dependencies

Next.js: Framework for server-rendered React applications, chosen for its performance, 
React and React DOM: Core libraries for building UI components.
Redux Toolkit: Simplifies state management by providing utilities for creating slices and reducers.
React Redux: Enables React components to interact with the Redux store.
Tailwind CSS: Utility-first CSS framework for creating a responsive design with ease.
React Icons: Provides access to a wide range of icons for UI elements.
@headlessui/react: For building accessible and unstyled components like dialogs and menus.
@shadcn-ui: Provides unstyled, accessible UI primitives for enhanced user experiences.
Tailwind Merge: Helps resolve conflicting class names in Tailwind CSS.
Class Variance Authority (CVA): Used for managing class name variants for reusable components.

### Development Dependencies

TypeScript: Adds static typing to JavaScript for better maintainability and error checking.
ESLint: Enforces coding standards and catches potential errors.
Tailwind CSS Animate: Provides animations to enhance user interaction.
PostCSS: Processes CSS for better compatibility and features like autoprefixing.


## API Integration

The app integrates with the Fake Store API to fetch product data. Ensure you have configured the hostname (fakestoreapi.com) in your next.config.js file under the images property for proper image loading.

// next.config.js
            module.exports = {
            images: {
                remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'fakestoreapi.com',
                },
                ],
            },
            };

## How to Contribute

            Fork the repository.
            Create a new branch:

            git checkout -b feature-name

Make your changes and commit them:

            git commit -m "Add your message"

Push your branch:

            git push origin feature-name

Open a pull request on GitHub.

## License

This project is licensed under the MIT License.
Acknowledgements

    Fake Store API
    Next.js Team
    Tailwind CSS Team