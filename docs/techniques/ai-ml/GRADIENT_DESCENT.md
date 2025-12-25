# Gradient Descent

Gradient descent is a technique used to iteratively optimize a function by taking steps in the opposite direction of the gradient at the current point. The size of the step depends on the learning rate.

> Gradient descent is a loop that uses slopes to decide how to nudge numbers toward smaller mistakes.

This can be thought of similar to how human learning works:

- **Quantified error** - How far off you are (loss)
- **Understanding sensitivity** - How your actions affect the outcome (gradient)
- **Deciding adjustment size** - How aggressively to correct (learning rate)
- **Making adjustments** - Changing your approach (parameter update)
- **Repeated attempts** - Trying again (iterations)
- **Skill improvement** - Getting better over time (convergence)

## Real world example

**Scenario**: Learning to kick a field goal in football.

- Kick misses target by 5 feet left (loss - quantified error)
- Kicker analyzes: "my foot angle affects kick direction" (gradient - sensitivity)
- Kicker decides how much to adjust (learning rate - adjustment magnitude)
- Kicker adjusts foot angle 10° to the right (parameter update)
- Kicker practices more kicks (iterations)
- Kicks get more accurate over time (convergence)

## Example Code

```javascript
/**
 * @param {Object} params - Parameters for gradient descent
 * @param {number} params.initialX - The first guess for the minimum
 * @param {number} params.learningRate - The step size for each iteration
 * @param {number} params.maxIterations - The safety limit on iterations
 * @param {number} params.tolerance - The threshold to stop if the slope is small enough
 * @returns {Object} - The result of the gradient descent
 */
function gradientDescent({ initialX, learningRate, maxIterations, tolerance }) {
  // Starting point
  let x = initialX;

  // The function to minimize
  const lossFunction = (x) => x * x;

  // The gradient (derivative) of f(x) = x^2
  const gradient = (x) => 2 * x;

  const history = [];

  for (let i = 0; i < maxIterations; i++) {
    const grad = gradient(x);
    const loss = lossFunction(x);

    history.push({ iteration: i, x, loss, grad });

    // Stop if the slope is almost flat
    if (Math.abs(grad) < tolerance) {
      break;
    }

    // Core gradient descent update rule
    x = x - learningRate * grad;
  }

  return {
    finalX: x,
    finalLoss: lossFunction(x),
    history
  };
}
```

## Example Usage

```javascript
const result = gradientDescent({
  initialX: 10,
  learningRate: 0.1,
  maxIterations: 100,
  tolerance: 0.0001
});

console.log(result);
```

## Multivariate Gradient Descent

In real-world machine learning problems, we typically optimize multiple parameters simultaneously. Instead of a single value `x`, we work with a parameter vector `θ = [θ₁, θ₂, ..., θₙ]`.

The update rule generalizes to:

```javascript
θ := θ - α∇L(θ)
```

Where `∇L(θ)` is the gradient vector containing partial derivatives with respect to each parameter.

### Real World Example: Multivariate Quadratic

**Scenario**: A golfer learning to make perfect putts.

The golfer needs to optimize multiple parameters simultaneously:

- θ₁ = club face angle (degrees)
- θ₂ = swing force (effort level)
- θ₃ = stance width (inches)

**Learning process:**

- Putt misses hole by 2 feet (too hard) and 6 inches right (loss - distance from target)
- Golfer analyzes sensitivity of each parameter:
  - "Each degree of club face angle changes ball direction by 3 inches" (∂L/∂θ₁)
  - "Each unit of force changes ball distance by 8 inches" (∂L/∂θ₂)
  - "Stance width affects stability and accuracy" (∂L/∂θ₃)
- Golfer decides adjustment magnitude (learning rate)
- Golfer adjusts ALL parameters simultaneously:
  - Club face: 2° left
  - Force: reduce by 3 units
  - Stance: widen by 1 inch
- Golfer practices more putts (iterations)
- Putts get closer to the hole (convergence)

**Key insight**: Unlike the 1D field goal example, the golfer must adjust multiple parameters at once. The gradient vector `∇L = [∂L/∂θ₁, ∂L/∂θ₂, ∂L/∂θ₃]` tells how each parameter affects the error.

### Example: Multivariate Quadratic Function

```javascript
/**
 * Multivariate gradient descent for minimizing functions with multiple parameters
 * @param {Object} params - Parameters for gradient descent
 * @param {number[]} params.initialTheta - Initial parameter vector [θ₁, θ₂, ...]
 * @param {number} params.learningRate - The step size for each iteration
 * @param {number} params.maxIterations - The safety limit on iterations
 * @param {number} params.tolerance - Stop if gradient magnitude is below this threshold
 * @returns {Object} - The result of the gradient descent
 */
function multivariateGradientDescent({
  initialTheta,
  learningRate,
  maxIterations,
  tolerance
}) {
  // Starting point (copy to avoid mutation)
  let theta = [...initialTheta];
  const n = theta.length;

  // Example: Minimize f(θ) = θ₁² + θ₂² (bowl-shaped paraboloid)
  // This generalizes to any number of parameters
  const lossFunction = (theta) => {
    return theta.reduce((sum, val) => sum + val * val, 0);
  };

  // Gradient: ∇f(θ) = [2θ₁, 2θ₂, ...]
  // Returns array of partial derivatives
  const gradient = (theta) => {
    return theta.map((val) => 2 * val);
  };

  const history = [];

  for (let i = 0; i < maxIterations; i++) {
    const grad = gradient(theta);
    const loss = lossFunction(theta);

    // Calculate gradient magnitude (L2 norm)
    const gradMagnitude = Math.sqrt(grad.reduce((sum, g) => sum + g * g, 0));

    history.push({
      iteration: i,
      theta: [...theta],
      loss,
      gradient: [...grad],
      gradMagnitude
    });

    // Stop if gradient is almost zero
    if (gradMagnitude < tolerance) {
      break;
    }

    // Core gradient descent update rule (vectorized)
    // θ := θ - α∇L(θ)
    for (let j = 0; j < n; j++) {
      theta[j] = theta[j] - learningRate * grad[j];
    }
  }

  return {
    finalTheta: theta,
    finalLoss: lossFunction(theta),
    history
  };
}
```

