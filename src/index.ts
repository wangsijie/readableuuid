import { customAlphabet } from 'nanoid'

const generate = (length: number = 22): string => customAlphabet('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ', length)();

export default generate;
