import { 
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix, 
    Chip
} from "@material-tailwind/react"
import * as iconSolid from "@heroicons/react/24/solid"
import * as iconOutline from "@heroicons/react/24/outline"

const SideBarList = () => {

    const menuList = [
        {
            id: 1,
            title: "Dashboard",
            icon: <iconSolid.PresentationChartBarIcon />
        },
        {
            id: 2,
            title: "Inventory",
            icon: <iconSolid.ArchiveBoxIcon />
        },
        {
            id: 3,
            title: "Users",
            icon: <iconSolid.UserGroupIcon />
        },
        {
            id: 4,
            title: "Transactions",
            icon: <iconSolid.ChartPieIcon />
        },
        {
            id: 5,
            title: "Reports & Analytics",
            icon: <iconSolid.DocumentChartBarIcon />
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
                        {menu.title}                        
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
