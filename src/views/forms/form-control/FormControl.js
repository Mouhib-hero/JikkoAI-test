import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const FormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4" style={{ backgroundColor: '#161217' }}>
          <CCardHeader>
            <strong style={{ color: '#cfc0e8' }}>Answer Reclammation</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1" style={{ color: '#b6a8d1' }}>
                  Reclammation Sender Email address
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1" style={{ color: '#b6a8d1' }}>
                  Your answer :
                </CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
              </div>
              <CButton component="a" color="primary" href="#" role="button" shape="rounded-pill">
                Send Mail
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
