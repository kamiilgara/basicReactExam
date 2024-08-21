import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaObjects from './SocialMediaObjects';

const connectIcons = {
  backgroundColor: '#104de5',
  color: 'white',
  fontSize: '28px',
  padding: '0px 5px 7px 5px',
  borderRadius: '20%'
}

function ConnectPage() {
  return (
    <div className='allComBack connectPage'>
      <Container>

        <Row className="px-2 justify-content-between">
          <Col lg='3' >
            <h1 className='ps-3'>ƏLAQƏ</h1>

            <div class="info">
              <div class="ps-3 my-5">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className='mt-4'>Bakı, Azərbaycan, AZ 1078, Akademik Həsən Əliyev 36</p>
              </div>
              <div class="ps-3 my-5">
                <FontAwesomeIcon type='light' icon={faPhone}></FontAwesomeIcon>
                <p className='mt-4'>(+994 12) 444 74 75</p>
              </div>
              <div class="ps-3 my-5">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p className='mt-4'>info@asanyouth.az</p>
              </div>
            </div>

            <SocialMediaObjects iconsColor={connectIcons} id='connectSocial' />

          </Col>
          <Col lg='8'>
            <div class="writeUs">
              <h1>Bizə yazın</h1>
              <Row>
                <Col lg='5'>
                  <div class="form-group">
                    <label for="name">Ad Soyad</label>
                    <input type="text" class="form-control" placeholder="Azər Baycanlı" />
                  </div>
                  <div class="form-group mail">
                    <label for="gmail">E-poçt ünvanınız</label>
                    <input type="text" class="form-control" placeholder="Azer.baijanli@asan.gov.az" />
                  </div>

                  <div class="mt-auto">
                    <button class="defaultButton">GÖNDƏR</button>
                  </div>


                </Col>
                <Col lg='7'>
                  <div class="form-group">
                    <label for="letter" class="form-label">Məktubun mətni</label>
                    <textarea name="letter" class="form-control textArea" id="" cols="30" rows="10"
                      placeholder="Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb.Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb.Azərbaycan Respublikasının Prezidenti yanında Vətəndaşlara Xidmət və Sosial İnnovasiyalar üzrə Dövlət Agentliyinin sədri Ülvi Mehdiyev “500 Startups” şirkətinin regional direktoru Arianne Dilts ilə görüşüb. "></textarea>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default ConnectPage
