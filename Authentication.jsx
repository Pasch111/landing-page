import React, { useState } from 'react';
import { Github, Key, Mail, ChevronRight, Globe, Command, Shield, UserCircle, Fingerprint, Lock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('developer');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleOTPRequest = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Scrubbe</h1>
          <p className="text-slate-600">Security Information and Event Management</p>
        </div>

        {/* Main Auth Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to Scrubbe</CardTitle>
            <CardDescription>
              Choose your preferred authentication method to get started
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                {!showOTP ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        required
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full"
                        required
                      />
                      <div className="flex justify-between">
                        <Button variant="link" type="button" className="p-0 h-auto text-xs">
                          Forgot password?
                        </Button>
                        <Button variant="link" type="button" className="p-0 h-auto text-xs" onClick={handleOTPRequest}>
                          Login with OTP
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button type="submit" className="w-full">
                        Sign In
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-2 text-slate-500">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full" onClick={() => {}}>
                          <Github className="mr-2 h-4 w-4" />
                          Github
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => {}}>
                          <Globe className="mr-2 h-4 w-4" />
                          Google
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full" onClick={() => {}}>
                          <Command className="mr-2 h-4 w-4" />
                          Apple
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => {}}>
                          <Fingerprint className="mr-2 h-4 w-4" />
                          SSO
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-slate-600">
                        We've sent a one-time password to {email || "your email"}
                      </p>
                      <Input
                        type="text"
                        placeholder="Enter OTP code"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        className="w-full text-center text-lg letter-spacing-wide"
                        maxLength={6}
                        required
                      />
                      <div className="flex justify-between">
                        <Button variant="link" type="button" className="p-0 h-auto text-xs">
                          Resend code
                        </Button>
                        <Button variant="link" type="button" className="p-0 h-auto text-xs" onClick={() => setShowOTP(false)}>
                          Use password instead
                        </Button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Verify OTP
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </TabsContent>

              <TabsContent value="signup">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={userType === 'developer' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setUserType('developer')}
                    >
                      <Key className="mr-2 h-4 w-4" />
                      Developer
                    </Button>
                    <Button
                      variant={userType === 'business' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setUserType('business')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Business
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Work Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      required
                    />
                    <Input
                      type="password"
                      placeholder="Create Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full"
                      required
                    />

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mfa" className="rounded border-gray-300" />
                      <label htmlFor="mfa" className="text-sm text-slate-700">Enable multi-factor authentication</label>
                    </div>

                    <Button type="submit" className="w-full">
                      Create Account
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full" onClick={() => {}}>
                        <Github className="mr-2 h-4 w-4" />
                        Github
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => {}}>
                        <Globe className="mr-2 h-4 w-4" />
                        Google
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full" onClick={() => {}}>
                        <Command className="mr-2 h-4 w-4" />
                        Apple
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => {}}>
                        <Fingerprint className="mr-2 h-4 w-4" />
                        SSO
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-0">
            <Separator className="my-2" />
            <div className="text-xs text-slate-500 text-center">
              <p>For enterprise SSO or API key management, contact your admin</p>
              <p className="mt-1">Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a></p>
            </div>
          </CardFooter>
        </Card>

        {showSuccess && (
          <Alert className="mt-4">
            <AlertDescription>
              Successfully authenticated! Redirecting to dashboard...
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default AuthPage;