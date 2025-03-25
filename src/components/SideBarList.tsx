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
            title: "My Courses",
            icon: <iconSolid.BookOpenIcon />
        },
        {
            id: 3,
            title: "Lessons",
            icon: <iconSolid.FilmIcon />
        },
        {
            id: 4,
            title: "Assignments",
            icon: <iconSolid.ClipboardDocumentListIcon />
        },
        {
            id: 5,
            title: "Progress & Grades",
            icon: <iconSolid.ChartBarSquareIcon />
        },
        {
            id: 6,
            title: "Quizzes & Exams",
            icon: <iconSolid.PuzzlePieceIcon />
        },
        {
            id: 7,
            title: "Discussions",
            icon: <iconSolid.ChatBubbleBottomCenterTextIcon />
        },
        {
            id: 8,
            title: "Calendar & Deadlines",
            icon: <iconSolid.CalendarDaysIcon />
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
                    <iconSolid.BellIcon className="h-5 w-5" />
                </ListItemPrefix>
                Notifications
                <ListItemSuffix>
                    <Chip value="14" size="sm" variant="ghost" className="rounded-full dark:bg-gray-300" />
                </ListItemSuffix>
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <iconSolid.UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <iconSolid.Cog6ToothIcon className="h-5 w-5" />
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
