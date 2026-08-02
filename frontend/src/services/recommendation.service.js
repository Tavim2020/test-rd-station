const calculateScore = (product, selectedPreferences, selectedFeatures) => {
  const preferenceMatches = selectedPreferences.filter((preference) =>
    product.preferences.includes(preference),
  ).length;

  const featureMatches = selectedFeatures.filter((feature) =>
    product.features.includes(feature),
  ).length;

  return preferenceMatches + featureMatches;
};

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products = [],
) => {
  const { selectedPreferences = [], selectedFeatures = [] } = formData;
  const recommendationType = formData.selectedRecommendationType;

  const scoredProducts = products.map((product) => ({
    product,
    score: calculateScore(product, selectedPreferences, selectedFeatures),
  }));

  const matchingProducts = scoredProducts.filter(({ score }) => score > 0);

  matchingProducts.sort(
    ({ score: scoreA }, { score: scoreB }) => scoreB - scoreA,
  );

  if (recommendationType === 'SingleProduct') {
    if (matchingProducts.length === 0) return [];

    const highestScore = matchingProducts[0].score;

    const topProducts = matchingProducts.filter(
      ({ score }) => score === highestScore,
    );

    return [topProducts[topProducts.length - 1].product];
  }

  return matchingProducts.map(({ product }) => product);
};

const recommendationService = { getRecommendations };

export default recommendationService;
