import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import SideNav from "../../components/SideNav"
import LineChart from "../../components/LineChart"
import { Table } from "../../components/Table"
import BarChart from "../../components/BarChart"
import { BellIcon, CubeTransparentIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline"
import { formatPeso } from "../../lib/format"

const Inventory = () => {
    const totalSales = 88.72;
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
          <div className='grid grid-cols-6'>
            <div></div>
            <div className='col-span-5'>
              <div className="grid grid-cols-3">
                <div className="m-5">
                  <Card className='p-3 w-full flex-row'>
                    <CardHeader className='flex flex-row items-center' variant="filled" color="blue-gray" shadow={false}>
                      <BellIcon className="h-15 w-15"/>
                    </CardHeader>
                    <CardBody>
                      <p className="text-5xl font-bold">80</p>
                      <p className="text-xl font-medium">Low Stock</p>
                      <p className='text-sm font-light'>Click to view</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="m-5">
                  <Card className='p-3 w-full flex-row'>
                    <CardHeader className='flex flex-row items-center' variant="filled" color="light-green" shadow={false}>
                      <ArchiveBoxIcon className="h-15 w-15"/>
                    </CardHeader>
                    <CardBody>
                      <p className="text-5xl md:text-5xl sm:text-3xl font-bold">2878</p>
                      <p className="text-xl font-medium">Total Products</p>
                      <p className='text-sm font-light'>Click to view</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="m-5">
                  <Card className='p-3 w-full flex-row'>
                    <CardHeader className='flex flex-row items-center' variant="filled" color="teal" shadow={false}>
                      <CubeTransparentIcon className="h-15 w-15"/>
                    </CardHeader>
                    <CardBody>
                      <p className="text-5xl md:text-5xl sm:text-3xl font-bold">8</p>
                      <p className="text-xl font-medium">Out of Stock</p>
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
                <div className="col-span-3">
                  <section className="m-5 mt-0">
                  <Table/>
                  </section>
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
                    <Table />
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

export default Inventory
