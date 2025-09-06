import mongoesse from "mongoose";

const projectSchema = new mongoesse.Schema(
  {
    _id: {
      type: mongoesse.Schema.Types.ObjectId,
      default: () => new mongoesse.Types.ObjectId(), // 👈 Automatically generate ObjectId
    },
    projectName: {
      type: String,
      required: true,
      unique: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
      unique: true,
    },
    liveDemoLink: {
      type: String,
      required: false,
      unique: false,
    },
    projectImage: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "projects",
    timestamps: true,
    toJSON: { virtuals: true }, // 👈 Important: return virtuals in JSON
    toObject: { virtuals: true },
  },
);

projectSchema.virtual("project_id").get(function () {
  return this._id;
});

// 👇 Important: force refresh model if schema updated
// delete mongoesse.models.Project;
// const Project = mongoesse.model("Project", projectSchema);
const Project = mongoesse.models.Project || mongoesse.model("Project", projectSchema);
export default Project;
