import { Button, Card, CardBody, CardHeader, Input, Select, Textarea, Typography, Option } from "@material-tailwind/react"
import SideNav from "../../components/SideNav"
import LineChart from "../../components/LineChart"
import { Table } from "../../components/Table"
import BarChart from "../../components/BarChart"
import { BellIcon, CubeTransparentIcon, ArchiveBoxIcon, DocumentArrowUpIcon, DocumentArrowDownIcon, RectangleStackIcon } from "@heroicons/react/24/outline"
import { formatPeso } from "../../lib/format"
import Modal from "../../components/Modal"
import { useState } from "react"

const Inventory = () => {
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

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

    const modalBody = (
      <>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Name
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="eg. White Shoes"
            name="name"
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Category
          </Typography>
          <Select
            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
            placeholder="1"
            labelProps={{
              className: "hidden",
            }}
          >
            <Option>Clothing</Option>
            <Option>Fashion</Option>
            <Option>Watches</Option>
          </Select>
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Weight
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="eg. <8.8oz | 250g"
              name="weight"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Size
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="eg. US 8"
              name="size"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 text-left font-medium"
          >
            Description (Optional)
          </Typography>
          <Textarea
            rows={7}
            placeholder="eg. This is a white shoe with a comfortable sole."
            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
      </>
    );
    
    
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
                  <div className="m-5 mt-0 flex justify-end gap-2">
                    <Button onClick={handleOpen}>Add Product</Button>
                    <Button className="flex flex-row items-center gap-2 bg-teal-500"><DocumentArrowUpIcon className="w-5 h-5"/>Import</Button>
                    <Button className="flex flex-row items-center gap-2 bg-light-green-500"><DocumentArrowDownIcon className="w-5 h-5"/>Export</Button>
                    <Modal open={open} handleOpen={handleOpen} dialogBody={modalBody}/>
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
            
        </div>
      )
}

export default Inventory
