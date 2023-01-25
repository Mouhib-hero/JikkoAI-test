import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Layout = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Manage Users</strong> <small>Perform Operations</small>
          </CCardHeader>
          <CForm className="row gy-2 gx-3 align-items-center">
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Name
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
                Username
              </CFormLabel>
              <CInputGroup>
                <CInputGroupText>@</CInputGroupText>
                <CFormInput id="autoSizingInputGroup" placeholder="Username" />
              </CInputGroup>
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">
                Preference
              </CFormLabel>
              <CFormSelect id="autoSizingSelect">
                <option>Choose...</option>
                <option value="1">Add User</option>
                <option value="2">Delete User</option>
                <option value="3">Update</option>
              </CFormSelect>
            </CCol>
            {/*<CCol xs="auto">
              <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
            </CCol>*/}
            <CCol xs="auto">
              <CButton type="submit">Submit</CButton>
            </CCol>
          </CForm>
          <br></br>
          <p style={{ backgroundColor: 'white', opacity: 0.9 }}>
            <strong>*- Modification of a specific user informations</strong>
          </p>
          <CForm className="row gy-2 gx-3 align-items-center">
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Company Name
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Company Name" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Commercial Name
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Commercial Name" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Creation Date
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Creation Date" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Product Type
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Product Type" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Country
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Country" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Physical Address
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Physical Address" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Email
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Email" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                Password
              </CFormLabel>
              <CFormInput id="autoSizingInput" placeholder="Password" />
            </CCol>
            <CCol xs="auto">
              <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
                Username
              </CFormLabel>
              <CInputGroup>
                <CInputGroupText>@</CInputGroupText>
                <CFormInput id="autoSizingInputGroup" placeholder="Username" />
              </CInputGroup>
            </CCol>
            {/*<CCol xs="auto">
              <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
            </CCol>*/}
            <CCol xs="auto">
              <CButton type="submit">Submit</CButton>
            </CCol>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Layout
