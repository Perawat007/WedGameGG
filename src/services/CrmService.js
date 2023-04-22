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

//get Agent
export async function apiGetAgent(data) {
    return ApiService.fetchDataAg({
        data
    })
}

//get Admin
export async function apiGetCrmAdmin(data) {
    return ApiService.fetchDataAd({
        data
    })
}

//get Member
export async function apiGetCrmMember(data) {
    return ApiService.fetchDataMember({
        data
    })
}

//get Log_Member
export async function apiGetLogMember(data) {
    return ApiService.fetchLogMember({
        data
    })
}

export async function apiGetCrmCustomersStatistic(params) {
   return ApiService.fetchDataAg({
        params
    })
}

//PutAgent
export async function apPutAgent(data) {
    return ApiService.putDataAgent({
        data,
    })
}

//PutAdmin
export async function apPutAdmin(data) {
    return ApiService.putDataAdmin({
        data,
    })
}

//AddAdmin
export async function AddAdmin(data) {
    return ApiService.addAdmin({
        data,
    })
}

//AddAgent
export async function apAddAgent(data) {
    return ApiService.addAgent({
        data,
    })
}

//Get จำนวน Data มาไว้ดูในหน้า Dashboard จำนวน ของ Admin Agent Member
export async function getCustomer() {
    return ApiService.getValusData()
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
