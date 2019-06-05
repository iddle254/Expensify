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

test(
    'should not remove expense if id is not found',(       
    )=>{
        const result = {
            type:'REMOVE_EXPENSE',
            id: '-1'
        };
        const state = expensesReducer(expenses,result);
        expect(state).toEqual(expenses);
    }
);

test(
    'should add an expense',()=>{
        const expense = {
            id:'109',
            description:'laptop',
            note:'',
            createdAt:20000,            
            amount:29500
        };
        const result = {
            type:'ADD_EXPENSE',
            expense
        };
        const state = expensesReducer(expenses,result);
        expect(state).toEqual([...expenses,expense])
    }
);

test(
    'should edit an expense',()=>{
        const amount = 122000;
        const result = {
            type:'EDIT_EXPENSE',
            id:expenses[1].id,
            updates:{
                amount
            }
        };
        const state = expensesReducer(expenses,result);
        expect(state[1].amount).toBe(amount);
    }
);