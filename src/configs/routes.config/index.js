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
        key: 'collapseReports.item1',
        path: '/dailyOverview',
        component: React.lazy(() => import('views/reports/daily_overview/daily_overviews')),
        authority: ['admin', 'user'],
    },
    {
        key: 'collapseReports.item2',
        path: '/monthlyCommission',
        component: React.lazy(() => import('views/reports/monthly_commission/indexmonthly')),
        authority: ['admin', 'user'],
    },

    {
        key: 'collapseReports.item3',
        path: '/dayCommission',
        component: React.lazy(() => import('views/reports/day_commission/indexday')),
        authority: ['admin', 'user'],
    },

    {
        key: 'collapseReports.item4',
        path: '/receivedPercentage',
        component: React.lazy(() => import('views/reports/receivedpercentage/indexpercen')),
        authority: ['admin', 'user'],
    },


    {
        key: 'collapseReports.item5',
        path: '/userRank',
        component: React.lazy(() => import('views/reports/userRank/indexRankUsers')),
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
        path: '/memderLog',
        component: React.lazy(() => import('views/membergame/Customers/memderLog')),
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
        path: '/editDataAgent',
        component: React.lazy(() => import('views/editdataagent/Customers/EditAgent')),
        authority: [],
    },
    //AddAgent
    {
        key: 'groupMenu.editAgent.item2',
        path: '/AddAgent',
        component: React.lazy(() => import('views/editdataagent/Customers/components/CustomerAddDialog')),
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

    {
        key: 'groupMenu.userManual.item1',
        path: '/manual/add-credit-user',
        component: React.lazy(() =>
            import('views/usermanual/indexaddcredit')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.userManual.item2',
        path: '/manual/add-member-user',
        component: React.lazy(() =>
            import('views/usermanual/indexaddmember')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.userManual.item4',
        path: '/manual/graph',
        component: React.lazy(() =>
            import('views/usermanual/indexseeGraph')
        ),
        authority: [],
    },

    {
        key: 'groupMenu.condition',
        path: '/conditionGame',
        component: React.lazy(() =>
            import('views/indexcondition')
        ),
        authority: [],
    },

    {
        key: 'groupMenu.updatereport',
        path: '/System-Changelogs',
        component: React.lazy(() =>
            import('views/system_changelogs')
        ),
        authority: [],
    },
    //ดู SubAgent ของ Agent
    {
        key: 'groupMenu.editAgent.item3',
        path: '/editSutAgent/:nameAgent/:subagentId',
        component: React.lazy(() => import('views/editdataagent/subAgent/Customers/subAgent')),
        authority: [],
    },
     //ดู MemberSubAgent ของ Agent
    {
        key: 'groupMenu.editAgent.item3',
        path: '/memberSub/:nameAgent/:nameSub/:agentId/:subagentId',
        component: React.lazy(() => import('views/editdataagent/memberSub/Customers/memberSubAg')),
        authority: [],
    },

    //editAgent pang
    {
        key: 'groupMenu.editAgent.item3',
        path: '/editAgent/:agentId',
        component: React.lazy(() => import('views/editdataagent/Customers/components/CustomerEditDialog')),
        authority: [],
    },

    //editSubAgent pang
    {
        key: 'groupMenu.editSubAgent.item1',
        path: '/editAgentSub/:nameAgent/:nameSubAgent/:agentId',
        component: React.lazy(() => import('views/editdataagent/subAgent/Customers/components/CustomerEditDialog')),
        authority: [],
    },

    //editPercentSutAgent pang
    {
        key: 'groupMenu.editSubAgent.item1',
        path: '/editPercentSutAgent/:nameAgent/:nameSubAgent/:id/:agentId',
        component: React.lazy(() => import('views/editdataagent/subAgent/FormsEditPercent/EditPercent')),
        authority: [],
    },

    //editMemberSub pang
    {
        key: 'groupMenu.editMemberSub.item1',
        path: '/editMemberSub/:nameAgent/:nameSubAgent/:agentId/:subagentId',
        component: React.lazy(() => import('views/editdataagent/memberSub/Customers/components/CustomerEditDialog')),
        authority: [],
    },

    //AddMemberSub pang
    {
        key: 'groupMenu.AddMemberSub.item2',
        path: '/AddMemberSub/:nameAgent/:nameSubAgent/:agentId/:subagentId',
        component: React.lazy(() => import('views/editdataagent/memberSub/Customers/components/CustomerAddDialog')),
        authority: [],
    },

    //AddSubAgent pang
    {
        key: 'groupMenu.AddMemberSub.item2',
        path: '/AddAgentSub/:nameAgent/:agentId',
        component: React.lazy(() => import('views/editdataagent/subAgent/Customers/components/CustomerAddDialog')),
        authority: [],
    },

     //ดู Log PlayGame MemberSubAgent ของ Agent
     {
        key: 'groupMenu.editAgent.item3',
        path: '/LogPlayGameMemberSub/:nameAgent/:nameSubAgent/:agentId/:subagentId/:idMember',
        component: React.lazy(() => import('views/LogMember/Market/LogData')),
        authority: [],
    },
]

