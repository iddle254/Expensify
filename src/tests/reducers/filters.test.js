import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test(
    'should setup default filter values',()=>{
        const state = filtersReducer(undefined,{type:'@@INIT'});
        expect(state).toEqual({
            text:'',
            sortBy:'date',
            startDate:moment().startOf('month'),
            endDate:moment().endOf('month')
        });
    }
);

test(
    'should set sort by to amount',()=>{
        const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
        expect(state.sortBy).toBe('amount');
    }
);

test(
    'should set sort by to date',()=>{
        const currentState = {
            text:'',
            startDate:undefined,
            endDate:undefined,
            sortBy: 'amount'
        };
        const result = {type:'SORT_BY_DATE'};
        const state = filtersReducer(currentState,result);
        expect(state.sortBy).toBe('date');
    }
);

test('should set text filter',()=>{
    const text = 'filter x';
    const result = {
        type:'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined,result);
    expect(state.text).toBe(text);
});

test('should set start date filter',()=>{
    const startDate = moment();
    const result = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined,result);
    expect(result.startDate).toEqual(startDate);
});

test('should set end date filter',()=>{
    const endDate = moment();
    const result = {
        type:'SET_END_DATE',
        endDate
    };
    expect(result.endDate).toEqual(endDate);
});