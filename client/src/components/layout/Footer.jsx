import React, { memo } from "react"
import {
  BiCurrentLocation,
  BiLaptop,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi"
import { Col, Container, Row, Stack } from "react-bootstrap"

const Footer = memo(() => {
  return (
    <footer>
      <Container fluid className='text-light bg-dark p-3'>
        <Container>
          <Row>
            <Col xs={12} lg={4} className='p-3'>
              <p className=''>
                <b>Main Office:</b>
              </p>
              <Stack direction='horizontal' gap={2}>
                <BiCurrentLocation className='fs-3' />
                <p className='m-0'>
                  on Phillipines 2nd Level Market! Market! Mabini Ave. cor.
                  Mckinley Parkway Fort Bonifacio Taguig
                </p>
              </Stack>
              <Stack direction='horizontal' gap={2}>
                <BiLaptop className='fs-3' />
                <p className='m-0'></p>
              </Stack>
            </Col>

            <Col xs={12} lg={4} className='p-3'>
              <p className=''>
                <b>Taguig Office:</b>
              </p>
              <Stack direction='horizontal' gap={2}>
                <BiCurrentLocation className='fs-3' />
                <p className='m-0'>
                  on Phillipines 2nd Level Market! Market! Mabini Ave. cor.
                  Mckinley Parkway Fort Bonifacio Taguig
                </p>
              </Stack>
              <Stack direction='horizontal' gap={2}>
                <BiLaptop className='fs-3' />
                <p className='m-0'></p>
              </Stack>
            </Col>

            <Col xs={12} lg={4} className='p-3'>
              <p className=''>
                <b>Links: </b>
              </p>
              <Stack direction='horizontal' gap={2}>
                <BiCurrentLocation className='fs-3' />
                <BiLogoFacebook className='bgm-fs-1' />
                <BiLogoTwitter className='bgm-fs-1' />
                <BiLogoInstagram className='bgm-fs-1' />
                <BiLogoLinkedin className='bgm-fs-1' />
                <BiLogoGithub className='bgm-fs-1' />
              </Stack>
              <Stack direction='horizontal' gap={2}>
                <BiLaptop className='fs-3' />
                <p className='m-0'></p>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='text-center'>
        <p className='m-3'>
          Copyright &copy; 2023 BGM Philippines Inc. All Rights Reserved.
        </p>
      </Container>
    </footer>
  )
})

export default Footer
