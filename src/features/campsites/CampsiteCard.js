import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


{/* To destructure, changed props to {campsite} in the function param, then was able to remove props in the src/alt/cardtitle call.
To destructure yet again, assigned const {image, name} = campsite, then was able to remove the campsite reference in those same lines (src/alt/cardtitle*/}
const CampsiteCard = ({campsite}) => {
  const {image, name} = campsite;
  return(
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
  )
}

export default CampsiteCard;
