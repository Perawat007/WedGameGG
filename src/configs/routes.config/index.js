import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'dashboard',
        path: '/home',
        component: React.lazy(() => import('views/dashboard/index')),
        authority: ['admin', 'user'],
    },

    {
        key: 'appsAccount.settings',
        path: '/account/settings/profile',
        component: React.lazy(() => import('views/account/Settings')),
        authority: ['admin', 'user'],
        meta: {
            header: 'Settings',
            headerContainer: true,
        },
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'collapseMenu.item3',
        path: '/collapse-menu-item-view-3',
        component: React.lazy(() => import('views/crm/Customers/CollapseMenuItemView3')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: React.lazy(() =>
            import('views/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.editAgent.item1',
        path: '/collapse-menu-item-view-3',
        component: React.lazy(() => import('views/crm/Customers/CollapseMenuItemView3')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]
