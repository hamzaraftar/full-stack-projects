import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
const Auth = () => {
    return (
        <div className="dark:text-white grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex flex-col items-start justify-start md:pt-[50px]">
                <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/17235/17235845.png" alt="chat image" />
                <h1 className="text-3xl py-2 ">Chat App</h1>
                <p className="text-extralight py-1 text-xl">Simple, Personal ,Real time chat app</p>
            </div>
            <div className="">
                <Tabs defaultValue="login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">LogIn</TabsTrigger>
                        <TabsTrigger value="signup">SignUp</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Enter Email and Password to login
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="abc@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="********" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>SignUp</CardTitle>
                                <CardDescription>
                                    Enter below fields to signup.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" placeholder="Hamza Asghar" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email_">Email</Label>
                                    <Input id="email_" placeholder="hamza@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="********" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="confirm_password">Confirm Password</Label>
                                    <Input id="confirm_password" placeholder="********" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Signp</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Auth
