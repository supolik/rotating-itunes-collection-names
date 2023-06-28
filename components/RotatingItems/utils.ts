import { IItunesItem } from '@/components/RotatingItems/types';

const getUniqueItems = (items: IItunesItem[]) => {
    const collectionNames = items.map((item) => item.collectionName);
    return items.filter((item, index) => collectionNames.indexOf(item.collectionName) === index);
};

export const getCollectionNamesFromItunesResults = (results: IItunesItem[]) =>
    getUniqueItems(results)
        // sort by collection name
        .sort((a, b) => {
            if (a.collectionName < b.collectionName) {
                return -1;
            }

            if (a.collectionName > b.collectionName) {
                return 1;
            }

            return 0;
        })
        // take only collection name
        .slice(0, 5)
        .map((result) => result.collectionName);
