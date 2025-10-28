import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tractor, User, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase auth logic will go here
    console.log("Login:", { email, password });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase auth logic will go here
    console.log("Signup:", { name, email, phone, password, role: selectedRole });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Card className="w-full max-w-md shadow-[var(--shadow-soft)]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Tractor className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome to FarmShare</CardTitle>
          <CardDescription>Connect with your farming community</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" variant="hero">
                  Login
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  New here? Switch to Sign Up tab
                </p>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-phone">Phone Number</Label>
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                {/* Role Selection */}
                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRole("farmer")}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        selectedRole === "farmer"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <User className="h-6 w-6" />
                      <span className="text-xs font-medium">Farmer</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedRole("owner")}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        selectedRole === "owner"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Tractor className="h-6 w-6" />
                      <span className="text-xs font-medium">Owner</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedRole("agent")}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                        selectedRole === "agent"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Briefcase className="h-6 w-6" />
                      <span className="text-xs font-medium">Agent</span>
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero"
                  disabled={!selectedRole}
                >
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}