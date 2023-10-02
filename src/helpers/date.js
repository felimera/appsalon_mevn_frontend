import { parse, formatISO } from 'date-fns';

export function convertTOISO(strDate) {
    const newDate = parse(strDate, 'dd/MM/yyyy', new Date())
    return formatISO(newDate);
}