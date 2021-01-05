import React from 'react';
import './style.less'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom'
const Login: React.FC = () => {
    const { Item } = Form;
    const history = useHistory()
    const handleLogin = (val) => {
        console.log(val);
        // todo:实现回跳
        history.replace('/home')

    }
    return (
        <div className="loginWrap">
            <Form
                onFinish={handleLogin}
                initialValues={{
                    usr: "xzm",
                    pwd: "1878010666"
                }}
            >
                <Item
                    name='use'
                    rules={[{ required: true, message: "请输入用户名" }]}>
                    <Input placeholder="请输入用户名" />
                </Item>
                <Item
                    name="pwd"
                    rules={[
                        { required: true, message: "请输入密码" },
                        { pattern: /^1[3456789]\d{9}$/, message: "号码格式不对" },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                console.log('diyvalide');

                                return Promise.resolve();
                                // return Promise.reject('The two passwords that you entered do not match!');

                            }
                        })
                    ]}>
                    <Input placeholder="请输入密码" />
                </Item>
                <Item>
                    <Button htmlType='submit'>登陆</Button>
                </Item>
            </Form>
        </div>
    )
}
export default Login