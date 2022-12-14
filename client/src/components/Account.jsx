
import React, { useState, useEffect } from 'react'
import { Descriptions, Spin } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';
import { BASE_URL } from '../utils/constants';

const Account = () => {
    const { id } = useParams();
    const [account, setAccount] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`${BASE_URL}/accounts/${id}`).then(res => {
            setAccount(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])
    const { _id, name, owner, createdOn, updatedOn } = account;
    const formattedCreatedOn = createdOn?.split('T')[0];
    const formattedUpdatedOn = updatedOn?.split('T')[0];

    return (
        <React.Fragment>
            {loading ? (
                <Spin />
            ) : (
                Object.keys(account).length ? (
                    <Descriptions
                        title={name}
                        bordered
                        column={1}
                    >
                        <Descriptions.Item label='ID'>{_id}</Descriptions.Item>
                        <Descriptions.Item label='Name'>{name}</Descriptions.Item>
                        <Descriptions.Item label='Owner'>{owner}</Descriptions.Item>
                        <Descriptions.Item label='Created On'>{formattedCreatedOn}</Descriptions.Item>
                        <Descriptions.Item label='Updated On'>{formattedUpdatedOn}</Descriptions.Item>
                    </Descriptions>
                ) : (
                    <NotFound />
                )
            )
            }
        </React.Fragment>
    )
}

export default Account