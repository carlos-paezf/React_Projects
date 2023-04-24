import { FaBook, FaBriefcase, FaCreditCard } from 'react-icons/fa';
import { LinkType } from '../types';


export const links: LinkType[] = [
    {
        page: 'products',
        subLinks: [
            { label: 'payment', icon: <FaCreditCard />, url: '/products' },
            { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
            { label: 'connect', icon: <FaCreditCard />, url: '/products' },
        ]
    },
    {
        page: 'developers',
        subLinks: [
            { label: 'plugins', icon: <FaBook />, url: '/products' },
            { label: 'libraries', icon: <FaBook />, url: '/products' },
            { label: 'help', icon: <FaBook />, url: '/products' },
            { label: 'billing', icon: <FaBook />, url: '/products' },
        ]
    },
    {
        page: 'company',
        subLinks: [
            { label: 'about', icon: <FaBriefcase />, url: '/products' },
            { label: 'customers', icon: <FaBriefcase />, url: '/products' },
        ]
    }
];