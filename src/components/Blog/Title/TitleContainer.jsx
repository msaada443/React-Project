import { TitleBox } from "../../index";
import IMAGES from "../../../assets/index";
const TitleContainer = () => {
  return (
    <div className="title-container">
      <TitleBox
        srcImg={IMAGES.Img33}
        btnName="Digital Marketing"
        date="Techier Oct 20, 2022"
        styleHead={{ fontWeight: 500 }}
        head="Lorem Ipsum Dolor Sit Amet"
        styleText={{ paddingBottom: 25 }}
        text1="  Ipsum Ullamcorper Venenatis
                            Fringilla. Pretium, Purus Eu Nec Vulputate Vel Habitant Egestas. Congue Ornare At Ipsum,
                            Viverra. Vitae Magna Faucibus Eros, Lectus Sociis. Etiam Nunc Amet Id Dignissim. Feugiat Id
                            Tempor Vel Sit In Ornare Turpis Posuere. Eu Quisque Integer Non Rhoncus Elementum Vel. Quis
                            Nec Viverra"
        text2="Laoreet Mauris Odio Ut Nec. Nisl, Sed Adipiscing Dignissim Arcu Placerat Ornare Pharetra Nec
                            In. Ultrices In Nisl Potenti Vitae Tempus. Auctor Consectetur Luctus Eu In Amet Sagittis.
                            Dis Urna, Vel Hendrerit Convallis Senectus Feugiat Faucibus Commodo Egestas Leo Vitae In
                            Morbi. Enim Arcu Dignissim Mauris, Eu, Eget Commodo Egestas Leo Vitae In Morbi. Enim Arcu
                            Dignissim Mauris, Eu, Eget"
      />
    </div>
  );
};

export default TitleContainer;
