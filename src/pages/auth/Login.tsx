import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    CardHeader,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-900">
        <Card className="w-96 bg-gray-200">
            <CardHeader
                shadow={false}
                className="flex flex-col items-center"
                color="transparent"
            >
                <img
                    src="./../school.png"
                    alt="Material Tailwind"
                    className="h-50 "
                />
            </CardHeader>
            <CardBody>
                <div className="grid grid-rows-3">
                    <div className="mb-3">
                        <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
                            Login
                        </Typography>
                    </div>
                    <div className="mb-3">
                        <Input label="Username"/>
                    </div>
                    <div className="mb-3">
                        <Input label="Password"/>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex flex-col items-center">
                <Button className="mb-2" fullWidth>Login</Button>
                <Button
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center gap-3"
                    fullWidth
                >
                    <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                    Continue with Google
                </Button>
            </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Login
