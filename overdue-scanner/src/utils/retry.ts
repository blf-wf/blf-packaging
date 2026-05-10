export async function retry<T>(
  fn: () => Promise<T>,
  options: { maxRetries?: number; baseDelayMs?: number; name?: string } = {}
): Promise<T> {
  const { maxRetries = 3, baseDelayMs = 1000, name = 'operation' } = options;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      const delay = baseDelayMs * Math.pow(2, attempt - 1);
      console.warn(`[retry] ${name} attempt ${attempt}/${maxRetries} failed, retrying in ${delay}ms`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error(`[retry] ${name}: unreachable`);
}
