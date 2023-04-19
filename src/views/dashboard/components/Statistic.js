import React from 'react'
import { Card, Avatar } from 'components/ui'
import NumberFormat from 'react-number-format'
import { GrowShrinkTag } from 'components/shared'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
    HiUserCircle,
} from 'react-icons/hi'

const StatisticCard = ({ data = {}, label, valuePrefix, date }) => {
    return (
        <Card>
            <h6 className="font-semibold mb-4 text-sm">{label}</h6>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold">
                    <Avatar
                    size={50}
                    className="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100"
                    icon={<HiUserCircle />}
                />
                &nbsp;
                &nbsp;
                        <NumberFormat
                            displayType="text"
                            value={data}
                            thousandSeparator
                            prefix={valuePrefix}
                        />
                    </h3>
                    <br/>
                    <p>
                        จำนวนสมาชิกทั้งหมดในวันที่ {''}
                        <span className="font-semibold">
                            {dayjs(date).format('DD MMM')}
                        </span>
                    </p>
                </div>
                <GrowShrinkTag value={50} suffix="%" />
            </div>
        </Card>
    )
}

const Statistic = ({ data = {} }) => {
    const startDate = useSelector(
        (state) => state.salesDashboard.state.startDate
    )

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <StatisticCard
                data={data.dataAdmin}
                label="Admin จำนวน / คน"
                tagSuffix="%"
                date={startDate}
            />
            <StatisticCard
                data={data.dataAgent}
                label="Agent จำนวน / คน"
                tagSuffix="%"
                date={startDate}
            />
            <StatisticCard
                data={data.dataMember}
                label="Member จำนวน / คน"
                tagSuffix="%"
                date={startDate}
            />
        </div>
    )
}

export default Statistic
