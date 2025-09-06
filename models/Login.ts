import mongoesse from "mongoose";

const loginSchema = new mongoesse.Schema(
  {
    _id: {
      type: mongoesse.Schema.Types.ObjectId,
      default: () => new mongoesse.Types.ObjectId(), // 👈 Automatically generate ObjectId
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      // In a real application, ensure passwords are hashed before storage
      // select: false, // Do not return password field by default
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users_login",
    timestamps: true,
    toJSON: { virtuals: true }, // 👈 Important: return virtuals in JSON
    toObject: { virtuals: true },
  },
);

loginSchema.virtual("login_id").get(function () {
  return this._id;
});

// 👇 Important: force refresh model if schema updated
delete mongoesse.models.Login;
const Login = mongoesse.model("Login", loginSchema);
// const Login = mongoesse.models.Login || mongoesse.model("Login", loginSchema);
export default Login;
