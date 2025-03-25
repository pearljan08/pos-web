import {
    Card,
    Input,
  } from "@material-tailwind/react";
  import {
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import SideBarList from "./SideBarList";

const SideNav = () => {
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);

    return (
        <div className="dark: bg-blue-gray-800">
            <Card className="min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-gray-100 dark:bg-gray-800">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <img src="../school.png" alt="brand" className="h-16 w-16 dark:bg-gray-100 rounded-full object-cover object-center" />
                    <p className="text-xl dark:text-gray-200">
                        University of Chuchu
                    </p>
                </div>
                <div className="p-2">
                    <Input icon={<MagnifyingGlassIcon className="h-5 w-5 dark:text-gray-100" />} label="Search" color="white"/>
                </div>
                <SideBarList />
            </Card>
        </div>
    );
}

export default SideNav
