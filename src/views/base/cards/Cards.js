import React from 'react'
import { CPlaceholder } from '@coreui/react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4" style={{ backgroundColor: '#161217' }}>
          <CCardHeader>
            <strong style={{ color: 'white' }}>Reclammations</strong>
          </CCardHeader>
          <CCardBody>
            <p
              className="text-medium-emphasis small"
              style={{ backgroundColor: 'white', opacity: 0.9 }}
            >
              La liste des reclammations
            </p>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    src={
                      'https://w0.peakpx.com/wallpaper/995/309/HD-wallpaper-dark-purple-lines-background-abstract-purple-background-creative-purple-background-lines-background.jpg'
                    }
                  />
                  <CCardBody>
                    <CCardTitle>Reclammation 1</CCardTitle>
                    <CCardText>This is a reclammation from a client 1</CCardText>
                    <CButton href="forms/form-control#/forms/form-control">
                      Answer reclammation
                    </CButton>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
                {/*<CCard style={{ width: '18rem' }}>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    width="100%"
                    height="162"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                  </CCardImage>
                  <CCardBody>
                    <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                      <CPlaceholder xs={6} />
                    </CPlaceholder>
                    <CPlaceholder component={CCardText} animation="glow">
                      <CPlaceholder xs={7} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={6} />
                      <CPlaceholder xs={8} />
                    </CPlaceholder>
                    <CPlaceholder
                      component={CButton}
                      disabled
                      href="#"
                      tabIndex={-1}
                      xs={6}
                  ></CPlaceholder>
                  </CCardBody>
                </CCard>*/}
              </CCol>
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    src={
                      'https://w0.peakpx.com/wallpaper/995/309/HD-wallpaper-dark-purple-lines-background-abstract-purple-background-creative-purple-background-lines-background.jpg'
                    }
                  />
                  <CCardBody>
                    <CCardTitle>Reclammation 2</CCardTitle>
                    <CCardText>This is a reclammation from a client 2</CCardText>
                    <CButton href="forms/form-control#/forms/form-control">
                      Answer reclammation
                    </CButton>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    src={
                      'https://w0.peakpx.com/wallpaper/995/309/HD-wallpaper-dark-purple-lines-background-abstract-purple-background-creative-purple-background-lines-background.jpg'
                    }
                  />
                  <CCardBody>
                    <CCardTitle>Reclammation 3</CCardTitle>
                    <CCardText>This is a reclammation from a client 3</CCardText>
                    <CButton href="forms/form-control#/forms/form-control">
                      Answer reclammation
                    </CButton>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard>
                  <CCardImage
                    orientation="top"
                    src={
                      'https://w0.peakpx.com/wallpaper/995/309/HD-wallpaper-dark-purple-lines-background-abstract-purple-background-creative-purple-background-lines-background.jpg'
                    }
                  />
                  <CCardBody>
                    <CCardTitle>Reclammation 4</CCardTitle>
                    <CCardText>This is a reclammation from a client 4</CCardText>
                    <CButton href="forms/form-control#/forms/form-control">
                      Answer reclammation
                    </CButton>
                  </CCardBody>
                  <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                  </CCardFooter>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
