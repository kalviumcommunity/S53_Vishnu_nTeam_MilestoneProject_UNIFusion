const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  profile: {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    bio: {
      type: String,
      trim: true
    },
    profilePicture: {
      type: String,
      trim: true
    }
  },
  cgpa: {
    value: {
      type: Number,
      min: 0,
      max: 4,
      required: true
    },
    semester: {
      type: Number,
      required: true
    },
    recordedAt: {
      type: Date,
      default: Date.now
    }
  },
  techStacks: [{
    name: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    }
  }],
  experience: [{
    company: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    },
    description: {
      type: String
    }
  }],
  posts: [{
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    postedAt: {
      type: Date,
      default: Date.now
    }
  }],
  recentProjects: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    technologies: [String],
    completedAt: {
      type: Date
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
