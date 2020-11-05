import { customAlphabet } from 'nanoid'

const generate = (): string => customAlphabet('23456789abcdefghjkmnpqrstuvwxyzABCDEFGHIJKMNPQRSTUVWXYZ', 22)();

export default generate;
