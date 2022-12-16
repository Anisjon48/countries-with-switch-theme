import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCode } from '../../config';
import { loadNeighborsByBorder, selectnNeighbors } from './details-slice';

export const useNeighbors = (borders = []) => {
	const dispatch = useDispatch();
    const neighbors = useSelector(selectnNeighbors);

    useEffect(() => {
        if(borders.length) {
            dispatch(loadNeighborsByBorder(borders))
        }
    }, [borders, dispatch]);

	return neighbors;
};