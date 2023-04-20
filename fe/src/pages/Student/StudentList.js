import React, { useEffect } from 'react'
// import AddDetails from '../components/models/AddDetails';
// import UpdateDetails from '../../ components/models/UpdateDetails';
// import DeleteDetails from '../components/models/DeleteDetails';
import { QrcodeOutlined,SearchOutlined, YoutubeOutlined, InstagramOutlined, LinkedinOutlined, FacebookOutlined, DesktopOutlined, IdcardOutlined, BankOutlined, FormOutlined, OrderedListOutlined, ScheduleOutlined, CalendarOutlined, SettingOutlined, BookOutlined, CarOutlined, CodeOutlined, ToolOutlined, CompassOutlined } from '@ant-design/icons';
import { Breadcrumb, theme, Menu, Layout, Table, Avatar, Space, Input,Select } from 'antd';
import { useState } from 'react';
import ActionColumn from './Helpers/ActionColumn';
import PaymentColumn from './Helpers/PaymentColumn';
import CommonModel from '../../components/models/CommonModel';
const { Sider, Content, Footer } = Layout;
 //const { Option} = Select;


function SchoolApp() {

  const [data, setData] = useState([]);
   const [filter, setFilter] = useState([]);
   const [modelProps, setModelProps] = useState([]);
   const [updateStudent, setUpdateStudent] = useState({ openUpdate: false, record: {}, editable: false });
   const [deleteStudent, setDeleteStudent] = useState({ openUpdate: false, record: {}, });

   const [text,setText]=useState('')


  const FindData = () => {

    fetch("http://localhost:5000/findData")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
        setFilter(data)
       // update(update)
      })
  }
   console.log('##################1111', data)

  // const FilterUser = () => {
  //   fetch("http://localhost:5000/filter")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(doc => {
  //       setFilter(doc)
  //     })
  // }
  //   console.log('%%%%%%%%%%%%%%%', filter)
  // const handleChange = (e) => {
  //   console.log(":::::::::::", e.target.value)
  //   // const filterByL = filter.filter((res) => res.AlertLevel.limit === e.target.value)
  //   // console.log("?????????L1", filterByL)
  //   // setData(doc)

  // }
  // const FillterhandleChange = (e) => {
  //   console.log("******&&&&&&&&", e)
  //   const asa = filter.filter((res) => res.first_name === e)
  //   console.log("@@@@@@@@@@@@ first_name", asa)
  //   setData(asa)
  // }

const handleChange=(e)=>{
  console.log("00000000000",e.target.value)
      let filteredData = data.filter((d)=> d.first_name.startsWith(e.target.value))
      setFilter(filteredData)
      console.log("oooooooooooooo",filteredData)
}

  // const updateData = () => {
  //   fetch("http://localhost:5000/update")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(doc => {
  //       setUpdate(doc)
  //     })
  // }
  // console.log('!!!###@@@', update)


  // const DeleteDocument = () => {
  //   fetch("http://localhost:5000/delete/:id")
  //     .then(response => {
  //       console.log("pppppppppppppppppppppppppp")
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log("============",data)
  //       setDeletedata(data)
  //     })
  // }
  //  console.log('/////////////', deletedata)
// const FindDataAA=(text)=>{
// console.log("$$$$$$$$$$$$$$$$$$$$$$",text)
// setText(text)
// }
  useEffect(() => {
    FindData();
     //FilterUser();
    // updateData();
    // DeleteDocument();
  }, [text])

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem('Admin Panel', '1', <DesktopOutlined />),
    getItem('Faculty', 'sub2', <IdcardOutlined />, [
      getItem('-Manoj Kumar'),
      getItem('-Reena Mishra'),
      getItem('-Gyanchandra Verma'),
      getItem('-Pooja Tiwari'),
    ]),
    getItem('Courses', 'sub3', <BookOutlined />, [
      getItem('-Math '),
      getItem('-History'),
      getItem('-Hindi'),
      getItem('-English '),
    ]),
    getItem('ClassRoom', 'sub4', <BankOutlined />, [
      getItem('-Physics Lab'),
      getItem('-Computer Lab'),
      getItem('-Bio Lab'),
      getItem('-chemistry Lab '),
    ]),
    getItem('Period List', 'sub5', <OrderedListOutlined />),
    getItem('Generate TimeTable', 'sub6', <CalendarOutlined />),
    getItem('Attendance', 'sub7', <CalendarOutlined />),
    getItem('HomeWork', 'sub8', <FormOutlined />),
    getItem('New & Notice', 'sub9', <ScheduleOutlined />),
    getItem('Setting', 'sub11', <SettingOutlined />),
    getItem('QR Code', 'sub12',<QrcodeOutlined />),




  ];

  const columnEventCb = (modelProps) => {
    console.log(modelProps);
    setModelProps(modelProps);
  }

  const columns = [
    {
      title: 'StudentId',
      dataIndex: 'id',
      width: '20px',
      // editable: true,
      render: (id) => {
        return <div style={{ color: "red" }}>{id}</div>
      }

    },
    {
      title: 'Profile',
      dataIndex: 'avatar',
      width: '20px',
      render: (avatar) => {
        return <div style={{ color: "GREEN" }}><img style={{ color: "green" }} src={avatar} alt='text' /></div>
      }

    },
    {
      title: ' Profile',
      children: [
        {
          title: '',
          dataIndex: 'first_name',
          width: '100px',
          render: (first_name) => {
            return <div style={{ color: "orange" }}> {first_name}
            </div>
          }

        },
      ]
    },

    {
      title: 'Class',
      dataIndex: 'class',
      // width: '100px',
      render: (Department) => {
        return <div style={{ color: "blue" }}>{Department}</div>
      }
    },

    {
      title: 'Student  Status',
      dataIndex: 'Calendar',
      // width: '20px',
      render: () => {
        //   return <div style={{ color: "GREEN" }}>{<CaretRightOutlined />}</div>
        return <div style={{ marginInline: '50px', wordSpacing: '10px' }}>
          <h2>Dec</h2>
          <p>1     2     3   4    5    6   7</p>
          <p>8    9   10   11   12   13   14  </p>
          <p>15   16   17   18   19   20   21</p>
          <p>22   23   24   25   26   27   28</p>
          <p>29   30   31</p>


        </div>
      }

    },

    {
      title: 'operation',
      // dataIndex: 'email',
      width: '50px',
      render: (record) => {
        return <ActionColumn record={record} eventCb={columnEventCb}  />
      }
    },

    
        {
          title: 'Payment',
          width: '100px',
          render: (payment) => {
            return <PaymentColumn payment={payment} eventCb={columnEventCb}  />
          }
          }
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [open, title, viewContent] = modelProps;

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item style={{ color: '#66ff33' }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: ' 	#99ddff' }}>List</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: ' 	#808080' }}>App</Breadcrumb.Item>
        </Breadcrumb>

        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer

          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '20px' }}>
            <Input style={{ marginBottom: '20px', marginLeft: '2px', fontSize: 16 }} placeholder="Search......" prefix={<SearchOutlined />} onChange={handleChange}/>
                 </div>

          <Table
            bordered
            dataSource={filter.length ? filter : data}
            columns={columns}
          />
        </Content>
        <Footer style={{
          background: '#00001a',
          padding: '10px', marginTop: '15px', color: '#ffffff', textAlign: 'center'
        }}>Contact With Us
          <Avatar style={{ marginTop: "4px", margin: '6px', color: '#66ff33' }} icon={<FacebookOutlined />} />
          <Avatar style={{ marginTop: "4px", margin: '6px', color: '#66ff33' }} icon={<LinkedinOutlined />} />
          <Avatar style={{ marginTop: "4px", margin: '6px', color: '#66ff33' }} icon={<InstagramOutlined />} />
          <Avatar style={{ marginTop: "4px", margin: '6px', color: '#66ff33' }} icon={<YoutubeOutlined />} />
        </Footer>
      </Layout>
      {/* <CommonModel
       title={title}
       open={open}
       ViewContent={viewContent}
       onCancel={() => setModelProps((pre)=> ([false, pre.slice(1, 3)]))}
       onClickOK={() => setModelProps((pre)=> ([false, pre.slice(1, 3)]))}

      /> */}
      <UpdateModel
        title="Update Student"
        editable={editable}
        record={record}
        open={openUpdate}
        onCancel={closeUpdate}
        onClickOK={okUpdate}
      />
      <DeleteModel
        title="Update Student"
        record={record}
        open={openUpdate}
        onCancel={closeUpdate}
        onClickOK={okUpdate}
      />
    </Layout>

  );
}

export default SchoolApp;
