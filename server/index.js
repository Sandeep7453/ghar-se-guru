import express from 'express';
import cors from 'cors';
import { coachingCenters, testimonials, examCategories, whyChooseUs } from './data/dummy.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock authentication data
const students = new Map();
const coachingAdmins = new Map();
const enrollments = new Map();

// ============= AUTH ROUTES =============
app.post('/api/auth/student/signup', (req, res) => {
  const { email, password, name, city } = req.body;
  
  if (students.has(email)) {
    return res.status(400).json({ message: 'Student already exists' });
  }
  
  const token = 'student_token_' + Math.random().toString(36).substr(2, 9);
  students.set(email, { email, password, name, city, token });
  
  res.json({
    message: 'Signup successful',
    token,
    user: { email, name, city, role: 'student' }
  });
});

app.post('/api/auth/student/login', (req, res) => {
  const { email, password } = req.body;
  
  const student = students.get(email);
  if (!student || student.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  res.json({
    message: 'Login successful',
    token: student.token,
    user: { email: student.email, name: student.name, city: student.city, role: 'student' }
  });
});

app.post('/api/auth/institute/signup', (req, res) => {
  const { email, password, name, city } = req.body;
  
  if (coachingAdmins.has(email)) {
    return res.status(400).json({ message: 'Institute already exists' });
  }
  
  const token = 'institute_token_' + Math.random().toString(36).substr(2, 9);
  coachingAdmins.set(email, { email, password, name, city, token });
  
  res.json({
    message: 'Institute registration successful',
    token,
    user: { email, name, city, role: 'institute' }
  });
});

app.post('/api/auth/institute/login', (req, res) => {
  const { email, password } = req.body;
  
  const institute = coachingAdmins.get(email);
  if (!institute || institute.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  res.json({
    message: 'Login successful',
    token: institute.token,
    user: { email: institute.email, name: institute.name, city: institute.city, role: 'institute' }
  });
});

// ============= COACHING ROUTES =============
app.get('/api/coaching', (req, res) => {
  const { city, category, search } = req.query;
  
  let filtered = coachingCenters;
  
  if (city) {
    filtered = filtered.filter(c => c.city.toLowerCase().includes(city.toLowerCase()));
  }
  
  if (category) {
    filtered = filtered.filter(c => c.categories.includes(category));
  }
  
  if (search) {
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filtered);
});

app.get('/api/coaching/:id', (req, res) => {
  const coaching = coachingCenters.find(c => c.id === parseInt(req.params.id));
  
  if (!coaching) {
    return res.status(404).json({ message: 'Coaching center not found' });
  }
  
  res.json(coaching);
});

app.get('/api/coaching/:id/courses', (req, res) => {
  const coaching = coachingCenters.find(c => c.id === parseInt(req.params.id));
  
  if (!coaching) {
    return res.status(404).json({ message: 'Coaching center not found' });
  }
  
  res.json(coaching.courses);
});

app.get('/api/coaching/:id/teachers', (req, res) => {
  const coaching = coachingCenters.find(c => c.id === parseInt(req.params.id));
  
  if (!coaching) {
    return res.status(404).json({ message: 'Coaching center not found' });
  }
  
  res.json(coaching.teachers);
});

app.get('/api/coaching/:id/videos', (req, res) => {
  const coaching = coachingCenters.find(c => c.id === parseInt(req.params.id));
  
  if (!coaching) {
    return res.status(404).json({ message: 'Coaching center not found' });
  }
  
  res.json(coaching.videos);
});

app.get('/api/coaching/:id/quizzes', (req, res) => {
  const coaching = coachingCenters.find(c => c.id === parseInt(req.params.id));
  
  if (!coaching) {
    return res.status(404).json({ message: 'Coaching center not found' });
  }
  
  res.json(coaching.quizzes);
});

app.get('/api/coaching/:id/mockTests', (req, res) => {
  const coaching = coachingCenters.find(c => c.id === parseInt(req.params.id));
  
  if (!coaching) {
    return res.status(404).json({ message: 'Coaching center not found' });
  }
  
  res.json(coaching.mockTests);
});

// ============= MISC ROUTES =============
app.get('/api/categories', (req, res) => {
  res.json(examCategories);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.get('/api/why-choose-us', (req, res) => {
  res.json(whyChooseUs);
});

// ============= ENROLLMENT ROUTES =============
app.post('/api/enroll', (req, res) => {
  const { studentEmail, coachingId, courseId } = req.body;
  
  const enrollmentId = Math.random().toString(36).substr(2, 9);
  enrollments.set(enrollmentId, {
    enrollmentId,
    studentEmail,
    coachingId,
    courseId,
    enrolledAt: new Date(),
    progress: 0
  });
  
  res.json({
    message: 'Enrolled successfully',
    enrollmentId,
    enrollment: enrollments.get(enrollmentId)
  });
});

app.get('/api/student/:email/enrollments', (req, res) => {
  const enrollmentsList = Array.from(enrollments.values())
    .filter(e => e.studentEmail === req.params.email);
  
  res.json(enrollmentsList);
});

app.listen(PORT, () => {
  console.log(`✅ Ghar Se Guru Backend running on http://localhost:${PORT}`);
});
