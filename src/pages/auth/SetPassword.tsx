import { Button, Card, CardBody, CardHeader, CardFooter, Input, Typography } from '@material-tailwind/react'

const SetPassword = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen dark:bg-gray-900 bg-gray-200">
        <Card className="w-96 dark:bg-gray-200 bg-gray-900">
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
                            Set Password
                        </Typography>
                    </div>
                    <div className="mb-3">
                        <Input label="New Password"/>
                    </div>
                    <div className="mb-3">
                        <Input label="Confirm Password"/>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex flex-col items-center">
                <Button className="mb-2" fullWidth>Confirm</Button>
                <Button variant="outlined" className="mb-2" fullWidth>Cancel</Button>
            </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SetPassword
