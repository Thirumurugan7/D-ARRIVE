import { client } from "../../../lib/sanity";

const query = `
*[_type=="rides"]{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
}|order(orderById asc)
`;

const getRidesType = async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);
console.log(sanityResponse);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getRidesType;