// Load environment variables
require('dotenv').config();

// External dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const expressWinston = require('express-winston');

// Internal dependencies
const errorLogger = require('./middleware/logger.middleware');
const credentials = require('./middleware/credentials.middleware');
const verifyJWT = require('./middleware/verifyJWT.middleware');
const corsOptions = require('./config/corsOptions');
const db = require('./models');

const app = express();

// Logging
app.use(
    expressWinston.errorLogger({
        winstonInstance: errorLogger,
    })
);

// Security and request handling
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100,
    })
);
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Database initialization
db.sequelize
    .sync()
    .then(() => console.log('Database synced successfully.'))
    .catch((err) => console.error('Error syncing database:', err));

// Routes
require('./routes/auth.routes')(app);
require('./routes/register.routes')(app);
require('./routes/refresh.routes')(app);
require('./routes/logout.routes')(app);

// JWT Verification for API routes
app.use(verifyJWT);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
