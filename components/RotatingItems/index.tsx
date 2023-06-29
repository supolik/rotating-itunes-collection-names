import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SearchInput from '@/components/ui/SearchInput';
import List from '@/components/ui/List';
import ListItem from '@/components/ui/ListItem';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDebouncedCallback } from 'use-debounce';
import useStyles from './styles';
import { DEFAULT_LIST_VALUES } from './constants';
import { IItunesResults } from '@/components/RotatingItems/types';
import { getCollectionNamesFromItunesResults } from '@/components/RotatingItems/utils';

interface IFormValues {
    search: string;
}

const RotatingItems = () => {
    const classes = useStyles();
    const [listValues, setListValues] = useState(DEFAULT_LIST_VALUES);

    const { handleSubmit, register } = useForm<IFormValues>({
        defaultValues: {
            search: '',
        },
        resolver: yupResolver(
            Yup.object().shape({
                search: Yup.string(),
            }),
        ),
    });

    useEffect(() => {
        // rotate the list values every second
        const interval = setInterval(() => {
            setListValues((internalListValue) => {
                // remove the first one if there are more than 5 elements in the list
                if (internalListValue.length > 5) {
                    return internalListValue.slice(1);
                }

                // move the first one to the end
                internalListValue.push(internalListValue.shift() as string);

                return [...internalListValue];
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const fetchItunesData = async (search = '') => {
        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            return {
                results: [],
            };
        }
    };

    const applySearchValue = useDebouncedCallback(async (search = '') => {
        if (!search) {
            return;
        }

        const data: IItunesResults = await fetchItunesData(search);
        const { results } = data;

        const collectionNames = getCollectionNamesFromItunesResults(results);

        // add the collectionNames to the end of the list
        setListValues((internalListValue) => [...internalListValue, ...collectionNames]);
    }, 1000);

    const handleSearchChange = async (event: BaseSyntheticEvent) => {
        await applySearchValue(event?.target.value);
    };
    const handleFormSubmit = async (values: IFormValues) => {
        const { search } = values;
        await applySearchValue(search);
    };

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <SearchInput
                    placeholder="Search Band"
                    {...register('search')}
                    onChange={handleSearchChange}
                    name="search"
                />
            </form>
            <List>
                {listValues.slice(0, 5).map((value) => (
                    <ListItem key={value}>{value}</ListItem>
                ))}
            </List>
        </div>
    );
};

export default RotatingItems;