### Example Usage: Multivariate

```javascript
const result = multivariateGradientDescent({
  initialTheta: [10, -5, 3], // Starting from (10, -5, 3)
  learningRate: 0.1,
  maxIterations: 100,
  tolerance: 0.0001
});

console.log('Final parameters:', result.finalTheta);
console.log('Final loss:', result.finalLoss);
console.log('Converged in', result.history.length, 'iterations');
```

### Real World Example: Linear Regression

**Scenario**: A baseball pitcher learning to throw strikes by analyzing past pitches.

The pitcher has historical data:

- **Features (X)**: Release height, arm angle, velocity
- **Target (y)**: Vertical position where ball crosses plate (0 = center of strike zone)

The pitcher wants to learn the relationship:

```javascript
ball_position = θ₀ + θ₁(release_height) + θ₂(arm_angle) + θ₃(velocity)
```

**Learning process:**

- Pitcher reviews 50 past pitches with measurements (training data)
- Calculate loss: How far were predictions from actual positions? (Mean Squared Error)
- Compute gradient: How does each parameter affect the error?
  - ∂L/∂θ₀ = average error (bias)
  - ∂L/∂θ₁ = correlation between release height and error
  - ∂L/∂θ₂ = correlation between arm angle and error
  - ∂L/∂θ₃ = correlation between velocity and error
- Update all parameters to reduce prediction error
- After many iterations, the pitcher learns: "If I release 2 inches higher with this arm angle and velocity, the ball will cross 1.5 inches higher"
- Pitcher can now predict where the ball will go and adjust accordingly

**Key insight**: Linear regression uses gradient descent to find the best-fit parameters that minimize prediction error across all training examples. Each iteration updates ALL parameters based on the average gradient across ALL data points.

### Practical Example: Linear Regression

Here's a more realistic example using gradient descent to fit a linear model to data:

```javascript
/**
 * Gradient descent for linear regression: y = θ₀ + θ₁x
 * Minimizes Mean Squared Error (MSE)
 */
function linearRegressionGD({
  X, // Feature matrix (array of arrays)
  y, // Target values (array)
  learningRate = 0.01,
  maxIterations = 1000,
  tolerance = 0.0001
}) {
  const m = X.length; // Number of samples
  const n = X[0].length; // Number of features

  // Initialize parameters to zeros
  let theta = new Array(n).fill(0);

  // MSE Loss: (1/2m) * Σ(hθ(x⁽ⁱ⁾) - y⁽ⁱ⁾)²
  const lossFunction = (theta) => {
    let sum = 0;
    for (let i = 0; i < m; i++) {
      const prediction = X[i].reduce((acc, x_j, j) => acc + theta[j] * x_j, 0);
      const error = prediction - y[i];
      sum += error * error;
    }
    return sum / (2 * m);
  };

  // Gradient: (1/m) * Σ(hθ(x⁽ⁱ⁾) - y⁽ⁱ⁾) * x_j⁽ⁱ⁾
  const gradient = (theta) => {
    const grad = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
      // Compute prediction for sample i
      const prediction = X[i].reduce((acc, x_j, j) => acc + theta[j] * x_j, 0);
      const error = prediction - y[i];

      // Update gradient for each parameter
      for (let j = 0; j < n; j++) {
        grad[j] += error * X[i][j];
      }
    }

    // Average the gradients
    return grad.map((g) => g / m);
  };

  const history = [];

  for (let i = 0; i < maxIterations; i++) {
    const grad = gradient(theta);
    const loss = lossFunction(theta);

    const gradMagnitude = Math.sqrt(grad.reduce((sum, g) => sum + g * g, 0));

    history.push({ iteration: i, theta: [...theta], loss, gradMagnitude });

    if (gradMagnitude < tolerance) {
      break;
    }

    // Update all parameters
    for (let j = 0; j < n; j++) {
      theta[j] = theta[j] - learningRate * grad[j];
    }
  }

  return { theta, finalLoss: lossFunction(theta), history };
}

// Example: Fit y = θ₀ + θ₁x to data
const X = [
  [1, 0], // [bias, x] for x=0
  [1, 1], // [bias, x] for x=1
  [1, 2], // [bias, x] for x=2
  [1, 3], // [bias, x] for x=3
  [1, 4] // [bias, x] for x=4
];
const y = [1, 3, 5, 7, 9]; // Perfect linear relationship: y = 1 + 2x

const result = linearRegressionGD({
  X,
  y,
  learningRate: 0.1,
  maxIterations: 1000,
  tolerance: 0.0001
});

console.log('Learned parameters:', result.theta); // Should be close to [1, 2]
console.log('Final MSE:', result.finalLoss);
```

### Key Differences from 1D

1. **Parameter Vector**: Instead of a single `x`, we maintain a vector `θ = [θ₁, θ₂, ..., θₙ]`
2. **Gradient Vector**: The gradient is now a vector of partial derivatives, one for each parameter
3. **Vectorized Updates**: All parameters are updated simultaneously in each iteration
4. **Convergence Check**: We use gradient magnitude (L2 norm) instead of absolute value
5. **Matrix Operations**: In practical applications like linear regression, we work with feature matrices
