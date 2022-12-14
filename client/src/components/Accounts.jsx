import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { BASE_URL, COLUMNS } from '../utils/constants';

const Accounts = () => {
    const [accounts, setAccounts] = useState()
    useEffect(() => {
        axios.get(`${BASE_URL}/accounts`).then((res) => {
            const dataWithAction = res.data?.map(el => (
                { ...el, action: <a href={`/accounts/${el._id}`}>View</a> }
            ))
            setAccounts(dataWithAction)
        })
    }, [])
    return (
        <Table
            dataSource={accounts}
            columns={COLUMNS}
        />
    )
}

export default Accounts