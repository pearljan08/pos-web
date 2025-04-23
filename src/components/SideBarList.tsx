import { 
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix, 
    Chip
} from "@material-tailwind/react"
import * as iconSolid from "@heroicons/react/24/solid"
import * as iconOutline from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom";

const SideBarList = () => {

    const menuList = [
        {
            id: 1,
            title: "Dashboard",
            icon: <iconSolid.PresentationChartBarIcon />,
            link: "/admin/"
        },
        {
            id: 2,
            title: "Inventory",
            icon: <iconSolid.ArchiveBoxIcon />,
            link: "/admin/inventory"
        },
        {
            id: 3,
            title: "Users",
            icon: <iconSolid.UserGroupIcon />,
            link: "/admin/users"
        },
        {
            id: 5,
            title: "Reports & Analytics",
            icon: <iconSolid.DocumentChartBarIcon />,
            link: "/admin/reports"
        }
    ];

  return (
    <>
        <List className="dark:text-gray-100">
            {
                menuList.map((menu) => (
                    <ListItem key={menu.id}>
                        <ListItemPrefix className="h-5 w-5">
                            {menu.icon}
                        </ListItemPrefix>
                        <NavLink to={menu.link} end>{menu.title}</NavLink>
                    </ListItem>
                ))
            }
            <ListItem>
                <ListItemPrefix>
                    <iconSolid.CogIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <iconSolid.PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
            </ListItem>
        </List>
    </>
  )
}

export default SideBarList
