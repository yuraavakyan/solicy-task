import { Button, Result } from 'antd'
import React from 'react'

const NotFound = () => {
    return (
        <Result
            status="warning"
            title="Something went wrong :("
            extra={
                <a href='/accounts'>
                    <Button
                        type="primary"
                        key="home"
                    >
                        Go to Home page
                    </Button>
                </a>
            }
        />
    )
}

export default NotFound