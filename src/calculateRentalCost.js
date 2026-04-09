/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rate = 40;

  if (days >= 7) {
    return days * rate - 50;
  }

  if (days >= 3) {
    return days * rate - 20;
  }

  return days * rate;
}

module.exports = calculateRentalCost;
