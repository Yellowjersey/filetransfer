import mongoose from 'mongoose';
import { AppConstants } from '../../../utils/appConstants';

const seasonSchema = new mongoose.Schema(
  {
    name: { type: String },
    season_id: { type: mongoose.Types.ObjectId, required: true },
    from_date: { type: Date, required: true },
    to_date: { type: Date, required: true },
    status: { type: Number, default: 0 }, // 1: deleted, 0: active
  },
  { timestamps: true }
);

module.exports = mongoose.model(AppConstants.MODEL_SEASON, seasonSchema);
