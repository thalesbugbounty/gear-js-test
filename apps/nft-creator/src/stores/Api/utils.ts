export const getBuffer = async (module: string): Promise<Buffer> => {
  const file = await fetch(module);
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};
