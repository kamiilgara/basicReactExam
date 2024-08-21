import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
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

function OurAwards() {

  const [ourAwards] = useState([
    {
      key: 1,
      image: "https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1676246400&Signature=RfG3-Z2R-eybw5iZ0agkMooy-~DU-9nrTzS46i1Wp8MI3AdTqU3tdagodbNp0MamjBRi17EpQ8zKH6~fY60YLhAwh4sS9inpBvo4KcqD3lw~9j9oi6QWOuFIsfnGPwwglqZNC7~5yrQncnTFRHJlYHMncxGQ5GedMxZlvQUqj66yRw9Ei30JNMCTmpot3mjzeDmhfHBdpcSPfMZ-RTO7tMpNrgkOi~wHwgXAt~b7qcVuIvd-pmbqJ07a4tUEet2Ka2EKBCab1ltbWebZsHjL31TP485HYitqrPPQ9UsHUfaSauLJzVL4c2dW~XqvqOVDxs7oQJHI~OtbXXai6Dhb5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      key: 2,
      image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1676246400&Signature=KWfGjE-BlfR8wjmhmOrl1Zju1Vg4nmcx01gVafhRjELN9prJ0yRYc8FsWIzM0hs8ZCBjLrB7FttFSngfd3fvgKXyTUHktLMS8TZd7oTzG1ZnZXoKqgqK1ZRKHG4pDfJg9vbnoPI4v3lbQ4miQ47PfKatR~proOzaQc-E01UfIoH7RBVa9utxwRXOqReB10djORU9FhY9Zi2dfFfzheczDih5WIj-EhZkab1RRKFNu16xL03fxezJxCX4sMLMYN8yli5L9ZMlHK3xQZXSGZIIqlxUqlfBOXDFW0TaWg3sooqIp8Bu4sDt~Cyp3XyBUzzKOBib5r3~NPEb3EXg5Z4OOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    },
    {
      key: 3,
      image: "https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1676246400&Signature=RfG3-Z2R-eybw5iZ0agkMooy-~DU-9nrTzS46i1Wp8MI3AdTqU3tdagodbNp0MamjBRi17EpQ8zKH6~fY60YLhAwh4sS9inpBvo4KcqD3lw~9j9oi6QWOuFIsfnGPwwglqZNC7~5yrQncnTFRHJlYHMncxGQ5GedMxZlvQUqj66yRw9Ei30JNMCTmpot3mjzeDmhfHBdpcSPfMZ-RTO7tMpNrgkOi~wHwgXAt~b7qcVuIvd-pmbqJ07a4tUEet2Ka2EKBCab1ltbWebZsHjL31TP485HYitqrPPQ9UsHUfaSauLJzVL4c2dW~XqvqOVDxs7oQJHI~OtbXXai6Dhb5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      key: 4,
      image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1676246400&Signature=KWfGjE-BlfR8wjmhmOrl1Zju1Vg4nmcx01gVafhRjELN9prJ0yRYc8FsWIzM0hs8ZCBjLrB7FttFSngfd3fvgKXyTUHktLMS8TZd7oTzG1ZnZXoKqgqK1ZRKHG4pDfJg9vbnoPI4v3lbQ4miQ47PfKatR~proOzaQc-E01UfIoH7RBVa9utxwRXOqReB10djORU9FhY9Zi2dfFfzheczDih5WIj-EhZkab1RRKFNu16xL03fxezJxCX4sMLMYN8yli5L9ZMlHK3xQZXSGZIIqlxUqlfBOXDFW0TaWg3sooqIp8Bu4sDt~Cyp3XyBUzzKOBib5r3~NPEb3EXg5Z4OOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    },
  ]);

  return (
    <div className="ourAwards">
      <h1 className="ourAwards-h1">MÜKAFATLARIMIZ</h1>
      <Carousel responsive={responsive} renderArrowsWhenDisabled  >
        {ourAwards.map((award) => (
          <div key={award.key}>
            <div id="multi-carousel-awards">
              <img
                src={award.image}
                width={"110px"}
                height={"110px"}
                alt={"BMT"}
              />
              <h5>{award.head}</h5>
              <p>{award.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default OurAwards;
