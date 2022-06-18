import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

{/* To destructure, changed props to {campsite} in the function param, then was able to remove props in the src/alt/cardtitle call.
To destructure yet again, assigned const {image, name} = campsite, then was able to remove the campsite reference in those same lines (src/alt/cardtitle*/}
const CampsiteCard = ({campsite}) => {
  const { id, image, name} = campsite;
  return(
    <Link to={`${id}`}>
      <Card>
        <CardImg 
          width="100%"
          src={image}
          alt={name}
        />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  )
}

export default CampsiteCard;
