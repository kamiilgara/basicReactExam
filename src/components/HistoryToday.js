import React from "react";
import { Row, Col } from "react-bootstrap";
import { SwapRightOutlined } from "@ant-design/icons";
import Carousel from 'react-multi-carousel';
import { useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


function HistoryToday() {

  const [dailyNews, setDailyNews] = useState([
    {
      key: 0,
      header: 'Azərbaycanlıların Soyqırımı Günü',
      time: '31 Mart, 1918',
      text: '1918-ci ilin 30 mart və 3 aprel tarixləri arasında Bakı şəhərində və Bakı quberniyasının müxtəlif bölgələrində, eləcə də Şamaxı, Quba, Xaçmaz, Lənkəran, Hacıqabul, Salyan, Zəngəzur, Qarabağ, Naxçıvan və digər ərazilərdə Bakı Soveti və Daşnaksütundan olan erməni silahlı dəstələrinin azərbaycanlılara qarşı törətdikləri qırğın. '
    },
    {
      key: 1,
      header: 'Seçkilərdə səs verən ilk afro-amerikalı',
      time: '31 Mart, 1870',
      text: 'İlk dəfə bir afroamerikalı seçici səs verdi. Thomas Mundy Peterson, ABŞ Konstitusiyasında 15-ci Dəyişikliyin yeni qəbul edilmiş müddəalarına əsasən seçkilərdə səs verən ilk Afro-Amerikalı idi. Bu, afro-amerikalılara bərabər hüquqların verilməsində böyük bir uğur idi. '
    },
    {
      key: 2,
      header: 'Azərbaycanlıların Soyqırımı Günü',
      time: '31 Mart, 1918',
      text: '1918-ci ilin 30 mart və 3 aprel tarixləri arasında Bakı şəhərində və Bakı quberniyasının müxtəlif bölgələrində, eləcə də Şamaxı, Quba, Xaçmaz, Lənkəran, Hacıqabul, Salyan, Zəngəzur, Qarabağ, Naxçıvan və digər ərazilərdə Bakı Soveti və Daşnaksütundan olan erməni silahlı dəstələrinin azərbaycanlılara qarşı törətdikləri qırğın. '
    },
    {
      key: 3,
      header: 'Seçkilərdə səs verən ilk afro-amerikalı',
      time: '31 Mart, 1870',
      text: 'İlk dəfə bir afroamerikalı seçici səs verdi. Thomas Mundy Peterson, ABŞ Konstitusiyasında 15-ci Dəyişikliyin yeni qəbul edilmiş müddəalarına əsasən seçkilərdə səs verən ilk Afro-Amerikalı idi. Bu, afro-amerikalılara bərabər hüquqların verilməsində böyük bir uğur idi. '
    }
  ]);

  return (
    <div className="topmargin">
      <Row>
        <Col md={'3'} className='col-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="leftDaily">
            <h3>Tarixdə Bu Gün</h3>
            <h1>31 Mart</h1>
            <p>
              Hər günün tarixi əhəmiyyətindən xəbərdar olmaq istəyirsinizsə
              abunə olun.
            </p>
            <div className="input-group daily">
              <input className="dailyInput" placeholder="E-poçt ünvanınız" />
              <button className="dailyBtn" type="submit" >
                <SwapRightOutlined />
              </button>
            </div>
          </div>
        </Col>
        <Col className="col-7" md={'9'} id='dailyNews' >
          <Carousel responsive={responsive} renderArrowsWhenDisabled removeArrowOnDeviceType={['tablet']} >
            {dailyNews.map((dailyNew) =>
              <div key={dailyNew.key} className='dailyHistory' >
                <h3>{dailyNew.header}</h3>
                <h2>{dailyNew.time}</h2>
                <p>{dailyNew.text}</p>
                <button>Ətraflı Oxu <SwapRightOutlined />  </button>
              </div>
            )}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default HistoryToday;
