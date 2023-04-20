import { Modal } from 'antd';
import React from 'react'

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

 function ViewNUpdateModel({ openUpdate, okUpdate, title, onCancel, record, editable }) {
    const { user, email } = props
    const [open, setOpen] = useState(false);

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    return (
        <Modal 
            title={title}
            centered 
            open={openUpdate}
            onOk={okUpdate}
            onCancel={onCancel}>
            {/* ----------------------------------------- */}

            <div>

                <Button style={{ float: "right", marginBottom: "40px", background: 'green', color: 'white' }} onClick={() => setOpen(true)}>
                    Update
                </Button>

                <Modal

                    title="ALL DATA"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}

                // width={2000}
                >

                    {
                        user && user.map((res, i) => {
                            if (res.email == email) {
                                console.log("***************", res)

                                return (
                                    <div>
                                        <img src={res.avatar} />
                                        {/* <h1> Id: {res.id}</h1>
                                     <p> FName:{res.first_name}</p>
                                     <p> LastName:{res.last_name}</p> */}
                                        <p>DOB:{res.DOB}</p>
                                        <Form
                                            name="dynamic_form_item"
                                            {...formItemLayoutWithOutLabel}
                                            onFinish={onFinish}
                                            style={{
                                                maxWidth: 600,
                                            }}
                                        >
                                            <Form.List
                                                name="names"
                                                rules={[
                                                    {
                                                        validator: async (_, names) => {
                                                            if (!names || names.length < 2) {
                                                                return Promise.reject(new Error('At least 2 Students'));
                                                            }
                                                        },
                                                    },
                                                ]}
                                            >
                                                {(fields, { add, remove }, { errors }) => (
                                                    <>
                                                        {fields.map((field, index) => (
                                                            <Form.Item
                                                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                                label={index === 0 ? 'Student ID' : ''}
                                                                required={false}
                                                                key={field.key}
                                                            >
                                                                <Form.Item
                                                                    {...field}
                                                                    validateTrigger={['onChange', 'onBlur']}
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            whitespace: true,
                                                                            message: "Please input student's name or delete this field.",
                                                                        },
                                                                    ]}
                                                                    noStyle
                                                                >
                                                                    <Input
                                                                        placeholder="student's detail"
                                                                        style={{
                                                                            width: '60%',
                                                                        }}
                                                                    />
                                                                </Form.Item>
                                                                {fields.length > 1 ? (
                                                                    <MinusCircleOutlined
                                                                        className="dynamic-delete-button"
                                                                        onClick={() => remove(field.name)}
                                                                    />
                                                                ) : null}
                                                            </Form.Item>
                                                        ))}
                                                        <Form.Item>

                                                            <Button
                                                                type="dashed"
                                                                onClick={() => {
                                                                    add('', 0);
                                                                }}
                                                                style={{
                                                                    width: '60%',
                                                                    marginTop: '20px',
                                                                }}
                                                                icon={<PlusOutlined />}
                                                            >
                                                                Add field
                                                            </Button>

                                                            <Form.ErrorList errors={errors} />
                                                        </Form.Item>
                                                    </>
                                                )}
                                            </Form.List>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Form>

                                    </div>

                                )
                            }
                        })

                    }
                </Modal>

            </div>

            {/* ----------------------------------------- */}
            {StudentPayment}
        </Modal>
    )
}

export default ViewNUpdateModel