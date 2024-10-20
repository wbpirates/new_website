"use client";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Validate form input
    useEffect(() => {
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        const isPasswordValid = formData.password.trim().length >= 6;
        setIsValid(isEmailValid && isPasswordValid);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error("Both Email and Password are required.");
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const mockApiResponse = { success: true };
            if (mockApiResponse.success) {
                toast.success("Login successful!");
            } else {
                toast.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("An error occurred while logging in.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleFormSubmit} className="form-container">
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={togglePasswordVisibility}
                            aria-label="Toggle Password Visibility"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>


                <button type="submit" className="form-button" disabled={!isValid || isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default LoginForm;
