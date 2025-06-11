import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactCard() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const contactInfo = {
    email: "me@example.me",
    phone: "+15123456183",
    twitter: "@meetericabrooks"
  };

  const maskEmail = (email) => {
    const [username, domain] = email.split('@');
    const maskedUsername = username.slice(0, 2) + '●●●●●●' + username.slice(-1);
    const maskedDomain = '●●●●●●' + domain.slice(-3);
    return maskedUsername + '@' + maskedDomain;
  };

  const maskPhone = (phone) => {
    return phone.slice(0, 4) + '●●●●●●' + phone.slice(-3);
  };

  return (
    <Card className="w-full max-w-md mx-auto rounded-none">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">Contact</CardTitle>
        
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Email Section */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Email</p>
              <p className="text-sm font-mono">
                {showEmail ? contactInfo.email : maskEmail(contactInfo.email)}
              </p>
            </div>
          </div>
          <Button
            variant="link"
            onClick={() => setShowEmail(!showEmail)}
            className="text-red-600 hover:text-red-700 font-medium p-0"
          >
            Show
          </Button>
        </div>

        {/* Mobile Section */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Mobile (<b>Text</b> only)</p>
              <p className="text-sm font-mono">
                {showPhone ? contactInfo.phone : maskPhone(contactInfo.phone)}
              </p>
            </div>
          </div>
          <Button
            variant="link"
            onClick={() => setShowPhone(!showPhone)}
            className="text-red-600 hover:text-red-700 font-medium p-0"
          >
            Show
          </Button>
        </div>

        {/* Twitter/X Section */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-lg">𝕏</span>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">(formerly Twitter)</p>
              <p className="text-sm font-mono text-blue-600 hover:text-blue-800">
                <a href={`https://twitter.com/${contactInfo.twitter.slice(1)}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.twitter}
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export default function CardInfo() {
//   return (
//     <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle>Login to your account</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//         <CardAction>
//           <Button variant="link">Sign Up</Button>
//         </CardAction>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="flex flex-col gap-6">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <a
//                   href="#"
//                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex-col gap-2">
//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//         <Button variant="outline" className="w-full">
//           Login with Google
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }
