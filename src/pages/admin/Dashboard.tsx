import { ArrowTrendingUpIcon, BanknotesIcon, BellIcon, ComputerDesktopIcon, WalletIcon } from '@heroicons/react/24/outline'
import LineChart from '../../components/LineChart'
import SideNav from '../../components/SideNav'
import { Button, Card, CardBody, CardHeader, Select, Typography, Option } from '@material-tailwind/react'
import { Table } from '../../components/Table'
import { formatPeso } from '../../lib/format'
import BarChart from '../../components/BarChart'



const Dashboard = () => {

  const totalSales = 9998.72;

  const TABLE_HEAD = ["Cashier", "Terminal", "Total Sales"];
  
  const TABLE_ROWS = [
    {
      name: "John Michael",
      terminal: 1,
      sales: 2000,
      org: "Organization",
      online: true,
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      terminal: 2,
      sales: 8673,
      org: "Developer",
      online: false,
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      terminal: 3,
      sales: 9027,
      org: "Projects",
      online: false,
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      terminal: 4,
      sales: 2319,
      org: "Developer",
      online: true,
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      terminal: 5,
      sales: 809,
      org: "Executive",
      online: false,
      date: "04/10/21",
    },
  ];


  return (
    <div className="bg-gray-100 min-w-screen min-h-screen">
      <SideNav/>
      <div className="flex flex-col items-end p-5">
        <div className=''>
          <Select label="Date Filter">
            <Option>Days</Option>
            <Option>Months</Option>
            <Option>Years</Option>
          </Select>
        </div>
      </div>
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
                  <p className="text-5xl md:text-5xl sm:text-3xl font-bold">{formatPeso.format(totalSales)}</p>
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
              <Table header={TABLE_HEAD} data={TABLE_ROWS}/>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div>
          
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <section className="m-5 mt-0">
                <Table header={TABLE_HEAD} data={TABLE_ROWS}/>
              </section>
            </div>
            <div className="m-5 mt-0 col-span-3">
              <BarChart/>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard
