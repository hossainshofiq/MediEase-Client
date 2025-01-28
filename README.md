# MediCare Multi-Vendor Platform

## Admin Credentials
- **Email: shofiq@gmail.com** 
- **Password: Shofiq1@** 

## Live Site URL
[https://mediease-d61c8.web.app/]

## Features

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

## Technology Stack
- **Frontend**: React, Tailwind CSS, React Query, React Hook Form, Swiper.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Payment Gateway**: Stripe
- **Others**: React Helmet for dynamic titles, SweetAlert for notifications

---

Thank you for choosing MediCare! Explore, shop, and stay healthy.

