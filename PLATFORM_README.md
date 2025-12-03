# Ghar Se Guru - Online Coaching Aggregator & E-Learning Platform

A complete coaching aggregator and e-learning platform designed for small-town students who want to study from home and save travel expenses.

**Mission:** Chhote shehar ke students ko ghar baithe sasti padhai dena (Provide affordable education to small-town students from home)

## 🌟 Features

### For Students
- 🔍 **Discover Coaching Centers** - Search and filter by location, exam category, and more
- 📚 **Enrolled Courses** - Track progress across multiple courses
- ✏️ **Mock Tests & Quizzes** - Practice with full-length tests and topicwise quizzes
- 💾 **Saved Centers** - Bookmark favorite coaching institutes
- 📊 **Performance Analytics** - Track your scores and improvement
- 🔐 **Secure Login** - Student authentication

### For Coaching Centers
- 🏫 **Institute Admin Panel** - Manage all aspects of your coaching
- 📖 **Course Management** - Create and manage courses
- 👨‍🏫 **Teacher Management** - Add teachers and assign subjects
- 📹 **Content Upload** - Upload videos and study materials
- 📋 **Quiz & Mock Creation** - Create quizzes and mock tests
- 👥 **Student Enrollment Tracking** - Monitor enrolled students
- 📊 **Analytics Dashboard** - View revenue and student metrics

### Platform Features
- **5 Pre-loaded Demo Coaching Centers** with complete data
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Premium look with emotional branding
- **Fast Performance** - Optimized with React and Vite
- **Mock API** - Ready-to-integrate backend endpoints

## 📱 Exam Categories Covered

- Railway (RRB NTPC, Group D, JE)
- SSC (CGL, CHSL, MTS, GD)
- Banking (IBPS, SBI, RBI)
- Police (State Police, CRPF)
- Army (Soldier, JCO, Officer)
- NTPC (Non-Technical Posts)

## 🏗️ Project Structure

```
GharSeGuru/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── home/
│   │       ├── HeroSection.jsx
│   │       ├── FeaturedCoachings.jsx
│   │       ├── ExamCategories.jsx
│   │       ├── Testimonials.jsx
│   │       └── WhyChooseUs.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CoachingListPage.jsx
│   │   ├── CoachingDetailPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── StudentDashboard.jsx
│   │   └── InstituteAdminDashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── server/
│   ├── index.js (Express Backend)
│   └── data/
│       └── dummy.js (Mock Data)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project:**
```bash
cd d:\Web\GharSeGuru
```

2. **Install dependencies:**
```bash
npm install
```

### Development

1. **Start the development server:**
```bash
npm run dev
```

2. **Start the backend server** (in a new terminal):
```bash
npm run server
```

The frontend will be available at `http://localhost:5173`
The backend will be running at `http://localhost:5000`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

## 📌 Tech Stack

### Frontend
- **React 19** - UI Framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Next-generation frontend tooling

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Enable cross-origin requests
- **Mock Data** - JSON-based dummy data (ready to integrate with MongoDB)

## 🎨 Design System

### Color Palette
- **Primary Blue:** #2563eb
- **Secondary Yellow:** #facc15
- **Accent Red:** #ff6b6b
- **Light Gray:** #f9fafb
- **Dark Gray:** #1f2937

### Typography
- **Font Family:** Inter
- **Headings:** Bold, 32px-48px
- **Body:** Regular, 16px-18px

## 🔐 Authentication

The platform includes mock JWT authentication for:
- Student Sign Up / Login
- Institute Sign Up / Login

**Demo Credentials:**
- Email: demo@example.com
- Password: password123

## 📊 Demo Data

### 5 Pre-loaded Coaching Centers

1. **Rapid Success Academy** (Lucknow)
   - Rating: 4.8/5
   - Specialization: Railway, NTPC
   - Students: 5000+
   - Courses: 2+ complete courses
   - Teachers: 4 expert teachers

2. **Target Govt Academy** (Kanpur)
   - Rating: 4.7/5
   - Specialization: Police, Army
   - Students: 2000+
   - Courses: Multiple specialized courses
   - Teachers: 3+ experienced teachers

3. **Future Banking Institute** (Indore)
   - Rating: 4.9/5 (Highest)
   - Specialization: Banking, SSC
   - Students: 8000+
   - Courses: Comprehensive banking programs
   - Teachers: Expert financial advisors

4. **Shakti Study Center** (Nagpur)
   - Rating: 4.6/5
   - Specialization: All Govt Exams
   - Students: 1500+
   - Courses: Multi-exam bundle available
   - Teachers: Diverse subject specialists

