import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test(
    'should setup remove expense action item', ()=>{
        const result = removeExpense({id:'123abc'});
        expect(result).toEqual({
            type:'REMOVE_EXPENSE',
            id:'123abc'
        })
    }
);

test(
    'should setup edit expense action item', ()=>{
        const result = editExpense('123abc',{note:'new note'});
        expect(result).toEqual({
            type:'EDIT_EXPENSE',
            id:'123abc',
            updates:{
                note:'new note'
            }
            
        });
    }
);

test(
    'should setup add expense action object with provided values',()=>{
        const expenseData = {
            description:'Rent',
            amount:109500,
            createdAt:1000,
            note:'last months rent'
        };
        const result = addExpense(expenseData);
        expect(result).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id:expect.any(String)
            }
        })
    }
);

test(
    'should setup add expense action object with default values',()=>{
        const result = addExpense();
        const defaultExpenseData = {
            description:'',
            amount:0,
            createdAt:0,
            note:''
        };
        expect(result).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                ...defaultExpenseData,
                id:expect.any(String)
            }
        })        
    }
);