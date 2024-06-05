import { mockImages, mocks } from "../mock data";

export const marketDataRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mocks["market"];
    if (!mock) reject;

    resolve(mock);
  });
};

export const transformedMarketDataRequest = (data) => {
  const mappedData = data.map((item) => {
    return {
      ...item,
      photo: mockImages[Math.floor(Math.random() * mockImages.length)],
    };
  });

  return mappedData;
};
