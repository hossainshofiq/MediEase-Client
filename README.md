# 🏥 **MediEase**  

**Live Site URL:**  
[🔗 MediCare](https://mediease-d61c8.web.app/)  

## 🔑 **Admin Credentials**  
- 📧 **Email:** `shofiq@gmail.com`  
- 🔑 **Password:** `Shofiq1@`  

## 🔑 **Seller Credentials**  
- 📧 **Email:** `shofiq1@gmail.com`  
- 🔑 **Password:** `Shofiq1@` 

## 🔑 **User Credentials**  
- 📧 **Email:** `shofiq2@gmail.com`  
- 🔑 **Password:** `Shofiq1@` 

## 📞 **Contact Information**  
📱 **Phone Number:** +8801689819951  

---

## 📌 **Project Overview**  
**MediEase** is a **MERN stack-based multi-vendor e-commerce platform** designed for selling medicines and healthcare products. It features:  

✔️ **User authentication** with Firebase  
✔️ **Product management** for sellers and admins  
✔️ **Secure checkout** with Stripe payment integration  
✔️ **Role-based dashboards** for Users, Sellers, and Admins  
✔️ **Advanced data filtering, sorting, and exporting**  

![MediEase Screenshot](src/assets/banner_screenshot.jpg)  

---

## 📚 **Table of Contents**  
- [Technology Stack](#-technology-stack)  
- [Core Features](#-core-features)  
- [Installation](#-installation)  
- [Dependencies](#-dependencies)  

---

## 🛠 **Technology Stack**  

### **Frontend (Client-Side)**  
- ⚛️ **React.js** – Component-based frontend framework  
- 🚏 **React Router** – Navigation and routing  
- 🎨 **Tailwind CSS** – Modern UI design  
- 🔄 **TanStack Query (React Query)** – Efficient data fetching and caching  
- ✅ **React Hook Form** – Form handling and validation  
- 📢 **Swiper.js** – Product slider for advertisements  

### **Backend (Server-Side)**  
- ⚡ **Node.js** – JavaScript runtime for the server  
- 🌐 **Express.js** – API framework  
- 🗄 **MongoDB & Mongoose** – NoSQL database and ODM  
- 🔑 **JWT (JSON Web Token)** – Secure authentication  
- 💳 **Stripe API** – Payment processing  
- ⚙️ **Dotenv** – Environment variable management  
- 🌍 **Cors** – Handling cross-origin requests  

### **Authentication & Security**  
- 🔑 **Firebase Authentication** – Google/GitHub login  
- 🔒 **JWT Middleware** – Secure API access  

### **Additional Libraries**  
- 🏷 **React Helmet** – Dynamic page titles  
- 🎭 **SweetAlert** – User notifications  

---

## ✨ **Core Features**  

### 📱 **Responsive Design**  
✔️ Optimized for **mobile, tablet, and desktop**  

### 🔐 **User-Friendly Authentication**  
✔️ Register with **role-based access (User/Seller/Admin)**  
✔️ Google & GitHub **social login** support  
✔️ Persistent login with **protected routes**  

### 🏠 **Dynamic Homepage**  
✔️ **Slider section** for promoted products  
✔️ **Category-based navigation**  
✔️ **Discounted products** showcased in a slider  

### 🏬 **Shop & Category Pages**  
✔️ Product filtering & search  
✔️ Category-specific product display  

### 🛒 **Cart & Secure Checkout**  
✔️ Manage **cart items & quantities**  
✔️ **Stripe payment integration**  
✔️ **Generate printable invoices**  

### 🎛 **Admin Dashboard**  
✔️ **User Management:** Update roles (User, Seller, Admin)  
✔️ **Product Categories:** Add, update, delete categories  
✔️ **Sales Reports:** Filterable & downloadable sales data  
✔️ **Advertisements:** Approve products for homepage sliders  

### 🛍 **Seller Dashboard**  
✔️ **Manage Products:** Add, update, delete medicines  
✔️ **Payment History:** View transaction details  
✔️ **Submit Advertisement Requests**  

### 👤 **User Dashboard**  
✔️ **Track Purchase History**  
✔️ **View Payment Transactions (Paid/Pending)**  

### 📊 **Advanced Functionalities**  
✔️ **Sorting, Filtering, & Pagination**  
✔️ **Downloadable reports (PDF, Excel)**  
✔️ **SweetAlerts & Toast Notifications**  

### 🔒 **Security & Optimization**  
✔️ **Environment variables** for secure API keys  
✔️ **JWT authentication** for protected API routes  

---

## 🛠 **Installation**  

### **Clone the repository**  
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **Install dependencies**  
```bash
npm install
```

### **Start the development server**  
```bash
npm run dev
```

---

## 📦 **Dependencies**  

### **Main Dependencies**  
```json
{
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "html2canvas": "^1.4.1",
  "html2pdf.js": "^0.10.2",
  "json2csv": "^6.0.0-alpha.2",
  "jspdf": "^2.5.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-export-table-to-excel": "^1.0.6",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^7.1.1",
  "react-tabs": "^6.1.0",
  "react-to-print": "^3.0.4",
  "react-tooltip": "^5.28.0",
  "recharts": "^2.15.1",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1",
  "xlsx": "^0.18.5"
}
```

### **Development Dependencies**  
```json
{
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.23",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.5"
}
```

---

## 🎉 **Thank You for Choosing MediEase!**  
🚀 Explore, shop, and stay healthy! Let us know if you have any feedback.  

---