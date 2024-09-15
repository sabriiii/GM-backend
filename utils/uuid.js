import { v6 as uuidv6 } from 'uuid';

exports.generateId = () => {
    return uuidv6();
}