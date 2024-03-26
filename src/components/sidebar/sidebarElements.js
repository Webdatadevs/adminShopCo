import { BiCategoryAlt } from "react-icons/bi"; 
import { SlBasket } from "react-icons/sl"; 
import { RxDashboard } from "react-icons/rx";
const sidebarElementsData = [
    {
        id: 1,
        name: "DASHBOARD",
        icon: RxDashboard,
        path: "/",
    },
    {
        id: 2,
        name: "Products",
        icon: SlBasket,
        title: "-ADMIN INTERFACE",
        path: "/products"
    },
    {
        id: 3,
        name: "Categories",
        icon: BiCategoryAlt,
        path : "/categories"
    },
    // {
    //     id: 4,
    //     name: "Creat products",
    //     icon: BiTable,
    //     path: '/creat-products'
    // },
    // {
    //     id: 5,
    //     name: "Creat categories",
    //     icon: BsReverseLayoutTextWindowReverse,
    //     path: '/creat-categories'
    // },
];

export default sidebarElementsData;
