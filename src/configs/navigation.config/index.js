import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'dashboard',
        path: '/home',
        title: 'Dashboard',
        translateKey: 'nav.dashboard',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['admin', 'user'],
        subMenu: [],
    },
    /** Example purpose only, please remove */
    /**{
        key: 'collapseReports',
        path: '',
        title: 'Reports',
        translateKey: 'nav.collapseReports.reports',
        icon: 'groupCollapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseReports.item1',
                path: '/group-collapse-menu-item-view-1',
                title: 'Menu item 1',
                translateKey: 'nav.collapseReports.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseReports.item2',
                path: '/group-collapse-menu-item-view-2',
                title: 'Menu item 2',
                translateKey: 'nav.collapseReports.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseReports.item3',
                path: '/group-collapse-menu-item-view-2',
                title: 'Menu item 3',
                translateKey: 'nav.collapseReports.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseReports.item4',
                path: '/group-collapse-menu-item-view-2',
                title: 'Menu item 4',
                translateKey: 'nav.collapseReports.item4',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseReports.item5',
                path: '/group-collapse-menu-item-view-2',
                title: 'Menu item 5',
                translateKey: 'nav.collapseReports.item5',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },*/
    {
        key: 'collapseMenu',
        path: '',
        title: 'Collapse Menu',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseMenu.item1',
                path: '/memderLog',
                title: 'Collapse menu item 1',
                translateKey: 'nav.collapseMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            /*{
                key: 'collapseMenu.item2',
                path: '/collapse-menu-item-view-2',
                title: 'Collapse menu item 2',
                translateKey: 'nav.collapseMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },*/
        ],
    },
    {
        key: 'collapseAdmin',
        path: '',
        title: 'Collapse Menu',
        translateKey: 'nav.collapseAdmin.collapseAdmin',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseAdmin.item1',
                path: '/collapse-menu-item-view-3',
                title: 'Collapse menu item 1',
                translateKey: 'nav.collapseAdmin.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            /*{
                key: 'collapseAdmin.item2',
                path: '/collapse-menu-item-view-2',
                title: 'Collapse menu item 2',
                translateKey: 'nav.collapseAdmin.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },*/
        ],
    },
    {
        key: '',
        path: '',
        title: '',
        translateKey: '',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            /*{
                key: 'groupMenu.editGame',
                path: '',
                title: 'Group single menu item',
                translateKey: 'nav.groupMenu.editGame.editGame',
                icon: 'groupSingleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.editGame.item1',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.editGame.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.editGame.item2',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.editGame.item2',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },*/
            {
                key: 'groupMenu.editAgent',
                path: '',
                title: 'Group collapse menu',
                translateKey: 'nav.groupMenu.editAgent.editAgent',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.editAgent.item1',
                        path: '/editDataAgent',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.editAgent.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
           /* {
                key: 'groupMenu.apis',
                path: '',
                title: 'Group collapse menu',
                translateKey: 'nav.groupMenu.apis.apis',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.apis.item1',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.apis.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'groupMenu.userManual',
                path: '',
                title: 'Group collapse menu',
                translateKey: 'nav.groupMenu.userManual.userManual',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.userManual.item1',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.userManual.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.userManual.item2',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.userManual.item2',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.userManual.item3',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.userManual.item3',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.userManual.item4',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.userManual.item4',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.userManual.item5',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.userManual.item5',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'groupMenu.condition',
                path: '',
                title: 'เงื่อนไขและข้อตกลง',
                translateKey: 'nav.groupMenu.condition.condition',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [],
            },
            {
                key: 'groupMenu.updatereport',
                path: '',
                title: 'รายงานการอัพเดทระบบ',
                translateKey: 'nav.groupMenu.updatereport.updatereport',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [],
            },
            {
                key: 'groupMenu.manual',
                path: '',
                title: 'คู่มือการใช้งาน Demo',
                translateKey: 'nav.groupMenu.manual.manual',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [],
            },*/
        ],
    },
]

export default navigationConfig
