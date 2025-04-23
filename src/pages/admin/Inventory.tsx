import { Button, Card, CardBody, CardHeader, Input, Select, Textarea, Typography, Option, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react"
import SideNav from "../../components/SideNav"
import LineChart from "../../components/LineChart"
import { Table } from "../../components/Table"
import BarChart from "../../components/BarChart"
import { BellIcon, CubeTransparentIcon, ArchiveBoxIcon, DocumentArrowUpIcon, DocumentArrowDownIcon, RectangleStackIcon } from "@heroicons/react/24/outline"
import { formatPeso } from "../../lib/format"
import { useRef, useState } from "react"
import ModalBody from "../../components/Modal"

const Inventory = () => {
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = () => {
      fileInputRef.current?.click();
    };


    const totalSales = 88.72;
    const TABLE_HEAD = ["id", "product", "cost", "price", "stock", "dateAdded", "addedBy"];
  
    const TABLE_ROWS = [
      {
        id: "1",
        product: "Product 1",
        cost: 2000,
        price: 2500,
        stock: 2,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
      {
        id: "2",
        product: "Product 2",
        cost: 3000,
        price: 3500,
        stock: 0,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
      {
        id: "3",
        product: "Product 3",
        cost: 4000,
        price: 4500,
        stock: 5,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
      {
        id: "4",
        product: "Product 4",
        cost: 5000,
        price: 5500,
        stock: 3,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
      {
        id: "5",
        product: "Product 5",
        cost: 6000,
        price: 6500,
        stock: 6,
        dateAdded: "23/04/18",
        addedBy: "23/04/18",
      },
    ];


    
    
    return (
        <div className="bg-gray-100 min-w-screen min-h-screen">
          {/* <SideNav/> */}
          <div className="flex flex-col items-end p-5 pb-1">
            <h1 className="text-2xl font-bold">Inventory</h1>
            <p className="text-gray-500">Manage your inventory here</p>
          </div>
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
                  <div className="m-5 mt-0 flex justify-end gap-2">
                    <Button onClick={handleOpen}>Add Product</Button>
                    <Button className="flex flex-row items-center gap-2 bg-teal-500"><DocumentArrowUpIcon className="w-5 h-5"/>Import</Button>
                    <Button className="flex flex-row items-center gap-2 bg-light-green-500"><DocumentArrowDownIcon className="w-5 h-5"/>Export</Button>
                  </div>
                  <section className="m-5 mt-0">
                    <Table header={TABLE_HEAD} data={TABLE_ROWS} title="Product List" titleIcon={<RectangleStackIcon className="w-7 h-7"/>}/>
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
          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Its a simple modal.</DialogHeader>
            <DialogBody>
              <ModalBody />
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Confirm</span>
              </Button>
              
            </DialogFooter>
          </Dialog>
        </div>
      )
}

export default Inventory
