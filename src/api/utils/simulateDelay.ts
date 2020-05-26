/**
 * Simulate network delay in between 300-800 ms
 */
export const simulateDelay = (data: any) =>
  new Promise(resolve => {
    const delay = Math.random() * (800 - 300) + 300;

    setTimeout(() => {
      resolve(data);
    }, delay);
  });
