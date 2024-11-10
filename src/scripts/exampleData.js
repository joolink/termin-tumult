import { format, addDays, differenceInDays, getWeek, getMonth, getQuarter, getYear } from 'date-fns';


function randomInt(max){
    return Math.floor(Math.random() * max); 
}

const getRandomColor = () => {
    const h = randomInt(360);
    return `hsl(${h}deg, 100%, 90%)`;
  };

function getRandomDate(startDate, endDate) {
    // Berechne die Differenz in Tagen zwischen Start- und Enddatum
    const daysDifference = differenceInDays(endDate, startDate);
    // Generiere eine zufällige Anzahl von Tagen innerhalb des Bereichs
    const randomDays = Math.floor(Math.random() * daysDifference);
    // Füge die zufällige Anzahl von Tagen zum Startdatum hinzu
    return addDays(startDate, randomDays);
}

function generateRandomData(schema, startDate, endDate, depth = 1) {
    if (depth > 5) return null; // Vermeidung von zu tiefer Rekursion
    
    const data = {};

    // Beispiel für Start- und Enddatum
    const randomDate = getRandomDate(startDate, endDate);

    for (const key in schema) {
        const type = schema[key].type;
        const options = schema[key].options || {};
        
        switch (type) {
            case 'string':
                data[key] = options.prefix ? options.prefix + Math.random().toString(36).substring(2) : Math.random().toString(36).substring(2);
                break;
            case 'number':
                data[key] = options.min && options.max ? Math.floor(Math.random() * (options.max - options.min + 1)) + options.min : Math.random();
                break;
            case 'boolean':
                data[key] = Math.random() > 0.5;
                break;
            case 'object':
                data[key] = generateRandomData(options.schema, depth + 1);
                break;
            case 'array':
                const arrayLength = options.length;
                data[key] = Array.from({ length: arrayLength }, () => generateRandomData(options.schema, depth + 1));
                break;
            case 'date': 
                data[key] = randomDate;
                break;
            case 'week': 
                data[key] = getWeek(randomDate);
                break;
            case 'month': 
                data[key] = getMonth(randomDate)+1;
                break;
            case 'quarter': 
                data[key] = getQuarter(randomDate);
                break;
            case 'year': 
                data[key] = getYear(randomDate);
                break;
            case 'color': 
                data[key] = getRandomColor();
                break;
            default:
                data[key] = null;
        }
    }
    
    return data;
}

// Funktion, um Duplikate basierend auf dem "day"-Attribut zu entfernen
function removeDuplicatesByDay(array) {
    const uniqueDays = new Set();
    return array.filter(item => {
        // Datum in einen vergleichbaren String umwandeln, z.B. "yyyy-MM-dd"
        const dayString = format(item.day, 'yyyy-MM-dd');
        if (!uniqueDays.has(dayString)) {
            uniqueDays.add(dayString);
            return true; // Behalte das Element, da das Datum einzigartig ist
        }
        return false; // Entferne das Element, wenn das Datum bereits vorhanden ist
    });
}

export function generateRandomDataArray(length, startDate, endDate) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(generateRandomData(createSchema(randomInt(3)), startDate, endDate));
    }
    return removeDuplicatesByDay(array);
}

// Schema-Definition
function createSchema(randomNumber){
    return {
        id: { type: 'string', options: { prefix: 'ID-' } },
        day: { type: 'date'},
        week: { type: 'week'},
        month: { type: 'month'},
        quarter: { type: 'quarter'},
        year: { type: 'year'},
        annotations: {
            type: 'array',
            options: {
                length: randomNumber,
                schema: {
                    name: { type: 'string', options: { prefix: 'Type-' } },
                    color: { type: 'color'}
                }
            }
        }
    };
}
    

// Generiere JSON
const generatedData = generateRandomDataArray(20,new Date(2024, 0, 31),new Date(2024, 1, 31));
console.log(JSON.stringify(generatedData, null, 2));
