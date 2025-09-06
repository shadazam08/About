"use client";
import { useState, FormEvent, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import "./LoginPage.css";
// import Link from "next/link";

const LoginPage: React.FC = () => {
    const { isLogin } = useAuth();
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
        if (!email || !password) {
            setMessage("Please fill in all fields");
            return;
        }

        const respo = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await respo.json();
        if (data.success) {
            setMessage(data.message);
            // You can redirect or perform other actions here
            localStorage.setItem('token', data.token);
            router.push("/projects");
            // For example, redirect to a dashboard page
            // window.location.href = '/dashboard';
        }
        else {
            setMessage(data.message);
        }

        // Handle successful login, e.g., redirect or store token


        // Simulate login
        // setMessage(`Logged in as ${email}`);
        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <div className="login-page">

            <div className="login-card">
                <h2>Welcome Back</h2>
                <p className="subtitle">Sign in to your account</p>
                <form className="login-form" onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </form>
                {message && <div className="tooltip">{message}</div>}
                {/* <p className="signup-text">
                    Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                </p> */}
            </div>
        </div>
    );
}

export default LoginPage;