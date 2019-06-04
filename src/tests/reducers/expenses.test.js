import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test(
    'should test default values', ()=>{
        const state = expensesReducer(undefined,{type:'@@INIT'});
        expect(state).toEqual([]);
    }
);

test(
    'should remove expenses by id',()=>{
        const result = {
            type:'REMOVE_EXPENSE',
            id:expenses[1].id
        }
        const state = expensesReducer(expenses,result);
        expect(state).toEqual([expenses[0],expenses[2]]);
    }
);