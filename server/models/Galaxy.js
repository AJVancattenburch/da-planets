import mongoose from 'mongoose';
const Schema = mongoose.Schema

export const GalaxySchema = new Schema (
  {
    name: {
      type: String,
      required: true,
      maxLength: 25
    },
    stars: {
      type: Number,
      required: true,
      minLength: 1
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)
  
GalaxySchema.virtual('planetCount', {
  localField: '_id',
  foreignField: 'galaxyId',
  ref: 'Planet',
  justOne: false,
  count: true
})
