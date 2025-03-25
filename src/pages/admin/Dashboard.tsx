import { ArrowTrendingUpIcon, BanknotesIcon, BellIcon, ComputerDesktopIcon, WalletIcon } from '@heroicons/react/24/outline'
import LineChart from '../../components/LineChart'
import SideNav from '../../components/SideNav'
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { Table } from '../../components/Table'


const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-w-screen min-h-screen">
      <SideNav/>
      <div className='grid grid-cols-6'>
        <div></div>
        <div className='col-span-5'>
          <div className="grid grid-cols-4">
            <div className="m-10">
              <Card className='p-3 w-full flex-row'>
                <CardHeader className='flex flex-row items-center' variant="filled" color="transparent" shadow={false}>
                  <BellIcon className="h-15 w-15"/>
                </CardHeader>
                <CardBody>
                  <p className="text-5xl font-bold">80</p>
                  <p className="text-xl font-medium">Low Stock</p>
                  <p className='text-sm font-light'>Click to view</p>
                </CardBody>
              </Card>
            </div>
            <div className="m-10">
              <Card className='p-3 w-full flex-row'>
                <CardHeader className='flex flex-row items-center' variant="filled" color="transparent" shadow={false}>
                  <ArrowTrendingUpIcon className="h-15 w-15"/>
                </CardHeader>
                <CardBody>
                  <p className="text-5xl md:text-5xl sm:text-3xl font-bold">88</p>
                  <p className="text-xl font-medium">Number of Sales</p>
                  <p className='text-sm font-light'>Click to view</p>
                </CardBody>
              </Card>
            </div>
            <div className="m-10">
              <Card className='p-3 w-full flex-row'>
                <CardHeader className='flex flex-row items-center' variant="filled" color="transparent" shadow={false}>
                  <BanknotesIcon className="h-15 w-15"/>
                </CardHeader>
                <CardBody>
                  <p className="text-5xl md:text-5xl sm:text-3xl font-bold">P8,000</p>
                  <p className="text-xl font-medium">Total Revenue</p>
                  <p className='text-sm font-light'>Click to view</p>
                </CardBody>
              </Card>
            </div>
            <div className="m-10">
              <Card className='p-3 w-full flex-row'>
                <CardHeader className='flex flex-row items-center' variant="filled" color="transparent" shadow={false}>
                  <ComputerDesktopIcon className="h-15 w-15"/>
                </CardHeader>
                <CardBody>
                  <p className="text-5xl md:text-5xl sm:text-3xl font-bold">7</p>
                  <p className="text-xl font-medium">Online Terminals</p>
                  <p className='text-sm font-light'>Click to view</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div>
          
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <section className="m-5 mt-0">
                <LineChart />
              </section>
            </div>
            <div className="m-5 mt-0">
              <Table/>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard
