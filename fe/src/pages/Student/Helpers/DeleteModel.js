import { Modal } from 'antd'
import React from 'react'

export default function DeleteModel({openUpdate, okUpdate, onCancel, record, editable}) {
  return (
    <Modal 
    title="Update Student" 
    centered 
    open={openUpdate}
    onOk={okUpdate}
    onCancel={onCancel}>
       <div>DeleteModel</div>
   </Modal>
  )
}