5. **Bright Career Academy** (Patna)
   - Rating: 4.5/5
   - Specialization: SSC, Railway
   - Students: 1200+
   - Courses: Budget-friendly options
   - Teachers: Dedicated faculty

Each coaching center includes:
- Complete course catalog with pricing
- 3-4 teacher profiles with qualifications
- Multiple demo videos
- Quizzes with difficulty levels
- Full-length mock tests

## 🔗 Routing

### Public Routes
- `/` - Home Page
- `/coaching` - Coaching Centers Listing
- `/coaching/:id` - Coaching Center Details
- `/login` - Student Login
- `/signup` - Student Sign Up
- `/institute/login` - Institute Admin Login
- `/institute/signup` - Institute Sign Up

### Protected Routes
- `/student/dashboard` - Student Dashboard
- `/institute/dashboard` - Institute Admin Dashboard

## 📦 API Endpoints

```
GET  /api/coaching                    - Get all coaching centers
GET  /api/coaching/:id                - Get specific coaching center
GET  /api/coaching/:id/courses        - Get courses
GET  /api/coaching/:id/teachers       - Get teachers
GET  /api/coaching/:id/videos         - Get videos
GET  /api/coaching/:id/quizzes        - Get quizzes
GET  /api/coaching/:id/mockTests      - Get mock tests
GET  /api/categories                  - Get exam categories
GET  /api/testimonials                - Get student testimonials
GET  /api/why-choose-us               - Get platform features

POST /api/auth/student/signup         - Student registration
POST /api/auth/student/login          - Student login
POST /api/auth/institute/signup       - Institute registration
POST /api/auth/institute/login        - Institute login
POST /api/enroll                      - Student enrollment
GET  /api/student/:email/enrollments  - Get student enrollments
```

## 🎯 Features Implemented

### ✅ Completed
- Full responsive design (mobile, tablet, desktop)
- Modern, premium UI with Tailwind CSS
- Home page with hero, categories, testimonials
- Coaching centers listing with advanced filters
- Detailed coaching center pages with tabs
- Student & Institute authentication
- Student dashboard (overview, courses, tests, quizzes, saved, settings)
- Institute admin panel (overview, courses, teachers, students, content, settings)
- Mock backend with complete API endpoints
- 5 demo coaching centers with comprehensive data
- Footer with contact information
- Smooth animations and transitions
- Dark mode ready color scheme

### 🚀 Ready to Integrate
- MongoDB integration (replace mock data with real database)
- JWT token authentication
- File upload for videos and documents
- Real email notifications
- Payment integration (Razorpay, Stripe)
- Video streaming optimization
- Search and analytics
- Notification system

## 📝 Branding Guide

**Brand Name:** Ghar Se Guru  
**Tagline:** "Chhote shehar ke students ko ghar baithe sasti padhai dena"  
**Tone:** Friendly, emotional, trustworthy, affordable-looking

Use this tone in:
- CTA buttons
- Success messages
- Marketing content
- Student testimonials

## 🛠️ Customization

### Add More Coaching Centers
Edit `server/data/dummy.js` and add more coaching objects to the `coachingCenters` array.

### Update Colors
Modify `tailwind.config.js` colors section.

### Add New Pages
1. Create component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route in `<Routes>`

### Change API Base URL
Update backend URL in API calls (currently mock data is used directly).

## 📞 Support

For any issues or questions about the platform structure, refer to the component files which include detailed comments.

## 📄 License

This project is created for educational purposes.

---

**Made with ❤️ for Students of Small Towns**

Happy Learning! 🎓

---

## 🎬 Quick Start Guide

1. **Install Dependencies:**
```bash
npm install
```

2. **Start Frontend:**
```bash
npm run dev
```

3. **Start Backend** (optional, in new terminal):
```bash
npm run server
```

4. **Visit:** 
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

5. **Test the Platform:**
   - View home page
   - Browse coaching centers
   - Check coaching details
   - Try signup/login (demo mode)
   - View dashboards

## 📋 Page Map

- **Home** - Hero, Featured Centers, Categories, Testimonials, Why Choose Us
- **Coaching List** - Grid with filters (city, category, rating)
- **Coaching Detail** - About, Courses, Teachers, Videos, Quizzes, Mock Tests, Contact
- **Student Auth** - Login, Signup
- **Institute Auth** - Login, Signup
- **Student Dashboard** - Overview, Courses, Mock Tests, Quizzes, Saved, Settings
- **Institute Dashboard** - Overview, Courses, Teachers, Students, Content, Settings

Enjoy building with Ghar Se Guru! 🚀
