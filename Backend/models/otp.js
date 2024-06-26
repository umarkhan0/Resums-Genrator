import mongoose from 'mongoose';
const OTPSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        otp: {
            type: String,
            required: true,
        },
        expireAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);
OTPSchema.index({ expireAt: 1 }, { expireAfterSeconds: 60 });

OTPSchema.pre('save', function (next) {
    this.expireAt = new Date(Date.now() + 60 * 1000);
    next();
});

const OTP = mongoose.model('OTP', OTPSchema);

export default OTP;