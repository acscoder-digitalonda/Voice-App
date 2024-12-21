"use client";

import { useEffect, useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { ProtectedContent } from "@/components/auth/ProtectedContent";
import { saveAuthSession, clearAuthSession, checkAuthSession } from "@/lib/auth";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Check for existing session on component mount
  useEffect(() => {
    const isAuth = checkAuthSession();
    setIsAuthenticated(isAuth);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      saveAuthSession(password);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    clearAuthSession();
  };

  if (isAuthenticated) {
    return <ProtectedContent onLogout={handleLogout} />;
  }

  return (
    <LoginForm
      password={password}
      error={error}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
}