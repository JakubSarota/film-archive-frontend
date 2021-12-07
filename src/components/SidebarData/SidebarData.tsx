import React from 'react'
import * as RiIcons from 'react-icons/ri'

const size = 20;

export const SidebarData = [
    {
        title: 'Movies',
        path: '/',
        icon: <RiIcons.RiMovie2Line size={size}/>,
        cName: 'nav-text'
    },
    {
        title: 'Best movies',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'What`s new',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Best movies in this year',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Series',
        path: '/',
        icon: <RiIcons.RiMovieLine size={size}/>,
        cName: 'nav-text'
    },
    {
        title: 'Best series',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Series in this year',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Reviews',
        path: '/',
        cName: 'nav-text'
    }
    
]
