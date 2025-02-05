# MediCare Multi-Vendor Platform

## Admin Credentials
- **Email: shofiq@gmail.com** 
- **Password: Shofiq1@** 

## Live Site URL
[https://mediease-d61c8.web.app/]


## Project Overview
- This is a MERN stack-based multi-vendor e-commerce platform for selling medicines and healthcare products. It features user authentication, product management, cart functionality, secure checkout, and role-based dashboards for users, sellers, and admins.

## MediEase
![MediEase Screenshot](/src/assets/banner_screenshot.jpg)

## Technology Stack

1. **Frontend (Client-Side)**:
- React.js – Frontend library for building UI
- React Router – Navigation and routing
- Tailwind CSS – Styling and responsive design
- TanStack Query (React Query) – Efficient data fetching and caching
- React Hook Form – Form handling and validation
- Swiper.js – Product slider for advertisements

2. **Backend (Server-Side)**:
- Node.js – Server runtime
- Express.js – Backend framework for handling API requests
- MongoDB & Mongoose – Database and ODM for data management
- JWT (JSON Web Token) – Secure authentication and authorization
- Stripe API – Payment processing
- Dotenv – Environment variable management
- Cors – Handling cross-origin requests

3. **Authentication & Security**:
- Firebase Authentication – Social login (Google/GitHub)
- JWT & Middleware – Secure API access

4. **Others**: 
- React Helmet for dynamic titles, SweetAlert for notifications


## The Core Features

1. **Responsive Design**: 
- The website is fully responsive and optimized for mobile, tablet, and desktop devices, ensuring a seamless experience across all screen sizes.

2. **User-Friendly Authentication**:
   - Registration with roles (User or Seller) and photo upload.
   - Social login options using Google and GitHub.
   - Persistent login state across private routes after page reloads.

3. **Dynamic Homepage**:
   - A slider section showcasing advertised products managed by the admin.
   - A category card section displaying all product categories with navigation to specific category pages.
   - Discounted products displayed in a draggable multiple-card slider.
   - Additional sections with relevant healthcare content.

4. **Shop and Category Pages**:
   - Medicines displayed in tabular format with options to view details or add to the cart.
   - Category-specific filtering for easy navigation.

5. **Cart and Checkout**:
   - Cart management with quantity updates, item removal, and a clear-all option.
   - Secure Stripe payment integration on the checkout page.
   - Printable invoice generated after successful payment.

6. **Admin Dashboard**:
   - Manage Users: Update user roles (User, Seller, Admin).
   - Manage Categories: Add, update, or delete categories using a modal form.
   - Payment Management: View and update payment statuses.
   - Sales Report: Filterable and downloadable sales data.
   - Manage Banner Advertisements: Toggle products for homepage sliders.

7. **Seller Dashboard**:
   - Manage Medicines: Add or update medicines with detailed information.
   - Payment History: View all purchase histories of their medicines.
   - Advertisement Requests: Submit products for advertisement sliders.

8. **User Dashboard**:
   - Payment History: View payment transactions with statuses (paid/pending).

9. **Advanced Functionalities**:
   - Pagination, sorting by price, and search capabilities for all medicine tables.
   - Date range filter and downloadable reports (PDF, Excel) for admin sales data.
   - Sweet alerts and toast notifications for all CRUD operations and authentication events.

10. **Security and Optimization**:
    - Environment variables used to secure Firebase config keys and MongoDB credentials.
    - Token-based authentication with local storage for secure API calls.

## Dependencies

**Main Dependencies**
- "@stripe/react-stripe-js": "^3.1.1",
- "@stripe/stripe-js": "^5.5.0",
- "@tanstack/react-query": "^5.64.1",
- "axios": "^1.7.9",
- "firebase": "^11.1.0",
- "html2canvas": "^1.4.1",
- "html2pdf.js": "^0.10.2",
- "json2csv": "^6.0.0-alpha.2",
- "jspdf": "^2.5.2",
- "localforage": "^1.10.0",
- "lottie-react": "^2.4.0",
- "match-sorter": "^8.0.0",
- "react": "^18.3.1",
- "react-dom": "^18.3.1",
- "react-export-table-to-excel": "^1.0.6",
- "react-helmet-async": "^2.0.5",
- "react-hook-form": "^7.54.2",
- "react-icons": "^5.4.0",
- "react-responsive-carousel": "^3.2.23",
- "react-router-dom": "^7.1.1",
- "react-tabs": "^6.1.0",
- "react-to-print": "^3.0.4",
- "react-tooltip": "^5.28.0",
- "recharts": "^2.15.1",
- "sort-by": "^1.2.0",
- "sweetalert2": "^11.15.10",
- "swiper": "^11.2.1",
- "xlsx": "^0.18.5"

**Development Dependencies**
- "@eslint/js": "^9.17.0",
- "@types/react": "^18.3.18",
- "@types/react-dom": "^18.3.5",
- "@vitejs/plugin-react": "^4.3.4",
- "autoprefixer": "^10.4.20",
- "daisyui": "^4.12.23",
- "eslint": "^9.17.0",
- "eslint-plugin-react": "^7.37.2",
- "eslint-plugin-react-hooks": "^5.0.0",
- "eslint-plugin-react-refresh": "^0.4.16",
- "globals": "^15.14.0",
- "postcss": "^8.4.49",
- "tailwindcss": "^3.4.17",
- "vite": "^6.0.5"


## Installation

**Clone the repository**
- git clone https://github.com/your-username/your-repo.git
- cd your-repo

**Install dependencies**
- npm install

**Start the development server**
- npm run dev

---

Thank you for choosing MediCare! Explore, shop, and stay healthy.

