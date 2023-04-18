import ApiService from './ApiService'

export async function apiGetCrmDashboardData(data) {
    return ApiService.fetchData({
        url: '/crm/dashboard',
        method: 'get',
        data,
    })
}

export async function apiGetCrmCalendar() {
    return ApiService.fetchData({
        url: '/crm/calendar',
        method: 'get',
    })
}

//สร้างตัว Add Agent

export async function apiGetCrmCustomers(data) {
    return ApiService.fetchDataAg({
        url: '/post/admin',
        method: 'GET',
    })
}

export async function apiGetCrmCustomersStatistic(params) {
    return ApiService.fetchDataAg({
        url: '/post/admin',
        method: 'get',
        params,
    })
}

export async function apPutCrmCustomer(data) {
    return ApiService.putData({
        data,
    })
}

//AddAgent
export async function apAddCrmCustomer(data) {
    return ApiService.addAgent({
        data,
    })
}

export async function apiGetCrmCustomerDetails(params) {
    return ApiService.fetchData({
        url: '/crm/customer-details',
        method: 'get',
        params,
    })
}

export async function apiDeleteCrmCustomer(data) {
    return ApiService.fetchData({
        url: '/crm/customer/delete',
        method: 'delete',
        data,
    })
}

export async function apiGetCrmMails(params) {
    return ApiService.fetchData({
        url: '/crm/mails',
        method: 'get',
        params,
    })
}

export async function apiGetCrmMail(params) {
    return ApiService.fetchData({
        url: '/crm/mail',
        method: 'get',
        params,
    })
}
