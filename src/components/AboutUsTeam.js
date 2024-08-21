import React from 'react' ;
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function AboutUsTeam() {

  const [team, setTeam] = useState([
    {
      id : 0,
      head : 'ASAN MƏKTUB',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1676851200&Signature=VdEoY0NrbdSrj5u3emTOAyuytgAGvn1RHcQKuEvHshj3zD9ZozledOqMEAEgUTqOQSvbmEXDEGdE5ifXbJK-jADAy3uD2PN6dcnwi3DXVm6PyqgOErNeFIdTvRebQ3gSyKg7m8jIWd6aMH6k5-jBh4SLb3WPA94fEqYAAdGloVclLAIE-d1N~9lKtXSBgFZTsYtG3GL2a~ervsHyxlsua-HLYtuoK~uwfGtE-plMxDqTigXzDrSncoXY8rcXmaScw5w-nsWgpn2gQpi4xoJlwqWfqrNCkzXMWcKsBEyXdMSMzkAiS2JWq0YaCUIFOS-zPn44scMEHSlTJnw2aCc2ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 1,
      head : 'BEYNƏLXALQ ƏLAQƏLƏR',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 2,
      head : 'ƏSGƏRƏ MƏKTUB',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1676851200&Signature=VdEoY0NrbdSrj5u3emTOAyuytgAGvn1RHcQKuEvHshj3zD9ZozledOqMEAEgUTqOQSvbmEXDEGdE5ifXbJK-jADAy3uD2PN6dcnwi3DXVm6PyqgOErNeFIdTvRebQ3gSyKg7m8jIWd6aMH6k5-jBh4SLb3WPA94fEqYAAdGloVclLAIE-d1N~9lKtXSBgFZTsYtG3GL2a~ervsHyxlsua-HLYtuoK~uwfGtE-plMxDqTigXzDrSncoXY8rcXmaScw5w-nsWgpn2gQpi4xoJlwqWfqrNCkzXMWcKsBEyXdMSMzkAiS2JWq0YaCUIFOS-zPn44scMEHSlTJnw2aCc2ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 3,
      head : 'KİD',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 4,
      head : 'LİD',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1676851200&Signature=VdEoY0NrbdSrj5u3emTOAyuytgAGvn1RHcQKuEvHshj3zD9ZozledOqMEAEgUTqOQSvbmEXDEGdE5ifXbJK-jADAy3uD2PN6dcnwi3DXVm6PyqgOErNeFIdTvRebQ3gSyKg7m8jIWd6aMH6k5-jBh4SLb3WPA94fEqYAAdGloVclLAIE-d1N~9lKtXSBgFZTsYtG3GL2a~ervsHyxlsua-HLYtuoK~uwfGtE-plMxDqTigXzDrSncoXY8rcXmaScw5w-nsWgpn2gQpi4xoJlwqWfqrNCkzXMWcKsBEyXdMSMzkAiS2JWq0YaCUIFOS-zPn44scMEHSlTJnw2aCc2ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 5,
      head : 'MƏDƏNİYYƏT CARÇISI',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 6,
      head : 'NÜMAYƏNDƏLİKLƏR',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1676851200&Signature=VdEoY0NrbdSrj5u3emTOAyuytgAGvn1RHcQKuEvHshj3zD9ZozledOqMEAEgUTqOQSvbmEXDEGdE5ifXbJK-jADAy3uD2PN6dcnwi3DXVm6PyqgOErNeFIdTvRebQ3gSyKg7m8jIWd6aMH6k5-jBh4SLb3WPA94fEqYAAdGloVclLAIE-d1N~9lKtXSBgFZTsYtG3GL2a~ervsHyxlsua-HLYtuoK~uwfGtE-plMxDqTigXzDrSncoXY8rcXmaScw5w-nsWgpn2gQpi4xoJlwqWfqrNCkzXMWcKsBEyXdMSMzkAiS2JWq0YaCUIFOS-zPn44scMEHSlTJnw2aCc2ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 7,
      head : 'ÜMUMİ İŞLƏR',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
  ]);


  return (
    <div className='pageHeader ourTeams'>
    <Container>
    <h1>HAQQIMIZDA</h1>
    <p>KOMANDAMIZ</p>
    <Row id='teamRow'>
    {team.map((teammate) => 
    <Col lg={4} key={teammate.id} >
    <div>
      <img src={teammate.image} alt={'pic'} width={'70px'} height={'70px'} />
      <h2>{teammate.head}</h2>
      <p>{teammate.text}</p>
    </div>
    </Col>
    )}
    </Row>
    </Container>

    </div>
  )
}

export default AboutUsTeam ;
