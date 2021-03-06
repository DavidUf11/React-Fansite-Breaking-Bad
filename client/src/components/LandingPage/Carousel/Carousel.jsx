import React from 'react';
import { useHistory } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
  const history = useHistory();
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item active">
          <img
            onClick={() => history.push('/character-file/2')}
            class="homephoto"
            src="https://images5.fanpop.com/image/photos/31200000/Breaking-Bad-Season-5-Promo-Photos-breaking-bad-31234879-245-350.jpg"
            alt="Jesse Pinkman"
          />
        </div>

        <div class="item ">
          <img
            onClick={() => history.push('/character-file/1')}
            class="homephoto"
            src="https://i.pinimg.com/236x/cd/5a/99/cd5a9909357c9b22441f6b18af8eb797--bryan-cranston-walter-white.jpg"
            alt="Walter White"
          />
        </div>

        <div class="item">
          <img
            onClick={() => history.push('/character-file/3')}
            class="homephoto"
            src="https://compote.slate.com/images/e5e01201-0ca9-48fe-8955-07fe63056dd3.jpg"
            alt="Skyler White"
          />
        </div>

        <div class="item">
          <img
            onClick={() => history.push('/character-file/8')}
            class="homephoto"
            src="https://i.pinimg.com/236x/e8/f9/e6/e8f9e6e150ba057572b73bb4e997247c.jpg"
            alt="Saul Goodman"
          />
        </div>

        <div class="item">
          <img
            onClick={() => history.push('/character-file/7')}
            class="homephoto"
            src="https://i.pinimg.com/236x/70/23/c4/7023c496cf1bffcb07a10c89bf46e509--jonathan-banks-call-saul.jpg"
            alt="Mike Ehrmantraut"
          />
        </div>

        <div class="item">
          <img
            onClick={() => history.push('/character-file/5')}
            class="homephoto"
            src="data:image/jpeg;base64,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"
            alt="Hank Schrader"
          />
        </div>

        <div class="item">
          <img
            onClick={() => history.push('/character-file/6')}
            class="homephoto"
            src="data:image/jpeg;base64,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"
            alt="Marie Schrader"
          />
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
