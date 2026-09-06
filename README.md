# 1Fi Marketplace — SDE Intern Assignment

A focused React Native implementation of the **1Fi Marketplace** experience, built as part of the SDE Intern assignment.

The project demonstrates a clean mobile-first shopping flow where users can browse products, search and filter by category, view product details, select variants and EMI plans, proceed through a payment interface, and receive a successful payment confirmation.

## 🚀 Live Project

This project is built with Expo React Native and can be run locally using the Expo development server.

## 📱 Screenshots

> Add screenshots of the actual application here.

### Marketplace

![Marketplace](./screenshots/marketplace.png)

### Product Details

![Product Details](./screenshots/product-details.png)

### EMI Selection

![EMI Selection](./screenshots/emi-selection.png)

### Checkout

![Checkout](./screenshots/checkout.png)

### Payment

![Payment](./screenshots/payment.png)

### Payment Success

![Payment Success](./screenshots/payment-success.png)

## ✨ Features

### Marketplace

- Clean and responsive marketplace interface
- Product search
- Category-based filtering
- Featured products section
- Product cards with images, pricing and EMI information
- Responsive layout for different screen sizes
- Empty state when no products match the search

### Product Details

- Product image and information
- Product pricing
- Available product variants
- EMI plan selection
- Dynamic monthly EMI calculation
- No-cost EMI presentation
- Proceed with EMI CTA

### Checkout & Payment

- Selected product and variant summary
- Selected EMI tenure
- Monthly EMI summary
- Payment method selection
- Mutual Fund Balance option
- UPI option
- Net Banking option
- Secure transaction messaging
- Payment confirmation screen
- Order confirmation summary

## 🛒 Marketplace Flow

```text
Marketplace
     ↓
Search / Category Filter
     ↓
Product Details
     ↓
Select Variant
     ↓
Select EMI Plan
     ↓
Proceed with EMI
     ↓
Checkout
     ↓
Select Payment Method
     ↓
Payment
     ↓
Payment Successful
🧩 Project Structure
src/
├── app/
│   ├── _layout.tsx
│   ├── marketplace/
│   │   ├── index.tsx
│   │   ├── [id].tsx
│   │   ├── checkout.tsx
│   │   ├── payment.tsx
│   │   └── success.tsx
│   ├── index.tsx
│   └── ...
│
├── components/
│   └── ...
│
├── constants/
│   └── ...
│
├── data/
│   └── marketplace.ts
│
└── hooks/
    └── ...
🛠️ Tech Stack
React Native
Expo
Expo Router
TypeScript
React Hooks
Ionicons
Responsive React Native layouts
📦 Data Handling

Marketplace product information is maintained separately from the UI layer in:

src/data/marketplace.ts

This keeps product data, categories and marketplace-related information separate from screen components and makes the implementation easier to maintain and extend.

The current project uses mock marketplace data for demonstration purposes.

🎨 UI & UX

The interface is designed with a focus on:

Simple and clean visual hierarchy
Consistent spacing and typography
Touch-friendly controls
Responsive layouts
Clear product information
Easy EMI selection
Straightforward checkout flow
Consistent navigation between screens

The implementation follows the visual direction of the 1Fi Shop / Marketplace experience while keeping the assignment focused specifically on the Marketplace functionality.

📱 Responsive Design

The marketplace adapts its product layout based on available screen width.

Mobile screens use a single-column product layout.
Wider screens use a two-column product layout.
Search and category sections remain accessible on smaller screens.
Product and checkout interfaces are designed to remain touch-friendly.
⚡ Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
npm
Expo-compatible development environment
Expo Go app for physical device testing, if required
Installation

Clone the repository:

git clone https://github.com/umangkumar612/SDE-Intern-Assignment-1Fi.git

Move into the project directory:

cd SDE-Intern-Assignment-1Fi

Install dependencies:

npm install

Start the Expo development server:

npm start

You can then open the application using:

Expo Go
Android Emulator
iOS Simulator
Web browser
🔍 Key Implementation Highlights
Search & Filtering

Products can be searched by name and filtered using marketplace categories.

Dynamic EMI Calculation

The selected EMI tenure is used to calculate the displayed monthly EMI based on the product price.

Monthly EMI = Product Price ÷ Selected Tenure

The implementation is intended as a frontend demonstration and does not represent an actual financial calculation or lending offer.

Reusable Data Layer

Marketplace-related data is maintained independently from the presentation layer, making it easier to replace the mock data with a real API in the future.

Navigation

Expo Router is used to handle navigation between marketplace, product details, checkout, payment and success screens.

🔐 Payment Disclaimer

The checkout and payment screens in this assignment are UI demonstrations only.

No real payment transaction, banking integration, mutual fund transaction, or financial service is performed by the application.

📌 Assignment Scope

This implementation focuses specifically on the 1Fi Marketplace requirement.

The project includes:

Marketplace listing
Product details
Product variants
EMI selection
EMI-based purchase flow
Checkout interface
Payment interface
Payment success confirmation

The implementation intentionally keeps the scope focused instead of recreating the complete 1Fi application.

📈 Future Improvements

If this were extended beyond the assignment scope, the following could be added:

Real marketplace API integration
Backend product management
Real-time inventory
Authentication
User profile and order history
Real payment gateway integration
Real EMI eligibility and financial calculations
API-based loading, retry and error handling
Product pagination
Wishlist and cart functionality
👨‍💻 Developer

Umang Kumar Kataria

B.Tech — Computer Science & Engineering

Full Stack Developer

Connect
GitHub: https://github.com/umangkumar612
LinkedIn: https://www.linkedin.com/in/umang-kumar-kataria-193ab227/
Portfolio: https://portfolioumangkumar.netlify.app
📄 License

This project was created for the 1Fi SDE Intern assignment and is intended for demonstration and evaluation purposes.
