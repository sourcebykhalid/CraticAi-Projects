import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Cards = ({ imageUrl, title, description, buttonText }) => {
  return (
    <Card className="mt-6 flex justify-start items-center border-2 rounded-md border-orange-600 p-2">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={imageUrl}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
