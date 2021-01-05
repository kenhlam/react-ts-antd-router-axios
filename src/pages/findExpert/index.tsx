import React, { useState } from 'react';

import { Form, Input, Button, Col, Row, Select, Cascader, DatePicker, Radio } from 'antd';
import './style.less'

const ExpertDemond: React.FC = () => {
    const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);


    }
    const onFinishFailed = (values) => {
        console.log(values);

    }
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 12 },
    };
    const initialValues = {
        title: '需求标题1',
        company: '所属单位1',
        address: ['2', '21'],
        area: 'jack',
        seviceAddress: "服务地址1",
        serviceType: "1",
        serviceText: "服务内容",
        isMoney: "0",
        funds: "1千到1千万",
        min: "0",
        max: "10000",

    }
    const options = [{
        value: '1',
        label: "江苏",
        children: [{
            value: '11',
            label: "无锡",
            children: [{
                value: '111',
                label: "新吴区"
            }, {
                value: '112',
                label: "凉西区"
            }]
        }, {
            value: '12',
            label: "江阴",
        }]
    }, {
        value: '2',
        label: "北京",
        children: [{
            value: '21',
            label: "东城区",
        }, {
            value: '22',
            label: "西城区",
        }]
    }];
    const typeOption = [
        { label: '技术咨询', value: '1' },
        { label: '项目评审', value: '2' },
        { label: '活动授课', value: '3' }
    ]
    return (
        <div className="w1200">
            <Form form={form} {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={initialValues}>
                <Form.Item name='title' label='需求标题' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='company' label='所属单位' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label='所在地区' name='address' rules={[{ required: true }]}>
                    <Cascader options={options} />
                </Form.Item>
                <Form.Item label='所属领域' name='area' rules={[{ required: true }]}>
                    <Select
                        showSearch
                        allowClear
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
                <Form.Item label='服务时间' name='seviceTime' rules={[{ required: true }]}>
                    <DatePicker allowClear format='YYYY-MM-DD' />
                </Form.Item>
                <Form.Item label='服务地址' name='seviceAddress' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label='服务类型' name='serviceType' rules={[{ required: true }]}>
                    <Radio.Group
                        options={typeOption}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label='服务类容' name='serviceText' rules={[{ required: true }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item label='支付费用' rules={[{ required: true }]}>
                    <Form.Item name="isMoney">
                        <Radio.Group options={[{ label: "愿意", value: '1' }, { label: "不愿意", value: '0' }]} />
                    </Form.Item>
                    <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.isMoney !== curValues.isMoney} noStyle={true}>
                        {/* shouldUpdate 必须设置 */}
                        {
                            ({ getFieldValue }) => {
                                return (getFieldValue('isMoney') == '1' ? (
                                    <div className="funds">
                                        <Form.Item name="funds">
                                            <Radio.Group options={[{ label: "1千以内", value: '1千以内' }, { label: "1千到1千万", value: '1千到1千万' }, { label: "自定义", value: "自定义" }]} />
                                        </Form.Item>
                                        <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.funds !== curValues.funds} noStyle={true}>
                                            {
                                                ({ getFieldValue }) => {
                                                    return (getFieldValue('funds') == '自定义' ? (
                                                        <> <Form.Item name="min" rules={[{ required: true, message: "请输入金额" }]} style={{ display: 'inline-block', width: 'calc(30%-30px)' }}>
                                                            <Input placeholder="请输入数字" />
                                                        </Form.Item>
                                                            <span className='spc'>-</span>
                                                            <Form.Item name="max" rules={[{ required: true, message: "请输入金额" }]} style={{ display: 'inline-block', width: 'calc(30%-30px)' }}>
                                                                <Input placeholder="请输入数字" />
                                                            </Form.Item></>
                                                    ) : "")
                                                }
                                            }
                                        </Form.Item>



                                    </div>
                                ) : '');
                            }
                        }
                    </Form.Item>

                </Form.Item>
                <Form.Item label="联系人" name="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="手机号码" name="phone" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item className='submit'>
                    <Button className='submitBtn' htmlType='submit'>立即发布</Button>
                </Form.Item>
            </Form>



            <div onClick={form.submit}>提交</div>
        </div>
    )
}


export default ExpertDemond;
