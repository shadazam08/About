"use client";
import { useState, FormEvent, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import "./SignupPage.css";
import Link from "next/link";

const SignupPage: React.FC = () => {
    const { isLogin } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (isLogin) {
            router.push("/projects");
        }
    }, [isLogin, router]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setMessage("Please fill in all fields");
            return;
        }

        const respo = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await respo.json();
        if (data.success) {
            setMessage(data.message);
            localStorage.setItem('token', data.token);
            // Redirect to dashboard or login page
            router.push("/projects");
        } else {
            setMessage(data.message);
        }

        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h2>Create Account</h2>
                <p className="subtitle">Sign up to get started</p>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                {message && <div className="tooltip">{message}</div>}
                <p className="login-text">
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignupPage;