import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
  ],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Apply rate limiting 
app.use(morgan('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());
app.set("trust proxy", 1);

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: (req: any) => (req.user ? 100 : 10), // limit each IP to 100 requests
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
   keyGenerator: (req: any) => req.ip, // Generate a unique identifier for the rate limit based on the IP address
});

app.use(limiter);

app.get('/gateway', (req, res) => {
  res.send({ message: 'Welcome to api-gateway!' });
});


// PLACE HERE! BACKEND SERVICES PROXYING
// ===========================

// ===========================

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  try {
    console.log("Site config initialized successfully");
  } catch (error) {
    console.error("Failed to initializing site config:", error);
  }
});
server.on('error', console.error);


